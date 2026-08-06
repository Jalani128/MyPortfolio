"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  className?: string;
  /** Slide direction for the entrance. */
  from?: "bottom" | "left" | "right";
};

/**
 * Fades content in once it scrolls into view.
 * Respects prefers-reduced-motion by rendering statically.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  from = "bottom",
}: RevealProps) {
  const reduce = useReducedMotion();

  const offset =
    from === "left" ? { x: -24 } : from === "right" ? { x: 24 } : { y: 24 };

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
