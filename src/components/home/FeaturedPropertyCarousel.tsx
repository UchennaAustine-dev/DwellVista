import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Map,
  BedDouble,
  Bath,
  Home,
  Maximize2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Heading, Text } from "../common/Typography";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  details: {
    beds: number;
    baths: number;
    area: string;
    type: string;
  };
  featured?: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Penthouse with City Views",
    location: "Manhattan, New York",
    price: "$4,250,000",
    image:
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    details: {
      beds: 3,
      baths: 3.5,
      area: "3,200 sqft",
      type: "Penthouse",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Modern Beachfront Villa",
    location: "Malibu, California",
    price: "$8,750,000",
    image:
      "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    details: {
      beds: 5,
      baths: 5.5,
      area: "6,500 sqft",
      type: "Villa",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Contemporary Urban Loft",
    location: "SoHo, New York",
    price: "$2,950,000",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    details: {
      beds: 2,
      baths: 2,
      area: "2,100 sqft",
      type: "Loft",
    },
    featured: true,
  },
];

export function FeaturedPropertyCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrent((current + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + properties.length) % properties.length);
  };

  // Auto advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => clearTimeout(timer);
  }, [current, isAutoPlaying]);

  // Pause auto-advance on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <Text
            variant="small"
            className="uppercase tracking-wider text-emerald-600 font-semibold mb-2"
          >
            Exclusive Listings
          </Text>
          <Heading level={2} className="mb-4 text-3xl md:text-4xl">
            Featured Properties
          </Heading>
          <Text
            variant="lead"
            className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base"
          >
            Explore our handpicked selection of exceptional properties, offering
            luxury, comfort, and exceptional investment potential.
          </Text>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-lg md:rounded-xl shadow-lg md:shadow-2xl">
            <div className="relative aspect-[4/3] md:aspect-[16/9] bg-gray-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={properties[current].image || "/placeholder.svg"}
                    alt={properties[current].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </motion.div>
              </AnimatePresence>

              {/* Property Info Box */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 shadow-md md:shadow-lg max-w-full md:max-w-2xl"
                  >
                    <div className="flex items-center text-emerald-600 text-xs md:text-sm font-medium mb-2">
                      <Map size={14} className="mr-2" />
                      {properties[current].location}
                    </div>
                    <Heading
                      level={3}
                      className="mb-2 text-lg md:text-2xl font-semibold"
                    >
                      {properties[current].title}
                    </Heading>
                    <div className="text-xl md:text-2xl font-semibold text-emerald-600 mb-4">
                      {properties[current].price}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4">
                      <div className="flex items-center">
                        <BedDouble size={16} className="mr-2 text-gray-500" />
                        <Text variant="small" className="text-xs md:text-sm">
                          {properties[current].details.beds} Beds
                        </Text>
                      </div>
                      <div className="flex items-center">
                        <Bath size={16} className="mr-2 text-gray-500" />
                        <Text variant="small" className="text-xs md:text-sm">
                          {properties[current].details.baths} Baths
                        </Text>
                      </div>
                      <div className="flex items-center">
                        <Maximize2 size={16} className="mr-2 text-gray-500" />
                        <Text variant="small" className="text-xs md:text-sm">
                          {properties[current].details.area}
                        </Text>
                      </div>
                      <div className="flex items-center">
                        <Home size={16} className="mr-2 text-gray-500" />
                        <Text variant="small" className="text-xs md:text-sm">
                          {properties[current].details.type}
                        </Text>
                      </div>
                    </div>

                    <Link
                      to="/properties"
                      className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg text-sm md:text-base font-medium transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between absolute top-1/2 left-2 right-2 md:left-4 md:right-4 -translate-y-1/2">
            <button
              onClick={(e) => {
                e.preventDefault();
                prevSlide();
              }}
              className="bg-white/80 hover:bg-white rounded-full p-1 md:p-2 shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Previous property"
            >
              <ChevronLeft size={20} className="text-gray-800" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                nextSlide();
              }}
              className="bg-white/80 hover:bg-white rounded-full p-1 md:p-2 shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Next property"
            >
              <ChevronRight size={20} className="text-gray-800" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center mt-4 space-x-2">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-emerald-600 w-6 md:w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Link
            to="/properties"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-sm md:text-base"
          >
            View All Properties
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
