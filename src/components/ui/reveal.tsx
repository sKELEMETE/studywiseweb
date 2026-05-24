"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 28, filter: "blur(12px)" }
      }
      whileInView={
        reducedMotion
          ? undefined
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.22, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
