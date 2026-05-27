"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ActivityTile } from "@/components/dashboard/activity-tile";
import { HeroTile } from "@/components/dashboard/hero-tile";
import { CourseCard } from "@/components/course/course-card";
import type { Course } from "@/types/course";

interface DashboardGridProps {
  courses: Course[];
  studentName: string;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.12,
    },
  },
};

export const tileMotion: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function DashboardGrid({ courses, studentName }: DashboardGridProps) {
  return (
    <motion.section
      aria-label="Learning dashboard overview"
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
    >
      <HeroTile studentName={studentName} />
      <ActivityTile />
      {courses.map((course, index) => (
        <CourseCard
          key={course.id}
          course={course}
          domId={index === 0 ? "courses" : undefined}
        />
      ))}
    </motion.section>
  );
}
