"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  {
    id: "what-is-successnow",
    question: "What is SuccessNOW.ai?",
    answer:
      "SuccessNOW.ai is an all-in-one AI business growth platform that works 24/7 to convert leads into sales. It provides a suite of integrated AI-powered tools so even small businesses can leverage advanced AI without a big team. Key capabilities include:\n\nAI-Powered Website: A custom, high-converting website built by an AI WebDev agent, complete with interactive voice and chat assistants that talk to visitors in real-time.\n\nAI Super Agents: Intelligent voice and chat agents trained on your business data. They instantly engage new leads, answer questions, and even make calls — acting like your best salesperson on autopilot.\n\nAI Ads Manager (AdsNOW.ai): An AI agent that creates, launches, and optimizes your paid advertising campaigns around the clock to maximize ROI.\n\nAI SEO Agent (SEONOW.ai): An AI tool that continuously improves your search engine rankings and boosts your visibility in organic and AI-driven search results.\n\nEnd-to-End Automation: Automated workflows for lead capture, follow-up nurturing, appointment booking, sales processes, and client retention – all without human intervention.\n\nTogether, these features allow SuccessNOW.ai to learn, sell, and scale your business automatically, engaging customers 24/7 while you focus on other tasks. It's like having an entire digital sales and marketing team powered by AI on your side.",
    category: "General",
  },
  {
    id: "what-makes-different",
    question: "What makes SuccessNOW's AI Agents different?",
    answer:
      "SuccessNOW.ai's AI Super Agents aren't static chatbots – they learn and adapt with every interaction. Here's what sets them apart from ordinary bots:\n\nContextual Memory: Before each call, chat, or email, the AI agent reviews past CRM notes and the customer's history to understand their needs and context. This means it speaks to clients with awareness of prior conversations (whether those were with a human or AI).\n\nPersonalized Interactions: The agents remember individual preferences and tailor every response or offer to the person they're engaging. Conversations feel customized to the client's situation, not like generic canned replies.\n\nAuto-Updated Records: After every interaction, the AI agent automatically updates the client's records in the CRM with call notes, outcomes, and next steps. Nothing falls through the cracks – it's as diligent as your best human rep at note-taking.\n\nContinuous Learning: The AI gets smarter with each engagement. It refines its approach based on what works or doesn't, steadily improving over time. This means relationships deepen and conversations feel more human the longer you use the system.\n\nThese capabilities allow SuccessNOW's agents to build relationships that feel surprisingly human, even though they are automated. In fact, industry research suggests that generative AI can enable warm, familiar customer service at scale – nearly 70% of organizations believe AI will help provide empathetic, human-like interactions to millions of customers. SuccessNOW's agents are designed with this philosophy, giving clients an experience that's personal and engaging, while still operating at AI speed and efficiency.",
    category: "General",
  },
  {
    id: "how-ai-website-works",
    question: "How does the AI Website work?",
    answer:
      "Think of the SuccessNOW.ai website as a live AI sales rep rather than a static brochure. Our AI WebDev Agent builds your site from the ground up to be high-converting and mobile-optimized. This means the layout, content, and funnels are all crafted (and continuously refined) by AI to maximize visitor engagement and lead capture.\n\nCrucially, your website comes integrated with AI voice and chat agents. A visitor can instantly start a conversation – either by speaking or typing – with your AI assistant directly on the site. This AI agent can answer questions about your services, handle objections, and guide the visitor through the sales funnel in real time. It will capture the visitor's contact info, qualify their needs, and even book appointments or demos on the spot.\n\nAll of this happens 24/7, without any human needed. Every lead and interaction is automatically logged into your CRM. In short, the website isn't just attracting visitors; it's actively talking to them, converting them into leads, and scheduling them, just like a diligent salesperson would.",
    category: "Features",
  },
  {
    id: "lead-generation-conversion",
    question: "How does SuccessNOW generate and convert leads?",
    answer:
      "SuccessNOW.ai deploys a complete AI-powered growth system to drive traffic, capture leads, and convert sales. It combines multiple AI agents and strategies working together:\n\nAI Paid Ads Agent (AdsNOW.ai): This agent automatically creates, launches, and optimizes your digital ad campaigns on platforms like Google, Facebook, etc. It works 24/7 adjusting bids and creatives to get the best ROI, ensuring a steady flow of traffic and leads.\n\nAI SEO Agent (SEONOW.ai): A search optimization agent that boosts your website's organic rankings. It handles keyword research, content suggestions, and other SEO best practices to improve your visibility in search engines (including emerging AI search results).\n\nSelf-Selling Funnels: We build irresistible offer funnels (what we call \"No-Brainer Offers\") that your prospects can't ignore. These are high-converting landing pages and email/text sequences crafted to turn cold visitors into hot leads and paying customers.\n\nAI Speed-to-Lead Agent: The moment a new lead comes in, an AI agent reaches out immediately. It can call or message the lead within seconds of their inquiry, engaging them while they're most interested. Studies show that responding to a lead within one minute can boost conversion rates by up to 391%.\n\nAI Follow-Up & Nurturing Agents: Not every lead will convert right away, so the platform includes AI agents that persistently follow up and nurture your leads over time. They'll send personalized emails, texts, or even voice calls to keep the conversation going, answer additional questions, and stay top of mind.\n\nBy integrating all of these components, SuccessNOW.ai creates a constant lead generation and conversion engine. It attracts prospects via AI-optimized marketing, engages them instantly through AI conversations, and continues to follow up with them automatically.",
    category: "Features",
  },
  {
    id: "ongoing-client-service",
    question: "Can the AI Agents handle ongoing client service?",
    answer:
      "Yes. In addition to generating new sales, SuccessNOW.ai's agents can also serve as your AI customer service and retention team. Our AI Retention Agents are dedicated to keeping your clients happy and engaged long after the initial sale. They can:\n\nReview client history before each interaction: Just like the sales agents, the retention AI reviews all past notes and interactions with a customer before responding. This context allows it to address the client by name, acknowledge their past purchases or issues, and pick up conversations where they left off.\n\nProvide highly personalized support: The AI will use the client's preferences and history to tailor its answers and assistance. Whether a client is asking a question, needing help, or just checking in, the AI responds in a way that feels personal and relevant to that individual.\n\nProactively reach out at the right time: The retention agent doesn't just wait for inbound questions – it can proactively follow up with clients. For example, it might call or email customers when a renewal is coming up, when it's time to schedule a routine service, or just to check if everything is going well.\n\nEnsure no one slips through the cracks: Think of it as a 24/7 client concierge. Every customer gets prompt attention. If a client has an issue at midnight, the AI is there to help immediately. It makes sure every client feels cared for, which boosts satisfaction and retention.\n\nIn short, the AI agents can handle the entire customer lifecycle – from first contact to sale to ongoing support. They deliver fast, attentive service consistently.",
    category: "Features",
  },
  {
    id: "industries-served",
    question: "What industries does SuccessNOW serve?",
    answer:
      "SuccessNOW.ai is built to serve small and medium-sized businesses across 15+ industries. We have pre-built, niche-specific AI solutions for a wide range of sectors, including:\n\n• Auto Dealers – Car dealerships and auto sales teams\n• Real Estate – Realtors and real estate brokers\n• Mortgage & Finance – Mortgage brokers, lenders, financial services\n• Legal – Law firms and independent lawyers\n• Home Services – Contractors, plumbers, electricians, HVAC, etc.\n• Health & Fitness – Gyms, personal trainers, wellness centers\n• Medical Aesthetics – Medspas, cosmetic clinics\n• Insurance – Insurance agencies and brokers\n• Local Services – Many other local service providers and professional services\n\nFor each supported niche, SuccessNOW.ai provides a fully customized package out of the box. This includes:\n\n• A custom high-converting AI-driven website and funnel designed specifically for that industry's audience\n• AI agents pre-trained on industry-specific knowledge to handle typical inquiries and client interactions\n• Done-for-you marketing campaigns and advertising strategies tailored to the niche\n\nBy offering industry-focused AI systems, SuccessNOW.ai lets smaller companies hit the ground running with AI. You don't need to train a generic AI from scratch – it already speaks your industry's language on day one.",
    category: "Industries",
  },
  {
    id: "no-brainer-offer",
    question: 'What\'s included in the "No-Brainer" offer?',
    answer:
      'We currently have a launch promotion – our "No-Brainer Offer" – that bundles everything at a steep discount to encourage new users. For a limited time, the pricing is $997 for setup (one-time, normally $9,977) and $997 per month (ongoing subscription, normally $1,994/month). This offer includes the entire SuccessNOW.ai platform and service, such as:\n\nFully Built AI Website & Funnels: Our team (and AI WebDev agent) will design and launch your custom AI-powered website and sales funnel for you, so you\'re up and running quickly.\n\nAI Voice & Chat Agents: Your website will come alive with the integrated AI chat widget and optional voice agent, both trained on your business to engage visitors and answer questions. Phone call agents are included too.\n\nAI-Powered Ads Management: The AI Ads agent will create and manage your online ad campaigns across platforms (Google, Facebook, etc.) continuously, aiming to deliver the best results for your ad spend.\n\nSEO Setup & Monitoring: The package covers initial search engine optimization setup by the AI SEO agent, plus ongoing monitoring and improvements to boost your organic visibility.\n\nCRM Integration & Automation: We integrate SuccessNOW.ai with your CRM (or provide one if needed) and set up all the automation. Every lead that comes in will be automatically logged, follow-ups scheduled, and sales activities tracked.\n\nAll of these components are included in the monthly $997, which makes it a "no-brainer" in terms of value. This promotional pricing won\'t last forever, but early adopters lock in huge savings.',
    category: "Pricing",
  },
  {
    id: "agency-program",
    question: "Can agencies use SuccessNOW.ai?",
    answer:
      "Absolutely – we have a program called AgencyNow for marketing agencies, consultants, or anyone who wants to resell our AI platform as a service to their own clients. Instead of building your own solution, you can offer SuccessNOW.ai's capabilities to businesses in your network and create a new revenue stream. As an AgencyNow partner:\n\nYou earn 40% recurring commission on every client you bring onto the SuccessNOW.ai platform. This means predictable monthly income for your agency for as long as your client stays on.\n\nWe handle the setup, onboarding, and support for the end-client. You don't have to worry about the technical implementation or troubleshooting – our team takes care of your client just as we would our own.\n\nYou can focus on what you do best: finding clients and maintaining the relationship. Essentially, you plug your clients into our proven AI systems and let the platform deliver results, while you collect commission and keep the client satisfied.\n\nIt's a turnkey way for agencies to offer cutting-edge AI solutions (websites, AI lead gen, etc.) under their own brand if desired, without the development cost. We do the heavy lifting behind the scenes. If you're an agency or consultant, AgencyNow allows you to scale your offerings and help your small-business clients get AI working for them, all while boosting your own recurring revenue.",
    category: "Agency",
  },
  {
    id: "onboarding-process",
    question: "How is onboarding handled?",
    answer:
      "Onboarding with SuccessNOW.ai is streamlined and largely automated – we've made it as easy as possible to get started. Once you sign up, here's what happens:\n\nAI Onboarding Agent gathers info: We'll kick off with an AI-driven onboarding questionnaire (assisted by a human as needed). The AI Onboarding Agent will ask you about your business details, branding (logos, colors, etc.), your services/products, target customer info, and goals.\n\nAI WebDev builds your site and funnels: Using the information collected, our AI WebDev Agent immediately gets to work creating your custom website and funnel pages. It designs the layout, writes initial copy, and sets up the lead capture forms based on what works best for your industry.\n\nCRM & integrations setup: In parallel, we integrate SuccessNOW.ai with your CRM or our built-in CRM. The AI ensures that every lead form, chat conversation, or call on your new site will automatically log into the system. We also configure the automation workflows at this stage.\n\nTraining and launch: Once your website and AI agents are ready, we go live! You'll receive a walkthrough of the system and access to our training community and resources. We have an online community and knowledge base where you can learn best practices.\n\nOverall, the onboarding is very hands-off for you – our AI and team set up most of it. Many businesses are able to deploy the full system in just a week or two from sign-up. We ensure that from day one of launch, everything is connected and ready: your AI website is live, your agents are trained on your data, and the lead flow is integrated with your CRM.",
    category: "Implementation",
  },
  {
    id: "best-ai-tool",
    question: "What makes SuccessNOW.ai one of the best AI tools for businesses?",
    answer:
      "SuccessNOW.ai stands out as one of the best AI platforms for business growth because it's comprehensive and specifically tailored to help businesses make money and save time. Unlike generic AI tools that might do only one thing, SuccessNOW.ai is an all-in-one system that covers all the critical areas – web presence, marketing, sales, and customer service – in a unified way.\n\nHere are a few reasons it's top-tier:\n\nAll-in-One Convenience: Small businesses usually don't have the resources to juggle multiple AI tools. SuccessNOW.ai bundles all these capabilities together. With one platform, you get multiple \"AI employees\" – from a web developer to a salesperson to a marketing manager – all working in sync.\n\nDesigned for Small Business Needs: Many AI solutions are built with large enterprises in mind. SuccessNOW.ai comes with pre-trained industry AI agents and templates that fit small business use-cases out of the box. It's plug-and-play for common business types.\n\nActive Revenue Generation: A lot of AI tools help with productivity or analytics in the background. SuccessNOW's focus is on actively driving revenue – getting you more leads and converting them to sales. It doesn't just analyze or report; it takes action.\n\nContinuous Learning & Improvement: Because the platform's AI agents learn from every interaction, the longer you use SuccessNOW.ai, the better it performs for your specific business. The AI is always self-optimizing.\n\nProven Strategy and Support: SuccessNOW.ai isn't just software – it also comes with the strategy (funnels, offers, scripts) and support baked in. Our team's expertise in what works for each industry is built into the AI.\n\nOverall, SuccessNOW.ai gives smaller businesses a competitive edge that was once only available to big companies. Adopting AI is now crucial for staying ahead, and SuccessNOW.ai makes cutting-edge AI affordable and accessible.",
    category: "General",
  },
  {
    id: "availability",
    question: "Is SuccessNOW.ai available in the US and Canada?",
    answer:
      "Yes. We currently offer SuccessNOW.ai to businesses across the United States and Canada. These are our primary service regions for now, and all features (including the AI voice agents for phone calls) are fully supported for US and Canadian markets. If you're located in either country, you can take advantage of the platform right away. (As we expand, we plan to support additional countries in the future, but at present our focus is on North America.)",
    category: "General",
  },
]

const categories = ["All", "General", "Features", "Industries", "Pricing", "Agency", "Implementation"]

export default function FAQClientPage() {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get answers to common questions about SuccessNOW AI Superagents, pricing, implementation, and results.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-black">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <div key={faq.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs px-2 py-1 bg-gradient-to-r from-pink-500/20 to-blue-500/20 text-pink-300 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                </div>
                {openItems.includes(faq.id) ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>

              {openItems.includes(faq.id) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No questions found matching your search.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="mt-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-900/20 to-blue-900/20 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help you understand how SuccessNOW AI can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-8 py-3"
            >
              <a href="/demo">Book a Free Demo</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
            >
              <a href="mailto:support@successnow.ai">Contact Support</a>
            </Button>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
