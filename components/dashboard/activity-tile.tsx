"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { tileMotion } from "@/components/dashboard/dashboard-grid";

const activity = [42, 68, 55, 82, 74, 92, 64];
const days = ["M", "T", "W", "T", "F", "S", "S"];

export function ActivityTile() {
  return (
    <motion.article
      id="activity"
      variants={tileMotion}
      whileHover={{ scale: 1.014 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="relative min-h-[320px] scroll-mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-[#101010]/86 p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl md:col-span-2"
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 -z-10 rounded-[32px] ring-1 ring-cyan-200/20"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,rgba(20,184,166,0.15),transparent_42%),linear-gradient(315deg,rgba(99,102,241,0.18),transparent_46%)]" />
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
            Activity
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Weekly learning rhythm
          </h2>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10">
          <Activity className="h-5 w-5 text-cyan-200" aria-hidden="true" />
        </div>
      </header>
      <section className="mt-10 flex h-36 items-end gap-3" aria-label="Weekly activity chart">
        {activity.map((value, index) => (
          <div key={`${days[index]}-${value}`} className="flex flex-1 flex-col items-center gap-3">
            <div className="relative flex h-28 w-full items-end overflow-hidden rounded-full bg-white/[0.06]">
              <motion.span
                initial={{ scaleY: 0 }}
                animate={{ scaleY: value / 100 }}
                transition={{
                  delay: 0.55 + index * 0.07,
                  type: "spring",
                  stiffness: 170,
                  damping: 22,
                }}
                className="absolute bottom-0 left-0 right-0 h-full origin-bottom rounded-full bg-gradient-to-t from-cyan-300 via-indigo-300 to-violet-300"
              />
            </div>
            <span className="text-xs font-medium text-zinc-500">{days[index]}</span>
          </div>
        ))}
      </section>
      <aside className="mt-8 grid grid-cols-3 gap-3">
        {["18 lessons", "6 quizzes", "3 projects"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-3 text-center text-sm text-zinc-300">
            {item}
          </div>
        ))}
      </aside>
    </motion.article>
  );
}
