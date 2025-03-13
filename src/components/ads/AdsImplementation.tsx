"use client";

import { Heading, Text } from "../ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { TopBannerAd, InArticleAd } from "./AdLayout";

export default function AdsImplementation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading level={1} className="mb-6">
        Ad Implementation Guide
      </Heading>
      <Text className="mb-8">
        Learn how to implement different ad formats in your website.
      </Text>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2">
          <TabsTrigger value="basic" className="text-xs sm:text-sm">
            Basic Usage
          </TabsTrigger>
          <TabsTrigger value="placement" className="text-xs sm:text-sm">
            Placement Strategy
          </TabsTrigger>
          <TabsTrigger value="responsive" className="text-xs sm:text-sm">
            Responsive Ads
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-8 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Ad Implementation</CardTitle>
              <CardDescription>
                How to implement basic ad components in your pages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Heading level={3} className="text-lg mb-2">
                    Step 1: Import the Ad Components
                  </Heading>
                  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-xs sm:text-sm">
                    <code>{`import { TopBannerAd, InArticleAd, SidebarAd } from "../components/ads/AdLayout"`}</code>
                  </pre>
                </div>

                <div>
                  <Heading level={3} className="text-lg mb-2">
                    Step 2: Place the Ad Components in Your JSX
                  </Heading>
                  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-xs sm:text-sm">
                    <code>{`<div className="container">
  {/* Top of the page */}
  <TopBannerAd />
  
  <h1>Your Page Title</h1>
  <p>Your content goes here...</p>
  
  {/* Middle of the content */}
  <InArticleAd />
  
  <p>More content...</p>
  
  {/* In the sidebar */}
  <div className="sidebar">
    <SidebarAd />
  </div>
</div>`}</code>
                  </pre>
                </div>

                <div>
                  <Heading level={3} className="text-lg mb-2">
                    Live Example
                  </Heading>
                  <div className="border border-dashed border-gray-300 p-4 rounded-lg">
                    <TopBannerAd />
                    <div className="my-4">
                      <Heading level={2}>Sample Content</Heading>
                      <Text>
                        This is an example of content with an ad placed within
                        it.
                      </Text>
                    </div>
                    <InArticleAd />
                    <div className="mt-4">
                      <Text>More content after the ad placement.</Text>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="placement" className="space-y-8 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Ad Placement Strategy</CardTitle>
              <CardDescription>
                Best practices for placing ads on your website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Heading level={3} className="text-lg mb-2">
                    Common Ad Placements
                  </Heading>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Top Banner:</strong> Above the main content, high
                      visibility
                    </li>
                    <li>
                      <strong>In-Article:</strong> Every 3-4 paragraphs within
                      long-form content
                    </li>
                    <li>
                      <strong>Sidebar:</strong> Adjacent to main content,
                      remains visible while scrolling
                    </li>
                    <li>
                      <strong>Sticky Bottom:</strong> Fixed to the bottom of the
                      viewport
                    </li>
                    <li>
                      <strong>Interstitial:</strong> Between page transitions or
                      at natural breaks
                    </li>
                  </ul>
                </div>

                <div>
                  <Heading level={3} className="text-lg mb-2">
                    Code Example: Strategic Placement
                  </Heading>
                  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-xs sm:text-sm">
                    <code>{`function ArticlePage({ article }) {
  return (
    <div className="container">
      <TopBannerAd />
      
      <h1>{article.title}</h1>
      <p>{article.introduction}</p>
      
      {/* First ad after introduction */}
      <InArticleAd />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Main content */}
          {article.content.map((paragraph, index) => (
            <React.Fragment key={index}>
              <p>{paragraph}</p>
              
              {/* Place an ad after every 3 paragraphs */}
              {(index + 1) % 3 === 0 && <InArticleAd />}
            </React.Fragment>
          ))}
          
          {/* Parallax ad near the end */}
          <ParallaxAd />
        </div>
        
        <div className="md:col-span-1">
          {/* Sidebar */}
          <SidebarAd />
        </div>
      </div>
      
      {/* Sticky ad at the bottom */}
      <StickyAd />
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="responsive" className="space-y-8 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Responsive Ad Implementation</CardTitle>
              <CardDescription>
                How to make your ads responsive across different devices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Heading level={3} className="text-lg mb-2">
                    Responsive Ad Sizes
                  </Heading>
                  <Text>
                    Our ad components automatically handle responsive sizing
                    based on the device. You can customize the sizes:
                  </Text>
                  <pre className="bg-gray-100 p-4 rounded-md mt-2 overflow-x-auto text-xs sm:text-sm">
                    <code>{`<TopBannerAd 
  desktopSizes="728x90,970x90" 
  mobileSizes="300x250,320x100,320x50" 
/>`}</code>
                  </pre>
                </div>

                <div>
                  <Heading level={3} className="text-lg mb-2">
                    Device-Specific Ad Display
                  </Heading>
                  <Text>
                    You can conditionally render different ad formats based on
                    screen size:
                  </Text>
                  <pre className="bg-gray-100 p-4 rounded-md mt-2 overflow-x-auto text-xs sm:text-sm">
                    <code>{`import { useEffect, useState } from 'react';

function ResponsiveAds() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  return (
    <div>
      {isMobile ? (
        // Mobile-specific ads
        <>
          <TopBannerAd mobileSizes="320x50,300x250" />
          <AnchorAd />
        </>
      ) : (
        // Desktop-specific ads
        <>
          <TopBannerAd desktopSizes="728x90,970x90" />
          <SidebarAd />
        </>
      )}
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
