import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// Footer link data
const companyLinks = [
  { to: "/about", label: "About Us" },
  { to: "/agents", label: "Our Agents" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact Us" },
];

const actionLinks = [
  { to: "/properties/buy", label: "Buy Properties" },
  { to: "/properties/rent", label: "Rent Properties" },
  { to: "/properties/sell", label: "Sell Properties" },
];

const exploreLinks = [
  { to: "/properties/rent/homes", label: "Homes for Rent" },
  { to: "/properties/rent/apartments", label: "Apartments for Rent" },
  { to: "/properties/buy/homes", label: "Homes for Sale" },
  { to: "/properties/buy/apartments", label: "Apartments for Sale" },
  { to: "/resources", label: "Resources" },
];

const socialLinks = [
  { to: "#", icon: Facebook, label: "Facebook" },
  { to: "#", icon: Twitter, label: "Twitter" },
  { to: "#", icon: Instagram, label: "Instagram" },
  { to: "#", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="mb-6 inline-block text-2xl font-bold text-emerald-400 font-serif"
            >
              DwellVista
            </Link>
            <p className="mb-6 text-sm text-gray-400 leading-relaxed">
              Your premier destination for real estate insights, interior design
              inspiration, and architectural excellence. We bring you the latest
              trends and timeless classics.
            </p>
            <div className="mb-6 flex flex-col space-y-3 text-sm text-gray-400">
              <div className="flex items-center">
                <MapPin className="mr-3 h-4 w-4 text-emerald-400" />
                <span>90 Fifth Avenue, 3rd Floor, San Francisco, CA 94103</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-4 w-4 text-emerald-400" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-4 w-4 text-emerald-400" />
                <span>info@dwellvista.com</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h3 className="mb-6 font-semibold text-emerald-400 text-lg">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="hover:text-emerald-400 transition-colors inline-flex items-center"
                    >
                      <span className="mr-2">→</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 font-semibold text-emerald-400 text-lg">
                Actions
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {actionLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="hover:text-emerald-400 transition-colors inline-flex items-center"
                    >
                      <span className="mr-2">→</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-6 font-semibold text-emerald-400 text-lg">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter to receive the latest updates and
              exclusive offers.
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white h-12"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700 w-full h-12">
                Subscribe
              </Button>
            </div>
            <h3 className="mb-4 mt-8 font-semibold text-emerald-400 text-lg">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-emerald-400 transition-colors inline-flex items-center"
                  >
                    <span className="mr-2">→</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-gray-800" />

        <div className="flex flex-col justify-between gap-6 text-sm text-gray-400 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-4">
            <Link
              to="/terms"
              className="hover:text-emerald-400 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy"
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookies"
              className="hover:text-emerald-400 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
          <div>
            © {new Date().getFullYear()} DwellVista. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
