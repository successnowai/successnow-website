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
    "@type": "ComparisonTable",
    name: `SuccessNOW vs ${competitorName} - Complete Comparison`,
    description: `Detailed comparison between SuccessNOW AI and ${competitorName}, showing pricing, features, and capabilities.`,
    url: `https://successnow.ai/competitors/${competitorSlug}`,
    mainEntity: [
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
        },
        positiveNotes: successnowAdvantages,
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
          price: pricingComparison.competitor,
          priceCurrency: "USD",
        },
        negativeNotes: competitorLimitations,
      },
    ],
    about: {
      "@type": "Thing",
      name: "AI Business Automation Comparison",
      description: "Comparison of AI voice agents and business automation platforms",
    },
  }

  return <StructuredData type="Product" data={comparisonData} />
}

export function CompetitorFAQSchema({ competitorName }: { competitorName: string }) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How does SuccessNOW compare to ${competitorName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `SuccessNOW offers a complete AI business automation platform that includes voice agents, marketing automation, and lead generation, while ${competitorName} focuses on specific features. SuccessNOW provides better value with lower pricing and more comprehensive features.`,
        },
      },
      {
        "@type": "Question",
        name: `Is SuccessNOW cheaper than ${competitorName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, SuccessNOW typically offers significant cost savings compared to ${competitorName}, often 50-90% cheaper while providing more features and capabilities.`,
        },
      },
      {
        "@type": "Question",
        name: `What makes SuccessNOW better than ${competitorName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `SuccessNOW provides a complete business automation suite including AI voice agents, automated marketing, SEO, and lead generation - all in one platform. This eliminates the need for multiple tools and provides better integration and lower costs.`,
        },
      },
      {
        "@type": "Question",
        name: `Can I switch from ${competitorName} to SuccessNOW?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, SuccessNOW offers easy migration from ${competitorName} and other platforms. Our team helps with data transfer and setup to ensure a smooth transition with minimal downtime.`,
        },
      },
    ],
  }

  return <StructuredData type="Service" data={faqData} />
}
