import type { VoiceSnippetData } from "@/components/voice/voice-snippet-player"

interface AudioObjectSchema {
  "@type": "AudioObject"
  contentUrl?: string
  encodingFormat: "audio/mpeg"
  name: string
  description: string
  duration?: string
  uploadDate?: string
  creator?: {
    "@type": "Organization"
    name: string
    url: string
  }
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
  speakable?: {
    "@type": "SpeakableSpecification"
    xpath: string[]
  }
}

interface WebPageSchema {
  "@context": "https://schema.org"
  "@type": "WebPage"
  name: string
  description: string
  url?: string
  hasPart?: Array<{
    "@type": "WebPageElement"
    name: string
    isPartOf: string
    audio?: AudioObjectSchema
  }>
  speakable?: {
    "@type": "SpeakableSpecification"
    xpath: string[]
  }
  accessibilityFeature?: string[]
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
            name: `${faq.question} (Audio Answer)`,
            description: `AI-generated voice answer to: ${faq.question}`,
            duration: "PT60S", // Estimated 60 seconds
            uploadDate: new Date().toISOString(),
            creator: {
              "@type": "Organization",
              name: "SuccessNOW.ai",
              url: "https://successnow.ai",
            },
          },
        }),
      },
    })),
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: [
        "/html/body//h1[1]",
        "/html/body//h2[contains(@class, 'text-2xl')]",
        "/html/body//h3[contains(@class, 'text-xl')]",
        "/html/body//p[contains(@class, 'text-lg')]",
      ],
    },
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
    url: pageUrl,
    accessibilityFeature: [
      "audioDescription",
      "readingOrder",
      "structuralNavigation",
      "alternativeText",
      "voiceControl",
    ],
    ...(voiceElements &&
      voiceElements.length > 0 && {
        hasPart: voiceElements
          .filter((element) => element.voiceData?.audioUrl)
          .map((element) => ({
            "@type": "WebPageElement",
            name: `${element.name} - Audio Content`,
            isPartOf: pageUrl,
            audio: {
              "@type": "AudioObject",
              contentUrl: element.voiceData!.audioUrl!,
              encodingFormat: "audio/mpeg",
              name: `${element.name} (Voice Snippet)`,
              description: `AI-generated voice content for ${element.name} - SuccessNOW.ai business automation`,
              duration: "PT60S",
              uploadDate: new Date().toISOString(),
              creator: {
                "@type": "Organization",
                name: "SuccessNOW.ai",
                url: "https://successnow.ai",
              },
            },
          })),
      }),
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: [
        "/html/body//h1[1]",
        "/html/body//section//h2[contains(@class, 'text-')]",
        "/html/body//p[contains(@class, 'text-xl')]",
        "/html/body//div[contains(@class, 'text-lg')]",
      ],
    },
  }
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SuccessNOW.ai",
    url: "https://successnow.ai",
    description:
      "AI Super Agents that learn, sell, and scale your business 24/7. All-in-one AI platform for lead generation, customer engagement, and business automation with voice-enabled AI agents.",
    founder: {
      "@type": "Person",
      name: "John Potvin",
      jobTitle: "Founder & CEO",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Business Solutions with Voice Technology",
      itemListElement: [
        {
          "@type": "Offer",
          name: "AI Super Agents Platform",
          description:
            "Complete AI-powered business automation with voice-enabled agents, CRM integration, and 24/7 lead conversion. Voice AI at $0.07/minute.",
        },
        {
          "@type": "Offer",
          name: "AgencyNow.ai Reseller Program",
          description:
            "White-label AI agency program with 40% recurring commissions for marketing agencies and consultants. Includes voice AI capabilities.",
        },
        {
          "@type": "Offer",
          name: "Pilot Program",
          description:
            "90% off setup ($988 instead of $9,988) and 50% off monthly fees for life ($997/month). Includes AdsNow.ai Platinum and AI SEO.",
        },
      ],
    },
  }
}

export function generateAudioContentSchema(title: string, description: string, audioUrl: string, category: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    name: title,
    description: description,
    contentUrl: audioUrl,
    encodingFormat: "audio/mpeg",
    duration: "PT60S",
    uploadDate: new Date().toISOString(),
    creator: {
      "@type": "Organization",
      name: "SuccessNOW.ai",
      url: "https://successnow.ai",
    },
    genre: "Business Education",
    keywords: [
      "AI business automation",
      "voice AI agents",
      "lead generation",
      "customer engagement",
      "business growth",
      category,
    ],
    inLanguage: "en-US",
    accessibilityFeature: ["audioDescription", "voiceControl"],
    learningResourceType: "Audio Guide",
    educationalLevel: "Professional",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Business Owners",
    },
  }
}

export function generateVoiceSearchSchema(pageTitle: string, keyQuestions: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: [
        "/html/body//h1[1]",
        "/html/body//h2[contains(@class, 'text-')]",
        "/html/body//p[contains(@class, 'text-xl')]",
      ],
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: keyQuestions.map((question) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Learn more about ${question.toLowerCase()} with SuccessNOW.ai's AI Super Agents platform.`,
        },
      })),
    },
  }
}

interface StructuredDataProps {
  schema: FAQSchema | WebPageSchema | OrganizationSchema | any
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
