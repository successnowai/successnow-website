"use client"

import { useState } from "react"
import type { BlogArticle } from "@/lib/blog-data"
import Link from "next/link"
import { Search, Calendar, Clock, User, Tag } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogsClientPageProps {
  articles: BlogArticle[]
}

export default function BlogsClientPage({ articles }: BlogsClientPageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", ...Array.from(new Set(articles.map((article) => article.category)))]

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section - Reduced padding */}
      <div className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            AI Business <span className="text-[#00BFFF]">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how AI agents are transforming businesses. Get expert insights, case studies, and actionable
            strategies for AI-powered growth.
          </p>
        </div>
      </div>

      {/* Search and Filter Section - Reduced padding */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#00BFFF]"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#00BFFF] text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-400 mb-6">
          {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} found
        </p>

        {/* Articles Grid - Reduced gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card
              key={article.slug}
              className="bg-gray-900/50 border-gray-800 hover:border-[#00BFFF]/50 transition-all duration-300 group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-[#00BFFF]/20 text-[#00BFFF] border-[#00BFFF]/30">
                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </Badge>
                </div>
                <CardTitle className="text-white group-hover:text-[#00BFFF] transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime} min</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="border-gray-600 text-gray-400 text-xs">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                  {article.tags.length > 3 && (
                    <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                      +{article.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <Link
                  href={`/blogs/${article.slug}`}
                  className="inline-flex items-center text-[#00BFFF] hover:text-[#00BFFF]/80 font-medium transition-colors"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="text-[#00BFFF] hover:text-[#00BFFF]/80 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section - Reduced padding */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center p-8 bg-gradient-to-r from-[#00BFFF]/10 to-purple-600/10 rounded-lg border border-[#00BFFF]/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h3>
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
