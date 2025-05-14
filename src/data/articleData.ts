import { Article, Comment, Category, Tag, Author } from "../types/article";

// Authors
export const authors: Author[] = [
  {
    id: 1,
    name: "Sarah Anderson",
    avatar: "/images/avatars/sarah.jpg",
    bio: "Interior designer with over 10 years of experience in residential and commercial spaces.",
    role: "Senior Interior Designer",
    social: {
      twitter: "sarahanderson",
      instagram: "sarah.designs",
      linkedin: "sarahandersondesign",
    },
  },
  {
    id: 2,
    name: "Michael Roberts",
    avatar: "/images/avatars/michael.jpg",
    bio: "Architect specializing in sustainable design and modern residential projects.",
    role: "Principal Architect",
    social: {
      twitter: "michaelroberts",
      instagram: "michael.architecture",
      linkedin: "michaelrobertsarch",
    },
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "/images/avatars/emma.jpg",
    bio: "Design writer and consultant with a passion for mid-century modern and Scandinavian aesthetics.",
    role: "Design Consultant",
    social: {
      twitter: "emmawilson",
      instagram: "emma.designlife",
      linkedin: "emmawilsondesign",
    },
  },
  {
    id: 4,
    name: "David Chen",
    avatar: "/images/avatars/david.jpg",
    bio: "Urban planner and designer focused on creating functional spaces for modern city living.",
    role: "Urban Design Specialist",
    social: {
      twitter: "davidchen",
      instagram: "david.urbandesign",
      linkedin: "davidchendesign",
    },
  },
  {
    id: 5,
    name: "Olivia Green",
    avatar: "/images/avatars/olivia.jpg",
    bio: "Sustainability expert and LEED-certified consultant for eco-friendly building practices.",
    role: "Sustainability Consultant",
    social: {
      twitter: "oliviagreen",
      instagram: "olivia.sustainable",
      linkedin: "oliviagreendesign",
    },
  },
  {
    id: 6,
    name: "James Wilson",
    avatar: "/images/avatars/james.jpg",
    bio: "Luxury interior designer specializing in high-end residential and hospitality projects.",
    role: "Luxury Design Specialist",
    social: {
      twitter: "jameswilson",
      instagram: "james.luxurydesign",
      linkedin: "jameswilsondesign",
    },
  },
];

