"use client";

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
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
import {
  CalendarIcon,
  ClockIcon,
  Share2Icon,
  BookmarkIcon,
  HeartIcon,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import ReadingProgress from "../components/ReadingProgress";
import RecommendedArticles from "../components/RecommendedArticles";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <div>Article not found</div>;

  const articleComments = comments.filter((c) => c.articleId === article.id);
  const relatedArticles = article.relatedArticles
    ? articles.filter((a) => article.relatedArticles?.includes(a.id))
    : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
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
          <div className="flex flex-wrap items-center gap-2 text-sm text-emerald-600 mb-3">
            <span className="uppercase font-medium">{article.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              {article.readTime || "5 min read"}
            </span>
          </div>

          <ArticleTitle className="mb-6 text-2xl sm:text-3xl md:text-4xl">
            {article.title}
          </ArticleTitle>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
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

            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2Icon className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <BookmarkIcon className="h-4 w-4" />
                <span className="sr-only">Save</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <HeartIcon className="h-4 w-4" />
                <span className="sr-only">Like</span>
              </Button>
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
          <div className="lg:col-span-3">
            {article.content.sections.map((section, index) => (
              <motion.section
                key={index}
                id={`section-${index}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="mb-12"
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
            <section className="mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 font-serif">
                {articleComments.length} Comments
              </h3>
              <div className="space-y-6">
                {articleComments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex gap-4 p-4 rounded-lg bg-gray-50"
                  >
                    <Avatar>
                      <AvatarImage
                        src={comment.author.avatar}
                        alt={comment.author.name}
                      />
                      <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
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
            <section>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 font-serif">
                Leave a comment
              </h3>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" />
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
                  />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="rounded text-emerald-600"
                  />
                  <label htmlFor="save-info" className="text-sm">
                    Save my name and email for the next time I comment
                  </label>
                </div>
                <Button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Post Comment
                </Button>
              </form>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
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
              <div>
                <h3 className="text-lg font-bold mb-4 font-serif">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedArticles.slice(0, 3).map((related) => (
                    <Link
                      key={related.id}
                      to={`/article/${related.slug}`}
                      className="group"
                    >
                      <div className="flex gap-3">
                        <img
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          className="h-16 w-16 object-cover rounded-md flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-sm font-medium group-hover:text-emerald-600 transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
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
      <RecommendedArticles currentArticleId={article.id} />
    </motion.div>
  );
}
