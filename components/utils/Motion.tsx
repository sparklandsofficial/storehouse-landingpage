"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  index: number;
  vars: Variants;
  className?: string;
  children?: ReactNode;
};

/** 區塊進場：用 variants + custom index 做延遲，配合 viewport 只播一次 */
export default function Motion({ index, vars, className, children }: Props) {
  return (
    <motion.div
      className={className}
      variants={vars}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={index}
    >
      {children}
    </motion.div>
  );
}
