import React from "react";

// Ad types based on the Netpub banners
type AdType =
  | "banner-728x90"
  | "banner-300x600"
  | "banner-300x250"
  | "sticky"
  | "interstitial"
  | "parallax"
  | "notification";

interface AdBannerProps {
  type: AdType;
  slot?: number;
  className?: string;
}

export default function AdBanner({
  type,
  slot = 1,
  className = "",
}: AdBannerProps) {
  // Determine the appropriate data attributes based on ad type
  const getAdAttributes = () => {
    switch (type) {
      case "banner-728x90":
        return {
          "data-sizes-desktop": "728x90,970x90",
          "data-sizes-mobile":
            "200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50",
          "data-slot": slot.toString(),
        };
      case "banner-300x600":
        return {
          "data-sizes-desktop":
            "120x600,160x600,200x200,250x250,300x250,300x600,336x280",
          "data-sizes-mobile":
            "160x600,200x200,250x250,300x250,300x600,336x280",
          "data-slot": "3",
        };
      case "banner-300x250":
        return {
          "data-sizes-desktop": "200x200,250x250,300x250,336x280",
          "data-sizes-mobile": "200x200,250x250,300x250,336x280",
          "data-slot": "4",
        };
      case "sticky":
        return {
          "data-sizes-desktop":
            "200x200,250x250,300x250,336x280,468x60,678x60,728x90,870x200,970x250,970x90",
          "data-sizes-mobile":
            "200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50",
          "data-sticky": "1",
        };
      case "interstitial":
        return {
          "data-sizes-desktop":
            "1050x300,200x200,250x250,300x250,336x280,400x350,468x60,678x60,700x300,728x500,728x90,750x400,750x480,870x200,970x250,970x90",
          "data-sizes-mobile":
            "200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50",
          "data-interstitial": slot.toString(),
        };
      case "parallax":
        return {
          "data-sizes-desktop":
            "200x200,250x250,300x250,336x280,360x300,400x350,640x480,678x60,700x300,728x500,728x90",
          "data-sizes-mobile":
            "200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50",
          "data-parallax": "1",
        };
      case "notification":
        return {
          "data-sizes-desktop": "200x200,250x250,300x250,336x280",
          "data-sizes-mobile":
            "200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50",
          "data-notification": slot.toString(),
        };
      default:
        return {
          "data-sizes-desktop": "728x90,970x90",
          "data-sizes-mobile": "300x250,320x100",
          "data-slot": "1",
        };
    }
  };

  // Load the Netpub script once when the component mounts
  React.useEffect(() => {
    const scriptId = "ce091d3bbbabadf72c46ff0ee6947b58";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://fstatic.netpub.media/static/${scriptId}.min.js?${Date.now()}`;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adv-ce091d3bbbabadf72c46ff0ee6947b58"
        {...getAdAttributes()}
      ></ins>
    </div>
  );
}
