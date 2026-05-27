"use client";

import { useState } from "react";
import { DashboardGrid } from "@/components/dashboard/dashboard-grid";
import { Sidebar } from "@/components/sidebar/sidebar";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

interface DashboardShellProps {
  courses: Course[];
  studentName: string;
}

export function DashboardShell({ courses, studentName }: DashboardShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505]/85 text-white">
      <Sidebar
        collapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
      />
      <main
        className={cn(
          "min-h-screen px-4 pb-28 pt-5 transition-[padding] duration-300 ease-out sm:px-6 md:pb-8 lg:pr-8",
          sidebarCollapsed ? "lg:pl-32" : "lg:pl-[284px]",
        )}
      >
        <section
          id="dashboard"
          aria-labelledby="dashboard-title"
          className="mx-auto flex w-full max-w-7xl scroll-mt-6 flex-col gap-7"
        >
          <header className="flex flex-col gap-2 px-1 pt-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200/70">
                Learning OS
              </p>
              <h1
                id="dashboard-title"
                className="mt-2 text-3xl font-semibold tracking-normal text-white md:text-5xl"
              >
                Student Dashboard
              </h1>
            </div>
            <p className="max-w-md text-sm leading-6 text-zinc-400">
              Course momentum, weekly rhythm, and progress signals in one
              focused workspace.
            </p>
          </header>
          <DashboardGrid courses={courses} studentName={studentName} />
        </section>
      </main>
    </div>
  );
}
