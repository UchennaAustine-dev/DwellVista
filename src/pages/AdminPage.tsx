"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SEODashboard from "../components/SEODashboard";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("seo");

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          <button
            className={`py-3 px-6 font-medium ${
              activeTab === "seo"
                ? "border-b-2 border-emerald-600 text-emerald-600"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("seo")}
          >
            SEO Dashboard
          </button>
          <button
            className={`py-3 px-6 font-medium ${
              activeTab === "content"
                ? "border-b-2 border-emerald-600 text-emerald-600"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("content")}
          >
            Content Manager
          </button>
          <button
            className={`py-3 px-6 font-medium ${
              activeTab === "settings"
                ? "border-b-2 border-emerald-600 text-emerald-600"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "seo" && <SEODashboard />}
          {activeTab === "content" && (
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Content Manager</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Content management features coming soon.
              </p>
            </div>
          )}
          {activeTab === "settings" && (
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Settings</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Settings panel coming soon.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
