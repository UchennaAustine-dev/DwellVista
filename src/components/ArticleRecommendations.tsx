"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Article } from "../types/article";
import { articles } from "../data/articleData";
import { Heading3 } from "lucide-react";
import { Paragraph } from "./ui/typography";

interface ArticleRecommendationsProps {
  currentArticleId: number;
  category?: string;
}

export default function ArticleRecommendations({
  currentArticleId,
  category,
}: ArticleRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Article[]>([]);

  useEffect(() => {
    // Get articles from the same category, excluding the current one
    let filtered = articles.filter(
      (article) =>
        article.id !== currentArticleId &&
        (category ? article.category === category : true)
    );

    // If we don't have enough from the same category, add some featured articles
    if (filtered.length < 3) {
      const featuredArticles = articles.filter(
        (article) =>
          article.id !== currentArticleId &&
          article.featured &&
          !filtered.some((a) => a.id === article.id)
      );
      filtered = [...filtered, ...featuredArticles].slice(0, 3);
    }

    // If we still don't have 3, add random articles
    if (filtered.length < 3) {
      const randomArticles = articles.filter(
        (article) =>
          article.id !== currentArticleId &&
          !filtered.some((a) => a.id === article.id)
      );
      filtered = [...filtered, ...randomArticles].slice(0, 3);
    }

    setRecommendations(filtered.slice(0, 3));
  }, [currentArticleId, category]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Heading3>Recommended For You</Heading3>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/article/${article.slug}`} className="block">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-2 block">
                  {article.category}
                </span>
                <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <Paragraph className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                  {article.excerpt}
                </Paragraph>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
