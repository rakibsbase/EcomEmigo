"use client";

import * as React from "react";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Loader2, ExternalLink, Calendar as CalendarIcon } from "lucide-react";

export type CalViewType =
  | "MONTH_VIEW"
  | "COLUMN_VIEW"
  | "WEEK_VIEW"
  | "month_view"
  | "column_view"
  | "week_view";

export interface CalBookerProps {
  calLink?: string;
  username?: string;
  eventSlug?: string;
  view?: CalViewType;
  className?: string;
  customClassNames?: {
    bookerContainer?: string;
  };
  onCreateBookingSuccess?: () => void;
}

const emptySubscribe = () => () => {};

function parseCalLink(link?: string): {
  username?: string;
  eventSlug?: string;
} {
  if (!link) return {};
  try {
    const url = new URL(link);
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length >= 2) {
      return { username: parts[0], eventSlug: parts[1] };
    }
    if (parts.length === 1) {
      return { username: parts[0] };
    }
  } catch {
    // ignore URL parsing error
  }
  return {};
}

export function CalBooker({
  calLink,
  username: propUsername,
  eventSlug: propEventSlug,
  view = "MONTH_VIEW",
  className,
  onCreateBookingSuccess,
}: CalBookerProps) {
  const isMounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const [isLoading, setIsLoading] = React.useState(true);

  const parsed = React.useMemo(() => parseCalLink(calLink), [calLink]);
  const username = propUsername || parsed.username || COMPANY.calUsername;
  const eventSlug = propEventSlug || parsed.eventSlug || COMPANY.calEventSlug;

  const normalizedView =
    typeof view === "string" ? view.toLowerCase() : "month_view";

  // Full direct link to the booking page
  const directLink = React.useMemo(() => {
    if (calLink) return calLink;
    return `https://cal.com/${username}/${eventSlug}`;
  }, [calLink, username, eventSlug]);

  // Embed URL with optimized layout and theme parameters
  const embedUrl = React.useMemo(() => {
    try {
      const url = new URL(directLink);
      url.searchParams.set("embed", "true");
      url.searchParams.set("layout", normalizedView);
      return url.toString();
    } catch {
      return `${directLink}?embed=true&layout=${normalizedView}`;
    }
  }, [directLink, normalizedView]);

  // Listen for Cal.com booking success events via postMessage
  React.useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (
          data?.type === "bookingSuccessful" ||
          data?.event === "BOOKING_SUCCESSFUL"
        ) {
          console.log("Cal.com booking confirmed successfully");
          if (onCreateBookingSuccess) {
            onCreateBookingSuccess();
          }
        }
      } catch {
        // Non-JSON message from other extensions, safely ignore
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onCreateBookingSuccess]);

  if (!isMounted) {
    return (
      <div
        className={cn(
          "w-full min-h-[580px] sm:min-h-[660px] rounded-2xl border border-border bg-surface/50 p-6 flex flex-col items-center justify-center gap-3 animate-pulse text-ink-subtle",
          className,
        )}
      >
        <Loader2 className="w-6 h-6 animate-spin text-accent" />
        <span className="text-xs font-medium">
          Loading live booking schedule...
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl overflow-hidden bg-paper border border-border shadow-xs flex flex-col",
        className,
      )}
    >
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-paper text-ink-subtle transition-opacity duration-300">
          <Loader2 className="w-7 h-7 animate-spin text-accent" />
          <div className="text-center">
            <p className="text-xs font-semibold text-ink">
              Connecting to Live Operations Calendar...
            </p>
            <p className="text-[11px] text-ink-muted mt-0.5">
              Pulling real-time availability for Mohamed Noor
            </p>
          </div>
        </div>
      )}

      {/* Interactive Embed Frame */}
      <div className="w-full min-h-[620px] sm:min-h-[700px] h-auto flex-1">
        <iframe
          src={embedUrl}
          onLoad={() => setIsLoading(false)}
          className="w-full h-[620px] sm:h-[700px] border-0 rounded-2xl bg-transparent"
          title="Cal.com Interactive Booking Schedule"
          allow="camera; microphone; autoplay; fullscreen"
          loading="eager"
        />
      </div>

      {/* Footer Utility Bar */}
      <div className="px-4 py-2.5 bg-surface/80 border-t border-border flex items-center justify-between text-xs text-ink-muted">
        <div className="flex items-center gap-1.5">
          <CalendarIcon className="w-3.5 h-3.5 text-accent" />
          <span className="text-[11px] font-medium">
            15-min discovery call &bull; Instant calendar confirmation
          </span>
        </div>
        <a
          href={directLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent hover:underline"
        >
          <span>Open in new window</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

export default CalBooker;
