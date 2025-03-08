export interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: Author;
  image: string;
  excerpt: string;
  featured?: boolean;
  readTime?: string;
  views?: number;
  likes?: number;
  content: {
    intro?: string;
    sections: ArticleSection[];
    conclusion?: string;
  };
  tags?: string[];
  relatedArticles?: number[];
  metaDescription?: string;
}

export interface Author {
  id?: number;
  name: string;
  avatar: string;
  bio?: string;
  role?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface ArticleSection {
  title: string;
  content: string;
  image?: string;
  imageCaption?: string;
  quote?: {
    text: string;
    author?: string;
  };
  list?: string[];
  callout?: {
    type: "info" | "warning" | "tip";
    content: string;
  };
}

export interface Comment {
  id: number;
  articleId: number;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  content: string;
  likes?: number;
  replies?: Comment[];
}

export interface Category {
  name: string;
  count: number;
  description?: string;
  slug?: string;
}

export interface Tag {
  name: string;
  count: number;
  slug?: string;
}
