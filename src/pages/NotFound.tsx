import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { Heading, Paragraph } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | DwellVista"
        description="The page you are looking for does not exist. Please navigate back to our homepage."
        canonical="/404"
      />

      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-emerald-600 mb-4">404</h1>
          <Heading level={1} className="mb-4">
            Page Not Found
          </Heading>
          <Paragraph className="mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </Paragraph>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </>
  );
}
