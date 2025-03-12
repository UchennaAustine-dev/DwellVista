"use client";

import { motion } from "framer-motion";
import { Heading4 } from "lucide-react";
import { Paragraph } from "./ui/typography";

interface FeaturedAuthorProps {
  name: string;
  avatar: string;
  bio: string;
  role: string;
}

export default function FeaturedAuthor({
  name,
  avatar,
  bio,
  role,
}: FeaturedAuthorProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col sm:flex-row gap-6 items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex-shrink-0">
        <img
          src={avatar || "/placeholder.svg"}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-2 border-emerald-500"
        />
      </div>
      <div className="text-center sm:text-left">
        <Heading4 className="mb-1">{name}</Heading4>
        <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-3">
          {role}
        </p>
        <Paragraph className="text-gray-600 dark:text-gray-300 text-sm">
          {bio}
        </Paragraph>
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            View all articles
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
