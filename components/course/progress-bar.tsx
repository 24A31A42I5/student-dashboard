"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  const progress = Math.max(0, Math.min(100, value));

  return (
    <div
      className="h-3 overflow-hidden rounded-full bg-white/[0.08]"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
    >
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ type: "spring", stiffness: 120, damping: 24, delay: 0.35 }}
        className="block h-full origin-left rounded-full bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 shadow-[0_0_18px_rgba(34,211,238,0.32)]"
      />
    </div>
  );
}