export const articles: Article[] = [
  {
    id: 1,
    slug: "future-of-interior-design-collaboration",
    title: "The Future of Interior Design: Collaboration & Technology",
    category: "Interior Design",
    date: "May 10, 2025",
    author: {
      name: "Sophia Bennett",
      avatar:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=150&h=150&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1260&q=80",
    excerpt:
      "Explore how digital tools and client collaboration are reshaping the interior design process for a new era.",
    featured: true,
    content: {
      sections: [
        {
          title: "Embracing Digital Transformation",
          content: `The integration of digital platforms and virtual reality is revolutionizing how designers and clients communicate. Real-time 3D models and mood boards allow for instant feedback and collaborative decision-making, streamlining the design process and reducing costly revisions.`,
          image:
            "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1260&q=80",
        },
        {
          title: "Personalized Design Experiences",
          content: `Modern clients expect a tailored approach. Designers now use data-driven insights to understand client preferences, resulting in spaces that reflect individual lifestyles and tastes. This shift fosters a more engaging and satisfying design journey for both parties.`,
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1260&q=80",
          quote: {
            text: "Collaboration and technology are the twin engines driving the next wave of interior design innovation.",
            author: "Design Trends Journal",
          },
        },
        {
          title: "Final Thoughts",
          content: `As technology and creativity converge, the future of interior design will be defined by collaboration, personalization, and seamless digital experiences.`,
        },
      ],
    },
    relatedArticles: [2, 3, 5],
  },
  {
    id: 2,
    slug: "eco-conscious-modern-home",
    title: "Eco-Conscious Modern Home: Blending Nature & Technology",
    category: "Architecture",
    date: "May 7, 2025",
    author: {
      name: "Lucas Martin",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=150&h=150&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1260&q=80",
    excerpt:
      "Discover a home where sustainable materials and smart automation create a harmonious living environment.",
    featured: false,
    content: {
      sections: [
        {
          title: "Sustainable Architecture",
          content: `This home features a green roof, solar panels, and rainwater harvesting systems, minimizing its environmental footprint. The use of reclaimed wood and low-VOC finishes ensures a healthy indoor atmosphere while celebrating natural textures.`,
          image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1260&q=80",
        },
        {
          title: "Smart Home Integration",
          content: `Advanced home automation systems manage lighting, temperature, and security, enhancing comfort and energy efficiency. Residents can monitor and adjust their home's performance from anywhere, making sustainable living effortless.`,
          image:
            "https://images.unsplash.com/photo-1503389152951-9c3d8b6e9a2f?auto=format&fit=crop&w=1260&q=80",
        },
        {
          title: "Biophilic Design",
          content: `Large windows and indoor gardens create a strong connection to nature, promoting wellbeing and tranquility. The open-plan layout maximizes natural light and encourages a seamless flow between indoor and outdoor spaces.`,
          image:
            "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=1260&q=80",
        },
      ],
    },
    relatedArticles: [1, 3, 5],
  },
  {
    id: 3,
    slug: "urban-loft-maximizing-light-space",
    title: "Urban Loft: Maximizing Light and Space",
    category: "Interior Design",
    date: "May 3, 2025",
    author: {
      name: "Maya Lee",
      avatar:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=150&h=150&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1260&q=80",
    excerpt:
      "See how clever design transforms a compact loft into a bright, functional home in the heart of the city.",
    featured: false,
    content: {
      sections: [
        {
          title: "Open-Plan Living",
          content: `Removing interior walls and using glass partitions creates a sense of openness and flexibility. Multi-functional furniture and built-in storage keep the space clutter-free and adaptable to changing needs.`,
          image:
            "https://images.unsplash.com/photo-1505691723518-41cb85eea27e?auto=format&fit=crop&w=1260&q=80",
        },
        {
          title: "Natural Light Strategies",
          content: `Floor-to-ceiling windows and strategically placed mirrors amplify sunlight, making the loft feel larger and more inviting. Light, neutral finishes further enhance the airy atmosphere.`,
          image:
            "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=1260&q=80",
        },
        {
          title: "Smart Storage Solutions",
          content: `Custom cabinetry and hidden compartments maximize every inch of space, proving that small homes can be both beautiful and practical.`,
        },
      ],
    },
    relatedArticles: [1, 2, 4],
  },
  {
    id: 4,
    slug: "minimalist-bathroom-sanctuary",
    title: "Minimalist Bathroom Sanctuary",
    category: "Interior Design",
    date: "April 28, 2025",
    author: {
      name: "Elena Novak",
      avatar:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=150&h=150&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1260&q=80",
    excerpt:
      "Transform your bathroom into a serene retreat with minimalist design and spa-inspired features.",
    featured: false,
    content: {
      sections: [
        {
          title: "Simplicity and Function",
          content: `A monochrome palette, floating vanities, and frameless glass showers create a calm, uncluttered environment. Every element is chosen for both beauty and utility.`,
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1260&q=80",
        },
        {
          title: "Luxury Touches",
          content: `Heated floors, rainfall showerheads, and natural stone finishes elevate the experience, turning everyday routines into moments of relaxation.`,
          image:
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1260&q=80",
        },
      ],
    },
    relatedArticles: [3, 5, 6],
  },
  {
    id: 5,
    slug: "sustainable-design-trends-2025",
    title: "Sustainable Design Trends for 2025",
    category: "Architecture",
    date: "April 22, 2025",
    author: {
      name: "Noah Kim",
      avatar:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=150&h=150&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=1260&q=80",
    excerpt:
      "From biophilic elements to smart energy systems, see how 2025's design trends are shaping a greener future.",
    featured: false,
    content: {
      sections: [
        {
          title: "Biophilic Design",
          content: `Incorporating plants, natural materials, and daylight into interiors fosters wellbeing and reduces stress. Living walls and indoor gardens are becoming staples in both homes and offices.`,
          image:
            "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=1260&q=80",
        },
        {
          title: "Energy Efficiency",
          content: `Smart thermostats, LED lighting, and high-performance insulation are standard features in new builds, helping reduce environmental impact and utility costs.`,
          image:
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1260&q=80",
        },
      ],
    },
    relatedArticles: [2, 3, 4],
  },
  {
    id: 6,
    slug: "scandinavian-style-living-room",
    title: "Scandinavian Style: The Living Room Reimagined",
    category: "Interior Design",
    date: "April 18, 2025",
    author: {
      name: "Emma Lindberg",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=150&h=150&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1260&q=80",
    excerpt:
      "Discover how Scandinavian minimalism and cozy textures create the perfect modern living room.",
    featured: false,
    content: {
      sections: [
        {
          title: "Light, Airy Spaces",
          content: `White walls, pale woods, and large windows define the Scandinavian aesthetic, making rooms feel bright and welcoming year-round.`,
          image:
            "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1260&q=80",
        },
        {
          title: "Hygge Comfort",
          content: `Layered textiles, soft rugs, and warm lighting add comfort and personality, inviting relaxation and togetherness.`,
          image:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1260&q=80",
        },
      ],
    },
    relatedArticles: [3, 4, 7],
  },
  {
    id: 7,
    slug: "bold-color-palettes-2025",
    title: "Bold Color Palettes for 2025 Interiors",
    category: "Interior Design",
    date: "April 15, 2025",
    author: {
      name: "Carlos Rivera",
      avatar:
        "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=facearea&w=150&h=150&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1260&q=80",
    excerpt:
      "Vibrant hues and unexpected combinations are redefining the modern home. See what’s trending this year.",
    featured: false,
    content: {
      sections: [
        {
          title: "Expressive Walls",
          content: `Deep greens, terracotta, and cobalt blue are making a comeback, adding drama and personality to living spaces.`,
          image:
            "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1260&q=80",
        },
        {
          title: "Color Blocking",
          content: `Designers are using color blocking to define zones in open-plan homes, creating visual interest and playful energy.`,
          image:
            "https://images.unsplash.com/photo-1503389152951-9c3d8b6e9a2f?auto=format&fit=crop&w=1260&q=80",
        },
      ],
    },
    relatedArticles: [1, 6, 8],
  },
  {
    id: 8,
    slug: "outdoor-living-innovations",
    title: "Outdoor Living Innovations: Bringing Comfort Outside",
    category: "Architecture",
    date: "April 10, 2025",
    author: {
      name: "Grace Tan",
      avatar:
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=facearea&w=150&h=150&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1260&q=80",
    excerpt:
      "Explore the latest ideas for extending your living space outdoors with style and sustainability.",
    featured: false,
    content: {
      sections: [
        {
          title: "Versatile Furniture",
          content: `Modular seating, weatherproof fabrics, and retractable awnings make outdoor areas usable year-round.`,
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1260&q=80",
        },
        {
          title: "Eco-Friendly Features",
          content: `Solar lighting, rain gardens, and native plantings create beautiful, low-maintenance landscapes that support local wildlife.`,
          image:
            "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=1260&q=80",
        },
      ],
    },
    relatedArticles: [2, 5, 9],
  },
  {
    id: 9,
    slug: "home-office-design-evolution",
    title: "The Evolution of Home Office Design",
    category: "Interior Design",
    date: "April 7, 2025",
    author: {
      name: "David Okafor",
      avatar:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=150&h=150&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1260&q=80",
    excerpt:
      "Remote work is here to stay. See how designers are creating productive, inspiring home offices.",
    featured: false,
    content: {
      sections: [
        {
          title: "Flexible Workspaces",
          content: `From fold-away desks to acoustic panels, today’s home offices are adaptable and ergonomic, supporting focus and creativity.`,
          image:
            "https://images.unsplash.com/photo-1505691723518-41cb85eea27e?auto=format&fit=crop&w=1260&q=80",
        },
        {
          title: "Blending Work and Life",
          content: `Designers are incorporating biophilic elements and personal touches to make workspaces feel welcoming and balanced.`,
          image:
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1260&q=80",
        },
      ],
    },
    relatedArticles: [3, 7, 10],
  },
  {
    id: 10,
    slug: "kitchen-technology-trends",
    title: "Kitchen Technology Trends: The Smart Heart of the Home",
    category: "Architecture",
    date: "April 2, 2025",
    author: {
      name: "Olivia Rossi",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=150&h=150&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1260&q=80",
    excerpt:
      "Discover how smart appliances and sustainable materials are redefining the modern kitchen.",
    featured: false,
    content: {
      sections: [
        {
          title: "Connected Appliances",
          content: `Wi-Fi enabled ovens, fridges, and faucets make meal prep and cleanup more efficient than ever.`,
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1260&q=80",
        },
        {
          title: "Eco-Friendly Materials",
          content: `Recycled countertops, bamboo cabinetry, and energy-saving lighting are at the forefront of kitchen design for 2025.`,
          image:
            "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1260&q=80",
        },
      ],
    },
    relatedArticles: [2, 5, 9],
  },
];

export const categories: Category[] = [
  { name: "Interior Design", count: 4 },
  { name: "Architecture", count: 2 },
  { name: "Real Estate", count: 3 },
  { name: "Home Decor", count: 5 },
  { name: "Renovation", count: 2 },
];

export const tags: Tag[] = [
  { name: "MODERN", count: 10 },
  { name: "INTERIOR", count: 13 },
  { name: "LUXURY", count: 8 },
  { name: "MINIMALIST", count: 6 },
  { name: "ARCHITECTURE", count: 8 },
  { name: "SUSTAINABLE", count: 5 },
  { name: "URBAN", count: 4 },
  { name: "RENOVATION", count: 11 },
];

export const comments: Comment[] = [
  {
    id: 1,
    articleId: 1,
    author: {
      name: "Scott Hamilton",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
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
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    date: "April 11, 2023",
    content:
      "This is exactly what I needed to read before starting my home renovation project. The tips about setting realistic expectations are particularly helpful.",
  },
  {
    id: 3,
    articleId: 1,
    author: {
      name: "Emily Williams",
      avatar:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    date: "April 12, 2023",
    content:
      "I worked with an interior designer last year and it was such a great experience. Finding someone whose style matches yours is definitely key!",
  },
  {
    id: 4,
    articleId: 2,
    author: {
      name: "Robert Chen",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    date: "April 6, 2023",
    content:
      "The balance between privacy and openness in this home is remarkable. I appreciate how the architects used the landscape as part of the privacy solution.",
  },
  {
    id: 5,
    articleId: 3,
    author: {
      name: "Jessica Thompson",
      avatar:
        "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    date: "April 4, 2023",
    content:
      "I love the warm minimalist approach! It's exactly what I'm trying to achieve in my own home - that perfect balance between clean and cozy.",
  },
  {
    id: 6,
    articleId: 7,
    author: {
      name: "Marcus Johnson",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    date: "March 17, 2023",
    content:
      "I've been incorporating more plants into my home office and have noticed a real difference in my productivity and mood. The biophilic design principles really work!",
  },
];
