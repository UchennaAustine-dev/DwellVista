"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Heading, Text } from "../ui/typography";
import {
  TopBannerAd,
  SidebarAd,
  InArticleAd,
  StickyAd,
  InterstitialAd,
  ParallaxAd,
  NotificationAd,
  VideoAd,
  NativeAd,
  AnchorAd,
} from "./AdLayout";
import { Button } from "../../components/ui/button";
import { useState } from "react";

export default function AdsShowcase() {
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading level={1} className="mb-6">
        Ad Formats Showcase
      </Heading>
      <Text className="mb-8">
        This page demonstrates all available ad formats that can be integrated
        into your website.
      </Text>

      <Tabs defaultValue="standard" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="standard">Standard Ads</TabsTrigger>
          <TabsTrigger value="interactive">Interactive Ads</TabsTrigger>
          <TabsTrigger value="native">Native Ads</TabsTrigger>
          <TabsTrigger value="special">Special Formats</TabsTrigger>
        </TabsList>

        <TabsContent value="standard" className="space-y-8 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Banner Ad</CardTitle>
              <CardDescription>
                Typically displayed at the top of the page. High visibility and
                CTR.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TopBannerAd />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>In-Article Ad</CardTitle>
              <CardDescription>
                Placed within article content for contextual relevance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InArticleAd />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sidebar Ad</CardTitle>
              <CardDescription>
                Displayed in the sidebar. Remains visible while scrolling
                through content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SidebarAd />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Video Ad</CardTitle>
              <CardDescription>
                Video format ads for higher engagement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <VideoAd />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interactive" className="space-y-8 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Interstitial Ad</CardTitle>
              <CardDescription>
                Full-screen ads that cover the interface of their host app.
                They're typically displayed at natural transition points in the
                flow of an app.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Button
                onClick={() => setShowInterstitial(true)}
                className="mb-4"
              >
                Show Interstitial Ad
              </Button>
              {showInterstitial && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white p-4 rounded-lg max-w-2xl w-full">
                    <div className="flex justify-between mb-4">
                      <Text className="font-bold">Advertisement</Text>
                      <Button
                        variant="ghost"
                        onClick={() => setShowInterstitial(false)}
                      >
                        Close
                      </Button>
                    </div>
                    <InterstitialAd />
                  </div>
                </div>
              )}
              <Text className="text-sm text-gray-500 mt-2">
                Click the button to simulate an interstitial ad experience.
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Ad</CardTitle>
              <CardDescription>
                Small notification-style ads that appear in the corner of the
                screen.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Button
                onClick={() => setShowNotification(true)}
                className="mb-4"
              >
                Show Notification Ad
              </Button>
              {showNotification && (
                <div className="fixed bottom-4 right-4 max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden z-50">
                  <div className="flex justify-between p-2 bg-gray-100">
                    <Text className="text-sm font-bold">New Notification</Text>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => setShowNotification(false)}
                    >
                      ✕
                    </Button>
                  </div>
                  <div className="p-2">
                    <NotificationAd />
                  </div>
                </div>
              )}
              <Text className="text-sm text-gray-500 mt-2">
                Click the button to simulate a notification ad.
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sticky Ad</CardTitle>
              <CardDescription>
                Ads that stick to the bottom of the viewport as the user
                scrolls.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border border-dashed border-gray-300 p-4 rounded-lg">
                <Text className="text-center mb-4">
                  Sticky ad demo (appears at the bottom of the screen)
                </Text>
                <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-40 flex justify-center py-2">
                  <StickyAd />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Anchor Ad</CardTitle>
              <CardDescription>
                Similar to sticky ads but with additional features like
                expand/collapse.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border border-dashed border-gray-300 p-4 rounded-lg">
                <Text className="text-center">
                  Anchor ad demo (appears at the bottom of the screen with
                  controls)
                </Text>
                <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-30 flex flex-col items-center">
                  <div className="w-full flex justify-end px-2 py-1 bg-gray-100">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 px-2 text-xs"
                    >
                      Close Ad
                    </Button>
                  </div>
                  <div className="py-2 w-full flex justify-center">
                    <AnchorAd />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="native" className="space-y-8 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Native Ad</CardTitle>
              <CardDescription>
                Ads that match the look and feel of the surrounding content for
                better user experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NativeAd />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="special" className="space-y-8 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Parallax Ad</CardTitle>
              <CardDescription>
                Ads with parallax scrolling effect for higher engagement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border border-dashed border-gray-300 p-4 rounded-lg">
                <Text className="text-center mb-4">
                  Scroll down to see the parallax effect
                </Text>
                <div className="h-96 overflow-y-auto">
                  <div className="h-64 bg-gray-100 flex items-center justify-center">
                    <Text>Scroll down</Text>
                  </div>
                  <ParallaxAd />
                  <div className="h-64 bg-gray-100 flex items-center justify-center">
                    <Text>Continue scrolling</Text>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
