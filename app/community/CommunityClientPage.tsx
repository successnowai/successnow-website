"use client"

import Navbar from "@/components/navigation/navbar"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Download, FileText, Video, BookOpen, Calendar, User, Search, Filter } from "lucide-react"

export default function CommunityClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Real resources - replace sample data
  const resources = [
    {
      id: 1,
      title: "How to Build an Irresistible Offer That Sells Itself",
      description: "Complete guide to building an offer that converts prospects into customers",
      type: "PDF Guide",
      category: "lead-generation",
      downloads: 0,
      size: "PDF",
      icon: FileText,
      downloadUrl: "https://drive.google.com/uc?export=download&id=1Y5NiCjN9m5wpLNr1KnPT0UcZMXdW-XjV",
      driveUrl: "https://drive.google.com/file/d/1Y5NiCjN9m5wpLNr1KnPT0UcZMXdW-XjV/view?usp=sharing",
    },
    {
      id: 2,
      title: "The AI Revolution: Your Guide to Implementing AI in Your Business",
      description: "Complete guide on how to implement AI into your business for maximum growth and efficiency",
      type: "PDF Guide",
      category: "lead-generation",
      downloads: 0,
      size: "PDF",
      icon: FileText,
      downloadUrl: "https://drive.google.com/uc?export=download&id=1BLxqnhQEVU7bTu6M-DBxgratrg5qmol1",
      driveUrl: "https://drive.google.com/file/d/1BLxqnhQEVU7bTu6M-DBxgratrg5qmol1/view?usp=sharing",
    },
    {
      id: 3,
      title: "Captivating Offers: A Step-by-Step Guide to Creating Irresistible Offers for Your Niche",
      description: "Complete guide creating a great offer that converts prospects in any niche market",
      type: "PDF Guide",
      category: "lead-generation",
      downloads: 0,
      size: "PDF",
      icon: FileText,
      downloadUrl: "https://drive.google.com/uc?export=download&id=1_nKuDB6cKRTV5Xp6kTzyD0wNIluawDGu",
      driveUrl: "https://drive.google.com/file/d/1_nKuDB6cKRTV5Xp6kTzyD0wNIluawDGu/view?usp=sharing",
    },
    {
      id: 4,
      title: "AI FOR LAWYERS: HOW TO IMPLEMENT AI IN YOUR LAW PRACTICE",
      description: "Complete guide to implementing AI solutions specifically for law firms and legal practices",
      type: "PDF Guide",
      category: "legal",
      downloads: 0,
      size: "PDF",
      icon: FileText,
      downloadUrl: "https://drive.google.com/uc?export=download&id=1z7w_1zTdFDvVEFA_c37UYEyHQaXslhnS",
      driveUrl: "https://drive.google.com/file/d/1z7w_1zTdFDvVEFA_c37UYEyHQaXslhnS/view?usp=sharing",
    },
    {
      id: 5,
      title: "CRAZY HOOKS FOR LAWYERS",
      description: "Complete guide to building compelling hooks and offers that capture legal clients' attention",
      type: "PDF Guide",
      category: "legal",
      downloads: 0,
      size: "PDF",
      icon: FileText,
      downloadUrl: "https://drive.google.com/uc?export=download&id=1GvKWVnWMiq7G6hBoZ25EAIbzQ0JPSb9O",
      driveUrl: "https://drive.google.com/file/d/1GvKWVnWMiq7G6hBoZ25EAIbzQ0JPSb9O/view?usp=sharing",
    },
    {
      id: 6,
      title: "CRAZY HOOKS: MEDISPA AND IV THERAPY",
      description:
        "Hooks that sell for medspas and IV therapy clinics - proven strategies to attract high-value clients",
      type: "PDF Guide",
      category: "healthcare",
      downloads: 0,
      size: "PDF",
      icon: FileText,
      downloadUrl: "https://drive.google.com/uc?export=download&id=1fKiuMdDl68Gx5JZIat4flhifL4m7_K0l",
      driveUrl: "https://drive.google.com/file/d/1fKiuMdDl68Gx5JZIat4flhifL4m7_K0l/view?usp=sharing",
    },
    {
      id: 7,
      title: "AUTODEALER NOW: HOW TO IMPLEMENT AI IN YOUR AUTO DEALERSHIP",
      description:
        "Complete guide to implementing AI solutions specifically for auto dealerships to boost sales and efficiency",
      type: "PDF Guide",
      category: "automotive",
      downloads: 0,
      size: "PDF",
      icon: FileText,
      downloadUrl: "https://drive.google.com/uc?export=download&id=1K8kLmQNXSwaonVnf3rHb9JagyTG-7kdE",
      driveUrl: "https://drive.google.com/file/d/1K8kLmQNXSwaonVnf3rHb9JagyTG-7kdE/view?usp=sharing",
    },
    {
      id: 8,
      title: "HOW TO USE AI IN YOUR MORTGAGE BUSINESS",
      description:
        "Complete guide to implementing AI solutions specifically for mortgage brokers and lending businesses",
      type: "PDF Guide",
      category: "finance",
      downloads: 0,
      size: "PDF",
      icon: FileText,
      downloadUrl: "https://drive.google.com/uc?export=download&id=1rN3hNxc6SROSGebilpzFsb_AnoER_B4c",
      driveUrl: "https://drive.google.com/file/d/1rN3hNxc6SROSGebilpzFsb_AnoER_B4c/view?usp=sharing",
    },
    // Placeholder resources for demonstration
    {
      id: 9,
      title: "AI Chatbot Setup Templates",
      description: "Ready-to-use chatbot templates for different industries",
      type: "Template Pack",
      category: "templates",
      downloads: 0,
      size: "Coming Soon",
      icon: Download,
      downloadUrl: "#",
    },
    {
      id: 10,
      title: "AI Sales Automation Masterclass",
      description: "Video series on automating your sales process with AI",
      type: "Video Course",
      category: "training",
      downloads: 0,
      size: "Coming Soon",
      icon: Video,
      downloadUrl: "#",
    },
  ]

  // Real blog posts
  const blogPosts = [
    {
      id: 1,
      title: "How SuccessNOW AI Agents Are Revolutionizing Ads, SEO, and Replacing Staff",
      excerpt:
        "Discover how AI superagents are transforming the way businesses handle customer interactions, leading to higher satisfaction and increased revenue.",
      author: "SuccessNOW Team",
      date: "2024-06-01",
      readTime: "PDF Article",
      category: "AI Technology",
      image: "/placeholder.svg?height=200&width=400",
      pdfUrl: "https://drive.google.com/file/d/1pd-sD8eeeNeE4PZJ99GqlQbmqygQpP9c/view?usp=sharing",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1pd-sD8eeeNeE4PZJ99GqlQbmqygQpP9c",
    },
    {
      id: 2,
      title: "Case Study: 300% ROI with AI Automation",
      excerpt:
        "Real-world transformation. Real results. This is the story of how one company redefined its sales process, replaced inefficiencies with AI automation, and saw a 300% return on investment in less than 90 days.",
      author: "SuccessNOW Team",
      date: "2024-12-01",
      readTime: "PDF Article",
      category: "Case Study",
      image: "/placeholder.svg?height=200&width=400",
      pdfUrl: "https://drive.google.com/file/d/1b_zK1MMT4Zh5r0xMbBVpN0MSlhPD-cjh/view?usp=sharing",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1b_zK1MMT4Zh5r0xMbBVpN0MSlhPD-cjh",
    },
  ]

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "lead-generation", label: "Lead Generation" },
    { value: "legal", label: "Legal" },
    { value: "healthcare", label: "Healthcare" },
    { value: "automotive", label: "Automotive" },
    { value: "finance", label: "Finance" },
    { value: "templates", label: "Templates" },
    { value: "training", label: "Training" },
    { value: "tools", label: "Tools" },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001a33] via-[#002244] to-[#001a33]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            SuccessNOW{" "}
            <span className="bg-gradient-to-r from-[#00BFFF] to-[#0080FF] bg-clip-text text-transparent">
              Community
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Access free resources, templates, and insights to supercharge your AI automation journey
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Free Resources</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Download our exclusive guides, templates, and tools to accelerate your AI implementation
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 bg-white/10 border border-white/20 rounded-md text-white appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value} className="bg-[#001a33] text-white">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => {
              const IconComponent = resource.icon
              return (
                <Card
                  key={resource.id}
                  className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#00BFFF]/20 rounded-lg">
                          <IconComponent className="w-6 h-6 text-[#00BFFF]" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="bg-[#00BFFF]/20 text-[#00BFFF] border-[#00BFFF]/30">
                            {resource.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-[#00BFFF] transition-colors">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{resource.downloads.toLocaleString()} downloads</span>
                      <span>{resource.size}</span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-[#00BFFF] to-[#0080FF] hover:from-[#00BFFF]/80 hover:to-[#0080FF]/80 text-white border-0"
                      onClick={() => {
                        if (resource.downloadUrl === "#") {
                          alert("This resource is coming soon! Join our newsletter to be notified when it's available.")
                          return
                        }

                        // Track download
                        console.log(`Downloading: ${resource.title}`)

                        // Open download in new tab
                        window.open(resource.downloadUrl, "_blank")

                        // Optional: Track analytics here
                        // analytics.track('Resource Downloaded', { resourceTitle: resource.title })
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {resource.downloadUrl === "#" ? "Coming Soon" : "Download Free"}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Latest from Our Blog</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Stay updated with the latest AI automation trends, tips, and success stories
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 group overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#00BFFF] text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-[#00BFFF] transition-colors text-2xl">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white bg-transparent"
                      onClick={() => {
                        // Open PDF in new tab
                        window.open(post.pdfUrl, "_blank")
                      }}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Online
                    </Button>
                    <Button
                      className="flex-1 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] hover:from-[#00BFFF]/80 hover:to-[#0080FF]/80 text-white border-0"
                      onClick={() => {
                        // Download PDF
                        window.open(post.downloadUrl, "_blank")
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg mb-4">More articles coming soon!</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00BFFF] to-[#0080FF] hover:from-[#00BFFF]/80 hover:to-[#0080FF]/80 text-white border-0"
              onClick={() => {
                // Scroll to newsletter signup
                document.querySelector("#newsletter-signup")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter-signup" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#00BFFF]/20 to-[#0080FF]/20 rounded-2xl p-8 border border-[#00BFFF]/30">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Stay in the Loop</h3>
            <p className="text-gray-300 mb-2">
              Get the latest resources, blog posts, and AI automation tips delivered to your inbox
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-[#00BFFF] font-semibold">PLUS:</span>
              <span className="text-white">Get our free</span>
              <span className="bg-gradient-to-r from-[#00BFFF] to-[#0080FF] bg-clip-text text-transparent font-bold">
                "Dominate with AI Guide"
              </span>
              <span className="text-white">instantly!</span>
            </div>

            <form className="max-w-lg mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                required
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                required
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#00BFFF] to-[#0080FF] hover:from-[#00BFFF]/80 hover:to-[#0080FF]/80 text-white border-0 font-semibold"
                onClick={(e) => {
                  e.preventDefault()
                  // Handle form submission - replace with actual logic
                  console.log("Newsletter signup with free guide")
                }}
              >
                Get Free Guide + Subscribe NOW
              </Button>
            </form>

            <p className="text-xs text-gray-400 mt-4">
              By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
