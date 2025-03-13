import { Heading, Text } from "../components/ui/typography";
import SEO from "../components/SEO";
import AdsShowcase from "../components/ads/AdsShowcase";
import AdsImplementation from "../components/ads/AdsImplementation";
import { TopBannerAd, StickyAd } from "../components/ads/AdLayout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export default function AdsPage() {
  return (
    <>
      <SEO
        title="Ad Formats & Implementation | DwellVista"
        description="Explore different ad formats and learn how to implement them effectively on your website."
        canonical="/ads"
        ogType="website"
        ogImage="/images/ads-og-image.jpg"
      />

      <div className="pt-24">
        {/* Top Banner Ad */}
        <TopBannerAd />

        <div className="container mx-auto px-4 py-8">
          <Heading level={1} className="mb-2">
            Ad Formats & Implementation
          </Heading>
          <Text variant="muted" className="mb-8">
            Explore different ad formats and learn how to implement them
            effectively on your website.
          </Text>

          <Tabs defaultValue="showcase" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="showcase">Ad Showcase</TabsTrigger>
              <TabsTrigger value="implementation">
                Implementation Guide
              </TabsTrigger>
            </TabsList>

            <TabsContent value="showcase" className="mt-6">
              <AdsShowcase />
            </TabsContent>

            <TabsContent value="implementation" className="mt-6">
              <AdsImplementation />
            </TabsContent>
          </Tabs>
        </div>

        {/* Sticky Ad */}
        <StickyAd />
      </div>
    </>
  );
}
