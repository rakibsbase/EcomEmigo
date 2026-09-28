"use client";

import * as React from "react";

export type ToastVariant = "default" | "success" | "destructive";

export interface ToastItem {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: ToastVariant;
  duration?: number;
}

const TOAST_EVENT = "ecomamigo_toast_dispatch";
const TOAST_DISMISS_EVENT = "ecomamigo_toast_dismiss";

let toastCount = 0;

export function toast(props: Omit<ToastItem, "id">) {
  const id = `toast-${++toastCount}-${Date.now()}`;
  const item: ToastItem = { ...props, id };

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(TOAST_EVENT, {
        detail: item,
      }),
    );
  }
  return id;
}

export function dismissToast(id?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(TOAST_DISMISS_EVENT, {
        detail: id,
      }),
    );
  }
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  React.useEffect(() => {
    const handleAdd = (e: Event) => {
      const customEvent = e as CustomEvent<ToastItem>;
      if (!customEvent.detail) return;
      const newToast = customEvent.detail;

      setToasts((prev) => [newToast, ...prev].slice(0, 3));

      const duration = newToast.duration ?? 5000;
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, duration);
    };

    const handleDismiss = (e: Event) => {
      const customEvent = e as CustomEvent<string | undefined>;
      const targetId = customEvent.detail;
      if (targetId) {
        setToasts((prev) => prev.filter((t) => t.id !== targetId));
      } else {
        setToasts([]);
      }
    };

    window.addEventListener(TOAST_EVENT, handleAdd);
    window.addEventListener(TOAST_DISMISS_EVENT, handleDismiss);
    return () => {
      window.removeEventListener(TOAST_EVENT, handleAdd);
      window.removeEventListener(TOAST_DISMISS_EVENT, handleDismiss);
    };
  }, []);

  const dismiss = React.useCallback((id?: string) => {
    dismissToast(id);
  }, []);

  return { toasts, toast, dismiss };
}
