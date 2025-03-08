"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { articles } from "../data/articleData";

export default function ArticlesGrid() {
  // Filter out the featured article if you don't want to show it twice
  const gridArticles = articles
    .filter((article) => !article.featured)
    .slice(0, 6);

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {gridArticles.map((article, index) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link to={`/article/${article.slug}`}>
            <Card className="overflow-hidden transition-transform hover:scale-105 duration-300">
              <div className="relative">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="h-[240px] w-full object-cover"
                />
                <Badge variant="secondary" className="absolute left-3 top-3">
                  {article.category}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 font-bold">{article.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {article.date}
                </p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
