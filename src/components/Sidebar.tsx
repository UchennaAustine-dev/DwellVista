"use client";

import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { categories, tags } from "../data/articleData";
import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-8"
    >
      {/* Search */}
      <div>
        <h3 className="mb-4 text-xl font-bold">Search Articles</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search" className="pl-10" />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="mb-4 text-xl font-bold">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name} className="flex justify-between">
              <Link
                to={`/category/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="hover:text-emerald-600 transition-colors"
              >
                {category.name}
              </Link>
              <span className="text-muted-foreground">({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div>
        <h3 className="mb-4 text-xl font-bold">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link
              key={`${tag.name}-${index}`}
              to={`/tag/${tag.name.toLowerCase()}`}
            >
              <Badge
                variant="outline"
                className="rounded-sm hover:bg-emerald-50 transition-colors"
              >
                {tag.name} ({tag.count})
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
