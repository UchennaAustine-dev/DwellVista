"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // Calculate how far the user has scrolled through the article
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setProgress(scrollPercent * 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", updateProgress);

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 h-1 bg-emerald-600"
      initial={{ width: "0%" }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
}
