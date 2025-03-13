import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Heading } from "../components/ui/typography";
import SEO from "../components/SEO";
import NewsletterSection from "../components/home/NewsletterSection";
import Sidebar from "../components/Sidebar";
import { articles } from "../data/articleData";
import { Link } from "react-router-dom";
import {
  TopBannerAd,
  InArticleAd,
  ParallaxAd,
  VideoAd,
} from "../components/ads/AdLayout";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Get unique categories
  const categories = [
    "all",
    ...new Set(articles.map((article) => article.category.toLowerCase())),
  ];

  // Filter articles based on search and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" ||
      article.category.toLowerCase() === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Get featured articles
  const featuredArticles = articles
    .filter((article) => article.featured)
    .slice(0, 3);

  return (
    <>
      <SEO
        title="Blog | DwellVista"
        description="Explore our collection of articles on real estate, interior design, architecture, and home improvement tips."
        canonical="/blog"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24"
      >
        <div className="container mx-auto px-4 py-8">
          <Heading level={1} className="mb-8">
            Our Blog
          </Heading>

          {/* Top Banner Ad */}
          <TopBannerAd />

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mb-12">
              <Heading level={3} className="mb-6">
                Featured Articles
              </Heading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/article/${article.slug}`}>
                      <Card className="overflow-hidden h-full group">
                        <div className="relative">
                          <img
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <Badge className="absolute top-3 left-3">
                            {article.category}
                          </Badge>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-bold text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span className="mr-3">{article.date}</span>
                            <User className="h-3 w-3 mr-1" />
                            <span>{article.author.name}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* In-Article Ad */}
          <InArticleAd />

          {/* Search and Categories */}
          <div className="mb-8">
            <div className="relative max-w-md mb-6">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Tabs
              defaultValue="all"
              value={activeCategory}
              onValueChange={setActiveCategory}
            >
              <TabsList className="mb-4">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="capitalize"
                  >
                    {category === "all" ? "All Categories" : category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Video Ad */}
          <VideoAd />

          {/* Articles Grid and Sidebar */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredArticles.map((article, index) => (
                    <>
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link to={`/article/${article.slug}`}>
                          <Card className="overflow-hidden h-full group">
                            <div className="relative">
                              <img
                                src={article.image || "/placeholder.svg"}
                                alt={article.title}
                                className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <Badge className="absolute top-3 left-3">
                                {article.category}
                              </Badge>
                            </div>
                            <CardContent className="p-4">
                              <h3 className="font-bold text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                                {article.title}
                              </h3>
                              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                                {article.excerpt}
                              </p>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span className="mr-3">{article.date}</span>
                                <User className="h-3 w-3 mr-1" />
                                <span>{article.author.name}</span>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                      {/* Add InArticleAd after every 4 articles */}
                      {(index + 1) % 4 === 0 &&
                        index !== filteredArticles.length - 1 && (
                          <div className="col-span-1 sm:col-span-2">
                            <InArticleAd />
                          </div>
                        )}
                    </>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No articles match your search criteria.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("all");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}

              {filteredArticles.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <Button variant="outline">Load More Articles</Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>

          {/* Parallax Ad */}
          <ParallaxAd />
        </div>

        <NewsletterSection />
      </motion.div>
    </>
  );
}
