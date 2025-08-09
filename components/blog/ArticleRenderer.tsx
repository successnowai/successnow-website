"use client"

import { BlogArticle } from '@/lib/blog-data'
import Link from 'next/link'
import { Calendar, Clock, User, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface ArticleRendererProps {
  article: BlogArticle
}

export default function ArticleRenderer({ article }: ArticleRendererProps) {
  const formatContent = (content: string) => {
    // Process internal links
    let processedContent = content
    
    article.internalLinks.forEach(link => {
      const linkRegex = new RegExp(`\\b${link.text}\\b`, 'gi')
      processedContent = processedContent.replace(
        linkRegex,
        `<a href="${link.url}" class="text-[#00BFFF] hover:text-[#00BFFF]/80 underline font-medium">${link.text}</a>`
      )
    })

    // Convert markdown-style headers to HTML
    processedContent = processedContent.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mt-8 mb-4">$1</h3>')
    processedContent = processedContent.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mt-10 mb-6">$1</h2>')
    processedContent = processedContent.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mt-12 mb-8">$1</h1>')
    
    // Convert markdown-style bold text
    processedContent = processedContent.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
    
    // Convert markdown-style lists
    processedContent = processedContent.replace(/^- (.*$)/gim, '<li class="text-gray-300 mb-2">$1</li>')
    
    // Wrap consecutive list items in ul tags
    processedContent = processedContent.replace(/(<li.*?<\/li>\s*)+/g, '<ul class="list-disc list-inside space-y-2 mb-6">$&</ul>')
    
    // Convert paragraphs
    const paragraphs = processedContent.split('\n\n').filter(p => p.trim())
    return paragraphs.map(paragraph => {
      if (paragraph.includes('<h1>') || paragraph.includes('<h2>') || paragraph.includes('<h3>') || paragraph.includes('<ul>')) {
        return paragraph
      }
      return `<p class="text-gray-300 leading-relaxed mb-6">${paragraph}</p>`
    }).join('\n')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary" className="bg-[#00BFFF]/20 text-[#00BFFF] border-[#00BFFF]/30">
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </Badge>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div 
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
        />

        {/* Internal Links Section */}
        {article.internalLinks.length > 0 && (
          <div className="mt-12 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
            <div className="space-y-2">
              {article.internalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="block text-[#00BFFF] hover:text-[#00BFFF]/80 transition-colors"
                >
                  → {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-[#00BFFF]/10 to-purple-600/10 rounded-lg border border-[#00BFFF]/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-gray-300 mb-6">
            See how SuccessNOW AI agents can revolutionize your lead generation and customer engagement.
          </p>
          <Link
            href="/book"
            className="inline-block bg-gradient-to-r from-[#00BFFF] to-purple-600 hover:from-[#00BFFF]/80 hover:to-purple-600/80 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}
