"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Download, Eye, Star } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Heading, Text } from "../components/ui/typography";
import SEO from "../components/SEO";
import { TopBannerAd, InArticleAd } from "../components/ads/AdLayout";
import NewsletterSection from "@/components/home/NewsletterSection";

// Sample theme data with real images from Pexels
const themes = [
  {
    id: 1,
    title: "Modern Minimalist",
    description:
      "Clean lines and minimalist design for a contemporary living space.",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
    price: 49,
    downloads: 1245,
    rating: 4.8,
    reviews: 87,
    featured: true,
    tags: ["Minimalist", "Contemporary", "Clean"],
  },
  {
    id: 2,
    title: "Urban Industrial",
    description:
      "Raw materials and industrial elements for an urban aesthetic.",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
    price: 59,
    downloads: 982,
    rating: 4.7,
    reviews: 62,
    featured: false,
    tags: ["Industrial", "Urban", "Loft"],
  },
  {
    id: 3,
    title: "Scandinavian Comfort",
    description: "Light, airy spaces with natural elements and cozy textures.",
    image:
      "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
    price: 39,
    downloads: 1567,
    rating: 4.9,
    reviews: 104,
    featured: true,
    tags: ["Scandinavian", "Cozy", "Natural"],
  },
  {
    id: 4,
    title: "Luxury Classic",
    description:
      "Elegant and timeless design with luxurious finishes and details.",
    image:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
    price: 79,
    downloads: 756,
    rating: 4.6,
    reviews: 48,
    featured: false,
    tags: ["Luxury", "Classic", "Elegant"],
  },
  {
    id: 5,
    title: "Coastal Retreat",
    description:
      "Beach-inspired design with light colors and natural textures.",
    image:
      "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
    price: 49,
    downloads: 1089,
    rating: 4.8,
    reviews: 93,
    featured: true,
    tags: ["Coastal", "Beach", "Relaxed"],
  },
  {
    id: 6,
    title: "Mid-Century Modern",
    description: "Retro-inspired design with clean lines and organic forms.",
    image:
      "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
    price: 59,
    downloads: 876,
    rating: 4.7,
    reviews: 76,
    featured: false,
    tags: ["Mid-Century", "Retro", "Vintage"],
  },
  {
    id: 7,
    title: "Contemporary Farmhouse",
    description:
      "Modern take on rustic farmhouse style with warm, inviting elements.",
    image:
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
    price: 49,
    downloads: 1342,
    rating: 4.9,
    reviews: 112,
    featured: true,
    tags: ["Farmhouse", "Rustic", "Warm"],
  },
  {
    id: 8,
    title: "Bohemian Eclectic",
    description:
      "Free-spirited design with mixed patterns, textures, and global influences.",
    image:
      "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
    price: 45,
    downloads: 967,
    rating: 4.6,
    reviews: 84,
    featured: false,
    tags: ["Bohemian", "Eclectic", "Global"],
  },
  {
    id: 9,
    title: "Japanese Zen",
    description:
      "Minimalist design inspired by Japanese aesthetics and philosophy.",
    image:
      "https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Interior",
    price: 55,
    downloads: 823,
    rating: 4.8,
    reviews: 71,
    featured: false,
    tags: ["Japanese", "Zen", "Minimal"],
  },
];

export default function ThemesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Get unique categories
  const categories = [
    "all",
    ...new Set(themes.map((theme) => theme.category.toLowerCase())),
  ];

  // Filter themes based on search and category
  const filteredThemes = themes.filter((theme) => {
    const matchesSearch =
      theme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      theme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      theme.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      activeCategory === "all" ||
      theme.category.toLowerCase() === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Get featured themes
  const featuredThemes = themes.filter((theme) => theme.featured).slice(0, 3);

  return (
    <>
      <SEO
        title="Design Themes | DwellVista"
        description="Browse our collection of premium interior design themes to transform your living space."
        canonical="/themes"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24"
      >
        <div className="container mx-auto px-4 py-8">
          <Heading level={1} className="mb-8">
            Design Themes
          </Heading>

          {/* Top Banner Ad */}
          <TopBannerAd />

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Heading level={3} className="mb-4">
                  Transform Your Space with Premium Design Themes
                </Heading>
                <Text className="mb-6">
                  Our curated collection of design themes offers inspiration and
                  practical guidance for creating beautiful, functional living
                  spaces. Each theme includes color palettes, furniture
                  recommendations, and styling tips from professional interior
                  designers.
                </Text>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Explore Themes
                </Button>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Interior design theme"
                  className="rounded-lg object-cover h-[300px] w-full"
                />
              </div>
            </div>
          </div>

          {/* In-Article Ad */}
          <InArticleAd />

          {/* Featured Themes */}
          {featuredThemes.length > 0 && (
            <div className="mb-12">
              <Heading level={3} className="mb-6">
                Featured Themes
              </Heading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredThemes.map((theme, index) => (
                  <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ThemeCard theme={theme} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Search and Categories */}
          <div className="mb-8">
            <div className="relative max-w-md mb-6">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search themes..."
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

          {/* All Themes */}
          <div>
            {filteredThemes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredThemes.map((theme, index) => (
                  <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ThemeCard theme={theme} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No themes match your search criteria.
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

            {filteredThemes.length > 0 && (
              <div className="mt-8 flex justify-center">
                <Button variant="outline">Load More Themes</Button>
              </div>
            )}
          </div>
        </div>

        <NewsletterSection />
      </motion.div>
    </>
  );
}

interface ThemeCardProps {
  theme: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    price: number;
    downloads: number;
    rating: number;
    reviews: number;
    featured: boolean;
    tags: string[];
  };
}

function ThemeCard({ theme }: ThemeCardProps) {
  return (
    <Card className="overflow-hidden h-full group">
      <div className="relative">
        <img
          src={theme.image || "/placeholder.svg"}
          alt={theme.title}
          className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {theme.featured && (
          <Badge className="absolute top-3 left-3 bg-emerald-600">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 group-hover:text-emerald-600 transition-colors">
          {theme.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {theme.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {theme.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="font-medium">{theme.rating}</span>
            <span className="text-muted-foreground text-xs ml-1">
              ({theme.reviews})
            </span>
          </div>
          <div className="flex items-center text-muted-foreground text-xs">
            <Download className="h-3 w-3 mr-1" />
            {theme.downloads}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-emerald-600">
            ${theme.price}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              Preview
            </Button>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
              Buy Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
