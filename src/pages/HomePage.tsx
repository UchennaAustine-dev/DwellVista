// import { motion } from "framer-motion";
// import HeroSection from "../components/HeroSection";
// import Sidebar from "../components/Sidebar";
// import ScrollToTop from "@/components/ScrollToTop";

// import { FeaturedPropertyCarousel } from "@/components/home/FeaturedPropertyCarousel";
// import { PremiumCtaSection } from "@/components/home/PremiumCtaSection";
// import { StatisticsSection } from "@/components/home/StatisticsSection";
// import ArticleGrid from "../components/ArticleGrid";
// import NewsletterSection from "@/components/home/NewsletterSection";
// import { TestimonialsSection } from "@/components/home/TestimonialsSection";
// import FeaturedArticles from "@/components/FeaturedArticles";
// import SEO from "@/components/SEO";
// import { TopBannerAd, InArticleAd, StickyAd } from "@/components/ads/AdLayout";

// export default function HomePage() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <SEO
//         title="DwellVista | Your Premier Real Estate & Interior Design Blog"
//         description="Discover the latest trends in real estate, architecture, interior design, and home decor with expert insights and inspiration."
//         canonical="/"
//       />
//       {/* Top Banner Ad */}
//       <TopBannerAd />
//       <ScrollToTop />
//       <HeroSection />
//       <TopBannerAd />
//       {/* In-Article Ad */}
//       <InArticleAd />
//       <FeaturedPropertyCarousel />
//       <FeaturedArticles />
//       <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="lg:w-2/3">
//             <ArticleGrid />
//           </div>
//           <div className="lg:w-1/3">
//             <Sidebar />
//           </div>
//         </div>
//       </div>
//       <TestimonialsSection />
//       <NewsletterSection />
//       {/* Sticky Ad */}
//       <StickyAd />
//       <StatisticsSection />
//       <PremiumCtaSection />
//     </motion.div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import NewsletterSection from "../components/home/NewsletterSection";
import { Heading, Text } from "../components/ui/typography";
import SEO from "../components/SEO";
import WebsiteJsonLd from "../components/WebsiteJsonLd";
import ScrollToTop from "@/components/ScrollToTop";
import {
  TopBannerAd,
  InArticleAd,
  StickyAd,
  ParallaxAd,
  VideoAd,
  NativeAd,
  InterstitialAd,
} from "../components/ads/AdLayout";
import { FeaturedPropertyCarousel } from "@/components/home/FeaturedPropertyCarousel";
// import { PremiumCtaSection } from "@/components/home/PremiumCtaSection";
// import { StatisticsSection } from "@/components/home/StatisticsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import ArticlesGrid from "@/components/ArticleGrid";
import { useEffect } from "react";

export default function HomePage() {
  // Load third-party scripts using useEffect
  useEffect(() => {
    // Add error handling for script loading
    if (typeof aclib === "undefined") {
      console.warn("aclib not available");
      return;
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true; // Add async for better performance
    script.innerHTML = `
      aclib.runAutoTag({
        zoneId: ['ibktzhvmbs', 'gb5prnslvy']
      });
    `;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <>
      {/* SEO and Structured Data */}
      <SEO
        title="DwellVista | Your Premier Real Estate & Interior Design Blog"
        description="Discover the latest trends in real estate, architecture, interior design, and home decor with expert insights and inspiration."
        canonical="/"
        ogType="website"
        ogImage="/images/home-og-image.jpg"
      />
      <WebsiteJsonLd />

      {/* Interstitial Ad - Appears when the page loads */}
      <InterstitialAd />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24"
      >
        {/* Top Banner Ad */}
        <TopBannerAd />

        {/* Scroll to Top Button */}
        <ScrollToTop />

        {/* Hero Section */}
        <HeroSection />

        {/* Featured Property Carousel */}
        <FeaturedPropertyCarousel />

        {/* Latest Articles Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-2"
          >
            <Heading level={2}>Latest Articles</Heading>
            <Text variant="muted">
              Read our latest articles on real estate, architecture, interior
              design, and more
            </Text>
          </motion.div>

          {/* Featured Articles */}
          <FeaturedArticles />

          {/* Native Ad - Blends with content */}
          <div className="mt-8">
            <NativeAd />
          </div>

          {/* In-Article Ad */}
          <InArticleAd />

          {/* Articles Grid and Sidebar */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <ArticlesGrid />

              {/* Video Ad after some articles */}
              <div className="my-12">
                <VideoAd />
              </div>

              {/* Parallax Ad - Appears when scrolling */}
              <ParallaxAd />
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Statistics Section */}
        {/* <StatisticsSection /> */}

        {/* Premium CTA Section */}
        {/* <PremiumCtaSection /> */}

        {/* Sticky Ad */}
        <StickyAd />
      </motion.div>
    </>
  );
}
