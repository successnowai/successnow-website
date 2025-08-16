"use client"

interface AudioObjectSchema {
  "@type": "AudioObject"
  contentUrl: string
  description: string
  encodingFormat: "audio/mpeg" | "audio/wav"
  name: string
  duration?: string
}

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "Service" | "Product" | "HowTo"
  data: any
  audioObjects?: AudioObjectSchema[]
}

export function StructuredData({ type, data, audioObjects }: StructuredDataProps) {
  const enhancedData = {
    ...data,
    ...(audioObjects &&
      audioObjects.length > 0 && {
        audio: audioObjects.length === 1 ? audioObjects[0] : audioObjects,
      }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(enhancedData, null, 2),
      }}
    />
  )
}

// Organization Schema with Audio Capabilities
export function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SuccessNOW AI",
    alternateName: "SuccessNOW.ai",
    url: "https://successnow.ai",
    logo: "https://successnow.ai/images/successnow-logo.png",
    description:
      "Revolutionary AI agents for business growth. Transform your business with AI agents that work 24/7 to qualify, nurture, and close leads.",
    foundingDate: "2023",
    industry: "Artificial Intelligence, Business Automation, Lead Generation",
    numberOfEmployees: "11-50",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-800-SUCCESS",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: "US",
      },
      {
        "@type": "ContactPoint",
        email: "support@successnow.ai",
        contactType: "customer support",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/successnow-ai",
      "https://twitter.com/successnowai",
      "https://www.facebook.com/successnowai",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Business Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Voice Agents",
            description: "24/7 AI voice agents that qualify leads, book appointments, and close deals automatically",
            provider: {
              "@type": "Organization",
              name: "SuccessNOW AI",
            },
            areaServed: "Worldwide",
            availableChannel: {
              "@type": "ServiceChannel",
              serviceType: "AI Voice Agent",
              serviceLocation: {
                "@type": "Place",
                name: "Cloud-based Service",
              },
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Website Development",
            description: "AI-powered websites that convert visitors 24/7 and integrate with voice agents",
            provider: {
              "@type": "Organization",
              name: "SuccessNOW AI",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Marketing Automation",
            description: "Complete AI marketing stack including ads, SEO, and social media management",
            provider: {
              "@type": "Organization",
              name: "SuccessNOW AI",
            },
          },
        },
      ],
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Business Automation",
      "Lead Generation",
      "Sales Automation",
      "Voice AI",
      "Chatbots",
      "CRM Integration",
      "Marketing Automation",
      "SEO Optimization",
      "Paid Advertising",
    ],
    makesOffer: {
      "@type": "Offer",
      name: "AI Enterprise Solution",
      description: "Complete AI business automation platform with voice agents, website, and marketing tools",
      price: "997",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "997",
        priceCurrency: "USD",
        unitText: "monthly",
      },
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
      seller: {
        "@type": "Organization",
        name: "SuccessNOW AI",
      },
    },
  }

  return <StructuredData type="Organization" data={organizationData} />
}

// Website Schema with Voice Search Optimization
export function WebSiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SuccessNOW AI",
    alternateName: "SuccessNOW.ai",
    url: "https://successnow.ai",
    description:
      "Revolutionary AI agents for business growth. AI voice agents, automated marketing, and business automation tools.",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    publisher: {
      "@type": "Organization",
      name: "SuccessNOW AI",
      logo: "https://successnow.ai/images/successnow-logo.png",
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://successnow.ai/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      {
        "@type": "InteractAction",
        name: "Try AI Demo",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://successnow.ai/demo",
          actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
        },
        result: {
          "@type": "Thing",
          name: "AI Voice Agent Demo",
          description: "Interactive demonstration of AI voice agents for business automation",
        },
      },
    ],
    mainEntity: {
      "@type": "Service",
      name: "AI Business Automation Platform",
      description: "Complete AI solution with voice agents, automated marketing, and lead generation",
      provider: {
        "@type": "Organization",
        name: "SuccessNOW AI",
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Services",
        itemListElement: [
          {
            "@type": "Service",
            name: "AI Voice Agents",
            description: "24/7 AI voice agents for lead qualification and appointment booking",
          },
          {
            "@type": "Service",
            name: "AI Website Development",
            description: "Voice-enabled AI websites that convert visitors automatically",
          },
          {
            "@type": "Service",
            name: "AI Marketing Automation",
            description: "Automated advertising, SEO, and social media management",
          },
        ],
      },
    },
  }

  return <StructuredData type="WebSite" data={websiteData} />
}

