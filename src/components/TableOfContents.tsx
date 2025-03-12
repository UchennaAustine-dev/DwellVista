"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";

interface TableOfContentsProps {
  sections: { title: string; id: string }[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Only render the mobile dropdown on smaller screens
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <div className="relative mb-8">
      {/* Mobile Toggle Button */}
      <div
        className="lg:hidden flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <List size={18} className="mr-2" />
          <span className="font-medium">Table of Contents</span>
        </div>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Content - Conditionally shown on mobile, always shown on desktop */}
      <motion.div
        className={`lg:block ${isOpen ? "block" : "hidden"} mt-3 lg:mt-0`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-serif text-lg font-semibold mb-3">
            Table of Contents
          </h4>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`block py-1 px-2 text-sm rounded transition-colors ${
                    activeSection === section.id
                      ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => {
                    if (isMobile) setIsOpen(false);
                  }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
