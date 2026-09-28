import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-6 py-24 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="font-heading text-6xl font-bold tracking-tight text-ink sm:text-7xl">
          404
        </h1>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-ink sm:text-2xl">
            Page Not Found
          </h2>
          <p className="text-base text-ink-muted">
            The page you are looking for doesn&apos;t exist, has been moved, or
            is temporarily unavailable.
          </p>
        </div>
        <div className="pt-4">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "primary", size: "md" }))}
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
