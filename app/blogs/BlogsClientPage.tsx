"use client"

import { useState, useMemo } from 'react'
import { BlogArticle } from '@/lib/blog-data'
import Link from 'next/link'
import { Search, Calendar, Clock, User, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface BlogsClientPageProps {
  articles: BlogArticle[]
}

export default function BlogsClientPage({ articles }: BlogsClientPageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')

  // Get unique categories and tags
  const categories = useMemo(() => {
    const cats = Array.from(new Set(articles.map(article => article.category)))
    return ['all', ...cats]
  }, [articles])

  const tags = useMemo(() => {
    const allTags = articles.flatMap(article => article.tags)
    const uniqueTags = Array.from(new Set(allTags))
    return ['all', ...uniqueTags]
  }, [articles])

  // Filter articles based on search and filters
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = searchTerm === '' || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
      const matchesTag = selectedTag === 'all' || article.tags.includes(selectedTag)

      return matchesSearch && matchesCategory && matchesTag
    })
  }, [articles, searchTerm, selectedCategory, selectedTag])

  const featuredArticles = articles.filter(article => article.featured)

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Business <span className="text-[#00BFFF]">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how AI agents are transforming businesses across industries. 
            Get expert insights, case studies, and actionable strategies to dominate your market.
          </p>
        </div>
      </div>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blogs/${article.slug}`}
                className="group block bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-lg border border-gray-800 hover:border-[#00BFFF]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-[#00BFFF]/20 text-[#00BFFF] border-[#00BFFF]/30">
                      Featured
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      {article.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00BFFF] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} min</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            <div className="flex items-center gap-2">
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2"
              >
                <option value="all">All Tags</option>
                {tags.slice(1).map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {(searchTerm || selectedCategory !== 'all' || selectedTag !== 'all') && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                  setSelectedTag('all')
                }}
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedTag('all')
              }}
              className="mt-4 border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                All Articles ({filteredArticles.length})
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blogs/${article.slug}`}
                  className="group block bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00BFFF]/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime} min</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00BFFF] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                          +{article.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#00BFFF]/10 to-purple-600/10 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Don't just read about AI success stories—create your own. 
            Book a free consultation to see how SuccessNOW AI agents can revolutionize your business.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-[#00BFFF] to-purple-600 hover:from-[#00BFFF]/80 hover:to-purple-600/80 text-white font-semibold px-8 py-3 rounded-full text-lg"
          >
            <Link href="/book">Book Your Free Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
