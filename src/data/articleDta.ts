import type { Article, Comment } from "../types/article";

export const articles: Article[] = [
  {
    id: 1,
    slug: "what-to-expect-from-interior-design-trends-2025",
    title: "What to Expect from Interior Design Trends in 2025",
    category: "Interior Design",
    date: "March 8, 2025",
    author: {
      name: "Sarah Anderson",
      avatar:
        "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    image:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Explore the exciting interior design trends of 2025, from minimalist coziness to bold colors and sustainable living, and discover how these trends can transform your home into a stylish and functional haven.",
    content: {
      sections: [
        {
          title: "Minimalist Coziness",
          content: `In 2025, minimalist design is evolving with a cozy twist. Japandi, a blend of Japanese and Scandinavian aesthetics, emphasizes natural materials, neutral tones, and soft textiles. This style creates a serene and inviting environment perfect for promoting well-being.`,
          image:
            "https://images.pexels.com/photos/3779793/pexels-photo-3779793.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
        {
          title: "Textured Walls and Ceilings",
          content: `Textured walls and ceilings are becoming a focal point in 2025. Techniques like wood paneling and decorative plaster finishes add depth and character to rooms, transforming flat surfaces into striking features.`,
          image:
            "https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
        {
          title: "Sustainability and Wellness",
          content: `Sustainability and wellness are at the forefront of 2025 interior design trends. Eco-friendly materials, energy-efficient appliances, and dedicated wellness spaces are essential for creating homes that are both nurturing and environmentally conscious.`,
          image:
            "https://images.pexels.com/photos/7031900/pexels-photo-7031900.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
      ],
    },
    relatedArticles: [5, 6, 8],
  },
  {
    id: 5,
    slug: "2025-interior-design-trends-to-watch",
    title: "2025 Interior Design Trends to Watch: Sustainability and Wellness",
    category: "Interior Design",
    date: "February 10, 2025",
    author: {
      name: "Emily Thompson",
      avatar:
        "https://images.pexels.com/photos/3760599/pexels-photo-3760599.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    image:
      "https://images.pexels.com/photos/769729/pexels-photo-769729.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Explore the latest interior design trends for 2025, focusing on sustainability, wellness, and multifunctional spaces that redefine luxury living.",
    content: {
      sections: [
        {
          title: "Sustainability in Design",
          content: `In 2025, sustainability is at the forefront of interior design. Designers are focusing on eco-friendly materials, energy-efficient appliances, and repurposed items to reduce waste. This trend not only benefits the environment but also adds a unique character to homes. For instance, using reclaimed wood for furniture or incorporating vegan leather into upholstery can create a stylish yet sustainable space.`,
          image:
            "https://images.pexels.com/photos/4227400/pexels-photo-4227400.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
        {
          title: "Wellness Spaces",
          content: `With the growing emphasis on health and well-being, dedicated wellness spaces are becoming essential in home design. These areas can range from small meditation rooms to spacious spa-like bathrooms. Incorporating natural light, indoor plants, and calming colors can enhance relaxation and rejuvenation.`,
          image:
            "https://images.pexels.com/photos/631018/pexels-photo-631018.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
        {
          title: "Multifunctional Furniture",
          content: `Multifunctional furniture is another key trend in 2025. It combines style with functionality, allowing spaces to be both aesthetically pleasing and highly practical. For example, a storage ottoman can serve as both seating and storage, making it perfect for small apartments.`,
          image:
            "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
      ],
    },
    relatedArticles: [1, 3, 6],
  },
  {
    id: 6,
    slug: "spring-decor-trends-2025",
    title: "Spring Decor Trends 2025: Refreshing Your Home for the Season",
    category: "Home Decor",
    date: "March 3, 2025",
    author: {
      name: "Lily Brown",
      avatar:
        "https://images.pexels.com/photos/38554/girl-people-portrait-child-38554.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    image:
      "https://images.pexels.com/photos/3287009/pexels-photo-3287009.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Discover the top spring decor trends for 2025, from vibrant colors to organic textures, and learn how to refresh your home for the new season.",
    content: {
      sections: [
        {
          title: "Neutrals with a Pop of Color",
          content: `This spring, neutrals are getting a boost with pops of vibrant colors. Mixing bright hues with neutral backgrounds creates a sophisticated yet playful atmosphere. For example, adding a few lilac throw pillows to a beige sofa can instantly brighten up a room.`,
          image:
            "https://images.pexels.com/photos/4846110/pexels-photo-4846110.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
        {
          title: "Fluid Patterns",
          content: `Fluid patterns are making a comeback in 2025. These organic shapes and textures add depth and personality to spaces. Consider incorporating hand-formed ceramics or wavy patterned rugs to create a cozy and inviting environment.`,
          image:
            "https://images.pexels.com/photos/4144239/pexels-photo-4144239.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
        {
          title: "Outdoor Spaces",
          content: `Elevated outdoor spaces are also trending this spring. Creating cozy seating areas or outdoor kitchens can extend your living space and make it feel more expansive. Use weather-resistant furniture and plants to blend the indoors with the outdoors seamlessly.`,
          image:
            "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
      ],
    },
    relatedArticles: [2, 4, 5],
  },
  {
    id: 7,
    slug: "2025-real-estate-market-outlook",
    title: "2025 Real Estate Market Outlook: Trends and Predictions",
    category: "Real Estate",
    date: "January 15, 2025",
    author: {
      name: "Mark Davis",
      avatar:
        "https://images.pexels.com/photos/912274/pexels-photo-912274.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Explore the trends and predictions shaping the 2025 real estate market, from sustainable homes to evolving buyer preferences.",
    content: {
      sections: [
        {
          title: "Sustainable Homes",
          content: `Sustainable homes are becoming increasingly popular in the real estate market. Buyers are looking for properties with eco-friendly features such as solar panels, rainwater harvesting systems, and energy-efficient appliances. These features not only reduce environmental impact but also lower utility bills.`,
          image:
            "https://images.pexels.com/photos/414660/pexels-photo-414660.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
        {
          title: "Evolving Buyer Preferences",
          content: `Buyer preferences are shifting towards homes that offer a sense of community and wellness. Properties with integrated outdoor spaces, community gardens, or nearby parks are highly sought after. Additionally, smart home technology is becoming a must-have for many buyers, as it enhances convenience and security.`,
          image:
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
        {
          title: "Market Predictions",
          content: `Experts predict that the 2025 real estate market will see a rise in demand for multifamily homes and mixed-use developments. These properties offer a blend of residential and commercial spaces, catering to the growing need for community-driven living environments.`,
          image:
            "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
      ],
    },
    relatedArticles: [1, 3, 6],
  },
  {
    id: 8,
    slug: "interior-design-trends-for-apartments",
    title: "Interior Design Trends for Apartments in 2025",
    category: "Interior Design",
    date: "February 20, 2025",
    author: {
      name: "Jessica Lee",
      avatar:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    image:
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Discover the latest interior design trends for apartments in 2025, focusing on space-saving solutions and stylish decor.",
    content: {
      sections: [
        {
          title: "Space-Saving Solutions",
          content: `In 2025, apartment design is all about maximizing space. Multifunctional furniture, such as storage beds and foldable tables, is essential for creating functional yet compact living areas. Additionally, using mirrors strategically can make rooms appear larger.`,
          image:
            "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
        {
          title: "Casually Comfortable Furniture",
          content: `Casually comfortable furniture is trending in apartment design. Oversized sofas, deep-seated chairs, and rounded edges are key elements that blend seamlessly with both modern and traditional decor. These pieces invite lounging and socializing, making apartments feel more welcoming.`,
          image:
            "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
        {
          title: "Decorative Accents",
          content: `Adding decorative accents like vintage pieces or personalized items can give apartments a unique character. Incorporating plants or artwork can also enhance the aesthetic appeal and create a cozy atmosphere.`,
          image:
            "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
      ],
    },
    relatedArticles: [2, 4, 5],
  },
  {
    id: 9,
    slug: "smart-home-technology-trends",
    title: "Smart Home Technology Trends for 2025",
    category: "Smart Homes",
    date: "January 25, 2025",
    author: {
      name: "David Kim",
      avatar:
        "https://images.pexels.com/photos/936099/pexels-photo-936099.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    image:
      "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt:
      "Explore the latest smart home technology trends for 2025, from discreet integration to energy-efficient innovations.",
    content: {
      sections: [
        {
          title: "Discreet Integration",
          content: `In 2025, smart home technology is becoming more discreetly integrated into homes. Devices like hidden speakers, wireless charging furniture, and voice-controlled lighting are designed to blend seamlessly with decor, enhancing functionality without compromising style.`,
          image:
            "https://images.pexels.com/photos/7424943/pexels-photo-7424943.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
        {
          title: "Energy Efficiency",
          content: `Energy-efficient features are a major focus in smart home technology. Innovations such as smart thermostats and energy-harvesting systems help reduce energy consumption and lower utility bills. These technologies not only save money but also contribute to a more sustainable living environment.`,
          image:
            "https://images.pexels.com/photos/3952065/pexels-photo-3952065.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
        {
          title: "Future Innovations",
          content: `Looking ahead, smart home technology is expected to incorporate more AI-driven solutions. These could include personalized lighting and temperature settings based on individual preferences, further enhancing the comfort and convenience of living spaces.`,
          image:
            "https://images.pexels.com/photos/7682824/pexels-photo-7682824.jpeg?auto=compress&cs=tinysrgb&w=500",
        },
      ],
    },
    relatedArticles: [1, 3, 6],
  },
];

export const comments: Comment[] = [
  {
    id: 1,
    articleId: 1,
    author: {
      name: "Scott Hamilton",
      avatar: "/placeholder.svg",
    },
    date: "April 10, 2023",
    content:
      "Great article! Working with a professional really helps get better outcomes with less stress. I can vouch for the importance of having a clear vision and good communication from the start.",
  },
  {
    id: 2,
    articleId: 1,
    author: {
      name: "Alyssa Parker",
      avatar: "/placeholder.svg",
    },
    date: "April 11, 2023",
    content:
      "This is exactly what I needed to read before starting my home renovation project. The tips about setting realistic expectations are particularly helpful.",
  },
];
