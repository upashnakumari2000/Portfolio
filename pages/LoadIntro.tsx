"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadIntro() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#FDF9FF]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="flex w-full max-w-md flex-col items-center gap-6 px-6 text-center">
            <motion.p
              className="text-xs tracking-[0.35em] text-[#97A53E]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>

            <motion.h1
              className="text-3xl text-[#F0A0B5] md:text-4xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Building ideas into products.
            </motion.h1>

            <div className="h-0.75 w-full overflow-hidden rounded-full bg-[#D4E5F3]">
              <motion.div
                className="h-full rounded-full bg-[#F0A0B5]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
