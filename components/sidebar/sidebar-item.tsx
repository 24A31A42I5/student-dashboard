"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  onSelect: () => void;
}

export function SidebarItem({
  icon: Icon,
  label,
  active = false,
  collapsed = false,
  onSelect,
}: SidebarItemProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative flex h-12 w-12 items-center justify-center rounded-2xl text-zinc-500 transition-colors duration-300 md:w-full lg:gap-3",
        collapsed ? "lg:justify-center" : "md:justify-start md:px-3",
        active && "text-white",
        !active && "hover:text-zinc-100",
      )}
    >
      {active ? (
        <motion.span
          layoutId="active-navigation-highlight"
          className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.08] shadow-[0_0_24px_rgba(34,211,238,0.18)]"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
      ) : null}
      <Icon className="relative z-10 h-5 w-5 shrink-0" aria-hidden="true" />
      <span
        className={cn(
          "relative z-10 hidden text-sm font-medium md:hidden lg:inline",
          collapsed && "lg:hidden",
        )}
      >
        {label}
      </span>
      <span className="sr-only">{label}</span>
    </button>
  );
}
