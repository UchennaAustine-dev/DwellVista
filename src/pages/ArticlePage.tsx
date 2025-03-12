"use client";

"use client";

import type React from "react";

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  Share2Icon,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { articles, comments } from "../data/articleData";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";
import {
  ArticleTitle,
  SectionTitle,
  Paragraph,
  Quote,
} from "../components/ui/typography";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import ReadingProgress from "../components/ReadingProgress";
import SEO from "@/components/SEO";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import ScrollToTop from "@/components/ScrollToTop";
import TableOfContents from "../components/TableOfContents";
import { useEffect, useState } from "react";
import RecommendedArticles from "../components/RecommendedArticles";
import PrintButton from "../components/PrintButton";
import "../article-page-print.css";

const ArticleShare = ({ title, url }: { title: string; url: string }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: url,
        })
        .then(() => {
          console.log("Successful share");
        })
        .catch((error) => {
          console.log("Error sharing", error);
        });
    } else {
      alert("Web Share API not supported");
    }
  };

  return (
    <Button variant="outline" onClick={handleShare}>
      <Share2Icon className="mr-2 h-4 w-4" />
      Share
    </Button>
  );
};

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <div>Article not found</div>;

  const articleComments = comments.filter((c) => c.articleId === article.id);
  const relatedArticles = article.relatedArticles
    ? articles.filter((a) => article.relatedArticles?.includes(a.id))
    : [];

  // Format date for SEO
  const formatDateForSEO = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString();
  };

  // Create a description from the excerpt
  const seoDescription =
    article.excerpt ||
    `Read about ${article.title} in our detailed guide on ${article.category}.`;

  // Add after the like state
  const [commentText, setCommentText] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send this to your backend
      console.log({
        articleId: article.id,
        name: userName,
        email: userEmail,
        comment: commentText,
        saveInfo,
      });

      // Reset form or show success message
      if (!saveInfo) {
        setUserName("");
        setUserEmail("");
      }
      setCommentText("");
      setIsSubmitting(false);

      // You could also add the new comment to the list
      // setArticleComments([...articleComments, newComment]);
    }, 1000);
  };

  // Add after the handlePrint function

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <SEO
        title={`${article.title} | DwellVista`}
        description={seoDescription}
        canonical={`/article/${article.slug}`}
        ogImage={article.image}
        ogType="article"
        keywords={`${article.category.toLowerCase()}, interior design, real estate, architecture, home decor`}
        author={article.author.name}
        publishedTime={formatDateForSEO(article.date)}
        articleSection={article.category}
      />

      <ArticleJsonLd
        article={article}
        url={`https://dwellvista.site/article/${article.slug}`}
      />

      <ScrollToTop />
      <ReadingProgress />
      {/* Navigation Dots */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 space-y-2 hidden md:block">
        {article.content.sections.map((_, index) => (
          <a
            key={index}
            href={`#section-${index}`}
            className="block h-2 w-2 rounded-full bg-gray-300 hover:bg-emerald-600 transition-colors"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-2 text-sm text-emerald-600 mb-3 article-meta">
            <span className="uppercase font-medium">{article.category}</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              {article.date}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              {article.readTime || "5 min read"}
            </span>
          </div>

          <ArticleTitle className="mb-6 text-2xl sm:text-3xl md:text-4xl">
            {article.title}
          </ArticleTitle>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Avatar>
                <AvatarImage
                  src={article.author.avatar}
                  alt={article.author.name}
                />
                <AvatarFallback>{article.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{article.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {article.author.role || "Contributor"}
                </p>
              </div>
            </div>

            <div className="flex gap-3 w-full sm:w-auto justify-center sm:justify-end mt-4 sm:mt-0">
              <ArticleShare title={article.title} url={window.location.href} />
              <PrintButton />
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="w-full rounded-lg object-cover h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          />
        </motion.div>

        {/* Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Table of Contents - Only visible on desktop */}
            <div className="hidden lg:block mb-8">
              <TableOfContents
                sections={article.content.sections.map((section, index) => ({
                  title: section.title,
                  id: `section-${index}`,
                }))}
              />
            </div>

            {/* Mobile Table of Contents - Collapsible */}
            <div className="lg:hidden mb-6">
              <details className="bg-gray-50 rounded-lg">
                <summary className="p-4 font-serif text-lg font-bold cursor-pointer">
                  Table of Contents
                </summary>
                <div className="p-4 pt-0 border-t border-gray-200">
                  <nav className="space-y-2">
                    {article.content.sections.map((section, index) => (
                      <a
                        key={index}
                        href={`#section-${index}`}
                        className="block text-sm hover:text-emerald-600 transition-colors py-1"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </details>
            </div>

            {/* Article sections */}
            {article.content.sections.map((section, index) => (
              <motion.section
                key={index}
                id={`section-${index}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="mb-12 article-section"
              >
                <SectionTitle className="mb-6 text-xl sm:text-2xl">
                  {section.title}
                </SectionTitle>
                {section.image && (
                  <img
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    className="mb-6 w-full rounded-lg object-cover h-[200px] sm:h-[300px]"
                  />
                )}
                <Paragraph className="mb-6 text-base sm:text-lg whitespace-pre-line article-content">
                  {section.content}
                </Paragraph>
                {section.quote && (
                  <Quote
                    author={section.quote.author}
                    className="article-quote"
                  >
                    "{section.quote.text}"
                  </Quote>
                )}
              </motion.section>
            ))}

            <Separator className="my-8 sm:my-12" />

            {/* Tags */}
            <div className="mb-8 sm:mb-12">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags?.map((tag, index) => (
                  <Link key={index} to={`/tag/${tag.toLowerCase()}`}>
                    <Badge
                      variant="outline"
                      className="rounded-md hover:bg-emerald-50 transition-colors"
                    >
                      {tag}
                    </Badge>
                  </Link>
                )) || (
                  <>
                    <Badge
                      variant="outline"
                      className="rounded-md hover:bg-emerald-50 transition-colors"
                    >
                      Interior Design
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-md hover:bg-emerald-50 transition-colors"
                    >
                      Home Decor
                    </Badge>
                  </>
                )}
              </div>
            </div>

            {/* Comments Section */}
            <section className="mb-8 sm:mb-12 comments-section">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 font-serif">
                {articleComments.length} Comments
              </h3>
              <div className="space-y-6">
                {articleComments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-gray-50"
                  >
                    <div className="flex items-center sm:items-start gap-3 sm:gap-0">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={comment.author.avatar}
                          alt={comment.author.name}
                        />
                        <AvatarFallback>
                          {comment.author.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="sm:hidden">
                        <h4 className="font-medium text-sm">
                          {comment.author.name}
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          {comment.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="hidden sm:flex items-center gap-2">
                        <h4 className="font-medium">{comment.author.name}</h4>
                        <span className="text-sm text-muted-foreground">
                          {comment.date}
                        </span>
                      </div>
                      <p className="mt-2 text-muted-foreground">
                        {comment.content}
                      </p>
                      <div className="mt-2 flex gap-4">
                        <button className="text-xs text-emerald-600 hover:text-emerald-700">
                          Reply
                        </button>
                        <button className="text-xs text-muted-foreground hover:text-emerald-600">
                          Like
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Comment Form */}
            <section className="comment-form">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 font-serif">
                Leave a comment
              </h3>
              <form className="space-y-4" onSubmit={handleCommentSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="comment"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Comment
                  </label>
                  <Textarea
                    id="comment"
                    placeholder="Write your comment here..."
                    rows={6}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-start sm:items-center gap-2 mb-4">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="mt-1 sm:mt-0 rounded text-emerald-600"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                  />
                  <label htmlFor="save-info" className="text-sm">
                    Save my name and email for the next time I comment
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Posting..." : "Post Comment"}
                </Button>
              </form>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-2 mb-8 lg:mb-0 sidebar">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* About the Author */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4 font-serif">
                  About the Author
                </h3>
                <div className="flex flex-col items-center text-center mb-4">
                  <Avatar className="h-16 w-16 sm:h-20 sm:w-20 mb-3">
                    <AvatarImage
                      src={article.author.avatar}
                      alt={article.author.name}
                    />
                    <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <h4 className="font-medium">{article.author.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {article.author.role || "Contributor"}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {article.author.bio ||
                    "An experienced writer specializing in interior design and architecture, bringing fresh perspectives to modern living spaces."}
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full w-8 h-8 p-0"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full w-8 h-8 p-0"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full w-8 h-8 p-0"
                  >
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4 font-serif">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedArticles.slice(0, 3).map((related) => (
                    <Link
                      key={related.id}
                      to={`/article/${related.slug}`}
                      className="group block"
                    >
                      <div className="flex gap-3 items-start">
                        <div className="flex-shrink-0">
                          <img
                            src={related.image || "/placeholder.svg"}
                            alt={related.title}
                            className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm sm:text-base font-medium group-hover:text-emerald-600 transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {related.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-emerald-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 font-serif">Subscribe</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest articles delivered straight to your inbox
                </p>
                <div className="space-y-2">
                  <Input placeholder="Your email" className="bg-white" />
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-articles">
        <RecommendedArticles currentArticleId={article.id} />
      </div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-emerald-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-colors z-10 scroll-to-top"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </motion.div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Calendar,
//   User,
//   Clock,
//   MessageCircle,
//   Heading1,
//   Heading2,
//   Quote,
// } from "lucide-react";
// import ScrollToTop from "../components/ScrollToTop";
// import ReadingProgress from "../components/ReadingProgress";
// import ArticleShare from "../components/ArticleShare";
// import FeaturedAuthor from "../components/FeaturedAuthor";
// import ReadNext from "../components/ReadNext";
// import TableOfContents from "../components/TableOfContents";
// import ArticleRecommendations from "../components/ArticleRecommendations";
// import SEO from "../components/SEO";
// import ArticleJsonLd from "../components/ArticleJsonLd";

// import { articles, comments } from "../data/articleData";
// import type { Article, Comment } from "../types/article";
// import { Paragraph } from "@/components/ui/typography";
// import NewsletterSection from "@/components/home/NewsletterSection";

// export default function ArticlePage() {
//   const { slug } = useParams<{ slug: string }>();
//   const navigate = useNavigate();
//   const [article, setArticle] = useState<Article | null>(null);
//   const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
//   const [articleComments, setArticleComments] = useState<Comment[]>([]);
//   const [readingTime, setReadingTime] = useState<number>(0);
//   const [tableOfContents, setTableOfContents] = useState<
//     { title: string; id: string }[]
//   >([]);
//   const [nextArticle, setNextArticle] = useState<Article | null>(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const foundArticle = articles.find((article) => article.slug === slug);

//     if (foundArticle) {
//       setArticle(foundArticle);

//       // Calculate reading time (average reading speed: 200 words per minute)
//       let wordCount = 0;
//       foundArticle.content.sections.forEach((section) => {
//         wordCount += section.content.split(" ").length;
//         if (section.quote) {
//           wordCount += section.quote.text.split(" ").length;
//         }
//       });
//       setReadingTime(Math.ceil(wordCount / 200));

//       // Get related articles
//       if (
//         foundArticle.relatedArticles &&
//         foundArticle.relatedArticles.length > 0
//       ) {
//         const related = articles.filter((a) =>
//           foundArticle.relatedArticles?.includes(a.id)
//         );
//         setRelatedArticles(related);
//       }

//       // Get comments for this article
//       const articleComments = comments.filter(
//         (comment) => comment.articleId === foundArticle.id
//       );
//       setArticleComments(articleComments);

//       // Generate table of contents
//       const toc = foundArticle.content.sections.map((section) => ({
//         title: section.title,
//         id: section.title.toLowerCase().replace(/\s+/g, "-"),
//       }));
//       setTableOfContents(toc);

//       // Get next article for "Read Next" component
//       const nextArticleId =
//         foundArticle.relatedArticles?.[0] ||
//         (foundArticle.id < articles.length ? foundArticle.id + 1 : 1);
//       const next = articles.find((a) => a.id === nextArticleId);
//       if (next) setNextArticle(next);
//     } else {
//       navigate("/not-found");
//     }
//   }, [slug, navigate]);

//   if (!article) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   // Format date for SEO
//   const formatDateForSEO = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toISOString();
//   };

//   // Create a description from the excerpt
//   const seoDescription =
//     article.excerpt ||
//     `Read about ${article.title} in our detailed guide on ${article.category}.`;

//   return (
//     <>
//       <SEO
//         title={`${article.title} | DwellVista`}
//         description={seoDescription}
//         canonical={`/article/${article.slug}`}
//         ogImage={article.image}
//         ogType="article"
//         keywords={`${article.category.toLowerCase()}, interior design, real estate, architecture, home decor`}
//         author={article.author.name}
//         publishedTime={formatDateForSEO(article.date)}
//         articleSection={article.category}
//       />

//       <ArticleJsonLd
//         article={article}
//         url={`https://dwellvista.com/article/${article.slug}`}
//       />

//       <ScrollToTop />
//       <ReadingProgress />

//       <main className="pt-24 pb-12">
//         <article className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium rounded-full mb-4">
//                 {article.category}
//               </span>

//               <Heading1 className="mb-4">{article.title}</Heading1>

//               <div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 mb-6 text-sm">
//                 <div className="flex items-center mr-6 mb-2">
//                   <User size={16} className="mr-2" />
//                   <span>{article.author.name}</span>
//                 </div>
//                 <div className="flex items-center mr-6 mb-2">
//                   <Calendar size={16} className="mr-2" />
//                   <span>{article.date}</span>
//                 </div>
//                 <div className="flex items-center mr-6 mb-2">
//                   <Clock size={16} className="mr-2" />
//                   <span>{readingTime} min read</span>
//                 </div>
//                 <div className="flex items-center mb-2">
//                   <MessageCircle size={16} className="mr-2" />
//                   <span>{articleComments.length} comments</span>
//                 </div>
//               </div>

//               <div className="aspect-[16/9] overflow-hidden rounded-xl mb-8">
//                 <img
//                   src={article.image || "/placeholder.svg"}
//                   alt={article.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <Paragraph className="text-lg mb-8 leading-relaxed">
//                 {article.excerpt}
//               </Paragraph>
//             </motion.div>

//             <div className="flex flex-col lg:flex-row gap-8">
//               <aside className="lg:w-1/4 order-2 lg:order-1">
//                 <div className="lg:sticky lg:top-24 space-y-8">
//                   <ArticleShare
//                     title={article.title}
//                     url={window.location.href}
//                   />

//                   <TableOfContents sections={tableOfContents} />

//                   <FeaturedAuthor
//                     name={article.author.name}
//                     avatar={article.author.avatar}
//                     bio={article.author.bio || ""}
//                     role={article.author.role || "Contributor"}
//                   />
//                 </div>
//               </aside>

//               <div className="lg:w-3/4 order-1 lg:order-2">
//                 {article.content.sections.map((section, index) => (
//                   <motion.section
//                     key={index}
//                     id={section.title.toLowerCase().replace(/\s+/g, "-")}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     viewport={{ once: true }}
//                     className="mb-10"
//                   >
//                     <Heading2 className="mb-6">{section.title}</Heading2>

//                     <Paragraph className="mb-6 leading-relaxed">
//                       {section.content}
//                     </Paragraph>

//                     {section.image && (
//                       <figure className="my-8">
//                         <div className="overflow-hidden rounded-lg">
//                           <img
//                             src={section.image || "/placeholder.svg"}
//                             alt={section.title}
//                             className="w-full h-auto"
//                           />
//                         </div>
//                         <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
//                           {section.title}
//                         </figcaption>
//                       </figure>
//                     )}

//                     {section.quote && (
//                       <Quote className="my-8">
//                         "{section.quote.text}"
//                         <footer className="mt-2 text-sm">
//                           — {section.quote.author}
//                         </footer>
//                       </Quote>
//                     )}
//                   </motion.section>
//                 ))}

//                 {/* Comments Section */}
//                 <section className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-800">
//                   <h3 className="font-serif text-2xl font-semibold mb-6">
//                     Comments ({articleComments.length})
//                   </h3>

//                   {articleComments.length > 0 ? (
//                     <div className="space-y-6">
//                       {articleComments.map((comment) => (
//                         <div
//                           key={comment.id}
//                           className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
//                         >
//                           <div className="flex items-start mb-3">
//                             <img
//                               src={comment.author.avatar || "/placeholder.svg"}
//                               alt={comment.author.name}
//                               className="w-10 h-10 rounded-full mr-3"
//                             />
//                             <div>
//                               <h4 className="font-medium">
//                                 {comment.author.name}
//                               </h4>
//                               <p className="text-sm text-gray-500 dark:text-gray-400">
//                                 {comment.date}
//                               </p>
//                             </div>
//                           </div>
//                           <p className="text-gray-700 dark:text-gray-300">
//                             {comment.content}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p className="text-gray-500 dark:text-gray-400">
//                       No comments yet. Be the first to share your thoughts!
//                     </p>
//                   )}

//                   {/* Comment Form */}
//                   <div className="mt-8">
//                     <h4 className="font-serif text-xl font-semibold mb-4">
//                       Leave a Comment
//                     </h4>
//                     <form className="space-y-4">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <label
//                             htmlFor="name"
//                             className="block text-sm font-medium mb-1"
//                           >
//                             Name
//                           </label>
//                           <input
//                             type="text"
//                             id="name"
//                             className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800"
//                             required
//                           />
//                         </div>
//                         <div>
//                           <label
//                             htmlFor="email"
//                             className="block text-sm font-medium mb-1"
//                           >
//                             Email
//                           </label>
//                           <input
//                             type="email"
//                             id="email"
//                             className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800"
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="comment"
//                           className="block text-sm font-medium mb-1"
//                         >
//                           Comment
//                         </label>
//                         <textarea
//                           id="comment"
//                           rows={4}
//                           className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800"
//                           required
//                         ></textarea>
//                       </div>
//                       <button
//                         type="submit"
//                         className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
//                       >
//                         Post Comment
//                       </button>
//                     </form>
//                   </div>
//                 </section>
//               </div>
//             </div>

//             {nextArticle && <ReadNext article={nextArticle} />}
//           </div>
//         </article>

//         <ArticleRecommendations
//           currentArticleId={article.id}
//           category={article.category}
//         />
//       </main>

//       <NewsletterSection />
//     </>
//   );
// }
