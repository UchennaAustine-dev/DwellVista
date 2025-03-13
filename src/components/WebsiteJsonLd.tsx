"use client";

import { useEffect } from "react";

interface WebsiteJsonLdProps {
  siteUrl?: string;
  siteName?: string;
  logoUrl?: string;
  sameAs?: string[];
}

export default function WebsiteJsonLd({
  siteUrl = "https://dwellvista.site",
  siteName = "DwellVista",
  logoUrl = "https://dwellvista.site/vite.svg",
  sameAs = [
    "https://facebook.com/dwellvista",
    "https://twitter.com/dwellvista",
    "https://instagram.com/dwellvista",
    "https://pinterest.com/dwellvista",
  ],
}: WebsiteJsonLdProps) {
  useEffect(() => {
    const websiteJsonLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description:
        "Your premier destination for real estate insights, interior design inspiration, and architectural excellence.",
      publisher: {
        "@type": "Organization",
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: "600",
          height: "60",
        },
        sameAs: sameAs,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };

    // Add JSON-LD script to head
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(websiteJsonLd);
    script.id = "website-jsonld";

    // Remove any existing JSON-LD script
    const existingScript = document.getElementById("website-jsonld");
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById("website-jsonld");
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [siteUrl, siteName, logoUrl, sameAs]);

  return null;
}
