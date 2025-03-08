import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  gradient?: boolean;
};

export function Heading({
  level = 1,
  children,
  className,
  gradient = false,
  ...props
}: HeadingProps) {
  const Component = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <Component
      className={cn(
        "font-serif leading-tight",
        level === 1 &&
          "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
        level === 2 && "text-3xl md:text-4xl font-bold",
        level === 3 && "text-2xl md:text-3xl font-semibold",
        level === 4 && "text-xl md:text-2xl font-semibold",
        level === 5 && "text-lg md:text-xl font-medium",
        level === 6 && "text-base md:text-lg font-medium",
        gradient && "text-gradient",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: "default" | "lead" | "small" | "muted";
};

export function Text({
  variant = "default",
  children,
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        "font-sans",
        variant === "default" && "text-base leading-7",
        variant === "lead" && "text-lg md:text-xl leading-7 font-medium",
        variant === "small" && "text-sm leading-6",
        variant === "muted" && "text-sm text-muted-foreground leading-6",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

type QuoteProps = React.HTMLAttributes<HTMLQuoteElement>;

export function Quote({ children, className, ...props }: QuoteProps) {
  return (
    <blockquote
      className={cn(
        "article-quote border-l-4 border-emerald-500 pl-4 italic text-lg md:text-xl",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}
