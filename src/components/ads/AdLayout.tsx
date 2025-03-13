import NetpubAd from "./NetpubAd";

export function TopBannerAd() {
  return (
    <div className="w-full flex justify-center my-4">
      <NetpubAd
        type="banner"
        slot={1}
        desktopSizes="728x90,970x90"
        mobileSizes="300x250,320x100,320x50"
      />
    </div>
  );
}

export function SidebarAd() {
  return (
    <div className="my-6">
      <NetpubAd
        type="banner"
        slot={3}
        desktopSizes="300x250,336x280"
        mobileSizes="300x250,336x280"
      />
    </div>
  );
}

export function InArticleAd() {
  return (
    <div className="my-8 flex justify-center">
      <NetpubAd
        type="banner"
        slot={4}
        desktopSizes="300x250,336x280,728x90"
        mobileSizes="300x250,320x100"
      />
    </div>
  );
}

export function StickyAd() {
  return (
    <NetpubAd
      type="sticky"
      desktopSizes="728x90,970x90"
      mobileSizes="320x50,320x100"
    />
  );
}

export function InterstitialAd() {
  return (
    <NetpubAd
      type="interstitial"
      slot={1}
      desktopSizes="1050x300,728x500,970x250"
      mobileSizes="300x250,320x480"
    />
  );
}

export function ParallaxAd() {
  return (
    <div className="my-12">
      <NetpubAd
        type="parallax"
        desktopSizes="728x500,700x300"
        mobileSizes="300x250,320x100"
      />
    </div>
  );
}

export function NotificationAd() {
  return (
    <NetpubAd
      type="notification"
      notificationId={4}
      desktopSizes="300x250,336x280"
      mobileSizes="300x250,320x100"
    />
  );
}

export function VideoAd() {
  return (
    <div className="my-8 flex justify-center">
      <NetpubAd
        type="video"
        slot={5}
        desktopSizes="640x360"
        mobileSizes="300x250"
      />
    </div>
  );
}

export function NativeAd() {
  return (
    <div className="my-6 bg-gray-50 p-4 rounded-lg">
      <NetpubAd
        type="native"
        slot={6}
        desktopSizes="fluid"
        mobileSizes="fluid"
      />
    </div>
  );
}

export function AnchorAd() {
  return <NetpubAd type="anchor" desktopSizes="728x90" mobileSizes="320x50" />;
}
