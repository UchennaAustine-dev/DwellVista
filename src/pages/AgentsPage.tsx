"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Mail, Phone, MapPin, Star } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Heading, Text } from "../components/ui/typography";
import SEO from "../components/SEO";
import NewsletterSection from "../components/home/NewsletterSection";
import { TopBannerAd, InArticleAd } from "../components/ads/AdLayout";

// Sample agent data
const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    photo:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    email: "sarah.johnson@dwellvista.com",
    phone: "(123) 456-7890",
    location: "New York, NY",
    bio: "Sarah has over 10 years of experience in luxury real estate and specializes in high-end properties in Manhattan.",
    listings: 24,
    rating: 4.9,
    reviews: 87,
    featured: true,
    specialties: ["Luxury Homes", "Condos", "Investment Properties"],
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Real Estate Consultant",
    photo:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    email: "michael.rodriguez@dwellvista.com",
    phone: "(123) 456-7891",
    location: "Los Angeles, CA",
    bio: "Michael helps first-time homebuyers navigate the complex real estate market with ease and confidence.",
    listings: 18,
    rating: 4.7,
    reviews: 62,
    featured: false,
    specialties: ["First-Time Buyers", "Residential", "Suburban Homes"],
  },
  {
    id: 3,
    name: "Jennifer Lee",
    title: "Luxury Property Specialist",
    photo:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    email: "jennifer.lee@dwellvista.com",
    phone: "(123) 456-7892",
    location: "Miami, FL",
    bio: "Jennifer specializes in waterfront properties and has closed over $100 million in sales in the past year.",
    listings: 32,
    rating: 5.0,
    reviews: 104,
    featured: true,
    specialties: ["Waterfront", "Luxury Condos", "Vacation Homes"],
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Commercial Real Estate Agent",
    photo:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    email: "david.thompson@dwellvista.com",
    phone: "(123) 456-7893",
    location: "Chicago, IL",
    bio: "David focuses on commercial properties and has extensive experience with office spaces and retail locations.",
    listings: 15,
    rating: 4.6,
    reviews: 48,
    featured: false,
    specialties: ["Commercial", "Office Space", "Retail"],
  },
  {
    id: 5,
    name: "Emily Wilson",
    title: "Residential Property Expert",
    photo:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150",
    email: "emily.wilson@dwellvista.com",
    phone: "(123) 456-7894",
    location: "Seattle, WA",
    bio: "Emily is known for her personalized approach and deep knowledge of Seattle's diverse neighborhoods.",
    listings: 27,
    rating: 4.8,
    reviews: 93,
    featured: true,
    specialties: ["Residential", "Family Homes", "Urban Properties"],
  },
  {
    id: 6,
    name: "Robert Chen",
    title: "Investment Property Advisor",
    photo:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
    email: "robert.chen@dwellvista.com",
    phone: "(123) 456-7895",
    location: "San Francisco, CA",
    bio: "Robert helps investors identify profitable opportunities in the competitive San Francisco market.",
    listings: 21,
    rating: 4.7,
    reviews: 76,
    featured: false,
    specialties: ["Investment", "Multi-Family", "Property Development"],
  },
];

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter agents based on search
  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.specialties.some((specialty) =>
        specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesSearch;
  });

  // Separate featured agents
  const featuredAgents = filteredAgents.filter((agent) => agent.featured);
  const regularAgents = filteredAgents.filter((agent) => !agent.featured);

  return (
    <>
      <SEO
        title="Our Agents | DwellVista"
        description="Meet our team of experienced real estate professionals dedicated to helping you find your perfect property."
        canonical="/agents"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24"
      >
        <div className="container mx-auto px-4 py-8">
          <Heading level={1} className="mb-8">
            Our Real Estate Experts
          </Heading>

          {/* Top Banner Ad */}
          <TopBannerAd />

          {/* Search */}
          <div className="mb-12 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search agents by name, location, or specialty..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* In-Article Ad */}
          <InArticleAd />

          {/* Featured Agents */}
          {featuredAgents.length > 0 && (
            <div className="mb-12">
              <Heading level={3} className="mb-6">
                Featured Agents
              </Heading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredAgents.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} />
                ))}
              </div>
            </div>
          )}

          {/* All Agents */}
          <div>
            <Heading level={3} className="mb-6">
              All Agents
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularAgents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>

            {filteredAgents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No agents match your search criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setSearchTerm("")}
                >
                  Reset Search
                </Button>
              </div>
            )}
          </div>

          {/* Team Info */}
          <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Heading level={3} className="mb-4">
                  Join Our Team of Professionals
                </Heading>
                <Text className="mb-6">
                  At DwellVista, we're always looking for talented real estate
                  professionals to join our team. If you're passionate about
                  helping clients find their dream homes and have a track record
                  of success, we'd love to hear from you.
                </Text>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Apply Now
                </Button>
              </div>
              <div className="hidden md:block">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Team meeting"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <NewsletterSection />
      </motion.div>
    </>
  );
}

interface AgentCardProps {
  agent: {
    id: number;
    name: string;
    title: string;
    photo: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    listings: number;
    rating: number;
    reviews: number;
    featured: boolean;
    specialties: string[];
  };
}

function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="overflow-hidden group">
      <CardContent className="p-0">
        <div className="p-6 flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={agent.photo} alt={agent.name} />
            <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="font-bold text-lg mb-1 group-hover:text-emerald-600 transition-colors">
            {agent.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-2">{agent.title}</p>
          <div className="flex items-center justify-center mb-4">
            <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
            <span className="font-medium">{agent.rating}</span>
            <span className="text-muted-foreground text-sm ml-1">
              ({agent.reviews} reviews)
            </span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            {agent.location}
          </div>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {agent.bio}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {agent.specialties.map((specialty, index) => (
              <Badge key={index} variant="outline" className="rounded-full">
                {specialty}
              </Badge>
            ))}
          </div>
          <p className="text-sm font-medium mb-4">
            {agent.listings} Active Listings
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" size="sm" className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
