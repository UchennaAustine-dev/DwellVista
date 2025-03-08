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
    slug: "what-to-expect-when-working-with-interior-designer",
    title: "What to Expect When Working with an Interior Designer",
    category: "Interior Design",
    date: "April 8, 2023",
    author: {
      name: "Sarah Anderson",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt:
      "Discover the essential aspects of working with an interior designer and how to make the most of this collaborative relationship.",
    featured: true,
    content: {
      sections: [
        {
          title: "Have realistic expectations",
          content: `Many homeowners will ask you this: is it worth it to hire a professional interior designer? Well, first things first: you have to be in it for the process. Expecting to change the design process from what it is – a process – to a quick fix will only lead to disappointment. The design process is different for each project, but here's what you can typically expect.
  
  Every interior designer is different. The best way to get a handle on an individual's budget and approach is by asking potential designers for their communication process. Some designers might want to work with you on a more hands-on basis, while others might prefer to present you with a finished product.`,
          image:
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Take the time to find the right fit",
          content: `Not all designers are created equal. Like all of us, each designer has his or her own unique personal style, values and business practices. To make sure your project is a success, it's important that you and your designer are on the same page when it comes to these key factors.
  
  The design world has become quite a consultative one. It's not so much about dictating according to rigid rules anymore, and it's all about the collaboration between designer and client. Your interior designer should learn more about your personal style and ask about your preferred aesthetics for your home.`,
          image:
            "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          quote: {
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            author: "Design Magazine",
          },
        },
        {
          title: "Final thoughts",
          content: `Your relationship with your interior designer matters. We take all of this to say that not all of them will be a perfect fit. But when you find the one that meshes well with your style and personality, hold onto them. The best designers will not only create a beautiful space for you but will also teach you about design along the way.
  
  Remember, the goal is to create a space that reflects your personality and meets your needs. A good designer will help you achieve that while respecting your budget and timeline.`,
        },
      ],
    },
    relatedArticles: [2, 3, 5],
  },
  {
    id: 2,
    slug: "private-contemporary-home-balancing-openness",
    title: "Private Contemporary Home Balancing Openness",
    category: "Architecture",
    date: "April 5, 2023",
    author: {
      name: "Michael Roberts",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt:
      "Explore this stunning contemporary home that perfectly balances privacy and openness with innovative architectural solutions.",
    featured: false,
    content: {
      sections: [
        {
          title: "Innovative Design Approach",
          content: `This contemporary home showcases a masterful balance between privacy and openness. The architects have created a space that feels expansive and connected to the outdoors while maintaining the residents' privacy from neighboring properties.
  
  The home features large glass walls that open to private courtyards and gardens, allowing natural light to flood the interior spaces while keeping the living areas shielded from public view.`,
          image:
            "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Material Selection",
          content: `The materials chosen for this project play a crucial role in achieving its aesthetic and functional goals. A combination of concrete, wood, and glass creates a warm yet modern atmosphere.
  
  The concrete elements provide privacy and thermal mass, while the wooden details add warmth and texture. Floor-to-ceiling glass connects the interior spaces with carefully designed exterior areas.`,
          image:
            "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Indoor-Outdoor Living",
          content: `Perhaps the most striking feature of this home is how it blurs the line between indoor and outdoor living. Sliding glass doors disappear into wall pockets, creating seamless transitions between the main living areas and the exterior spaces.
  
  The landscape design complements the architecture, with native plantings that provide additional privacy screening while enhancing the connection to nature.`,
        },
      ],
    },
    relatedArticles: [1, 3, 4],
  },
  {
    id: 3,
    slug: "stylish-modern-ranch-exuding-welcoming-feel",
    title: "Stylish Modern Ranch Exuding a Welcoming Feel",
    category: "Interior Design",
    date: "April 3, 2023",
    author: {
      name: "Emma Wilson",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt:
      "This modern ranch renovation combines contemporary design with rustic elements to create a stylish yet comfortable living space.",
    featured: false,
    content: {
      sections: [
        {
          title: "Reimagining the Ranch Style",
          content: `This project breathes new life into the classic ranch home style by incorporating modern design elements while honoring the original architecture. The renovation opened up the floor plan to create a more spacious and light-filled environment.
  
  The designers maintained the characteristic horizontal lines and connection to the outdoors that define ranch homes, while updating the materials and finishes for contemporary living.`,
          image:
            "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Warm Minimalism",
          content: `The interior design follows a "warm minimalist" approach, combining clean lines and uncluttered spaces with natural materials and textures. This creates a space that feels both sophisticated and inviting.
  
  Wood tones, natural stone, and a neutral color palette form the foundation of the design, with strategic pops of color through artwork and accessories.`,
          image:
            "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          quote: {
            text: "The best designs are those that feel effortless and make you want to stay a while.",
            author: "Emma Wilson, Interior Designer",
          },
        },
        {
          title: "Functional Comfort",
          content: `Beyond aesthetics, this home was designed with everyday living in mind. Comfortable seating, durable materials, and thoughtful storage solutions ensure that the space is as functional as it is beautiful.
  
  The open kitchen features a large island that serves as both a workspace and gathering spot, while built-in cabinetry throughout the home minimizes clutter.`,
        },
      ],
    },
    relatedArticles: [1, 2, 5],
  },
  {
    id: 4,
    slug: "urban-apartment-maximizing-small-spaces",
    title: "Urban Apartment Maximizing Small Spaces",
    category: "Interior Design",
    date: "March 28, 2023",
    author: {
      name: "David Chen",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    image:
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt:
      "Learn clever design strategies to maximize functionality and style in compact urban apartments.",
    featured: false,
    content: {
      sections: [
        {
          title: "Smart Space Planning",
          content: `In urban environments where square footage comes at a premium, thoughtful space planning is essential. This apartment demonstrates how strategic furniture placement and room layouts can make a small space feel much larger.
  
  The designers employed the concept of "zones" rather than traditional rooms, creating multi-functional areas that can adapt to different needs throughout the day.`,
          image:
            "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Multi-functional Furniture",
          content: `Custom and convertible furniture pieces play a starring role in this apartment. A sofa transforms into a guest bed, a dining table doubles as a work surface, and built-in storage is integrated throughout to maximize every square inch.
  
  These versatile elements allow the residents to enjoy all the functions of a larger home without sacrificing style or comfort.`,
          image:
            "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Visual Tricks",
          content: `Several visual techniques were employed to enhance the sense of space. Light colors reflect more light, making rooms feel airier, while strategic mirror placement visually doubles the space.
  
  Floor-to-ceiling curtains draw the eye upward, creating the illusion of higher ceilings, and consistent flooring throughout creates flow between areas.`,
        },
      ],
    },
    relatedArticles: [1, 3, 5],
  },
  {
    id: 5,
    slug: "sustainable-home-design-eco-friendly-living",
    title: "Sustainable Home Design for Eco-Friendly Living",
    category: "Architecture",
    date: "March 25, 2023",
    author: {
      name: "Olivia Green",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    image:
      "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt:
      "Discover how sustainable architecture and eco-friendly materials can create beautiful, environmentally responsible homes.",
    featured: false,
    content: {
      sections: [
        {
          title: "Passive Design Principles",
          content: `This home exemplifies how passive design principles can reduce energy consumption while creating comfortable living spaces. The orientation maximizes solar gain in winter and minimizes it in summer, while thermal mass elements store and release heat as needed.
  
  Cross-ventilation and strategic window placement eliminate the need for air conditioning during moderate weather, significantly reducing the home's energy footprint.`,
          image:
            "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Sustainable Materials",
          content: `Every material in this home was selected with sustainability in mind. Reclaimed wood, recycled metal, and locally sourced stone reduce the environmental impact while adding character and warmth to the space.
  
  Low-VOC paints and finishes, natural fiber textiles, and formaldehyde-free cabinetry ensure healthy indoor air quality for the residents.`,
          image:
            "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          quote: {
            text: "Sustainable design isn't about sacrifice—it's about creating homes that are healthier, more comfortable, and more connected to nature.",
            author: "Sustainable Home Magazine",
          },
        },
        {
          title: "Energy and Water Systems",
          content: `Beyond the visible design elements, this home incorporates advanced systems for energy and water efficiency. Solar panels generate electricity, while a rainwater harvesting system supplies water for irrigation and toilets.
  
  Energy-efficient appliances, LED lighting, and smart home technology further reduce resource consumption, making this a truly forward-thinking residence.`,
        },
      ],
    },
    relatedArticles: [2, 3, 4],
  },
  {
    id: 6,
    slug: "luxury-bathroom-renovation-spa-inspired-retreat",
    title: "Luxury Bathroom Renovation: Spa-Inspired Retreat",
    category: "Interior Design",
    date: "March 20, 2023",
    author: {
      name: "James Wilson",
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    image:
      "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt:
      "Transform your bathroom into a luxurious spa-like retreat with these design ideas and renovation tips.",
    featured: false,
    content: {
      sections: [
        {
          title: "Creating a Sanctuary",
          content: `This bathroom renovation transforms an outdated space into a personal sanctuary inspired by high-end spas. The design focuses on creating an atmosphere of calm and relaxation through careful material selection and thoughtful layout.
  
  Natural stone, warm wood tones, and a neutral color palette establish a serene environment that feels removed from the stresses of everyday life.`,
          image:
            "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Luxury Fixtures and Features",
          content: `High-quality fixtures and special features elevate the functionality and experience of this bathroom. A freestanding soaking tub serves as a sculptural focal point, while a walk-in shower with multiple showerheads offers a customizable bathing experience.
  
  Heated floors, towel warmers, and integrated audio systems add layers of comfort and luxury that transform routine activities into indulgent rituals.`,
          image:
            "https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Thoughtful Details",
          content: `The success of this space lies in its careful attention to detail. Recessed lighting is supplemented by sconces that provide flattering light for grooming tasks. Storage is concealed yet accessible, keeping necessities at hand while maintaining the clean aesthetic.
  
  Natural elements like plants and stones connect the space to nature, enhancing the sense of tranquility and creating a truly restorative environment.`,
        },
      ],
    },
    relatedArticles: [1, 3, 4],
  },
  {
    id: 7,
    slug: "biophilic-design-bringing-nature-indoors",
    title: "Biophilic Design: Bringing Nature Indoors",
    category: "Interior Design",
    date: "March 15, 2023",
    author: {
      name: "Natalie Parks",
      avatar:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    image:
      "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt:
      "Explore how biophilic design principles can transform your home into a nature-inspired sanctuary that promotes wellbeing.",
    featured: false,
    content: {
      sections: [
        {
          title: "Understanding Biophilic Design",
          content: `Biophilic design is more than just adding plants to your space—it's a comprehensive approach that incorporates natural elements, patterns, and experiences into the built environment. This design philosophy recognizes our innate connection to nature and seeks to strengthen it through our surroundings.
  
  Research has shown that biophilic environments can reduce stress, enhance creativity, improve cognitive function, and accelerate healing. In our increasingly urban and digital world, these connections to nature are more important than ever.`,
          image:
            "https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Key Elements of Biophilic Design",
          content: `Successful biophilic design incorporates direct experiences of nature (plants, water, natural light), indirect references to nature (natural materials, colors, shapes), and spatial experiences that evoke natural settings.
  
  This home masterfully integrates these elements through abundant natural light, indoor plants of varying scales, natural materials like wood and stone, and views to outdoor green spaces. Water features add both visual interest and soothing sounds.`,
          image:
            "https://images.pexels.com/photos/6444268/pexels-photo-6444268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          quote: {
            text: "We are drawn to spaces that reference the natural world because they speak to something deeply human in all of us.",
            author: "Biophilic Design Journal",
          },
        },
        {
          title: "Practical Applications",
          content: `You don't need to undertake a major renovation to incorporate biophilic principles into your home. Start with maximizing natural light by removing heavy window treatments. Add plants of varying sizes, from large floor plants to small tabletop varieties. Incorporate natural materials and textures through furniture, accessories, and textiles.
  
  Consider the sensory experience of your space—not just how it looks, but how it sounds, feels, and even smells. Natural scents, the sound of flowing water, and tactile natural materials all contribute to a fully biophilic environment.`,
        },
      ],
    },
    relatedArticles: [3, 5, 8],
  },
  {
    id: 8,
    slug: "mid-century-modern-revival-contemporary-twist",
    title: "Mid-Century Modern Revival with a Contemporary Twist",
    category: "Interior Design",
    date: "March 10, 2023",
    author: {
      name: "Thomas Wright",
      avatar:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    image:
      "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt:
      "See how this renovation honors mid-century design principles while incorporating contemporary elements for modern living.",
    featured: false,
    content: {
      sections: [
        {
          title: "Honoring a Classic Style",
          content: `Mid-century modern design continues to captivate homeowners with its clean lines, organic forms, and timeless appeal. This renovation project preserves the architectural integrity of a 1960s home while updating it for contemporary living.
  
  The designers maintained signature elements like the low-pitched roof, large windows, and open floor plan that define the mid-century aesthetic, while carefully introducing modern conveniences and materials.`,
          image:
            "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Balancing Old and New",
          content: `The challenge in any revival project is finding the right balance between preservation and innovation. Here, original features like terrazzo floors and wood paneling were restored rather than replaced, while the kitchen and bathrooms were completely reimagined with contemporary fixtures and finishes.
  
  Furniture selections include both vintage pieces and new designs that reference mid-century forms. This mix creates a space that feels authentic but not like a museum—a living, breathing home that honors its past while embracing the present.`,
          image:
            "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Color and Texture",
          content: `The color palette draws directly from the mid-century era, with warm woods, earthy tones, and strategic pops of color. Mustard yellow, olive green, and burnt orange appear as accents against neutral backgrounds, creating a scheme that feels both period-appropriate and fresh.
  
  Textures play an important role in adding depth and interest to the minimalist forms. Nubby textiles, smooth woods, and rough stone create tactile contrasts throughout the space, inviting touch and creating visual richness.`,
          quote: {
            text: "The best mid-century revivals don't just replicate the past—they reinterpret it through a contemporary lens.",
            author: "Architectural Digest",
          },
        },
      ],
    },
    relatedArticles: [1, 3, 6],
  },
  {
    id: 9,
    slug: "smart-home-technology-elegant-integration",
    title: "Smart Home Technology: Elegant Integration for Modern Living",
    category: "Technology",
    date: "March 5, 2023",
    author: {
      name: "Alex Rivera",
      avatar:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt:
      "Discover how to seamlessly integrate smart home technology without compromising on style and aesthetics.",
    featured: false,
    content: {
      sections: [
        {
          title: "The Invisible Revolution",
          content: `The most successful smart homes are those where the technology enhances daily life without calling attention to itself. This residence demonstrates how advanced systems can be integrated so seamlessly that they're virtually invisible until needed.
  
  Lighting, climate control, security, entertainment, and even window treatments are all controllable via discreet wall panels, voice commands, or smartphone apps. The technology serves the residents rather than dominating the aesthetic.`,
          image:
            "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Thoughtful Implementation",
          content: `The key to this home's successful integration of technology was planning the systems during the design phase rather than adding them as an afterthought. This allowed for proper wiring, optimal placement of components, and customization to the family's specific needs and routines.
  
  The homeowners worked with both their interior designer and a home automation specialist to ensure that technology enhanced rather than detracted from the design vision. Speakers are concealed within ceilings, televisions are hidden behind artwork, and charging stations are built into furniture.`,
          image:
            "https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Practical Benefits",
          content: `Beyond the convenience factor, this smart home system delivers tangible benefits in efficiency and sustainability. Automated climate control and lighting reduce energy consumption, while smart irrigation systems minimize water usage in the landscape.
  
  The technology also adapts to the family's changing needs. As children grow and routines shift, the system can be easily reprogrammed without requiring new hardware or disruptive installations. This future-proofing represents a thoughtful investment in the home's long-term functionality.`,
          quote: {
            text: "The best smart home is one that knows what you need before you do, yet never makes you feel like you're living in a spaceship.",
            author: "Smart Home Quarterly",
          },
        },
      ],
    },
    relatedArticles: [5, 6, 10],
  },
  {
    id: 10,
    slug: "kitchen-design-trends-functionality-meets-style",
    title: "Kitchen Design Trends: Where Functionality Meets Style",
    category: "Interior Design",
    date: "February 28, 2023",
    author: {
      name: "Julia Chen",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    image:
      "https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt:
      "Explore the latest kitchen design trends that balance beautiful aesthetics with practical functionality for the heart of your home.",
    featured: false,
    content: {
      sections: [
        {
          title: "The New Kitchen Philosophy",
          content: `Today's kitchens are no longer just utilitarian spaces hidden from view—they're the heart of the home, designed to be both showcased and used intensively. This shift has driven a new design philosophy that refuses to compromise between beauty and functionality.
  
  The most successful kitchen designs acknowledge how people actually live and cook, while still creating spaces that are visually stunning and consistent with the home's overall aesthetic. This kitchen exemplifies that balance, with its thoughtful layout and carefully selected materials.`,
          image:
            "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Material Evolution",
          content: `Kitchen materials have evolved significantly, with new options that offer both beauty and performance. Engineered surfaces that mimic natural stone provide the look of marble without the maintenance concerns. Wood elements add warmth but are sealed to withstand moisture and wear.
  
  This kitchen combines matte-finished cabinetry, which resists fingerprints, with quartzite countertops that offer marble-like veining with superior durability. Brass fixtures have been treated to develop a living patina over time, adding character and depth to the space.`,
          image:
            "https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          title: "Thoughtful Details",
          content: `What sets truly exceptional kitchens apart are the thoughtful details that enhance both form and function. Here, a pot-filler above the range eliminates the need to carry heavy water-filled pots across the kitchen. A dedicated coffee station keeps morning essentials contained and convenient.
  
  Storage is designed around specific items and activities rather than as generic cabinets. Drawers are sized for particular utensils, appliances are concealed in custom cabinets, and a walk-in pantry keeps bulk items accessible but out of sight. These personalized touches make the kitchen not just beautiful, but a joy to use.`,
          quote: {
            text: "The kitchen is where we deal with the elements of the universe. It is where we come to understand our past and ourselves.",
            author: "Laura Esquivel",
          },
        },
      ],
    },
    relatedArticles: [1, 3, 6],
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
