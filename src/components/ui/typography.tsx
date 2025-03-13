import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "default" | "title" | "section" | "subsection" | "accent";
  gradient?: boolean;
  align?: "left" | "center" | "right";
};

export function Heading({
  level = 1,
  variant = "default",
  children,
  className,
  gradient = false,
  align = "left",
  ...props
}: HeadingProps) {
  const Component = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <Component
      className={cn(
        "font-serif leading-tight",
        // Base styles by level
        level === 1 &&
          "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
        level === 2 && "text-3xl md:text-4xl font-bold",
        level === 3 && "text-2xl md:text-3xl font-semibold",
        level === 4 && "text-xl md:text-2xl font-semibold",
        level === 5 && "text-lg md:text-xl font-medium",
        level === 6 && "text-base md:text-lg font-medium",

        // Variant styles
        variant === "title" &&
          "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
        variant === "section" && "text-3xl md:text-4xl font-bold",
        variant === "subsection" && "text-2xl md:text-3xl font-semibold",
        variant === "accent" &&
          "text-xl md:text-2xl font-semibold text-emerald-600 dark:text-emerald-400",

        // Alignment
        align === "center" && "text-center",
        align === "right" && "text-right",

        // Gradient text
        gradient &&
          "bg-gradient-to-r from-emerald-600 to-blue-600 text-transparent bg-clip-text",

        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: "default" | "lead" | "small" | "muted" | "subtle" | "accent";
  align?: "left" | "center" | "right" | "justify";
  weight?: "normal" | "medium" | "semibold" | "bold";
};

export function Text({
  variant = "default",
  align = "left",
  weight = "normal",
  children,
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        "font-sans",
        // Variant styles
        variant === "default" && "text-base leading-7",
        variant === "lead" && "text-lg md:text-xl leading-7",
        variant === "small" && "text-sm leading-6",
        variant === "muted" && "text-sm text-muted-foreground leading-6",
        variant === "subtle" &&
          "text-base text-gray-600 dark:text-gray-400 leading-7",
        variant === "accent" &&
          "text-base text-emerald-600 dark:text-emerald-400 leading-7",

        // Font weight
        weight === "normal" && "font-normal",
        weight === "medium" && "font-medium",
        weight === "semibold" && "font-semibold",
        weight === "bold" && "font-bold",

        // Alignment
        align === "center" && "text-center",
        align === "right" && "text-right",
        align === "justify" && "text-justify",

        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

type QuoteProps = React.HTMLAttributes<HTMLQuoteElement> & {
  author?: string;
  source?: string;
  variant?: "default" | "elegant" | "simple" | "highlight";
};

export function Quote({
  children,
  className,
  author,
  source,
  variant = "default",
  ...props
}: QuoteProps) {
  return (
    <figure className="my-8">
      <blockquote
        className={cn(
          "font-serif",
          // Variant styles
          variant === "default" &&
            "article-quote border-l-4 border-emerald-500 pl-4 italic text-lg md:text-xl",
          variant === "elegant" &&
            "article-quote text-lg md:text-xl italic px-8 relative before:content-['\"'] before:absolute before:left-0 before:top-0 before:text-4xl before:text-emerald-500 before:opacity-50 before:font-serif after:content-['\"'] after:absolute after:right-0 after:bottom-0 after:text-4xl after:text-emerald-500 after:opacity-50 after:font-serif",
          variant === "simple" && "article-quote text-lg md:text-xl italic",
          variant === "highlight" &&
            "article-quote bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border-l-4 border-emerald-500 text-lg md:text-xl italic",
          className
        )}
        {...props}
      >
        {children}
      </blockquote>
      {(author || source) && (
        <figcaption className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          {author && <cite className="font-medium not-italic">— {author}</cite>}
          {author && source && <span>, </span>}
          {source && <span className="italic">{source}</span>}
        </figcaption>
      )}
    </figure>
  );
}

type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  variant?: "default" | "checked" | "numbered" | "bullet" | "none";
  spacing?: "tight" | "normal" | "relaxed";
};

export function List({
  variant = "default",
  spacing = "normal",
  children,
  className,
  ...props
}: ListProps) {
  const Component = variant === "numbered" ? "ol" : "ul";

  return (
    <Component
      className={cn(
        // Base styles
        "font-sans",

        // Variant styles
        variant === "default" && "list-disc pl-5",
        variant === "checked" && "list-none pl-0 space-y-2",
        variant === "numbered" && "list-decimal pl-5",
        variant === "bullet" && "list-disc pl-5",
        variant === "none" && "list-none pl-0",

        // Spacing
        spacing === "tight" && "space-y-1",
        spacing === "normal" && "space-y-2",
        spacing === "relaxed" && "space-y-4",

        className
      )}
      {...props}
    >
      {variant === "checked"
        ? React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(
                child as React.ReactElement<
                  React.HTMLAttributes<HTMLLIElement>
                >,
                {
                  className: cn(
                    "flex items-start",
                    (child.props as React.HTMLAttributes<HTMLLIElement>)
                      .className
                  ),
                  children: (
                    <>
                      <span className="mr-2 mt-1 text-emerald-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      {
                        (child.props as React.HTMLAttributes<HTMLLIElement>)
                          .children
                      }
                    </>
                  ),
                }
              );
            }
            return child;
          })
        : children}
    </Component>
  );
}

type ListItemProps = React.HTMLAttributes<HTMLLIElement>;

export function ListItem({ children, className, ...props }: ListItemProps) {
  return (
    <li className={cn("leading-7", className)} {...props}>
      {children}
    </li>
  );
}

type InlineCodeProps = React.HTMLAttributes<HTMLElement>;

export function InlineCode({ children, className, ...props }: InlineCodeProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}

export function ArticleTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function SectionTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "font-serif text-2xl md:text-3xl font-bold leading-tight mt-12 mb-6",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function Paragraph({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("leading-relaxed text-base md:text-lg mb-6", className)}
      {...props}
    >
      {children}
    </p>
  );
}
