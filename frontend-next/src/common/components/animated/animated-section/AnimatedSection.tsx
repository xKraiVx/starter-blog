"use client";

import { JSX, PropsWithChildren } from "react";
import { motion } from "framer-motion";

export default function AnimatedSection({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
