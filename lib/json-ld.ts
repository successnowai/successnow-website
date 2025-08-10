// Site configuration - single source of truth
export const SITE_CONFIG = {
  name: "SuccessNOW AI",
  url: "https://successnow.ai",
  description:
    "Transform your business with AI Super Agents that handle customer interactions, qualify leads, and drive conversions 24/7. Get your AI website, voice agents, and automated marketing system deployed in 48-72 hours.",
  logo: "https://successnow.ai/images/successnow-logo.png",
  foundingDate: "2023-01-01",
  founder: {
    name: "John Potvin",
    jobTitle: "Founder & CEO",
    description:
      "Sales innovation expert with 20+ years experience, from door-to-door sales to AI automation. Former Director of Franchising, automotive finance manager, and martial arts gym chain owner.",
    url: "https://successnow.ai/about#john-potvin",
    sameAs: ["https://www.linkedin.com/in/johnpotvin", "https://twitter.com/johnpotvin"],
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+1-800-SUCCESS",
      email: "sales@successnow.ai",
      availableLanguage: ["English"],
      areaServed: ["US", "CA"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+1-800-SUCCESS",
      email: "support@successnow.ai",
      availableLanguage: ["English"],
      areaServed: ["US", "CA"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/successnow-ai",
    "https://www.facebook.com/successnowai",
    "https://twitter.com/successnowai",
    "https://www.youtube.com/c/successnowai",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "CA",
    addressRegion: "ON",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  serviceType: "Business Automation Software",
  priceRange: "$997-$1994",
}

// Generate sitewide JSON-LD that appears on every page
export function generateSitewideJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: {
          "@type": "ImageObject",
          url: SITE_CONFIG.logo,
          width: 200,
          height: 60,
        },
        description: SITE_CONFIG.description,
        foundingDate: SITE_CONFIG.foundingDate,
        founder: {
          "@type": "Person",
          "@id": `${SITE_CONFIG.url}/about#john-potvin`,
          name: SITE_CONFIG.founder.name,
          jobTitle: SITE_CONFIG.founder.jobTitle,
          description: SITE_CONFIG.founder.description,
          url: SITE_CONFIG.founder.url,
          sameAs: SITE_CONFIG.founder.sameAs,
        },
        contactPoint: SITE_CONFIG.contactPoint,
        sameAs: SITE_CONFIG.sameAs,
        address: SITE_CONFIG.address,
        areaServed: SITE_CONFIG.areaServed,
        serviceType: SITE_CONFIG.serviceType,
        priceRange: SITE_CONFIG.priceRange,
        termsOfService: `${SITE_CONFIG.url}/terms`,
        privacyPolicy: `${SITE_CONFIG.url}/privacy`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }
}

// Home page specific JSON-LD
export function generateHomeJsonLd() {
  const sitewide = generateSitewideJsonLd()

  const homeSpecific = {
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.url}/#webpage`,
    url: SITE_CONFIG.url,
    name: `${SITE_CONFIG.name} - AI Super Agents for Business Automation`,
    description:
      "Deploy AI agents that convert leads into sales 24/7. Get your AI website, voice agents, and automated marketing system in 48-72 hours. Transform your business with SuccessNOW AI.",
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
    about: { "@id": `${SITE_CONFIG.url}/#organization` },
    mainEntity: { "@id": `${SITE_CONFIG.url}/#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_CONFIG.url,
        },
      ],
    },
  }

  sitewide["@graph"].push(homeSpecific)
  return sitewide
}

// About page specific JSON-LD with John Potvin Person schema
export function generateAboutJsonLd() {
  const sitewide = generateSitewideJsonLd()

  const aboutSpecific = [
    {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/about#webpage`,
      url: `${SITE_CONFIG.url}/about`,
      name: "About SuccessNOW AI - The John Potvin Story",
      description:
        "Learn about John Potvin's journey from door-to-door sales to AI innovation. Discover how SuccessNOW AI transforms businesses with AI Super Agents and automated marketing systems.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
      about: { "@id": `${SITE_CONFIG.url}/about#john-potvin` },
      mainEntity: { "@id": `${SITE_CONFIG.url}/about#john-potvin` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${SITE_CONFIG.url}/about`,
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/about#john-potvin`,
      name: "John Potvin",
      givenName: "John",
      familyName: "Potvin",
      jobTitle: "Founder & CEO",
      description:
        "Lifelong sales innovator and AI automation expert. Former Director of Franchising for Rogers franchise group, automotive finance manager, and martial arts gym chain owner who scaled to $100K MRR in 6 months.",
      url: `${SITE_CONFIG.url}/about`,
      image: `${SITE_CONFIG.url}/images/john-potvin.jpg`,
      sameAs: SITE_CONFIG.founder.sameAs,
      worksFor: { "@id": `${SITE_CONFIG.url}/#organization` },
      founder: { "@id": `${SITE_CONFIG.url}/#organization` },
      knowsAbout: [
        "Sales Automation",
        "AI Business Solutions",
        "Lead Generation",
        "CRM Systems",
        "Digital Marketing",
        "Business Scaling",
        "Franchise Development",
        "Automotive Sales",
        "Fitness Industry",
      ],
      award: [
        "Director of Franchising & Sales - Rogers Franchise Group",
        "Scaled martial arts gym chain to $100K MRR in 6 months",
        "AI Innovation Business International Panel Speaker",
      ],
      alumniOf: "School of Hard Knocks - Door-to-Door Sales",
      hasOccupation: {
        "@type": "Occupation",
        name: "CEO & Founder",
        occupationLocation: SITE_CONFIG.address,
        skills: [
          "AI Implementation",
          "Sales Training",
          "Business Development",
          "Marketing Automation",
          "CRM Integration",
        ],
      },
    },
  ]

  sitewide["@graph"].push(...aboutSpecific)
  return sitewide
}

// FAQ page specific JSON-LD
export function generateFAQJsonLd() {
  const sitewide = generateSitewideJsonLd()

  const faqSpecific = [
    {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/faq#webpage`,
      url: `${SITE_CONFIG.url}/faq`,
      name: "Frequently Asked Questions - SuccessNOW AI",
      description:
        "Get answers to common questions about SuccessNOW AI's services, pricing, setup time, and how our AI Super Agents can transform your business operations.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
      mainEntity: { "@id": `${SITE_CONFIG.url}/faq#faqpage` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "FAQ",
            item: `${SITE_CONFIG.url}/faq`,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_CONFIG.url}/faq#faqpage`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is SuccessNOW AI and how does it work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SuccessNOW AI deploys AI Super Agents that handle customer interactions 24/7. Our AI agents answer calls, respond to chats, qualify leads, book appointments, and update your CRM automatically.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can I get my AI agents running?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most clients are operational within 48-72 hours. We handle complete setup including AI website, voice agents, CRM integration, and ad campaigns.",
          },
        },
        {
          "@type": "Question",
          name: "What does SuccessNOW AI cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Setup is $997 (normally $9,977) with monthly service at $997 (normally $1,994). Includes AI website, voice/chat agents, ads management, SEO, and CRM automation.",
          },
        },
        {
          "@type": "Question",
          name: "Do AI agents integrate with my CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our AI agents integrate with all major CRMs including GoHighLevel, HubSpot, and Salesforce. They automatically log notes, schedule follow-ups, and track leads.",
          },
        },
      ],
    },
  ]

  sitewide["@graph"].push(...faqSpecific)
  return sitewide
}

