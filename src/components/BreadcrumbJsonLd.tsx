"use client";

import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
  baseUrl?: string;
}

export default function BreadcrumbJsonLd({
  items,
  baseUrl = "https://dwellvista.site",
}: BreadcrumbJsonLdProps) {
  useEffect(() => {
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
      })),
    };

    // Add JSON-LD script to head
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(breadcrumbJsonLd);
    script.id = "breadcrumb-jsonld";

    // Remove any existing JSON-LD script
    const existingScript = document.getElementById("breadcrumb-jsonld");
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById("breadcrumb-jsonld");
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [items, baseUrl]);

  return null;
}
