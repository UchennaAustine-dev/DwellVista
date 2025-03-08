import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Heading, Text } from "../common/Typography";

export function PremiumCtaSection() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-emerald-900 to-emerald-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side: Image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Luxury Interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8">
                <span className="inline-block bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                  Premium Content
                </span>
                <Heading level={3} className="text-white mb-2">
                  DwellVista Pro
                </Heading>
                <Text className="text-white/80">
                  Unlock exclusive content and premium features
                </Text>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="p-6 lg:p-10">
              <div className="mb-6">
                <Text
                  variant="small"
                  className="text-emerald-300 font-semibold uppercase tracking-wider mb-2"
                >
                  Become a Member
                </Text>
                <Heading level={3} className="text-white mb-4">
                  Take Your Design Journey to the Next Level
                </Heading>
                <Text className="text-emerald-100 mb-6">
                  Join our premium membership and get access to exclusive
                  content, expert consultations, and special events.
                </Text>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Exclusive design guides and case studies",
                  "Early access to new articles and features",
                  "Direct Q&A with interior design experts",
                  "Member-only webinars and events",
                  "Discounts on partner products and services",
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <Check
                      className="text-emerald-300 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <Text variant="small" className="text-white">
                      {benefit}
                    </Text>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-emerald-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  View Pricing
                </Link>
                <Link
                  to="/learn-more"
                  className="inline-flex items-center justify-center bg-emerald-800 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
