import { motion } from "framer-motion";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react";
import { Heading, Text } from "../common/Typography";

const stats = [
  {
    icon: Users,
    value: "250K+",
    label: "Monthly Readers",
    description: "Passionate about design & real estate",
  },
  {
    icon: BookOpen,
    value: "1,200+",
    label: "Articles Published",
    description: "Covering all aspects of property & design",
  },
  {
    icon: Award,
    value: "15+",
    label: "Design Awards",
    description: "Recognition for editorial excellence",
  },
  {
    icon: TrendingUp,
    value: "92%",
    label: "Reader Satisfaction",
    description: "Based on our annual reader survey",
  },
];

export function StatisticsSection() {
  return (
    <section className="py-20 bg-emerald-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Text
            variant="small"
            className="uppercase tracking-wider text-emerald-300 font-semibold mb-2"
          >
            Our Impact
          </Text>
          <Heading level={2} className="mb-4 text-white">
            DwellVista By The Numbers
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto text-emerald-100">
            Join our growing community of design enthusiasts and property
            investors.
          </Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-emerald-800 rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-700 rounded-full mb-4">
                <stat.icon size={24} className="text-emerald-300" />
              </div>
              <div className="font-serif text-4xl font-bold mb-2 text-white">
                {stat.value}
              </div>
              <Text className="font-medium text-lg mb-1 text-emerald-200">
                {stat.label}
              </Text>
              <Text variant="small" className="text-emerald-300">
                {stat.description}
              </Text>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
