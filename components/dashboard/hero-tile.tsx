"use client";

import { motion } from "framer-motion";
import { Flame, Sparkles, TrendingUp } from "lucide-react";
import { tileMotion } from "@/components/dashboard/dashboard-grid";

interface HeroTileProps {
  studentName: string;
}

export function HeroTile({ studentName }: HeroTileProps) {
  return (
    <motion.article
      variants={tileMotion}
      whileHover={{ scale: 1.012 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="relative min-h-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b]/88 p-7 shadow-2xl shadow-black/30 backdrop-blur-2xl md:col-span-2"
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 -z-10 rounded-[32px] ring-1 ring-violet-200/20"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(125deg,rgba(124,58,237,0.22),transparent_38%),linear-gradient(245deg,rgba(6,182,212,0.18),transparent_42%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:18px_18px]" />
      <section className="flex h-full flex-col justify-between gap-12">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-cyan-100">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Adaptive path ready
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-300/10 px-3 py-2 text-sm text-amber-100">
            <Flame className="h-4 w-4" aria-hidden="true" />
            12 Day Streak
          </div>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-400">
            Today
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-normal text-white md:text-6xl">
            Welcome back, {studentName}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300">
            You are ahead of your weekly target. Keep the streak alive with one
            focused lesson and a project checkpoint.
          </p>
        </div>
        <aside className="grid grid-cols-2 gap-3 md:max-w-lg">
          <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-4">
            <p className="text-3xl font-semibold text-white">87%</p>
            <p className="mt-1 text-sm text-zinc-400">Weekly focus</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-4">
            <div className="flex items-center gap-2 text-3xl font-semibold text-white">
              <TrendingUp className="h-6 w-6 text-emerald-300" />
              4.8h
            </div>
            <p className="mt-1 text-sm text-zinc-400">Deep work logged</p>
          </div>
        </aside>
      </section>
    </motion.article>
  );
}
