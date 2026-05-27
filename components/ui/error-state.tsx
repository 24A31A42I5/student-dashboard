"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorStateProps {
  title: string;
  message: string;
  onRetry: () => void;
}

export function ErrorState({ title, message, onRetry }: ErrorStateProps) {
  return (
    <section className="w-full max-w-xl rounded-[32px] border border-white/10 bg-[#0b0b0b]/90 p-8 text-center shadow-2xl shadow-black/35 backdrop-blur-2xl">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-amber-200/20 bg-amber-300/10">
        <AlertTriangle className="h-6 w-6 text-amber-100" aria-hidden="true" />
      </div>
      <h1 className="mt-6 text-2xl font-semibold text-white">{title}</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-200/20 bg-cyan-300/10 px-5 text-sm font-semibold text-cyan-50 transition-colors hover:bg-cyan-300/15"
      >
        <RefreshCw className="h-4 w-4" aria-hidden="true" />
        Retry
      </button>
    </section>
  );
}
