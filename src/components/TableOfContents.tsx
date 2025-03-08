"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";
import { Button } from "./ui/button";

interface TableOfContentsProps {
  sections: { title: string }[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((_, index) =>
        document.getElementById(`section-${index}`)
      );

      const currentPosition = window.scrollY + 200;

      sectionElements.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="relative md:hidden mb-8">
      <Button
        variant="outline"
        className="flex items-center gap-2 w-full justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2">
          <List className="h-4 w-4" />
          Table of Contents
        </span>
        <span className="text-xs text-muted-foreground">
          {activeSection + 1}/{sections.length}
        </span>
      </Button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 z-10 mt-2 bg-white rounded-md shadow-lg border p-4"
        >
          <ul className="space-y-2">
            {sections.map((section, index) => (
              <li key={index}>
                <a
                  href={`#section-${index}`}
                  className={`block p-2 rounded-md text-sm transition-colors ${
                    activeSection === index
                      ? "bg-emerald-50 text-emerald-600 font-medium"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
