"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { articles } from "../data/articleData";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const featuredArticles = articles.filter(
    (article) => article.featured || article.id <= 3
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentArticle = featuredArticles[currentIndex];

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

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-8 overflow-hidden rounded-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={currentArticle.image || "/placeholder.svg"}
            alt={currentArticle.title}
            className="h-[500px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-0 left-0 p-6 text-white"
          >
            <Badge variant="secondary" className="mb-2">
              {currentArticle.category}
            </Badge>
            <h3 className="mb-2 text-2xl font-bold md:text-3xl">
              {currentArticle.title}
            </h3>
            <p className="mb-4 max-w-2xl text-sm text-gray-200">
              {currentArticle.excerpt}
            </p>
            <Link to={`/article/${currentArticle.slug}`}>
              <Button
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-black cursor-pointer"
              >
                READ ARTICLE
              </Button>
            </Link>
          </motion.div>
          <div className="absolute bottom-6 right-6 flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full"
              onClick={prevSlide}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full"
              onClick={nextSlide}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {featuredArticles.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
