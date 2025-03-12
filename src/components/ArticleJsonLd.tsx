"use client";

import { useEffect } from "react";
import type { Article } from "../types/article";

interface ArticleJsonLdProps {
  article: Article;
  url: string;
}

export default function ArticleJsonLd({ article, url }: ArticleJsonLdProps) {
  useEffect(() => {
    // Format date for JSON-LD
    const formatDateForJsonLd = (dateString: string) => {
      const date = new Date(dateString);
      return date.toISOString();
    };

    // Create article body from sections
    const articleBody = article.content.sections
      .map((section) => `${section.title}\n\n${section.content}`)
      .join("\n\n");

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      image: article.image,
      datePublished: formatDateForJsonLd(article.date),
      author: {
        "@type": "Person",
        name: article.author.name,
      },
      publisher: {
        "@type": "Organization",
        name: "DwellVista",
        logo: {
          "@type": "ImageObject",
          url: "https://dwellvista.site/vite.svg", // Replace with your actual logo URL
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      articleBody: articleBody,
      articleSection: article.category,
    };

    // Add JSON-LD script to head
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    script.id = "article-jsonld";

    // Remove any existing JSON-LD script
    const existingScript = document.getElementById("article-jsonld");
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById("article-jsonld");
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [article, url]);

  return null;
}
