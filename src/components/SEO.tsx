import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleSection?: string;
}

export default function SEO({
  title = "DwellVista | Real Estate & Interior Design Blog",
  description = "Your premier destination for real estate insights, interior design inspiration, and architectural excellence.",
  canonical = "",
  ogImage = "/images/og-image.jpg",
  ogType = "website",
  keywords = "real estate, interior design, architecture, home decor, property, renovation",
  author = "DwellVista Team",
  publishedTime,
  modifiedTime,
  articleSection,
}: SEOProps) {
  const siteUrl = "https://dwellvista.site"; // Replace with your actual domain
  const fullCanonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Update link tags
    updateLinkTag("canonical", fullCanonicalUrl);

    // Update Open Graph tags
    updateMetaTag("og:type", ogType);
    updateMetaTag("og:url", fullCanonicalUrl);
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:image", fullOgImageUrl);
    updateMetaTag("og:site_name", "DwellVista");

    // Update Twitter tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:url", fullCanonicalUrl);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", fullOgImageUrl);

    // Article specific tags
    if (ogType === "article") {
      updateMetaTag("article:author", author);
      if (publishedTime) updateMetaTag("article:published_time", publishedTime);
      if (modifiedTime) updateMetaTag("article:modified_time", modifiedTime);
      if (articleSection) updateMetaTag("article:section", articleSection);
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "DwellVista | Real Estate & Interior Design Blog";
    };
  }, [
    title,
    description,
    fullCanonicalUrl,
    fullOgImageUrl,
    ogType,
    keywords,
    author,
    publishedTime,
    modifiedTime,
    articleSection,
  ]);

  return null;
}

// Helper function to update meta tags
function updateMetaTag(name: string, content: string) {
  let metaTag = document.querySelector(
    `meta[name="${name}"], meta[property="${name}"]`
  );

  if (!metaTag) {
    metaTag = document.createElement("meta");
    if (
      name.startsWith("og:") ||
      name.startsWith("article:") ||
      name.startsWith("twitter:")
    ) {
      metaTag.setAttribute("property", name);
    } else {
      metaTag.setAttribute("name", name);
    }
    document.head.appendChild(metaTag);
  }

  metaTag.setAttribute("content", content);
}

// Helper function to update link tags
function updateLinkTag(rel: string, href: string) {
  let linkTag = document.querySelector(`link[rel="${rel}"]`);

  if (!linkTag) {
    linkTag = document.createElement("link");
    linkTag.setAttribute("rel", rel);
    document.head.appendChild(linkTag);
  }

  linkTag.setAttribute("href", href);
}
