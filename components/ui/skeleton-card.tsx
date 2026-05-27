import { cn } from "@/lib/utils";

interface SkeletonCardProps {
  className?: string;
}

export function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-[32px] border border-white/10 bg-[#101010]/80 p-6",
        className,
      )}
    >
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/[0.055] to-transparent" />
      <div className="relative space-y-5">
        <div className="h-12 w-12 rounded-2xl bg-white/10" />
        <div className="h-7 w-3/4 rounded-full bg-white/10" />
        <div className="h-4 w-1/2 rounded-full bg-white/10" />
        <div className="pt-12">
          <div className="h-3 rounded-full bg-white/10" />
        </div>
      </div>
    </article>
  );
}
