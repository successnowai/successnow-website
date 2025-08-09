import { getBlogArticleBySlug, getRelatedArticles } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import ArticleRenderer from '@/components/blog/ArticleRenderer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const article = getBlogArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found | SuccessNOW AI Blog',
      description: 'The requested article could not be found.'
    }
  }

  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
    keywords: article.seo.keywords.join(', '),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const article = getBlogArticleBySlug(params.slug)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(params.slug, 3)

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.excerpt,
            "image": article.image,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "SuccessNOW AI",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/successnow-logo.png"
              }
            },
            "datePublished": article.publishedAt,
            "dateModified": article.updatedAt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://successnow.ai/blogs/${article.slug}`
            }
          })
        }}
      />

      <div className="pt-16">
        {/* Back to Blog Link */}
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[#00BFFF] hover:text-[#00BFFF]/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Article Content */}
        <ArticleRenderer article={article} />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="max-w-4xl mx-auto px-6 pb-20">
            <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/blogs/${relatedArticle.slug}`}
                  className="block bg-gray-900/50 rounded-lg border border-gray-800 hover:border-[#00BFFF]/50 transition-colors p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {relatedArticle.excerpt}
                  </p>
                  <div className="text-[#00BFFF] text-sm font-medium">
                    Read more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
