"use client";

import { BookOpen, Brain, Code, Laptop, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { tileMotion } from "@/components/dashboard/dashboard-grid";
import { ProgressBar } from "@/components/course/progress-bar";
import type { Course } from "@/types/course";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Brain,
  Code,
  Laptop,
};

interface CourseCardProps {
  course: Course;
  domId?: string;
}

export function CourseCard({ course, domId }: CourseCardProps) {
  const Icon = iconMap[course.icon_name] ?? BookOpen;

  return (
    <motion.article
      id={domId}
      variants={tileMotion}
      whileHover={{ scale: 1.018 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative min-h-[260px] scroll-mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]/88 p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl"
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.78 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 -z-10 bg-[linear-gradient(140deg,rgba(124,58,237,0.16),transparent_42%),linear-gradient(320deg,rgba(34,211,238,0.12),transparent_48%)]"
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 -z-10 rounded-[28px] ring-1 ring-cyan-200/20"
      />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:15px_15px]" />
      <header className="flex items-start justify-between gap-4">
        <div className="grid h-13 w-13 place-items-center rounded-3xl border border-white/10 bg-white/[0.07]">
          <Icon className="h-6 w-6 text-cyan-100" aria-hidden="true" />
        </div>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-sm font-medium text-emerald-100">
          {course.progress}%
        </span>
      </header>
      <section className="mt-11">
        <h2 className="text-xl font-semibold leading-snug text-white">
          {course.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Continue the next module from your saved checkpoint.
        </p>
      </section>
      <footer className="absolute inset-x-6 bottom-6">
        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-zinc-500">
          <span>Progress</span>
          <span>Live</span>
        </div>
        <ProgressBar value={course.progress} />
      </footer>
    </motion.article>
  );
}
