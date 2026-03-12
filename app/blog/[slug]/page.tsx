import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, getRelatedPosts, authors } from "@/data/posts";
import ArticleContent from "./ArticleContent";

// ─── Static params for build-time generation ──────────────────────────────

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://cmschat.ai/blog/${post.slug}`;
  const author = authors[post.author];

  return {
    title: `${post.title} | cmschat.ai Blog`,
    description: post.excerpt,
    authors: author ? [{ name: author.name }] : undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "cmschat.ai",
      type: "article",
      publishedTime: post.publishedAt,
      authors: author ? [author.name] : undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: url,
    },
  };
}

// ─── JSON-LD Structured Data ──────────────────────────────────────────────

function getArticleJsonLd(post: NonNullable<ReturnType<typeof getPostBySlug>>) {
  const url = `https://cmschat.ai/blog/${post.slug}`;
  const author = authors[post.author];

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      author: {
        "@type": "Organization",
        name: author?.name || post.author,
      },
      publisher: {
        "@type": "Organization",
        name: "cmschat.ai",
        url: "https://cmschat.ai",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      articleSection: post.category,
      keywords: post.tags.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://cmschat.ai",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://cmschat.ai/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: url,
        },
      ],
    },
  ];

  // FAQ schema
  if (post.faq && post.faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return schemas;
}

// ─── Page Component ───────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);
  const jsonLdSchemas = getArticleJsonLd(post);

  return (
    <>
      {/* JSON-LD */}
      {jsonLdSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <ArticleContent post={post} relatedPosts={relatedPosts} />
    </>
  );
}
