// "use client";

// import { useEffect, useRef } from "react";

// type AdType =
//   | "banner"
//   | "sticky"
//   | "interstitial"
//   | "parallax"
//   | "notification"
//   | "video"
//   | "native"
//   | "anchor";

// interface NetpubAdProps {
//   adId?: string;
//   slot?: number;
//   type?: AdType;
//   notificationId?: number;
//   className?: string;
//   desktopSizes?: string;
//   mobileSizes?: string;
// }

// export default function NetpubAd({
//   adId = "ce091d3bbbabadf72c46ff0ee6947b58",
//   slot,
//   type,
//   notificationId,
//   className = "",
//   desktopSizes = "728x90,970x90",
//   mobileSizes = "300x250,320x100,320x50",
// }: NetpubAdProps) {
//   const adRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Skip during SSR
//     if (typeof window === "undefined") return;

//     // Load the script only once
//     if (!document.getElementById(adId)) {
//       const script = document.createElement("script");
//       script.id = adId;
//       script.async = true;
//       script.src = `https://fstatic.netpub.media/static/${adId}.min.js?${Date.now()}`;
//       document.head.appendChild(script);
//     }

//     // Create the ad element
//     if (adRef.current) {
//       const ins = document.createElement("ins");
//       ins.className = `adv-${adId}`;
//       ins.setAttribute("data-sizes-desktop", desktopSizes);
//       ins.setAttribute("data-sizes-mobile", mobileSizes);

//       if (slot) ins.setAttribute("data-slot", String(slot));
//       if (type === "sticky") ins.setAttribute("data-sticky", "1");
//       if (type === "interstitial")
//         ins.setAttribute("data-interstitial", String(slot || 1));
//       if (type === "parallax") ins.setAttribute("data-parallax", "1");
//       if (type === "notification")
//         ins.setAttribute("data-notification", String(notificationId || 1));
//       if (type === "video") ins.setAttribute("data-video", "1");
//       if (type === "native") ins.setAttribute("data-native", "1");
//       if (type === "anchor") ins.setAttribute("data-anchor", "1");

//       // Clear the container and append the ad
//       adRef.current.innerHTML = "";
//       adRef.current.appendChild(ins);
//     }

//     return () => {
//       // Clean up if needed
//       if (adRef.current) {
//         adRef.current.innerHTML = "";
//       }
//     };
//   }, [adId, slot, type, notificationId, desktopSizes, mobileSizes]);

//   return <div ref={adRef} className={className}></div>;
// }
"use client";

import { useEffect, useRef } from "react";

type AdType =
  | "banner"
  | "sticky"
  | "interstitial"
  | "parallax"
  | "notification"
  | "video"
  | "native"
  | "anchor";

interface NetpubAdProps {
  adId?: string;
  slot?: number;
  type?: AdType;
  notificationId?: number;
  className?: string;
  desktopSizes?: string;
  mobileSizes?: string;
}

export default function NetpubAd({
  adId = "ce091d3bbbabadf72c46ff0ee6947b58",
  slot,
  type,
  notificationId,
  className = "",
  desktopSizes = "728x90,970x90",
  mobileSizes = "300x250,320x100,320x50",
}: NetpubAdProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip during SSR
    if (typeof window === "undefined") return;

    // Function to load the ad
    const loadAd = () => {
      // Clear the container
      if (adRef.current) {
        adRef.current.innerHTML = "";

        // Create the ad element
        const ins = document.createElement("ins");
        ins.className = `adv-${adId}`;
        ins.setAttribute("data-sizes-desktop", desktopSizes);
        ins.setAttribute("data-sizes-mobile", mobileSizes);

        if (slot) ins.setAttribute("data-slot", String(slot));
        if (type === "sticky") ins.setAttribute("data-sticky", "1");
        if (type === "interstitial")
          ins.setAttribute("data-interstitial", String(slot || 1));
        if (type === "parallax") ins.setAttribute("data-parallax", "1");
        if (type === "notification")
          ins.setAttribute("data-notification", String(notificationId || 1));
        if (type === "video") ins.setAttribute("data-video", "1");
        if (type === "native") ins.setAttribute("data-native", "1");
        if (type === "anchor") ins.setAttribute("data-anchor", "1");

        // Append the ad to the container
        adRef.current.appendChild(ins);
      }

      // Load the script only once
      if (!document.getElementById(adId)) {
        const script = document.createElement("script");
        script.id = adId;
        script.async = true;
        script.src = `https://fstatic.netpub.media/static/${adId}.min.js?${Date.now()}`;
        document.head.appendChild(script);
      }
    };

    // Load the ad immediately
    loadAd();

    // Set up an interval to reload the ad every 30 seconds
    const intervalId = setInterval(loadAd, 30000); // 30 seconds

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
    };
  }, [adId, slot, type, notificationId, desktopSizes, mobileSizes]);

  return <div ref={adRef} className={className}></div>;
}
