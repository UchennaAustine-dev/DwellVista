"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { articles } from "../data/articleData";

export default function RecommendedArticles({
  currentArticleId,
}: {
  currentArticleId: number;
}) {
  // Get 3 random articles that are not the current article
  const recommendedArticles = articles
    .filter((article) => article.id !== currentArticleId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-serif">Recommended For You</h2>
          <Link to="/blog">
            <Button
              variant="ghost"
              className="text-emerald-600 hover:text-emerald-700"
            >
              View All <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recommendedArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/article/${article.slug}`}
                className="group block overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs font-medium uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold group-hover:text-emerald-600 transition-colors font-serif">
                    {article.title}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={article.author.avatar || "/placeholder.svg"}
                        alt={article.author.name}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <span className="text-xs">{article.author.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {article.date}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
