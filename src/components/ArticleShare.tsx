"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";

interface ArticleShareProps {
  title: string;
  url: string;
}

export default function ArticleShare({ title, url }: ArticleShareProps) {
  const [copied, setCopied] = useState(false);
  const [showMobileShare, setShowMobileShare] = useState(false);

  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMobileShare = () => {
    setShowMobileShare(!showMobileShare);
  };

  // Check if the Web Share API is available
  const canUseWebShare = typeof navigator !== "undefined" && navigator.share;

  const handleShare = async () => {
    if (canUseWebShare) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      toggleMobileShare();
    }
  };

  return (
    <div className="relative">
      {/* Desktop Share Buttons - Fixed left side */}
      <motion.div
        className="fixed left-4 top-1/3 -translate-y-1/2 space-y-2 hidden lg:flex flex-col items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          Share
        </span>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook size={18} />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 text-gray-600 hover:text-sky-500 hover:border-sky-500 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter size={18} />
        </a>

        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 text-gray-600 hover:text-blue-700 hover:border-blue-700 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={18} />
        </a>

        <button
          onClick={handleCopyLink}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 text-gray-600 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
          aria-label="Copy link"
        >
          {copied ? (
            <Check size={18} className="text-emerald-600" />
          ) : (
            <Link2 size={18} />
          )}
        </button>
      </motion.div>

      {/* Mobile Share Button */}
      <button
        onClick={handleShare}
        className="lg:hidden flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Share article"
      >
        <Link2 size={16} />
        <span>Share</span>
      </button>

      {/* Mobile Share Popup */}
      <AnimatePresence>
        {showMobileShare && !canUseWebShare && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 top-full mt-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 w-48"
          >
            <div className="flex flex-col space-y-2">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <Facebook size={16} className="text-blue-600" />
                <span>Facebook</span>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <Twitter size={16} className="text-sky-500" />
                <span>Twitter</span>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <Linkedin size={16} className="text-blue-700" />
                <span>LinkedIn</span>
              </a>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Link2 size={16} />
                    <span>Copy link</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