// Service page JSON-LD generator
export function generateServiceJsonLd(
  serviceName: string,
  serviceUrl: string,
  serviceDescription: string,
  price?: string,
) {
  const sitewide = generateSitewideJsonLd()

  const serviceSpecific = [
    {
      "@type": "WebPage",
      "@id": `${serviceUrl}#webpage`,
      url: serviceUrl,
      name: `${serviceName} - SuccessNOW AI`,
      description: serviceDescription,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
      about: { "@id": `${serviceUrl}#service` },
      mainEntity: { "@id": `${serviceUrl}#service` },
    },
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: serviceName,
      description: serviceDescription,
      provider: { "@id": `${SITE_CONFIG.url}/#organization` },
      serviceType: "AI Business Automation",
      areaServed: SITE_CONFIG.areaServed,
      offers: {
        "@type": "Offer",
        url: serviceUrl,
        price: price || "997.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        validFrom: "2024-01-01",
      },
    },
  ]

  sitewide["@graph"].push(...serviceSpecific)
  return sitewide
}

// Industry page JSON-LD generator
export function generateIndustryJsonLd(industryName: string, industryUrl: string, industryDescription: string) {
  const sitewide = generateSitewideJsonLd()

  const industrySpecific = [
    {
      "@type": "WebPage",
      "@id": `${industryUrl}#webpage`,
      url: industryUrl,
      name: `${industryName} AI Solutions - SuccessNOW AI`,
      description: industryDescription,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
      about: { "@id": `${industryUrl}#service` },
      mainEntity: { "@id": `${industryUrl}#service` },
    },
    {
      "@type": "Service",
      "@id": `${industryUrl}#service`,
      name: `${industryName} AI Automation`,
      description: industryDescription,
      provider: { "@id": `${SITE_CONFIG.url}/#organization` },
      serviceType: `${industryName} Business Automation`,
      audience: {
        "@type": "BusinessAudience",
        name: `${industryName} Businesses`,
      },
      areaServed: SITE_CONFIG.areaServed,
      offers: {
        "@type": "Offer",
        url: industryUrl,
        price: "997.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  ]

  sitewide["@graph"].push(...industrySpecific)
  return sitewide
}
