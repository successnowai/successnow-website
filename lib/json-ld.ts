// lib/json-ld.ts

// 1. SITE CONFIGURATION
// Central source of truth for all business-related data.
export const SITE_CONFIG = {
  domain: "https://successnow.ai",
  brandName: "SuccessNOW",
  fullName: "SuccessNOW AI",
  description:
    "AI Superagents that work 24/7 to convert leads, book appointments, and nurture customers for your business.",
  logo: {
    url: "https://successnow.ai/images/successnow-logo.png",
    width: 400,
    height: 400,
  },
  founder: {
    name: "John Potvin",
    url: "https://www.linkedin.com/in/john-potvin-65231229/",
  },
  foundingDate: "2024-01-01",
  email: "support@successnow.ai",
  phone: "+1-888-555-AI-NOW", // Example phone
  socialProfiles: [
    "https://www.facebook.com/profile.php?id=61578055388858",
    "https://www.instagram.com/successnowai/",
    "https://www.linkedin.com/company/success-now-ai/",
    "https://x.com/successnowx",
    "https://www.tiktok.com/@successnow.ai",
    "https://www.youtube.com/@SuccessNow-AI-Agents",
  ],
  areaServed: ["United States", "Canada"],
  priceRange: "$997 - $1994",
}

// 2. BASE SCHEMA BUILDERS (Sitewide)
// These are included on every page.

const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_CONFIG.domain}/#org`,
  name: SITE_CONFIG.fullName,
  alternateName: SITE_CONFIG.brandName,
  url: SITE_CONFIG.domain,
  logo: {
    "@type": "ImageObject",
    url: SITE_CONFIG.logo.url,
    width: SITE_CONFIG.logo.width,
    height: SITE_CONFIG.logo.height,
  },
  description: SITE_CONFIG.description,
  foundingDate: SITE_CONFIG.foundingDate,
  founder: {
    "@type": "Person",
    "@id": `${SITE_CONFIG.domain}/#person-john-potvin`,
    name: SITE_CONFIG.founder.name,
    url: SITE_CONFIG.founder.url,
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
    },
  ],
  termsOfService: `${SITE_CONFIG.domain}/terms`,
  privacyPolicy: `${SITE_CONFIG.domain}/privacy`,
}

const websiteSchema = {
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
}

// 3. PAGE-SPECIFIC SCHEMA BUILDERS

/**
 * Generates JSON-LD for the Home Page.
 */
export function generateHomePageJsonLd() {
  const homePageSchema = {
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.domain}/#webpage`,
    url: SITE_CONFIG.domain,
    name: `${SITE_CONFIG.fullName} - AI Superagent System`,
    description:
      "Our AI Superagents convert, book, and nurture leads 24/7 — while you get back your time. Never lose a lead again.",
    isPartOf: { "@id": `${SITE_CONFIG.domain}/#website` },
    about: { "@id": `${SITE_CONFIG.domain}/#org` },
  }

  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, homePageSchema],
  }
}

/**
 * Generates JSON-LD for the About Us Page.
 */
export function generateAboutPageJsonLd() {
  const aboutPageSchema = {
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.domain}/about/#webpage`,
    url: `${SITE_CONFIG.domain}/about`,
    name: `About Us – The ${SITE_CONFIG.brandName} Story`,
    description: `Learn how founder John Potvin's journey from door-to-door sales to AI innovation led to the creation of ${SITE_CONFIG.fullName}, a global automation platform.`,
    isPartOf: { "@id": `${SITE_CONFIG.domain}/#website` },
    about: { "@id": `${SITE_CONFIG.domain}/#org` },
    mainEntity: { "@id": `${SITE_CONFIG.domain}/#person-john-potvin` },
  }

  const personSchema = {
    "@type": "Person",
    "@id": `${SITE_CONFIG.domain}/#person-john-potvin`,
    name: SITE_CONFIG.founder.name,
    url: SITE_CONFIG.founder.url,
    jobTitle: "Founder & CEO",
    worksFor: { "@id": `${SITE_CONFIG.domain}/#org` },
    description:
      "John Potvin is a lifelong sales innovator and the founder of SuccessNOW.ai, where he applies decades of experience in sales systems and business growth to AI-powered automation.",
    sameAs: [
      SITE_CONFIG.founder.url,
      ...SITE_CONFIG.socialProfiles.filter((p) => p.includes("linkedin") || p.includes("x.com")),
    ],
  }

  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, aboutPageSchema, personSchema],
  }
}

/**
 * Generates JSON-LD for the main FAQ Page.
 */
export function generateFaqPageJsonLd(faqs: Array<{ question: string; answer: string }>) {
  const faqPageSchema = {
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.domain}/faq/#webpage`,
    url: `${SITE_CONFIG.domain}/faq`,
    name: `Frequently Asked Questions - ${SITE_CONFIG.brandName}`,
    description: `Find answers to common questions about ${SITE_CONFIG.brandName}'s AI Superagents, pricing, features, and how to get started.`,
    isPartOf: { "@id": `${SITE_CONFIG.domain}/#website` },
  }

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${SITE_CONFIG.domain}/faq/#faq`,
    mainEntity: faqs.map((faq, index) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, faqPageSchema, faqSchema],
  }
}

/**
 * Generates JSON-LD for an Industry Page.
 */
export function generateIndustryPageJsonLd(industry: {
  slug: string
  name: string
  description: string
}) {
  const pageUrl = `${SITE_CONFIG.domain}/${industry.slug}`
  const industryPageSchema = {
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: `${industry.name} AI Solutions - ${SITE_CONFIG.brandName}`,
    description: industry.description,
    isPartOf: { "@id": `${SITE_CONFIG.domain}/#website` },
    about: { "@id": `${pageUrl}/#service` },
  }

  const serviceSchema = {
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    name: `AI Automation for ${industry.name}`,
    serviceType: "Industry-Specific Business Automation",
    provider: { "@id": `${SITE_CONFIG.domain}/#org` },
    areaServed: SITE_CONFIG.areaServed.map((area) => ({ "@type": "Country", name: area })),
    description: industry.description,
    audience: {
      "@type": "BusinessAudience",
      name: `${industry.name} Businesses`,
    },
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
        unitText: "monthly",
      },
    },
  }

  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, industryPageSchema, serviceSchema],
  }
}
