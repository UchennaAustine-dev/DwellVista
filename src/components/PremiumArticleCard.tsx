"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";
import type { Article } from "../types/article";

interface PremiumArticleCardProps {
  article: Article;
  index: number;
}

export default function PremiumArticleCard({
  article,
  index,
}: PremiumArticleCardProps) {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        to={`/article/${article.slug}`}
        className="block overflow-hidden rounded-xl"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-medium rounded-full mb-2">
              {article.category}
            </span>
            <h3 className="font-serif text-lg font-semibold">
              {article.title}
            </h3>
          </div>
        </div>
      </Link>
      <div className="mt-4">
        <Link to={`/article/${article.slug}`}>
          <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {article.excerpt}
        </p>
        <div className="flex items-center text-gray-500 text-xs">
          <div className="flex items-center mr-4">
            <User size={14} className="mr-1" />
            <span>{article.author.name}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
