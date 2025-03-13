"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Bed, Bath, Square, Filter } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Select } from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Heading } from "../components/ui/typography";
import SEO from "../components/SEO";
import NewsletterSection from "../components/home/NewsletterSection";
import {
  TopBannerAd,
  InArticleAd,
  ParallaxAd,
  SidebarAd,
} from "../components/ads/AdLayout";

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    address: "123 Downtown Ave, New York, NY",
    price: 750000,
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
    featured: true,
  },
  {
    id: 2,
    title: "Spacious Family Home with Garden",
    address: "456 Suburban St, Los Angeles, CA",
    price: 1250000,
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
    featured: false,
  },
  {
    id: 3,
    title: "Luxury Penthouse with Rooftop Terrace",
    address: "789 Skyline Blvd, Miami, FL",
    price: 2500000,
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3000,
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
    featured: true,
  },
  {
    id: 4,
    title: "Cozy Studio in Historic District",
    address: "101 Heritage Lane, Boston, MA",
    price: 450000,
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
    featured: false,
  },
  {
    id: 5,
    title: "Waterfront Villa with Private Dock",
    address: "202 Lakeside Dr, Seattle, WA",
    price: 3200000,
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    image:
      "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
    featured: true,
  },
  {
    id: 6,
    title: "Contemporary Townhouse Near Park",
    address: "303 Parkview Rd, Chicago, IL",
    price: 850000,
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1800,
    image:
      "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
    featured: false,
  },
];

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [propertyType, setPropertyType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  // Filter properties based on search and filters
  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesType =
      propertyType === "All" || property.type === propertyType;

    return matchesSearch && matchesPrice && matchesType;
  });

  // Format price as currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <SEO
        title="Properties | DwellVista"
        description="Browse our curated selection of premium properties for sale and rent. Find your dream home today."
        canonical="/properties"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24"
      >
        <div className="container mx-auto px-4 py-8">
          <Heading level={1} className="mb-8">
            Find Your Dream Property
          </Heading>

          {/* Top Banner Ad */}
          <TopBannerAd />

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by location, property name..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Property Type
                    </label>
                    <Select
                      value={propertyType}
                      onValueChange={setPropertyType}
                    >
                      <option value="All">All Types</option>
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Villa">Villa</option>
                      <option value="Townhouse">Townhouse</option>
                      <option value="Studio">Studio</option>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Price Range: {formatPrice(priceRange[0])} -{" "}
                      {formatPrice(priceRange[1])}
                    </label>
                    <Slider
                      min={0}
                      max={5000000}
                      step={50000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mt-6"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* In-Article Ad */}
          <InArticleAd />

          {/* Featured Properties */}
          {filteredProperties.some((p) => p.featured) && (
            <div className="mb-12">
              <Heading level={3} className="mb-6">
                Featured Properties
              </Heading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProperties
                      .filter((property) => property.featured)
                      .slice(0, 2)
                      .map((property) => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                  </div>
                </div>
                <div>
                  <SidebarAd />
                </div>
              </div>
            </div>
          )}

          {/* Parallax Ad */}
          <ParallaxAd />

          {/* All Properties */}
          <div>
            <Heading level={3} className="mb-6">
              All Properties
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProperties.map((property, index) => (
                <>
                  <PropertyCard key={property.id} property={property} />
                  {/* Add InArticleAd after every 3 properties */}
                  {(index + 1) % 3 === 0 &&
                    index !== filteredProperties.length - 1 && (
                      <div className="col-span-1 md:col-span-3">
                        <InArticleAd />
                      </div>
                    )}
                </>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No properties match your search criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setPriceRange([0, 5000000]);
                    setPropertyType("All");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>

        <NewsletterSection />
      </motion.div>
    </>
  );
}

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    address: string;
    price: number;
    type: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    image: string;
    featured: boolean;
  };
}

function PropertyCard({ property }: PropertyCardProps) {
  // Format price as currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {property.featured && (
          <Badge className="absolute top-3 left-3 bg-emerald-600">
            Featured
          </Badge>
        )}
        <Badge variant="outline" className="absolute top-3 right-3 bg-white">
          {property.type}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1 group-hover:text-emerald-600 transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          {property.address}
        </div>
        <p className="text-xl font-bold text-emerald-600 mb-3">
          {formatPrice(property.price)}
        </p>
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            {property.area} ft²
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
