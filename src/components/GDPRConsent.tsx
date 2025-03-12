"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GDPRConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem("gdpr-consent");

    // If no consent is stored, show the consent banner
    if (!hasConsent) {
      // Small delay to avoid showing immediately on page load
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    // Store consent in localStorage
    localStorage.setItem("gdpr-consent", "all");
    setShowConsent(false);

    // If the CMP API is available, use it
    if (window.CMP_GDPR && typeof window.CMP_GDPR.acceptAll === "function") {
      window.CMP_GDPR.acceptAll();
    }
  };

  const acceptEssential = () => {
    // Store consent in localStorage
    localStorage.setItem("gdpr-consent", "essential");
    setShowConsent(false);

    // If the CMP API is available, use it
    if (
      window.CMP_GDPR &&
      typeof window.CMP_GDPR.acceptEssential === "function"
    ) {
      window.CMP_GDPR.acceptEssential();
    }
  };

  const openPreferences = () => {
    // If the CMP API is available, use it to open preferences
    if (
      window.CMP_GDPR &&
      typeof window.CMP_GDPR.showPreferences === "function"
    ) {
      window.CMP_GDPR.showPreferences();
    }
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Cookie Consent
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We use cookies to enhance your browsing experience, serve
                  personalized ads or content, and analyze our traffic. By
                  clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={openPreferences}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Preferences
                </button>
                <button
                  onClick={acceptEssential}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Essential Only
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
