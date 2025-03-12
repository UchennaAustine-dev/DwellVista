"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  getSEOStats,
  calculateSEOHealthScore,
  updateKeywordRanking,
  trackPageView,
} from "../utils/seoTracker";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type SearchTerms = {
  term: string;
  count: number;
};

export default function SEODashboard() {
  const [stats, setStats] = useState<{
    totalPageViews: number;
    recentPageViews: number;
    searchReferrals: number;
    topSearchTerms: SearchTerms[];
    topPages: { path: string; count: number }[];
    keywordRankings: {
      keyword: string;
      position: number;
      lastUpdated: number;
    }[];
  }>({
    totalPageViews: 0,
    recentPageViews: 0,
    searchReferrals: 0,
    topSearchTerms: [],
    topPages: [],
    keywordRankings: [],
  });

  const [healthScore, setHealthScore] = useState(0);
  const [newKeyword, setNewKeyword] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const [organicTrafficPercentage, setOrganicTrafficPercentage] =
    useState(12.5); // Initialize with a default value

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [trafficData, setTrafficData] = useState([
    { name: "Jan", organic: 400, direct: 240, referral: 180 },
    { name: "Feb", organic: 430, direct: 250, referral: 190 },
    { name: "Mar", organic: 470, direct: 260, referral: 200 },
    { name: "Apr", organic: 510, direct: 270, referral: 220 },
    { name: "May", organic: 590, direct: 280, referral: 230 },
    { name: "Jun", organic: 650, direct: 290, referral: 240 },
  ]);

  useEffect(() => {
    // Track page view when dashboard is loaded
    trackPageView();

    // Get initial stats
    const initialStats = getSEOStats();
    setStats(initialStats);
    setHealthScore(calculateSEOHealthScore());

    // Update stats every minute
    const interval = setInterval(() => {
      const updatedStats = getSEOStats();
      setStats(updatedStats);
      setHealthScore(calculateSEOHealthScore());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleAddKeyword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newKeyword && newPosition) {
      updateKeywordRanking(newKeyword, Number.parseInt(newPosition, 10));
      setStats(getSEOStats());
      setNewKeyword("");
      setNewPosition("");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">SEO Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* SEO Health Score */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">SEO Health Score</h2>
          <div className="flex items-center">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={
                    healthScore > 75
                      ? "#10b981"
                      : healthScore > 50
                      ? "#f59e0b"
                      : "#ef4444"
                  }
                  strokeWidth="3"
                  strokeDasharray={`${healthScore}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                {healthScore}
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {healthScore > 75
                  ? "Good! Your SEO is on track."
                  : healthScore > 50
                  ? "Needs improvement. Check recommendations."
                  : "Poor. Urgent attention needed."}
              </p>
              <a
                href="#recommendations"
                className="text-emerald-600 text-sm hover:underline mt-2 inline-block"
              >
                View recommendations
              </a>
            </div>
          </div>
        </div>

        {/* Organic Traffic */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Organic Traffic</h2>
          <div className="flex items-center">
            <div className="text-4xl font-bold">{stats.searchReferrals}</div>
            <div className="ml-4">
              <div className="text-xs font-semibold text-emerald-600 flex items-center">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                {organicTrafficPercentage}%
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                vs. last month
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Visitors from search engines in the last 30 days
          </p>
        </div>

        {/* Keyword Rankings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">Keyword Rankings</h2>
          <div className="text-4xl font-bold">
            {stats.keywordRankings.length}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Keywords tracked in search results
          </p>
          <div className="mt-2">
            <div className="text-xs font-semibold text-emerald-600 flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              3 keywords in top 10
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Traffic Overview</h2>
        <div className="h-80">
          <ChartContainer
            config={{
              organic: {
                label: "Organic Traffic",
                color: "hsl(var(--chart-1))",
              },
              direct: {
                label: "Direct Traffic",
                color: "hsl(var(--chart-2))",
              },
              referral: {
                label: "Referral Traffic",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={trafficData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="organic"
                  stroke="var(--color-organic)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="direct"
                  stroke="var(--color-direct)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="referral"
                  stroke="var(--color-referral)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Top Pages */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Top Performing Pages</h2>
          {stats.topPages.length > 0 ? (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {stats.topPages.map((page, index) => (
                <li key={index} className="py-3">
                  <div className="flex justify-between">
                    <span className="truncate max-w-xs">{page.path}</span>
                    <span className="font-medium">{page.count} views</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No page view data available yet.
            </p>
          )}
        </div>

        {/* Keyword Rankings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Keyword Rankings</h2>
            <button
              className="text-sm bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700"
              onClick={() =>
                document
                  .getElementById("add-keyword-form")
                  ?.classList.toggle("hidden")
              }
            >
              Add Keyword
            </button>
          </div>

          <form
            id="add-keyword-form"
            className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded hidden"
            onSubmit={handleAddKeyword}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                placeholder="Keyword"
                className="px-3 py-2 border rounded"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Position"
                className="px-3 py-2 border rounded"
                value={newPosition}
                onChange={(e) => setNewPosition(e.target.value)}
                min="1"
                max="100"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white px-3 py-2 rounded hover:bg-emerald-700"
            >
              Save Keyword
            </button>
          </form>

          {stats.keywordRankings.length > 0 ? (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {stats.keywordRankings.map((keyword, index) => (
                <li key={index} className="py-3">
                  <div className="flex justify-between">
                    <span>{keyword.keyword}</span>
                    <span
                      className={`font-medium ${
                        keyword.position <= 3
                          ? "text-emerald-600"
                          : keyword.position <= 10
                          ? "text-amber-500"
                          : "text-gray-500"
                      }`}
                    >
                      #{keyword.position}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No keyword rankings added yet.
            </p>
          )}
        </div>
      </div>

      {/* SEO Recommendations */}
      <div
        id="recommendations"
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
      >
        <h2 className="text-lg font-semibold mb-4">SEO Recommendations</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                document.title &&
                document.title.length > 0 &&
                document.title.length < 60
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-red-100 text-red-600"
              } mr-3`}
            >
              {document.title &&
              document.title.length > 0 &&
              document.title.length < 60
                ? "✓"
                : "!"}
            </div>
            <div>
              <p className="font-medium">Title Tag</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {document.title &&
                document.title.length > 0 &&
                document.title.length < 60
                  ? "Good! Your title tag is well-optimized."
                  : document.title && document.title.length > 60
                  ? "Your title tag is too long. Keep it under 60 characters."
                  : "Add a descriptive title tag to your page."}
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                document.querySelector('meta[name="description"]')
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-red-100 text-red-600"
              } mr-3`}
            >
              {document.querySelector('meta[name="description"]') ? "✓" : "!"}
            </div>
            <div>
              <p className="font-medium">Meta Description</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {document.querySelector('meta[name="description"]')
                  ? "Good! Your page has a meta description."
                  : "Add a meta description to improve click-through rates."}
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                document.querySelectorAll("h1").length === 1
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-red-100 text-red-600"
              } mr-3`}
            >
              {document.querySelectorAll("h1").length === 1 ? "✓" : "!"}
            </div>
            <div>
              <p className="font-medium">H1 Heading</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {document.querySelectorAll("h1").length === 0
                  ? "Add an H1 heading to your page."
                  : document.querySelectorAll("h1").length > 1
                  ? "Too many H1 headings. Use only one H1 per page."
                  : "Good! Your page has one H1 heading."}
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                document.querySelectorAll("img:not([alt])").length === 0
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-red-100 text-red-600"
              } mr-3`}
            >
              {document.querySelectorAll("img:not([alt])").length === 0
                ? "✓"
                : "!"}
            </div>
            <div>
              <p className="font-medium">Image Alt Text</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {document.querySelectorAll("img:not([alt])").length === 0
                  ? "Good! All images have alt text."
                  : `${
                      document.querySelectorAll("img:not([alt])").length
                    } images missing alt text.`}
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                document.querySelector('link[rel="canonical"]')
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-red-100 text-red-600"
              } mr-3`}
            >
              {document.querySelector('link[rel="canonical"]') ? "✓" : "!"}
            </div>
            <div>
              <p className="font-medium">Canonical URL</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {document.querySelector('link[rel="canonical"]')
                  ? "Good! Your page has a canonical URL."
                  : "Add a canonical URL to prevent duplicate content issues."}
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-lg font-semibold mb-4">
          Connect Professional SEO Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://analytics.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.7 10.5l-6.5-6.5c-.2-.2-.5-.3-.7-.3s-.5.1-.7.3l-6.5 6.5c-.2.2-.3.5-.3.7s.1.5.3.7l6.5 6.5c.2.2.5.3.7.3s.5-.1.7-.3l6.5-6.5c.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM12 19l-6-6 6-6 6 6-6 6z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Google Analytics</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Track user behavior, traffic sources, and conversions
            </p>
          </a>

          <a
            href="https://search.google.com/search-console"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Search Console</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Monitor search performance, indexing status, and keyword rankings
            </p>
          </a>

          <a
            href="https://ahrefs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-50 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Backlink Analysis</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Track backlinks, keyword rankings, and competitor analysis
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
