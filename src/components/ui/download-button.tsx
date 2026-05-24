"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type DownloadButtonProps = {
  className?: string;
  size?: "hero" | "section";
};

export function DownloadButton({
  className,
  size = "section",
}: DownloadButtonProps) {
  return (
    <motion.a
      href={siteConfig.apkPath}
      download
      aria-label="Download StudyWise APK"
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-emerald-200/70 bg-emerald-300 text-black shadow-[0_0_70px_rgba(0,245,160,0.42)] outline-none transition duration-300 hover:border-white hover:bg-white hover:shadow-[0_0_110px_rgba(0,245,160,0.62)] focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98]",
        size === "hero"
          ? "min-h-16 w-full max-w-[420px] gap-3 px-7 text-lg font-semibold sm:min-h-20 sm:px-10 sm:text-2xl"
          : "min-h-16 w-full max-w-[380px] gap-3 px-7 text-lg font-semibold sm:min-h-20 sm:px-10 sm:text-2xl",
        className,
      )}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 360, damping: 24 }}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.82),transparent)] opacity-0 blur-sm transition duration-500 group-hover:translate-x-full group-hover:opacity-70"
      />
      <span className="relative grid size-10 place-items-center rounded-full bg-black text-emerald-200 shadow-[0_0_30px_rgba(0,0,0,0.28)] sm:size-12">
        <ArrowDownToLine className="size-5 sm:size-6" aria-hidden="true" />
      </span>
      <span className="relative whitespace-nowrap">Download StudyWise</span>
    </motion.a>
  );
}
