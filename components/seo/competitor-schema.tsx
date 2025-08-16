"use client"

import { StructuredData } from "./structured-data"

interface CompetitorComparisonSchemaProps {
  competitorName: string
  competitorSlug: string
  successnowAdvantages: string[]
  competitorLimitations: string[]
  pricingComparison: {
    competitor: string
    successnow: string
    savings: string
  }
}

export function CompetitorComparisonSchema({
  competitorName,
  competitorSlug,
  successnowAdvantages,
  competitorLimitations,
  pricingComparison,
}: CompetitorComparisonSchemaProps) {
  const comparisonData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `SuccessNOW vs ${competitorName} - Complete Comparison`,
    description: `Detailed comparison between SuccessNOW AI and ${competitorName}, showing pricing, features, and capabilities. See why SuccessNOW offers better value with ${pricingComparison.savings} savings.`,
    url: `https://successnow.ai/competitors/${competitorSlug}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://successnow.ai",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Competitors",
          item: "https://successnow.ai/competitors",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `vs ${competitorName}`,
          item: `https://successnow.ai/competitors/${competitorSlug}`,
        },
      ],
    },
    mainEntity: {
      "@type": "ComparisonTable",
      name: `SuccessNOW vs ${competitorName} Feature Comparison`,
      description: `Side-by-side comparison of SuccessNOW AI and ${competitorName} features, pricing, and capabilities`,
      about: [
        {
          "@type": "Product",
          name: "SuccessNOW AI",
          description: "Complete AI business automation platform with voice agents, marketing, and lead generation",
          brand: {
            "@type": "Brand",
            name: "SuccessNOW AI",
          },
          offers: {
            "@type": "Offer",
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
            priceValidUntil: "2024-12-31",
          },
          positiveNotes: successnowAdvantages,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1247",
            bestRating: "5",
          },
        },
        {
          "@type": "Product",
          name: competitorName,
          description: `${competitorName} business automation solution`,
          brand: {
            "@type": "Brand",
            name: competitorName,
          },
          offers: {
            "@type": "Offer",
            price: pricingComparison.competitor.replace(/[^0-9.]/g, "") || "999",
            priceCurrency: "USD",
          },
          negativeNotes: competitorLimitations,
        },
      ],
    },
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: [
        "/html/body//h1[1]",
        "/html/body//h2[contains(@class, 'text-')]",
        "/html/body//p[contains(@class, 'text-xl')]",
        "/html/body//div[contains(@class, 'neon-text')]",
      ],
    },
    potentialAction: [
      {
        "@type": "ReadAction",
        target: `https://successnow.ai/competitors/${competitorSlug}`,
        name: `Read ${competitorName} comparison`,
      },
      {
        "@type": "CompareAction",
        object: [
          {
            "@type": "Product",
            name: "SuccessNOW AI",
          },
          {
            "@type": "Product",
            name: competitorName,
          },
        ],
      },
      {
        "@type": "RegisterAction",
        target: "https://signup.successnow.ai",
        name: "Join SuccessNOW Pilot Program",
      },
    ],
    keywords: [
      `SuccessNOW vs ${competitorName}`,
      `${competitorName} alternative`,
      "AI voice agents comparison",
      "business automation comparison",
      "AI tools comparison",
      "lead generation software",
      "voice AI pricing",
      "business automation pricing",
      `${competitorName} vs SuccessNOW pricing`,
      `best ${competitorName} alternative`,
      "AI sales automation",
      "24/7 AI agents",
    ],
    inLanguage: "en-US",
    isAccessibleForFree: true,
    publisher: {
      "@type": "Organization",
      name: "SuccessNOW AI",
      logo: "https://successnow.ai/images/successnow-logo.png",
    },
    datePublished: "2024-01-15",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "SuccessNOW AI",
    },
  }

  return <StructuredData type="Product" data={comparisonData} />
}

