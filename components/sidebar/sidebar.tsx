"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  BookOpen,
  ChevronsLeft,
  ChevronsRight,
  LayoutDashboard,
  UserRound,
} from "lucide-react";
import { SidebarItem } from "@/components/sidebar/sidebar-item";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, targetId: "dashboard" },
  { label: "Courses", icon: BookOpen, targetId: "courses" },
  { label: "Activity", icon: Activity, targetId: "activity" },
  { label: "Profile", icon: UserRound },
];

interface SidebarProps {
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export function Sidebar({
  collapsed = false,
  onCollapsedChange,
}: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [internalCollapsed, setInternalCollapsed] = useState(collapsed);
  const isCollapsed = onCollapsedChange ? collapsed : internalCollapsed;
  const toggleCollapsed = () => {
    if (onCollapsedChange) {
      onCollapsedChange(!isCollapsed);
      return;
    }

    setInternalCollapsed((value) => !value);
  };
  const selectItem = (label: string, targetId?: string) => {
    setActiveItem(label);

    if (!targetId) {
      return;
    }

    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-3 bottom-3 z-40 md:inset-x-auto md:bottom-auto md:left-4 md:top-4 lg:left-5"
    >
      <nav
        aria-label="Primary navigation"
        className={cn(
          "mx-auto flex h-16 max-w-sm items-center justify-between rounded-[28px] border border-white/10 bg-[#0b0b0b]/86 px-3 shadow-2xl shadow-black/40 backdrop-blur-2xl md:h-[calc(100vh-2rem)] md:w-[76px] md:max-w-none md:flex-col md:justify-start md:gap-5 md:py-4 lg:items-stretch",
          isCollapsed ? "lg:w-[76px]" : "lg:w-[232px]",
        )}
      >
        <div
          className={cn(
            "hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-bold text-cyan-100 md:flex",
            !isCollapsed && "lg:w-full lg:justify-start lg:px-4",
          )}
        >
          <span className="lg:hidden">LD</span>
          <span className={cn("hidden lg:inline", isCollapsed && "lg:hidden")}>
            LearnDeck
          </span>
          <span className={cn("hidden", isCollapsed && "lg:inline")}>LD</span>
        </div>
        <div className="flex w-full items-center justify-between md:flex-col md:gap-2 lg:items-stretch">
          {navItems.map((item) => (
            <SidebarItem
              key={item.label}
              {...item}
              active={item.label === activeItem}
              collapsed={isCollapsed}
              onSelect={() => selectItem(item.label, item.targetId)}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={toggleCollapsed}
          className="relative mt-auto hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:text-white lg:flex"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-pressed={isCollapsed}
        >
          {isCollapsed ? (
            <ChevronsRight className="h-5 w-5" aria-hidden="true" />
          ) : (
            <ChevronsLeft className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>
    </motion.aside>
  );
}
