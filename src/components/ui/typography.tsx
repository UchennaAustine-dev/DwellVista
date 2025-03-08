import type React from "react";
import { cn } from "../../lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading1({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tight font-serif leading-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Heading2({ children, className }: HeadingProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold tracking-tight font-serif leading-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Heading3({ children, className }: HeadingProps) {
  return (
    <h3
      className={cn("text-2xl font-bold font-serif leading-tight", className)}
    >
      {children}
    </h3>
  );
}

export function ArticleTitle({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tight font-serif leading-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function SectionTitle({ children, className }: HeadingProps) {
  return (
    <h2
      className={cn("text-2xl font-bold font-serif leading-tight", className)}
    >
      {children}
    </h2>
  );
}

export function Paragraph({ children, className }: HeadingProps) {
  return (
    <p className={cn("leading-relaxed text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function Quote({
  children,
  author,
  className,
}: HeadingProps & { author?: string }) {
  return (
    <blockquote
      className={cn("my-8 border-l-4 border-emerald-600 pl-6", className)}
    >
      <p className="text-xl font-medium italic font-serif">{children}</p>
      {author && (
        <cite className="mt-2 block text-sm text-muted-foreground">
          — {author}
        </cite>
      )}
    </blockquote>
  );
}