// Service Schema for AI Voice Agents
export function AIServiceSchema() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Voice Agents for Business",
    alternateName: "AI Super Agents",
    description:
      "Revolutionary AI voice agents that work 24/7 to qualify leads, book appointments, handle customer service, and close deals automatically. No human intervention required.",
    provider: {
      "@type": "Organization",
      name: "SuccessNOW AI",
      url: "https://successnow.ai",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "AI Voice Agent",
      serviceLocation: {
        "@type": "Place",
        name: "Cloud-based Service",
      },
      availableLanguage: "English",
    },
    category: "Business Automation",
    serviceType: "AI Voice Agent",
    serviceOutput: {
      "@type": "Thing",
      name: "Automated Lead Qualification and Conversion",
      description: "Qualified leads, booked appointments, and automated customer interactions",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Voice Agent Features",
      itemListElement: [
        {
          "@type": "Service",
          name: "Lead Qualification",
          description: "AI agents automatically qualify incoming leads 24/7",
        },
        {
          "@type": "Service",
          name: "Appointment Booking",
          description: "Automated appointment scheduling and calendar management",
        },
        {
          "@type": "Service",
          name: "Customer Service",
          description: "24/7 AI-powered customer support and inquiry handling",
        },
        {
          "@type": "Service",
          name: "Sales Conversion",
          description: "AI agents that handle objections and close deals automatically",
        },
      ],
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Small to Medium Businesses",
      geographicArea: {
        "@type": "Country",
        name: "United States",
      },
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Organization",
        name: "Business Automation Review",
      },
      reviewBody: "Revolutionary AI voice agents that truly work 24/7 to grow businesses automatically.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
  }

  return <StructuredData type="Service" data={serviceData} />
}

// How-To Schema for Voice AI Implementation
export function HowToImplementAISchema() {
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Implement AI Voice Agents for Your Business",
    description:
      "Step-by-step guide to implementing AI voice agents that work 24/7 to qualify leads, book appointments, and grow your business automatically.",
    image: "https://successnow.ai/images/ai-implementation-guide.jpg",
    totalTime: "PT30M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "997",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Business Information",
      },
      {
        "@type": "HowToSupply",
        name: "CRM System Access",
      },
      {
        "@type": "HowToSupply",
        name: "Phone Number for AI Agent",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "SuccessNOW AI Platform",
      },
      {
        "@type": "HowToTool",
        name: "CRM Integration",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Sign Up and Onboarding",
        text: "Create your SuccessNOW AI account and complete the automated onboarding process where our AI gathers your business information.",
        image: "https://successnow.ai/images/step1-signup.jpg",
        url: "https://successnow.ai/demo#step1",
      },
      {
        "@type": "HowToStep",
        name: "AI Agent Training",
        text: "Our AI agents are automatically trained on your business, industry, and specific processes using advanced machine learning.",
        image: "https://successnow.ai/images/step2-training.jpg",
        url: "https://successnow.ai/demo#step2",
      },
      {
        "@type": "HowToStep",
        name: "CRM Integration",
        text: "Connect your existing CRM system or use our built-in CRM for seamless lead management and tracking.",
        image: "https://successnow.ai/images/step3-crm.jpg",
        url: "https://successnow.ai/demo#step3",
      },
      {
        "@type": "HowToStep",
        name: "Launch AI Agents",
        text: "Activate your AI voice agents to start working 24/7, qualifying leads, booking appointments, and converting prospects.",
        image: "https://successnow.ai/images/step4-launch.jpg",
        url: "https://successnow.ai/demo#step4",
      },
    ],
    video: {
      "@type": "VideoObject",
      name: "AI Voice Agent Implementation Tutorial",
      description: "Complete video guide showing how to implement AI voice agents for business growth",
      thumbnailUrl: "https://successnow.ai/images/video-thumbnail.jpg",
      uploadDate: "2024-01-15",
      duration: "PT15M",
      contentUrl: "https://successnow.ai/videos/ai-implementation-guide.mp4",
    },
  }

  return <StructuredData type="HowTo" data={howToData} />
}
