"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Article } from "../types/article";
import { Heading3, Paragraph } from "./ui/typography";

interface ReadNextProps {
  article: Article;
}

export default function ReadNext({ article }: ReadNextProps) {
  return (
    <motion.div
      className="border-t border-gray-200 dark:border-gray-800 pt-12 mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-8">
        <span className="font-sans text-xs uppercase tracking-widest font-medium text-emerald-600 mb-2 block">
          Continue Reading
        </span>
        <Heading3>Read Next</Heading3>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-video md:aspect-auto">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-2">
              {article.category}
            </span>
            <Link to={`/article/${article.slug}`}>
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3 hover:text-emerald-600 transition-colors">
                {article.title}
              </h3>
            </Link>
            <Paragraph className="text-gray-600 dark:text-gray-300 mb-4">
              {article.excerpt}
            </Paragraph>
            <Link
              to={`/article/${article.slug}`}
              className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors mt-auto"
            >
              Read Article
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
