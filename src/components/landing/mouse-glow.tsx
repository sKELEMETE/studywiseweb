"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function MouseGlow() {
  const rawX = useMotionValue(-400);
  const rawY = useMotionValue(-400);
  const x = useSpring(rawX, { stiffness: 110, damping: 24, mass: 0.3 });
  const y = useSpring(rawY, { stiffness: 110, damping: 24, mass: 0.3 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
      setActive(true);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [rawX, rawY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-10 hidden size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,245,160,0.22),rgba(103,232,249,0.07)_42%,transparent_70%)] blur-2xl md:block"
      style={{ left: x, top: y }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.35 }}
    />
  );
}
