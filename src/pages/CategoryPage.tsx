"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import SEO from "../components/SEO";
import { articles } from "../data/articleData";
import type { Article } from "../types/article";
import { Paragraph } from "@/components/ui/typography";
import { Heading1 } from "lucide-react";
import PremiumArticleCard from "@/components/PremiumArticleCard";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [categoryArticles, setCategoryArticles] = useState<Article[]>([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    // Convert slug to category name (e.g., "interior-design" to "Interior Design")
    const formattedCategoryName =
      slug
        ?.split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") || "";

    setCategoryName(formattedCategoryName);

    // Filter articles by category
    const filtered = articles.filter(
      (article) =>
        article.category.toLowerCase() === formattedCategoryName.toLowerCase()
    );

    setCategoryArticles(filtered);
  }, [slug]);

  return (
    <>
      <SEO
        title={`${categoryName} Articles | DwellVista`}
        description={`Explore our collection of ${categoryName.toLowerCase()} articles, tips, and inspiration for your home and property.`}
        canonical={`/category/${slug}`}
      />

      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Heading1>{categoryName}</Heading1>
          <Paragraph className="max-w-2xl mx-auto">
            Explore our collection of {categoryName.toLowerCase()} articles,
            tips, and inspiration for your home and property.
          </Paragraph>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {categoryArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryArticles.map((article, index) => (
                  <PremiumArticleCard
                    key={article.id}
                    article={article}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  No articles found in this category.
                </p>
              </div>
            )}
          </div>

          <Sidebar />
        </div>
      </div>

      <NewsletterSection />
    </>
  );
}