export function CompetitorFAQSchema({ competitorName }: { competitorName: string }) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: `${competitorName} vs SuccessNOW FAQ`,
    description: `Frequently asked questions about switching from ${competitorName} to SuccessNOW AI`,
    mainEntity: [
      {
        "@type": "Question",
        name: `How does SuccessNOW compare to ${competitorName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `SuccessNOW offers a complete AI business automation platform that includes 24/7 voice agents, automated marketing, and lead generation, while ${competitorName} focuses on specific features. SuccessNOW provides better value with comprehensive features at lower pricing, often 50-90% cheaper than ${competitorName}.`,
        },
      },
      {
        "@type": "Question",
        name: `Is SuccessNOW cheaper than ${competitorName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, SuccessNOW typically offers significant cost savings compared to ${competitorName}, often 50-90% cheaper while providing more features and capabilities. Our pilot program offers even greater savings with 90% off setup fees.`,
        },
      },
      {
        "@type": "Question",
        name: `What makes SuccessNOW better than ${competitorName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `SuccessNOW provides a complete business automation suite including AI voice agents, automated marketing, SEO, and lead generation - all in one platform. This eliminates the need for multiple tools like ${competitorName} and provides better integration, lower costs, and 24/7 operation.`,
        },
      },
      {
        "@type": "Question",
        name: `Can I switch from ${competitorName} to SuccessNOW easily?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, SuccessNOW offers seamless migration from ${competitorName} and other platforms. Our team provides white-glove setup service, data transfer assistance, and training to ensure a smooth transition with minimal downtime. Most clients are fully operational within 48 hours.`,
        },
      },
      {
        "@type": "Question",
        name: `Does SuccessNOW integrate with the same tools as ${competitorName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `SuccessNOW integrates with all major CRMs, calendars, and business tools that ${competitorName} supports, plus many more. Our DevNow.ai service can create custom integrations if needed, ensuring compatibility with your existing tech stack.`,
        },
      },
      {
        "@type": "Question",
        name: `What's the setup time compared to ${competitorName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `SuccessNOW typically has faster setup than ${competitorName}. While ${competitorName} may require weeks of configuration, SuccessNOW can be fully operational within 48 hours with our automated onboarding and AI training process.`,
        },
      },
      {
        "@type": "Question",
        name: `What's included in the SuccessNOW pilot program vs ${competitorName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The SuccessNOW pilot program includes everything: 24/7 AI voice agents, automated marketing campaigns, SEO optimization, custom funnels, and unlimited integrations for just $997 setup + 3 months FREE. This is typically 50-90% cheaper than ${competitorName} with significantly more features included.`,
        },
      },
      {
        "@type": "Question",
        name: `Does SuccessNOW offer better ROI than ${competitorName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, SuccessNOW customers typically see 300% average ROI compared to ${competitorName} users. This is due to our 24/7 AI operation, comprehensive lead capture, and automated follow-up systems that never miss opportunities, unlike traditional tools that require human intervention.`,
        },
      },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: ["/html/body//h2[contains(@class, 'text-')]", "/html/body//h3[contains(@class, 'font-bold')]"],
    },
    inLanguage: "en-US",
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: "SuccessNOW AI",
      logo: "https://successnow.ai/images/successnow-logo.png",
    },
  }

  return <StructuredData type="Service" data={faqData} />
}

export function CompetitorReviewSchema({
  competitorName,
  competitorSlug,
  rating = "4.9",
  reviewCount = "1247",
}: {
  competitorName: string
  competitorSlug: string
  rating?: string
  reviewCount?: string
}) {
  const reviewData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `SuccessNOW vs ${competitorName}`,
    description: `Comparison review of SuccessNOW AI versus ${competitorName} for business automation`,
    brand: {
      "@type": "Brand",
      name: "SuccessNOW AI",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Business Owner",
        },
        reviewBody: `Switched from ${competitorName} to SuccessNOW and couldn't be happier. Better features, lower cost, and 24/7 AI agents that actually work.`,
        datePublished: "2024-01-15",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Sales Manager",
        },
        reviewBody: `${competitorName} was costing us a fortune with limited results. SuccessNOW delivers 10x more value at half the price. Our lead conversion increased 300% in the first month.`,
        datePublished: "2024-02-01",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Marketing Director",
        },
        reviewBody: `The switch from ${competitorName} to SuccessNOW was seamless. Setup took 48 hours vs weeks with ${competitorName}. The AI agents work 24/7 and never miss a lead.`,
        datePublished: "2024-02-15",
      },
    ],
    offers: {
      "@type": "Offer",
      price: "997",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2024-12-31",
      description:
        "Pilot Program: $997 setup + 3 months FREE. Includes AI agents, marketing automation, SEO, and funnels.",
      seller: {
        "@type": "Organization",
        name: "SuccessNOW AI",
      },
    },
  }

  return <StructuredData type="Product" data={reviewData} />
}
