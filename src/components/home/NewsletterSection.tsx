// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, CheckCircle } from "lucide-react";
// import { Heading, Text } from "../common/Typography";

// export function NewsletterSection() {
//   const [email, setEmail] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulate form submission
//     setTimeout(() => {
//       setIsLoading(false);
//       setIsSubmitted(true);
//       setEmail("");
//     }, 1500);
//   };

//   return (
//     <section className="bg-emerald-50 py-16 px-4 md:py-24">
//       <div className="container mx-auto max-w-4xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden"
//         >
//           {/* Decorative element */}
//           <div className="absolute -top-14 -right-14 w-48 h-48 bg-emerald-100 rounded-full opacity-50" />
//           <div className="absolute -bottom-14 -left-14 w-36 h-36 bg-emerald-100 rounded-full opacity-50" />

//           <div className="relative z-10">
//             <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
//               <div className="md:max-w-md">
//                 <Heading level={2} className="mb-4">
//                   Join Our Newsletter
//                 </Heading>
//                 <Text variant="lead" className="mb-6 text-gray-600">
//                   Subscribe to receive inspiration, ideas, and news in your
//                   inbox
//                 </Text>

//                 {/* Benefit points */}
//                 <div className="mb-8 space-y-3">
//                   <div className="flex items-start space-x-3">
//                     <span className="bg-emerald-100 text-emerald-600 rounded-full p-1 mt-0.5">
//                       <CheckCircle size={16} />
//                     </span>
//                     <Text variant="small" className="text-gray-600">
//                       Exclusive interior design tips and trends
//                     </Text>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <span className="bg-emerald-100 text-emerald-600 rounded-full p-1 mt-0.5">
//                       <CheckCircle size={16} />
//                     </span>
//                     <Text variant="small" className="text-gray-600">
//                       Early access to new articles
//                     </Text>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <span className="bg-emerald-100 text-emerald-600 rounded-full p-1 mt-0.5">
//                       <CheckCircle size={16} />
//                     </span>
//                     <Text variant="small" className="text-gray-600">
//                       Free resources and design guides
//                     </Text>
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full md:w-auto md:min-w-[280px]">
//                 {isSubmitted ? (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="bg-emerald-50 p-6 rounded-lg text-center"
//                   >
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3">
//                       <CheckCircle className="h-6 w-6 text-emerald-600" />
//                     </div>
//                     <Text className="font-medium">
//                       Thank you for subscribing!
//                     </Text>
//                     <Text variant="small" className="text-gray-600 mt-1">
//                       We've sent a confirmation to your email
//                     </Text>
//                   </motion.div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="relative">
//                       <Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                       <input
//                         type="email"
//                         placeholder="Your email address"
//                         className="w-full px-10 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       disabled={isLoading}
//                       className={`w-full flex items-center justify-center py-3 rounded-md shadow-sm text-white font-sans font-medium
//                         ${
//                           isLoading
//                             ? "bg-emerald-400"
//                             : "bg-emerald-600 hover:bg-emerald-700"
//                         }
//                         transition-colors duration-200`}
//                     >
//                       {isLoading ? (
//                         <svg
//                           className="animate-spin h-5 w-5 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                       ) : (
//                         "Subscribe Now"
//                       )}
//                     </button>
//                     <Text variant="small" className="text-gray-400 text-center">
//                       We respect your privacy. Unsubscribe at any time.
//                     </Text>
//                   </form>
//                 )}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function NewsletterSection() {
  return (
    <section className="bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center py-20 relative">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-xl text-white text-center"
        >
          <h2 className="mb-3 text-4xl font-bold font-serif">
            Stay Up to Date
          </h2>
          <p className="mb-8 text-gray-200 text-lg">
            Subscribe to our newsletter to receive our weekly feed of property
            insights and design inspiration
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Enter your email..."
              className="bg-white/90 h-12 text-black"
            />
            <Button className="bg-emerald-600 hover:bg-emerald-700 h-12 px-8 sm:whitespace-nowrap">
              SUBSCRIBE NOW
            </Button>
          </div>
          <p className="mt-4 text-xs text-gray-300">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
