// Centralized JSON-LD configuration and builders
export const SITE_CONFIG = {
  domain: "https://successnow.ai",
  brandName: "SuccessNOW",
  fullName: "SuccessNOW AI",
  description: "AI Superagents that work 24/7 to convert leads into sales for your business.",
  logo: "https://successnow.ai/images/successnow-logo.png",
  founder: "John Potvin",
  foundingDate: "2024",
  email: "support@successnow.ai",
  phone: "+1-555-SUCCESS",
  socialProfiles: [
    "https://www.facebook.com/profile.php?id=61578055388858",
    "https://www.instagram.com/successnowai/",
    "https://www.linkedin.com/company/success-now-ai/",
    "https://www.linkedin.com/in/john-potvin-65231229/",
    "https://x.com/successnowx",
    "https://www.tiktok.com/@successnow.ai",
    "https://www.youtube.com/@SuccessNow-AI-Agents",
  ],
  areaServed: ["United States", "Canada"],
  priceRange: "$997-$1994",
}

// Sitewide JSON-LD (Organization + Website)
export function generateSitewideJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.domain}/#org`,
        name: SITE_CONFIG.fullName,
        alternateName: SITE_CONFIG.brandName,
        url: SITE_CONFIG.domain,
        logo: {
          "@type": "ImageObject",
          url: SITE_CONFIG.logo,
          width: 400,
          height: 400,
        },
        description: SITE_CONFIG.description,
        foundingDate: SITE_CONFIG.foundingDate,
        founder: {
          "@type": "Person",
          name: SITE_CONFIG.founder,
          url: "https://www.linkedin.com/in/john-potvin-65231229/",
        },
        sameAs: SITE_CONFIG.socialProfiles,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: SITE_CONFIG.phone,
            email: SITE_CONFIG.email,
            areaServed: SITE_CONFIG.areaServed,
            availableLanguage: "English",
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: SITE_CONFIG.email,
            areaServed: SITE_CONFIG.areaServed,
            availableLanguage: "English",
          },
        ],
        areaServed: SITE_CONFIG.areaServed.map((area) => ({
          "@type": "Country",
          name: area,
        })),
        termsOfService: `${SITE_CONFIG.domain}/terms`,
        privacyPolicy: `${SITE_CONFIG.domain}/privacy`,
        knowsAbout: [
          "Artificial Intelligence",
          "Lead Generation",
          "Sales Automation",
          "Customer Service Automation",
          "Voice AI",
          "Chatbots",
          "CRM Integration",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.domain}/#website`,
        url: SITE_CONFIG.domain,
        name: SITE_CONFIG.fullName,
        description: SITE_CONFIG.description,
        publisher: { "@id": `${SITE_CONFIG.domain}/#org` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_CONFIG.domain}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }
}

// Home page specific JSON-LD
export function generateHomePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.domain}/#webpage`,
        url: SITE_CONFIG.domain,
        name: `${SITE_CONFIG.fullName} - AI Superagent System`,
        description:
          "Our AI Superagents convert, book, and nurture leads 24/7 — while you get back your time. Never lose a lead again.",
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_CONFIG.domain}/#website` },
        about: { "@id": `${SITE_CONFIG.domain}/#org` },
        mainEntity: { "@id": `${SITE_CONFIG.domain}/#service` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_CONFIG.domain}/#service`,
        name: "SuccessNOW AI Platform",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web-based",
        description:
          "All-in-one AI business growth platform with AI agents, websites, ads management, and SEO optimization.",
        provider: { "@id": `${SITE_CONFIG.domain}/#org` },
        offers: {
          "@type": "Offer",
          url: `${SITE_CONFIG.domain}/signup`,
          price: "997.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "997.00",
            priceCurrency: "USD",
            billingIncrement: "P1M",
          },
        },
        featureList: [
          "AI Voice Agents",
          "AI Chat Agents",
          "AI Website Builder",
          "AI Ads Management",
          "AI SEO Optimization",
          "CRM Integration",
          "24/7 Lead Engagement",
        ],
      },
    ],
  }
}

// FAQ page JSON-LD
export function generateFAQJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.domain}/faq#webpage`,
        url: `${SITE_CONFIG.domain}/faq`,
        name: "Frequently Asked Questions - SuccessNOW AI",
        description:
          "Get answers to common questions about SuccessNOW AI Superagents, pricing, implementation, and results.",
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_CONFIG.domain}/#website` },
        mainEntity: { "@id": `${SITE_CONFIG.domain}/faq#faq` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_CONFIG.domain}/faq#faq`,
        mainEntity: faqs.slice(0, 10).map((faq, index) => ({
          "@type": "Question",
          "@id": `${SITE_CONFIG.domain}/faq#question-${index + 1}`,
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer.split("\n")[0], // First paragraph only for snippets
          },
        })),
      },
    ],
  }
}

// Service page JSON-LD generator
export function generateServiceJsonLd(service: {
  slug: string
  name: string
  description: string
  price?: string
  features?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.domain}/${service.slug}#webpage`,
        url: `${SITE_CONFIG.domain}/${service.slug}`,
        name: `${service.name} - ${SITE_CONFIG.brandName}`,
        description: service.description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_CONFIG.domain}/#website` },
        about: { "@id": `${SITE_CONFIG.domain}/${service.slug}#service` },
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/${service.slug}#service`,
        name: service.name,
        serviceType: "Business Automation",
        provider: { "@id": `${SITE_CONFIG.domain}/#org` },
        areaServed: SITE_CONFIG.areaServed.map((area) => ({
          "@type": "Country",
          name: area,
        })),
        description: service.description,
        ...(service.price && {
          offers: {
            "@type": "Offer",
            url: `${SITE_CONFIG.domain}/${service.slug}`,
            price: service.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        }),
        ...(service.features && {
          serviceOutput: service.features.map((feature) => ({
            "@type": "Thing",
            name: feature,
          })),
        }),
      },
    ],
  }
}

// Industry page JSON-LD generator
export function generateIndustryJsonLd(industry: {
  slug: string
  name: string
  description: string
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.domain}/${industry.slug}#webpage`,
        url: `${SITE_CONFIG.domain}/${industry.slug}`,
        name: `${industry.name} AI Solutions - ${SITE_CONFIG.brandName}`,
        description: industry.description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_CONFIG.domain}/#website` },
        about: { "@id": `${SITE_CONFIG.domain}/${industry.slug}#service` },
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/${industry.slug}#service`,
        name: `${industry.name} AI Automation`,
        serviceType: "Industry-Specific AI Solutions",
        provider: { "@id": `${SITE_CONFIG.domain}/#org` },
        areaServed: SITE_CONFIG.areaServed.map((area) => ({
          "@type": "Country",
          name: area,
        })),
        description: industry.description,
        audience: {
          "@type": "BusinessAudience",
          name: `${industry.name} Businesses`,
        },
      },
    ],
  }
}

// How-to JSON-LD generator
export function generateHowToJsonLd(howTo: {
  name: string
  description: string
  steps: Array<{ name: string; text: string }>
  totalTime?: string
  estimatedCost?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    inLanguage: "en-US",
    ...(howTo.totalTime && { totalTime: howTo.totalTime }),
    ...(howTo.estimatedCost && { estimatedCost: howTo.estimatedCost }),
    step: howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}
