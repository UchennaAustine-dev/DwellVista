"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

interface FeaturedArticleCardProps {
  article: {
    id: number;
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime?: string;
    author: {
      name: string;
      avatar: string;
      role?: string;
    };
    image: string;
    excerpt: string;
  };
}

export function FeaturedArticleCard({ article }: FeaturedArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-full min-h-[300px]">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-t md:from-black/60 md:to-transparent"></div>
            <Badge variant="secondary" className="absolute left-4 top-4 z-10">
              {article.category}
            </Badge>
          </div>

          <CardContent className="flex flex-col justify-center p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm text-emerald-600 mb-3">
              <span className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                {article.date}
              </span>
              {article.readTime && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    {article.readTime}
                  </span>
                </>
              )}
            </div>

            <h3 className="text-2xl font-bold mb-3 font-serif leading-tight">
              {article.title}
            </h3>

            <p className="text-muted-foreground mb-6">{article.excerpt}</p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={article.author.avatar}
                    alt={article.author.name}
                  />
                  <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">
                  {article.author.name}
                </span>
              </div>

              <Link to={`/article/${article.slug}`}>
                <Button
                  variant="ghost"
                  className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0"
                >
                  Read More <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}
