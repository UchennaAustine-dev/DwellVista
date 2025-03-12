// Simple utility to help track basic SEO metrics client-side
// Note: This should be complemented with proper analytics tools

export interface PageView {
  path: string;
  referrer: string;
  timestamp: number;
}

export interface SearchTerms {
  term: string;
  count: number;
  lastSeen: number;
}

export interface SEOData {
  pageViews: PageView[];
  searchTerms: SearchTerms[];
  rankings: {
    keyword: string;
    position: number;
    lastUpdated: number;
  }[];
}

const SEO_STORAGE_KEY = "dwellvista_seo_data";

// Initialize or get existing SEO data
export function getSEOData(): SEOData {
  if (typeof window === "undefined")
    return { pageViews: [], searchTerms: [], rankings: [] };

  const storedData = localStorage.getItem(SEO_STORAGE_KEY);
  if (!storedData) {
    return { pageViews: [], searchTerms: [], rankings: [] };
  }

  try {
    return JSON.parse(storedData);
  } catch (e) {
    console.error("Error parsing SEO data", e);
    return { pageViews: [], searchTerms: [], rankings: [] };
  }
}

// Track a page view
export function trackPageView() {
  if (typeof window === "undefined") return;

  const data = getSEOData();
  const newPageView: PageView = {
    path: window.location.pathname,
    referrer: document.referrer,
    timestamp: Date.now(),
  };

  data.pageViews = [...data.pageViews, newPageView].slice(-100); // Keep last 100 page views
  localStorage.setItem(SEO_STORAGE_KEY, JSON.stringify(data));

  // Check if coming from a search engine
  if (
    document.referrer.includes("google.com/search") ||
    document.referrer.includes("bing.com/search") ||
    document.referrer.includes("yahoo.com/search")
  ) {
    trackSearchReferral(document.referrer);
  }
}

// Track search terms (simplified - actual implementation would use URL parameters)
function trackSearchReferral(_referrer: string) {
  // This is a simplified example - in reality you'd parse the URL for search terms
  const data = getSEOData();
  const searchTerm = "organic search"; // Placeholder - would extract actual term

  const existingTerm = data.searchTerms.find((t) => t.term === searchTerm);
  if (existingTerm) {
    existingTerm.count += 1;
    existingTerm.lastSeen = Date.now();
  } else {
    data.searchTerms.push({
      term: searchTerm,
      count: 1,
      lastSeen: Date.now(),
    });
  }

  localStorage.setItem(SEO_STORAGE_KEY, JSON.stringify(data));
}

// Update keyword rankings (would typically come from an API)
export function updateKeywordRanking(keyword: string, position: number) {
  const data = getSEOData();

  const existingRanking = data.rankings.find((r) => r.keyword === keyword);
  if (existingRanking) {
    existingRanking.position = position;
    existingRanking.lastUpdated = Date.now();
  } else {
    data.rankings.push({
      keyword,
      position,
      lastUpdated: Date.now(),
    });
  }

  localStorage.setItem(SEO_STORAGE_KEY, JSON.stringify(data));
}

// Get basic SEO stats
export function getSEOStats() {
  const data = getSEOData();

  // Total page views in last 30 days
  const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
  const recentPageViews = data.pageViews.filter(
    (pv) => pv.timestamp > thirtyDaysAgo
  );

  // Count search engine referrals
  const searchReferrals = data.pageViews.filter(
    (pv) =>
      pv.referrer.includes("google.com/search") ||
      pv.referrer.includes("bing.com/search") ||
      pv.referrer.includes("yahoo.com/search")
  );

  // Get top pages
  const pageViewCounts: Record<string, number> = {};
  data.pageViews.forEach((pv) => {
    pageViewCounts[pv.path] = (pageViewCounts[pv.path] || 0) + 1;
  });

  const topPages = Object.entries(pageViewCounts)
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return {
    totalPageViews: data.pageViews.length,
    recentPageViews: recentPageViews.length,
    searchReferrals: searchReferrals.length,
    topSearchTerms: data.searchTerms
      .sort((a, b) => b.count - a.count)
      .slice(0, 5),
    topPages,
    keywordRankings: data.rankings.sort((a, b) => a.position - b.position),
  };
}

// Calculate SEO health score (0-100)
export function calculateSEOHealthScore(): number {
  // This is a simplified example - a real implementation would be more comprehensive
  let score = 0;

  // Check if meta tags are present
  const hasTitle = document.title && document.title.length > 0;
  const hasDescription = !!document.querySelector('meta[name="description"]');
  const hasCanonical = !!document.querySelector('link[rel="canonical"]');

  if (hasTitle) score += 20;
  if (hasDescription) score += 15;
  if (hasCanonical) score += 10;

  // Check for heading structure
  const hasH1 = document.querySelectorAll("h1").length === 1;
  const hasH2 = document.querySelectorAll("h2").length > 0;

  if (hasH1) score += 15;
  if (hasH2) score += 10;

  // Check for images with alt text
  const images = document.querySelectorAll("img");
  const imagesWithAlt = document.querySelectorAll("img[alt]");

  if (images.length > 0 && imagesWithAlt.length === images.length) {
    score += 15;
  } else if (imagesWithAlt.length > 0) {
    score += (imagesWithAlt.length / images.length) * 15;
  }

  // Check for internal links
  const hasInternalLinks =
    document.querySelectorAll(
      'a[href^="/"], a[href^="' + window.location.origin + '"]'
    ).length > 0;
  if (hasInternalLinks) score += 15;

  return Math.min(Math.round(score), 100);
}
