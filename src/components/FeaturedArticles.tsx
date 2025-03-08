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
      <div className="flex flex-col md:flex-row">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full md:flex"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={featuredArticles[currentIndex].image || "/placeholder.svg"}
                alt={featuredArticles[currentIndex].title}
                className="h-[200px] w-full object-cover sm:h-[300px] md:h-[400px] lg:h-[500px]"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center p-4 sm:p-6 md:w-1/2 md:p-8 lg:p-12">
              <Badge
                variant="outline"
                className="mb-3 w-fit text-xs sm:text-sm"
              >
                {featuredArticles[currentIndex].category}
              </Badge>
              <h2 className="mb-4 text-xl font-bold font-serif leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
                {featuredArticles[currentIndex].title}
              </h2>
              <p className="mb-4 text-sm text-muted-foreground sm:text-base">
                {featuredArticles[currentIndex].excerpt}
              </p>
              <div className="mb-4 flex items-center gap-2 sm:gap-3">
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                  <AvatarImage
                    src={featuredArticles[currentIndex].author.avatar}
                    alt={featuredArticles[currentIndex].author.name}
                  />
                  <AvatarFallback>
                    {featuredArticles[currentIndex].author.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium sm:text-base">
                    {featuredArticles[currentIndex].author.name}
                  </p>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {featuredArticles[currentIndex].date}
                  </p>
                </div>
              </div>
              <Link to={`/article/${featuredArticles[currentIndex].slug}`}>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-xs sm:text-sm">
                  Read Article
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 right-4 flex gap-2 sm:bottom-6 sm:right-6">
        <Button
          size="icon"
          variant="secondary"
          className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
          onClick={nextSlide}
        >
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-4 flex gap-2 sm:bottom-6 sm:left-6">
        {featuredArticles.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors sm:h-2.5 sm:w-2.5 ${
              index === currentIndex ? "bg-emerald-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
