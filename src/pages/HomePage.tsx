import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "@/components/ScrollToTop";

import { FeaturedPropertyCarousel } from "@/components/home/FeaturedPropertyCarousel";
import { PremiumCtaSection } from "@/components/home/PremiumCtaSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import ArticleGrid from "../components/ArticleGrid";
import NewsletterSection from "@/components/home/NewsletterSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import SEO from "@/components/SEO";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO
        title="DwellVista | Your Premier Real Estate & Interior Design Blog"
        description="Discover the latest trends in real estate, architecture, interior design, and home decor with expert insights and inspiration."
        canonical="/"
      />
      <ScrollToTop />
      <HeroSection />
      <FeaturedPropertyCarousel />
      <FeaturedArticles />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <ArticleGrid />
          </div>
          <div className="lg:w-1/3">
            <Sidebar />
          </div>
        </div>
      </div>
      <TestimonialsSection />
      <NewsletterSection />
      <StatisticsSection />
      <PremiumCtaSection />
    </motion.div>
  );
}
