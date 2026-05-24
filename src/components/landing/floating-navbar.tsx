"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "#features", label: "AI Summaries" },
  { href: "#download", label: "Download" },
] as const;

export function FloatingNavbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      className="fixed left-0 right-0 top-5 z-40 px-4"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "glass-panel mx-auto flex h-16 max-w-5xl items-center justify-between rounded-full px-3 transition duration-300 sm:px-4",
          scrolled && "border-emerald-200/20 shadow-[0_18px_70px_rgba(0,0,0,0.52)]",
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full px-2 py-2 outline-none transition hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-emerald-200"
          aria-label="StudyWise home"
        >
          <Image
            src={siteConfig.iconPath}
            alt=""
            width={36}
            height={36}
            priority
            className="size-9 rounded-md border border-white/[0.15] shadow-[0_0_28px_rgba(0,245,160,0.22)]"
          />
          <span className="text-sm font-semibold text-white sm:text-base">
            StudyWise
          </span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/70 outline-none transition hover:bg-white/[0.08] hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={siteConfig.apkPath}
          download
          className="inline-flex size-11 items-center justify-center rounded-full bg-emerald-300 text-black shadow-[0_0_34px_rgba(0,245,160,0.34)] outline-none transition hover:bg-white hover:shadow-[0_0_54px_rgba(0,245,160,0.52)] focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label="Download StudyWise APK"
        >
          <ArrowDownToLine className="size-5" aria-hidden="true" />
        </a>
      </nav>
    </motion.header>
  );
}
