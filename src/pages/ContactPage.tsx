"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import { Heading1, Heading3, Paragraph } from "../components/ui/typography";
import SEO from "../components/SEO";
import NewsletterSection from "../components/home/NewsletterSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <SEO
        title="Contact Us | DwellVista"
        description="Get in touch with our team for inquiries about properties, design consultations, or partnership opportunities."
        canonical="/contact-us"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24"
      >
        <div className="container mx-auto px-4 py-8">
          <Heading1 className="mb-8">Contact Us</Heading1>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  For general inquiries
                </p>
                <a
                  href="mailto:info@dwellvista.com"
                  className="text-emerald-600 hover:underline"
                >
                  info@dwellvista.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Mon-Fri, 9am-5pm
                </p>
                <a
                  href="tel:+12125551234"
                  className="text-emerald-600 hover:underline"
                >
                  +1 (212) 555-1234
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Our main office
                </p>
                <address className="not-italic text-emerald-600">
                  123 Design Ave, New York, NY
                </address>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold mb-2">Office Hours</h3>
                <p className="text-muted-foreground text-sm mb-2">We're open</p>
                <p className="text-emerald-600">
                  Monday-Friday: 9am-5pm
                  <br />
                  Saturday: 10am-3pm
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <Heading3 className="mb-6">Send Us a Message</Heading3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mr-4">
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h4 className="font-bold text-lg">Message Sent!</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We've received your message and
                    will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-1"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700 w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            <div>
              <Heading3 className="mb-6">Our Location</Heading3>
              <div className="rounded-lg overflow-hidden h-[400px] bg-gray-100">
                {/* Replace with actual map component or iframe */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                  <MapPin className="h-12 w-12 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">
                    Map Placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <Heading3 className="mb-6 text-center">
              Frequently Asked Questions
            </Heading3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">
                  How can I schedule a property viewing?
                </h4>
                <Paragraph className="text-muted-foreground">
                  You can schedule a viewing by contacting our team through this
                  form, calling our office, or using the "Schedule Viewing"
                  button on any property listing.
                </Paragraph>
              </div>
              <div>
                <h4 className="font-bold mb-2">
                  Do you offer virtual consultations?
                </h4>
                <Paragraph className="text-muted-foreground">
                  Yes, we offer virtual consultations for clients who cannot
                  visit our office in person. Please mention your preference
                  when contacting us.
                </Paragraph>
              </div>
              <div>
                <h4 className="font-bold mb-2">
                  How quickly will I receive a response?
                </h4>
                <Paragraph className="text-muted-foreground">
                  We aim to respond to all inquiries within 24 business hours.
                  For urgent matters, please call our office directly.
                </Paragraph>
              </div>
              <div>
                <h4 className="font-bold mb-2">
                  Can I partner with DwellVista for my business?
                </h4>
                <Paragraph className="text-muted-foreground">
                  We're always open to exploring partnership opportunities.
                  Please contact us with details about your business and
                  proposed collaboration.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>

        <NewsletterSection />
      </motion.div>
    </>
  );
}

// Missing Check icon component
function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
