import type { Metadata } from "next"
import FAQClientPage from "./FAQClientPage"
import JsonLdScript from "@/components/json-ld-script"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SuccessNOW AI",
  description:
    "Find answers to common questions about SuccessNOW AI Superagents. Learn about pricing, implementation, industries served, ROI, and how our AI agents can transform your business.",
  alternates: {
    canonical: "https://successnow.ai/faq",
  },
}

const faqs = [
  {
    question: "What is SuccessNOW.ai?",
    answer:
      "SuccessNOW.ai is an all-in-one AI business growth platform that works 24/7 to convert leads into sales. It provides a suite of integrated AI-powered tools so even small businesses can leverage advanced AI without a big team. Key capabilities include:\n\nAI-Powered Website: A custom, high-converting website built by an AI WebDev agent, complete with interactive voice and chat assistants that talk to visitors in real-time.\n\nAI Super Agents: Intelligent voice and chat agents trained on your business data. They instantly engage new leads, answer questions, and even make calls — acting like your best salesperson on autopilot.\n\nAI Ads Manager (AdsNOW.ai): An AI agent that creates, launches, and optimizes your paid advertising campaigns around the clock to maximize ROI.\n\nAI SEO Agent (SEONOW.ai): An AI tool that continuously improves your search engine rankings and boosts your visibility in organic and AI-driven search results.\n\nEnd-to-End Automation: Automated workflows for lead capture, follow-up nurturing, appointment booking, sales processes, and client retention – all without human intervention.\n\nTogether, these features allow SuccessNOW.ai to learn, sell, and scale your business automatically, engaging customers 24/7 while you focus on other tasks. It's like having an entire digital sales and marketing team powered by AI on your side.",
  },
  {
    question: "What makes SuccessNOW's AI Agents different?",
    answer:
      "SuccessNOW.ai's AI Super Agents aren't static chatbots – they learn and adapt with every interaction. Here's what sets them apart from ordinary bots:\n\nContextual Memory: Before each call, chat, or email, the AI agent reviews past CRM notes and the customer's history to understand their needs and context. This means it speaks to clients with awareness of prior conversations (whether those were with a human or AI).\n\nPersonalized Interactions: The agents remember individual preferences and tailor every response or offer to the person they're engaging. Conversations feel customized to the client's situation, not like generic canned replies.\n\nAuto-Updated Records: After every interaction, the AI agent automatically updates the client's records in the CRM with call notes, outcomes, and next steps. Nothing falls through the cracks – it's as diligent as your best human rep at note-taking.\n\nContinuous Learning: The AI gets smarter with each engagement. It refines its approach based on what works or doesn't, steadily improving over time. This means relationships deepen and conversations feel more human the longer you use the system.\n\nThese capabilities allow SuccessNOW's agents to build relationships that feel surprisingly human, even though they are automated. In fact, industry research suggests that generative AI can enable warm, familiar customer service at scale – nearly 70% of organizations believe AI will help provide empathetic, human-like interactions to millions of customers. SuccessNOW's agents are designed with this philosophy, giving clients an experience that's personal and engaging, while still operating at AI speed and efficiency.",
  },
  {
    question: "How does the AI Website work?",
    answer:
      "Think of the SuccessNOW.ai website as a live AI sales rep rather than a static brochure. Our AI WebDev Agent builds your site from the ground up to be high-converting and mobile-optimized. This means the layout, content, and funnels are all crafted (and continuously refined) by AI to maximize visitor engagement and lead capture.\n\nCrucially, your website comes integrated with AI voice and chat agents. A visitor can instantly start a conversation – either by speaking or typing – with your AI assistant directly on the site. This AI agent can answer questions about your services, handle objections, and guide the visitor through the sales funnel in real time. It will capture the visitor's contact info, qualify their needs, and even book appointments or demos on the spot.\n\nAll of this happens 24/7, without any human needed. Every lead and interaction is automatically logged into your CRM. In short, the website isn't just attracting visitors; it's actively talking to them, converting them into leads, and scheduling them, just like a diligent salesperson would.",
  },
  {
    question: "How does SuccessNOW generate and convert leads?",
    answer:
      "SuccessNOW.ai deploys a complete AI-powered growth system to drive traffic, capture leads, and convert sales. It combines multiple AI agents and strategies working together:\n\nAI Paid Ads Agent (AdsNOW.ai): This agent automatically creates, launches, and optimizes your digital ad campaigns on platforms like Google, Facebook, etc. It works 24/7 adjusting bids and creatives to get the best ROI, ensuring a steady flow of traffic and leads.\n\nAI SEO Agent (SEONOW.ai): A search optimization agent that boosts your website's organic rankings. It handles keyword research, content suggestions, and other SEO best practices to improve your visibility in search engines (including emerging AI search results).\n\nSelf-Selling Funnels: We build irresistible offer funnels (what we call \"No-Brainer Offers\") that your prospects can't ignore. These are high-converting landing pages and email/text sequences crafted to turn cold visitors into hot leads and paying customers.\n\nAI Speed-to-Lead Agent: The moment a new lead comes in, an AI agent reaches out immediately. It can call or message the lead within seconds of their inquiry, engaging them while they're most interested. Studies show that responding to a lead within one minute can boost conversion rates by up to 391%.\n\nAI Follow-Up & Nurturing Agents: Not every lead will convert right away, so the platform includes AI agents that persistently follow up and nurture your leads over time. They'll send personalized emails, texts, or even voice calls to keep the conversation going, answer additional questions, and stay top of mind.\n\nBy integrating all of these components, SuccessNOW.ai creates a constant lead generation and conversion engine. It attracts prospects via AI-optimized marketing, engages them instantly through AI conversations, and continues to follow up with them automatically.",
  },
  {
    question: "Can the AI Agents handle ongoing client service?",
    answer:
      "Yes. In addition to generating new sales, SuccessNOW.ai's agents can also serve as your AI customer service and retention team. Our AI Retention Agents are dedicated to keeping your clients happy and engaged long after the initial sale. They can:\n\nReview client history before each interaction: Just like the sales agents, the retention AI reviews all past notes and interactions with a customer before responding. This context allows it to address the client by name, acknowledge their past purchases or issues, and pick up conversations where they left off.\n\nProvide highly personalized support: The AI will use the client's preferences and history to tailor its answers and assistance. Whether a client is asking a question, needing help, or just checking in, the AI responds in a way that feels personal and relevant to that individual.\n\nProactively reach out at the right time: The retention agent doesn't just wait for inbound questions – it can proactively follow up with clients. For example, it might call or email customers when a renewal is coming up, when it's time to schedule a routine service, or just to check if everything is going well.\n\nEnsure no one slips through the cracks: Think of it as a 24/7 client concierge. Every customer gets prompt attention. If a client has an issue at midnight, the AI is there to help immediately. It makes sure every client feels cared for, which boosts satisfaction and retention.\n\nIn short, the AI agents can handle the entire customer lifecycle – from first contact to sale to ongoing support. They deliver fast, attentive service consistently.",
  },
]

const faqSchema = {
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
}

export default function FAQPage() {
  return (
    <>
      <JsonLdScript data={faqSchema} />
      <FAQClientPage faqs={faqs} />
    </>
  )
}
