"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.18,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-emerald-200 via-emerald-400 to-cyan-200 shadow-[0_0_24px_rgba(0,245,160,0.62)]"
      style={{ scaleX }}
    />
  );
}
