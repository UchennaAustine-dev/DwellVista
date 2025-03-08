import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Heading, Text } from "../common/Typography";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jessica Park",
    role: "Homeowner",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote:
      "DwellVista's design insights transformed our renovation project. Their articles on maximizing space in urban apartments were invaluable for our Brooklyn loft.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Interior Designer",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote:
      "As a design professional, I regularly recommend DwellVista to my clients. Their content balances current trends with timeless design principles.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Real Estate Investor",
    avatar:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150",
    quote:
      "The property insights from DwellVista have helped me make smarter investment decisions. Their analysis of emerging neighborhood trends is spot on.",
    rating: 4,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Text
            variant="small"
            className="uppercase tracking-wider text-emerald-600 font-semibold mb-2"
          >
            Testimonials
          </Text>
          <Heading level={2} className="mb-4">
            What Our Readers Say
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto text-gray-600">
            Discover how DwellVista has inspired and informed our community of
            design enthusiasts and property owners.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-md relative"
            >
              <div className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-md">
                <Quote size={24} className="text-emerald-400" />
              </div>

              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <Text className="font-semibold">{testimonial.name}</Text>
                  <Text variant="small" className="text-gray-600">
                    {testimonial.role}
                  </Text>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Text>{testimonial.quote}</Text>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
