import type { VoiceSnippetData } from "@/components/voice/voice-snippet-player"

interface AudioObjectSchema {
  "@type": "AudioObject"
  contentUrl?: string
  encodingFormat: "audio/mpeg"
  name: string
  description: string
}

interface FAQSchema {
  "@context": "https://schema.org"
  "@type": "FAQPage"
  mainEntity: Array<{
    "@type": "Question"
    name: string
    acceptedAnswer: {
      "@type": "Answer"
      text: string
      audio?: AudioObjectSchema
    }
  }>
}

interface WebPageSchema {
  "@context": "https://schema.org"
  "@type": "WebPage"
  name: string
  description: string
  hasPart?: Array<{
    "@type": "WebPageElement"
    name: string
    isPartOf: string
    audio?: AudioObjectSchema
  }>
}

interface OrganizationSchema {
  "@context": "https://schema.org"
  "@type": "Organization"
  name: string
  url: string
  description: string
  founder: {
    "@type": "Person"
    name: string
    jobTitle: string
  }
  hasOfferCatalog?: {
    "@type": "OfferCatalog"
    name: string
    itemListElement: Array<{
      "@type": "Offer"
      name: string
      description: string
      audio?: AudioObjectSchema
    }>
  }
}

export function generateFAQSchema(
  faqs: Array<{
    question: string
    answer: string
    voiceData?: VoiceSnippetData
  }>,
): FAQSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
        ...(faq.voiceData?.audioUrl && {
          audio: {
            "@type": "AudioObject",
            contentUrl: faq.voiceData.audioUrl,
            encodingFormat: "audio/mpeg",
            name: `${faq.question} (Audio)`,
            description: `Voice snippet answering: ${faq.question}`,
          },
        }),
      },
    })),
  }
}

export function generateWebPageSchema(
  pageName: string,
  pageDescription: string,
  pageUrl: string,
  voiceElements?: Array<{
    name: string
    voiceData?: VoiceSnippetData
  }>,
): WebPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageName,
    description: pageDescription,
    ...(voiceElements &&
      voiceElements.length > 0 && {
        hasPart: voiceElements
          .filter((element) => element.voiceData?.audioUrl)
          .map((element) => ({
            "@type": "WebPageElement",
            name: `${element.name} - Audio`,
            isPartOf: pageUrl,
            audio: {
              "@type": "AudioObject",
              contentUrl: element.voiceData!.audioUrl!,
              encodingFormat: "audio/mpeg",
              name: `${element.name} (Audio)`,
              description: `Voice snippet for ${element.name}`,
            },
          })),
      }),
  }
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SuccessNOW.ai",
    url: "https://successnow.ai",
    description:
      "AI Super Agents that learn, sell, and scale your business 24/7. All-in-one AI platform for lead generation, customer engagement, and business automation.",
    founder: {
      "@type": "Person",
      name: "John Potvin",
      jobTitle: "Founder & CEO",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Business Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          name: "AI Super Agents Platform",
          description:
            "Complete AI-powered business automation with voice-enabled agents, CRM integration, and 24/7 lead conversion.",
        },
        {
          "@type": "Offer",
          name: "AgencyNow.ai Reseller Program",
          description:
            "White-label AI agency program with 40% recurring commissions for marketing agencies and consultants.",
        },
      ],
    },
  }
}

interface StructuredDataProps {
  schema: FAQSchema | WebPageSchema | OrganizationSchema
}

export function StructuredData({ schema }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
