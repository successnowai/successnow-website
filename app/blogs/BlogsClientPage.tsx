"use client"

import { useState, useMemo } from "react"
import { Search, Filter, Calendar, User, Clock, Tag, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime: string
  image: string
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How AI Superagents Are Revolutionizing Customer Service",
    excerpt: "Discover how AI-powered customer service agents are transforming business operations and improving customer satisfaction rates by up to 300%.",
    content: "In today's fast-paced business environment, customer service has become the cornerstone of success...",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "AI Technology",
    readTime: "5 min read",
    image: "/ai-customer-service.png",
    featured: true
  },
  {
    id: "2",
    title: "The Complete Guide to Lead Generation with AI",
    excerpt: "Learn proven strategies to generate high-quality leads using AI automation tools and increase your conversion rates.",
    content: "Lead generation is the lifeblood of any business. With AI technology, we can now automate and optimize...",
    author: "Mike Chen",
    date: "2024-01-12",
    category: "Lead Generation",
    readTime: "8 min read",
    image: "/lead-generation-comparison.png",
    featured: true
  },
  {
    id: "3",
    title: "Case Study: How One Business Increased Revenue by 400%",
    excerpt: "Real success story of a local business that implemented SuccessNOW AI agents and saw dramatic growth in just 3 months.",
    content: "When ABC Company first approached us, they were struggling with lead management and customer follow-up...",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    category: "Case Studies",
    readTime: "6 min read",
    image: "/business-success-growth.png",
    featured: false
  },
  {
    id: "4",
    title: "AI in Healthcare: Transforming Patient Experience",
    excerpt: "Explore how healthcare providers are using AI agents to improve patient communication and streamline operations.",
    content: "The healthcare industry is experiencing a digital transformation, and AI agents are at the forefront...",
    author: "Dr. James Wilson",
    date: "2024-01-08",
    category: "Industry Insights",
    readTime: "7 min read",
    image: "/healthcare-ai.png",
    featured: false
  }
]

const categories = ["All", "AI Technology", "Lead Generation", "Case Studies", "Industry Insights"]

export default function BlogsClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.content.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            SuccessNOW{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay ahead with the latest AI technology insights, business automation strategies, and success stories from industry leaders.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className={`
                    ${selectedCategory === category 
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" 
                      : "border-white/20 text-gray-300 hover:bg-white/10"
                    }
                  `}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(searchTerm || selectedCategory !== "All") && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-gray-400 text-sm">Active filters:</span>
              {searchTerm && (
                <Badge variant="secondary" className="bg-white/10 text-white">
                  Search: "{searchTerm}"
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => setSearchTerm("")}
                  />
                </Badge>
              )}
              {selectedCategory !== "All" && (
                <Badge variant="secondary" className="bg-white/10 text-white">
                  Category: {selectedCategory}
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => setSelectedCategory("All")}
                  />
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="text-cyan-400 hover:text-cyan-300"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="bg-black/20 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image || "/placeholder.svg"} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-white/20 text-gray-300">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                    <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Regular Articles */}
      {regularPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="bg-black/20 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={post.image || "/placeholder.svg"} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-white/20 text-gray-300 text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest AI insights, business automation tips, and success stories delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400"
            />
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
