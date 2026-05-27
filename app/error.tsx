"use client";

import { Sidebar } from "@/components/sidebar/sidebar";
import { ErrorState } from "@/components/ui/error-state";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#050505]/85 text-white">
      <Sidebar />
      <main className="grid min-h-screen place-items-center px-4 pb-28 pt-5 md:pb-8 lg:pl-[284px] lg:pr-8">
        <ErrorState
          title="Dashboard data could not load"
          message={error.message || "Supabase returned an unexpected error."}
          onRetry={reset}
        />
      </main>
    </div>
  );
}
