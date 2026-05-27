import { Sidebar } from "@/components/sidebar/sidebar";
import { SkeletonCard } from "@/components/ui/skeleton-card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050505]/85 text-white">
      <Sidebar />
      <main className="min-h-screen px-4 pb-28 pt-5 sm:px-6 md:pb-8 lg:pl-[284px] lg:pr-8">
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-7">
          <header className="px-1 pt-2">
            <div className="h-4 w-32 animate-pulse rounded-full bg-white/10" />
            <div className="mt-4 h-12 w-72 animate-pulse rounded-2xl bg-white/10" />
          </header>
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <SkeletonCard className="min-h-[320px] md:col-span-2 xl:col-span-2" />
            <SkeletonCard className="min-h-[320px] md:col-span-2 xl:col-span-2" />
            <SkeletonCard className="min-h-[260px]" />
            <SkeletonCard className="min-h-[260px]" />
            <SkeletonCard className="min-h-[260px]" />
            <SkeletonCard className="min-h-[260px]" />
          </section>
        </section>
      </main>
    </div>
  );
}
