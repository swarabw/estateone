"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "glass";
  loading?: boolean;
}

export default function PremiumButton({
  children,
  variant = "gold",
  loading = false,
  className,
  disabled,
  ...props
}: PremiumButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-7 py-5 font-semibold transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60",
        "disabled:cursor-not-allowed disabled:opacity-60",

        variant === "gold" &&
          "bg-[#D4AF37] text-black hover:bg-[#c99a1d] hover:scale-[1.02] shadow-xl",

        variant === "glass" &&
          "border border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20",

        className
      )}
      {...props}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
