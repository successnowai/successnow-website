import { getBlogArticles } from '@/lib/blog-data'
import BlogsClientPage from './BlogsClientPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Business Blog - Expert Insights & Strategies | SuccessNOW',
  description: 'Discover how AI agents are transforming businesses. Get expert insights, case studies, and actionable strategies for AI-powered growth.',
  keywords: ['AI business blog', 'AI agents', 'business automation', 'AI marketing', 'lead generation'],
  openGraph: {
    title: 'AI Business Blog - Expert Insights & Strategies | SuccessNOW',
    description: 'Discover how AI agents are transforming businesses. Get expert insights, case studies, and actionable strategies for AI-powered growth.',
    type: 'website',
    images: [
      {
        url: '/images/blog/pillar-hero.png',
        width: 1200,
        height: 630,
        alt: 'SuccessNOW AI Business Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Business Blog - Expert Insights & Strategies | SuccessNOW',
    description: 'Discover how AI agents are transforming businesses. Get expert insights, case studies, and actionable strategies for AI-powered growth.',
    images: ['/images/blog/pillar-hero.png'],
  },
}

export default function BlogsPage() {
  const articles = getBlogArticles()

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "SuccessNOW AI Business Blog",
            "description": "Expert insights and strategies for AI-powered business growth",
            "url": "https://successnow.ai/blogs",
            "publisher": {
              "@type": "Organization",
              "name": "SuccessNOW AI",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/successnow-logo.png"
              }
            },
            "blogPost": articles.map(article => ({
              "@type": "BlogPosting",
              "headline": article.title,
              "description": article.excerpt,
              "url": `https://successnow.ai/blogs/${article.slug}`,
              "datePublished": article.publishedAt,
              "dateModified": article.updatedAt,
              "author": {
                "@type": "Person",
                "name": article.author
              }
            }))
          })
        }}
      />
      
      <BlogsClientPage articles={articles} />
    </>
  )
}
