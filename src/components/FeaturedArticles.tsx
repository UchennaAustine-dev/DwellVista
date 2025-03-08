"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { articles } from "../data/articleData";

export default function FeaturedArticles() {
  const featuredArticles = articles
    .filter((article) => article.featured || article.id <= 3)
    .slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredArticles.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-100">
      <div className="flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full md:flex"
          >
            <div className="md:w-1/2">
              <img
                src={featuredArticles[currentIndex].image || "/placeholder.svg"}
                alt={featuredArticles[currentIndex].title}
                className="h-[300px] w-full object-cover md:h-[500px]"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-12">
              <Badge variant="outline" className="mb-4 w-fit">
                {featuredArticles[currentIndex].category}
              </Badge>
              <h2 className="mb-4 text-2xl font-bold font-serif leading-tight md:text-3xl lg:text-4xl">
                {featuredArticles[currentIndex].title}
              </h2>
              <p className="mb-6 text-muted-foreground">
                {featuredArticles[currentIndex].excerpt}
              </p>
              <div className="mb-6 flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={featuredArticles[currentIndex].author.avatar}
                    alt={featuredArticles[currentIndex].author.name}
                  />
                  <AvatarFallback>
                    {featuredArticles[currentIndex].author.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">
                    {featuredArticles[currentIndex].author.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {featuredArticles[currentIndex].date}
                  </p>
                </div>
              </div>
              <Link to={`/article/${featuredArticles[currentIndex].slug}`}>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Read Article
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-6 left-6 flex gap-2">
        {featuredArticles.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-emerald-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
