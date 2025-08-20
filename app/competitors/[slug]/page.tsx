import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, Zap, Sparkles, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import StarryBackground from "@/components/ui/starry-background"
import { CompetitorBreadcrumb } from "@/components/ui/competitor-breadcrumb"
import { RelatedComparisons } from "@/components/ui/related-comparisons"
import { CompetitorComparisonSchema, CompetitorFAQSchema } from "@/components/seo/competitor-schema"

// Competitor data structure
const competitorData = {
  "lindy-ai": {
    name: "Lindy AI",
    hero: {
      title: "Why pay triple the rate for half the features?",
      subtitle:
        "Lindy is billed as an AI calling assistant ($0.19/min) that mainly answers calls. But SuccessNOW is your entire growth engine – omnichannel AI agents that make calls, SMS, email, chat, plus built‑in ads, SEO, funnels, and integrations.",
      tagline: "Lindy answers calls; SuccessNOW converts leads into customers.",
    },
    comparison: {
      pricing: {
        competitor: "$0.19/min",
        successnow: "$0.07/min",
        savings: "More than half Lindy's rate",
      },
      channels: {
        competitor: "Primarily voice (with some SMS/email)",
        successnow: "Every channel – voice, SMS, email, WhatsApp, DMs, web chat",
      },
      advertising: {
        competitor: "No built-in ad or traffic tool",
        successnow: "AdsNow.ai (AI‑powered ad campaigns) at no extra platform cost",
      },
      seo: {
        competitor: "No SEO or content growth features",
        successnow: "SEOExperts.ai for automated organic growth",
      },
      funnels: {
        competitor: "Doesn't help build pages or funnels",
        successnow: "Creates high-converting websites and funnels on signup",
      },
      integrations: {
        competitor: "Integrates with your CRM, but custom work means coding",
        successnow: "DevNow.ai offers custom integrations and API access, plus all major CRM sync out-of-box",
      },
    },
    features: [
      {
        title: "AI Super Agents (SalesagentNOW.ai)",
        description:
          'Think of SuccessNOW as "your best salesperson who never sleeps." Our AI agents take & make calls, answer SMS/Email/Social, qualify leads, book appointments, and even launch paid ads — all 24/7. They remember context from every interaction, updating your CRM in real time and nurturing prospects seamlessly.',
      },
      {
        title: "AdsNow.ai – AI Advertising",
        description:
          "Unlike Lindy, SuccessNOW's platform proactively drives traffic. AdsNow.ai (included at a $998/mo value) uses AI targeting to put your offer in front of the right people. It automates campaign setup and optimization, so leads flow into your newly built funnel from day one.",
      },
      {
        title: "SEOExperts.ai – Organic Growth",
        description:
          "We don't stop at paid ads. SuccessNOW includes AI-powered SEO to climb Google and get free traffic. Our agents optimize your content and rank you higher, turning every blog post into a lead magnet.",
      },
    ],
    painPoints:
      "Every minute you're stuck using inferior tools, your business bleeds money. Calls after hours go to voicemail (Lindy can't capture them). That's an industry-average $50K+ lost per year in missed sales. While you wait days to call back, 70% of prospects have already bought elsewhere.",
    cta: {
      title: "Act now: Join our pilot program and get the full SuccessNOW suite for pennies.",
      offer: "Today's deal: only $997 setup (90% off!) and your first 3 months FREE, cancel any time.",
      includes:
        "This includes custom site, funnels, AdsNow Platinum, SEOExperts, and unlimited AI agents. (Valued at over $4,000/mo.)",
    },
  },
  justcall: {
    name: "JustCall",
    hero: {
      title: "JustCall charges you like it's 1999",
      subtitle:
        "Nearly $1/min for its AI voice agent, and treats its tools as a virtual call center. SuccessNOW is the 24/7 AI sales force that costs pennies and closes deals. While JustCall is a messaging/call tool, SuccessNOW is a full growth ecosystem.",
      tagline:
        "Why hire expensive operators for repetitive calls when an AI agent can qualify and book leads 10× cheaper?",
    },
    comparison: {
      pricing: {
        competitor: "$0.99/min",
        successnow: "$0.07/min",
        savings: "About 10× cheaper per minute",
      },
      channels: {
        competitor: "Essentially a phone/SMS/Email system (a virtual call center)",
        successnow: "Everything: calls, text, email, social media, WhatsApp, chat – truly omnichannel",
      },
      aiSalesBots: {
        competitor: "Agents can take inbound calls, but require heavy human oversight",
        successnow:
          "AI Super Agents not only answer inbound leads, they proactively follow up, qualify, nurture, and close using natural conversation",
      },
      crmFunnels: {
        competitor: "Basic CRM integration",
        successnow: "Full CRM sync plus instant white-label website and funnels",
      },
      adsSeo: {
        competitor: "No built-in marketing features",
        successnow: "AdsNow.ai Platinum and SEOExperts.ai",
      },
    },
    features: [
      {
        title: "AI Agents (SalesagentNOW.ai)",
        description:
          "SuccessNOW's agents answer and initiate calls, texts, emails, social messages – qualifying leads in real time. While JustCall needs humans to manage follow-ups, SuccessNOW's AI proactively nurtures every prospect.",
      },
      {
        title: "AdsNow.ai & SEOExperts.ai",
        description:
          "We don't stop at calls. SuccessNOW runs your ads and SEO automatically (Worth ~$2,000/mo value). These lead-gen engines feed into your AI agents.",
      },
      {
        title: "Integrated Funnels & Site",
        description:
          "From day one, SuccessNOW spins up a high-converting website and sales funnels tailored to your niche. Leads that come in through ads or organic search are captured by our funnels and handed off to AI agents.",
      },
    ],
    painPoints:
      "You cannot afford missed opportunities. With JustCall, after-hours inquiries and unanswered texts slip away. Each missed lead is lost forever. Studies show slow response kills 70% of deals. Inconsistent follow-up wastes 80% of qualified leads.",
    cta: {
      title: "Don't wait: SuccessNOW's full package is live now at a crazy discount.",
      offer: "For a limited time, get the complete suite for $997 setup + 3 months FREE, cancel anytime.",
      includes:
        "That includes custom site, funnels, AI agents, AdsNow.ai Platinum, SEOExperts.ai, and all features in our platform.",
    },
  },
  synthflow: {
    name: "Synthflow",
    hero: {
      title: "Synthflow markets an AI voice agent at about $0.12–$0.13/min",
      subtitle:
        "After your plan's included minutes, plus separate platform fees. SuccessNOW is nearly half the price, plus does so much more. Synthflow plugs into Salesforce for voice calls, but SuccessNOW plugs into your entire sales and marketing machine.",
      tagline: "Synthflow gives you calls; SuccessNOW gives you calls and customers and growth.",
    },
    comparison: {
      pricing: {
        competitor: "$0.13/min after 2,000 free minutes",
        successnow: "$0.07/min (pilot rate)",
        savings: "Roughly half or better on a pro-for-pro basis",
      },
      channels: {
        competitor: "Voice agents (30+ languages) and tight Salesforce CRM integration",
        successnow: "All channels (calls, text, email, social, web chat) and integrates with any CRM",
      },
      adsSeo: {
        competitor: "No built-in marketing tools",
        successnow: "Both AdsNow.ai and SEOExperts.ai to drive traffic and optimize content",
      },
      funnels: {
        competitor: "Requires you to build your own funnel outside the tool",
        successnow: "Instantly deploys a high-converting, branded website and sales funnel on signup",
      },
      customization: {
        competitor: "Developer-friendly (no-code builder), but scope limited to voice flows",
        successnow: "DevNow.ai offers custom bots and automations out of the box",
      },
    },
    features: [
      {
        title: "Voice + Omni-Channels (SalesagentNOW.ai)",
        description:
          "Yes, SuccessNOW has speech-to-text as good as Synthflow, but that's just the start. Our AI agents not only talk to callers, they also text, email, and chat your leads continuously. They remember past conversations and can pivot across channels.",
      },
      {
        title: "AdsNow.ai & SEOExperts.ai",
        description:
          "Synthflow has none, so your only traffic source is your own outreach. SuccessNOW injects leads directly with AI ads and SEO. Our AI builds and manages ad campaigns (optimizing for ROI) and keeps you ranking high on Google.",
      },
      {
        title: "Ready Funnels & Websites",
        description:
          "Immediately on signup you get a conversion-optimized site and multi-step funnel. It's battle-tested in every industry. Synthflow expects you to bring your own front end.",
      },
    ],
    painPoints:
      "Missing even a few leads means losing real revenue. Synthflow's limitations are the same old problems: calls at 2am go unanswered, email inquiries get ignored, follow-ups slip. Meanwhile, your competitors with SuccessNOW are capturing those leads instantly.",
    cta: {
      title: "Join Now: For a limited time, lock in our pilot deal.",
      offer: "$997 setup + 3 months FREE – everything included.",
      includes:
        "You get the fully integrated SuccessNOW platform (Agents, AdsNow, SEO, Funnels, DevNow, Agency partner materials) for 79% off.",
    },
  },
  "regal-ai": {
    name: "Regal AI",
    hero: {
      title: "Regal.ai is an enterprise-grade contact center solution",
      subtitle:
        "Voice-first, for large operations priced around $0.10–$0.20/min. It's powerful, but it's a single enterprise tool – expensive and focused on calls. SuccessNOW gives you that power without the price, plus a full marketing suite.",
      tagline: "Why pay enterprise prices for only calls, when SuccessNOW gives you the entire suite for 90% less?",
    },
    comparison: {
      pricing: {
        competitor: "$0.10–$0.20/min, aimed at Fortune 500 budgets",
        successnow: "$0.07/min (pilot), half of that at scale",
        savings: "Even better: our pilot cuts voice cost 50% off",
      },
      useCase: {
        competitor: "Built for large inbound/outbound call centers, requires heavy setup",
        successnow:
          "Plug‑and‑play: within minutes you have AI agents making calls and handling texts/emails/social on autopilot",
      },
      channels: {
        competitor: "Voice-first (SMS, email, webchat too)",
        successnow: "Also omnichannel, but with Marketing integration. We feed your entire marketing funnel",
      },
      features: {
        competitor:
          "Deep AI analytics (conversation intelligence, A/B testing, orchestration) – great for call centers",
        successnow:
          "Covers the whole business pipeline: AI agents qualify and close leads, plus AdsNow/SEO drive traffic into it",
      },
    },
    features: [
      {
        title: "Enterprise AI Agents",
        description:
          "SuccessNOW's agents are enterprise-caliber: they handle multiple channels, context switching, and complex workflows. They can trigger outbound calls, SMS, email sequences, etc., just like Regal's agents, but at a small fraction of the investment.",
      },
      {
        title: "Full Marketing Stack",
        description:
          "Regal has no marketing products. SuccessNOW includes AdsNow.ai and SEOExperts.ai as standard. This gives you a complete pipeline – lead acquisition (ads/SEO) + lead conversion (AI agents) + sales nurture (funnels) – in one budget.",
      },
      {
        title: "Pilot Program",
        description:
          "We've even structured a pilot to make switching easy. Instead of Regal's $25K entry fee, get SuccessNOW for $988 one-time + 50% off forever. You keep enterprise-grade voice AI plus all our ads/SEO tech.",
      },
    ],
    painPoints:
      "Big companies using Regal aren't losing leads – big sums are invested to capture them. But for you, missing leads is just as costly. Every unsaved lead in your small business eats up your margins. Studies show customers prefer instant responses – if you're still manually chasing calls, you lose 70% of deals.",
    cta: {
      title: "Enterprise Power, SMB Price: For a very limited time, get the SuccessNOW Enterprise package",
      offer: "$997 setup (was $9,988) and 50% off monthly.",
      includes:
        "This includes unlimited AI agents, full lead management suite, AdsNow Platinum ($998 value), SEOExperts, custom funnel, and 2 months free.",
    },
  },
  "resemble-ai": {
    name: "Resemble AI",
    hero: {
      title: "Resemble AI charges a scant $0.018/min",
      subtitle:
        "But that only gets you voice cloning (text-to-speech). It can mimic voices, not engage prospects. SuccessNOW gives you real conversational agents who think, sell, and book appointments – plus ads, SEO, funnels and more.",
      tagline: "Resemble gives you a fake voice; SuccessNOW gives you a real sales team.",
    },
    comparison: {
      pricing: {
        competitor: "$0.018/min, but it's just audio generation",
        successnow: "$0.07/min pilot includes conversational capability and outcome (sales), not just talking",
        savings: "Real conversations vs fake voices",
      },
      functionality: {
        competitor: '"Give me this voice clip." It\'s for content creators. No conversation logic.',
        successnow: "24/7 digital salesperson who calls leads, asks questions, and books them on your calendar",
      },
      omnichannel: {
        competitor: "Strictly voice output",
        successnow: "Agents handle voice and text/e-mail/social. Can send email follow-up or text reminders",
      },
      marketing: {
        competitor: "No marketing tools",
        successnow: "Bundles AdsNow.ai, SEOExperts.ai, Funnels, and Agency support",
      },
    },
    features: [
      {
        title: "True Conversational Agents",
        description:
          'SuccessNOW\'s AI is built on GPT‑4o; it has natural language understanding and memory. Our agents can qualify a lead in a call, answer objections, and even pivot to email or chat to close. Resemble simply says "Playing pre-recorded voice" – it has no agency.',
      },
      {
        title: "Sales Automation",
        description:
          "With SuccessNOW, every prospect gets a full sales sequence. Your AI agent will call, follow up via SMS/email, and if they don't respond, trigger retargeting ads via AdsNow. Resemble can't do any of that – it doesn't automate anything beyond speech.",
      },
      {
        title: "Growth Tools Included",
        description:
          "Unlike Resemble, SuccessNOW includes a complete growth toolkit: live ad campaigns, SEO content, ready-made funnels – all aimed at feeding more leads to your AI team. Resemble lacks any of this; you'd still need to build or buy it yourself.",
      },
    ],
    painPoints:
      "Imagine using Resemble's clone to record a voicemail greeting, only to still lose the lead as soon as the beep ended. That's the business risk of a static \"voice.\" Every day you rely on only call recordings or a human salesperson, you're missing leads overnight.",
    cta: {
      title: "Get the Real Deal: For a limited time, lock in SuccessNOW's full suite at pilot pricing.",
      offer: "Only $997 one-time (normally $9,988) and your first 3 months FREE of platform.",
      includes:
        "You'll get unlimited AI voice agents, website+funnels, AdsNow Platinum, SEOExperts, and everything else we have.",
    },
  },
  "thinkrr-ai": {
    name: "Thinkrr.ai",
    hero: {
      title: "Thinkrr's AVA Voice AI for agencies costs $497/mo plus $0.18/min voice usage",
      subtitle:
        "And it's tied to HighLevel. It's basically a voicemail/appointment setter. SuccessNOW is three times cheaper, fully omnichannel, and far more powerful. While Thinkrr is \"a voice tool,\" SuccessNOW is an entire agency in a box.",
      tagline: "Why rent a receptionist when you can deploy a full AI team?",
    },
    comparison: {
      pricing: {
        competitor: "$497/mo + $0.18/min of talk",
        successnow: "$997 setup + $997/mo with half-price voice",
        savings: "Effectively ~$0.07/min. That's ~3x cheaper on voice",
      },
      channels: {
        competitor: "Limited to voice (inbound/outbound) and HighLevel integration",
        successnow: "Voice, SMS, email, chat, WhatsApp and plugs into any CRM/Web",
      },
      aiCapabilities: {
        competitor: "AVA can handle calls and GHL workflows",
        successnow: "Agents go further: they qualify, book, follow up, and even do prospect research",
      },
      marketing: {
        competitor: "No ads or SEO. Creates a demo site, but it's just a portal",
        successnow: "Launches full marketing campaigns (AdsNow.ai) and SEO content, plus a conversion funnel",
      },
    },
    features: [
      {
        title: "Voice + Omni-Channel Agents",
        description:
          "Yes, Thinkrr can do local IVR and some workflows, but SuccessNOW's agents respond on every channel – not just calls. They'll text/email a lead if they don't pick up, and update your CRM instantly.",
      },
      {
        title: "AdsNow.ai & SEO",
        description:
          "SuccessNOW's platform includes an entire ad agency and SEO team for free. Thinkrr offers none of this. We basically hand you a turnkey marketing funnel; you just kick back.",
      },
      {
        title: "Funnels & Websites",
        description:
          "Every SuccessNOW signup gets a brandable website and funnel built-in. Thinkrr only gives you a one-page demo dashboard. With SuccessNOW, every service you sell comes with its own lead-gen funnel out of the box.",
      },
    ],
    painPoints:
      "Thinkrr is a tool; SuccessNOW is a partner. If you're an agency or high-volume biz, using only Thinkrr means juggling clients across multiple platforms and still hiring people. Every feature gap in Thinkrr is another gap in revenue.",
    cta: {
      title: "Turnkey Agency-in-a-Box: Join our pilot and launch with the full SuccessNOW stack",
      offer: "$997 setup + 3 months FREE.",
      includes:
        "You get our Platinum platform, including AdsNow.ai and SEOExperts.ai, unlimited AI agents, plus our DFY agency framework.",
    },
  },
  hubspot: {
    name: "HubSpot",
    hero: {
      title: "HubSpot is a great tracker",
      subtitle:
        "But at $100+/user/mo (Professional Sales Hub), it's a high-ticket CRM, not an AI-first sales team. SuccessNOW is built from the ground up for closing deals, integrating AI agents with ads and SEO – all for a fraction of the cost.",
      tagline: "HubSpot helps you track leads. SuccessNOW helps you close them instantly.",
    },
    comparison: {
      pricing: {
        competitor: "$100 per user per month plus a $1,500 onboarding fee",
        successnow: "$997 one-time + $997/mo flat (no per-seat scaling) – you get unlimited AI agents",
        savings: "For lead generation, we even include Ads/SEO support (nearly $2,000/mo value)",
      },
      aiVsCrm: {
        competitor:
          "CRM is essentially a database that you populate. Has some AI-writing tools, but nothing that actively engages leads",
        successnow: "AI agents become your sales reps – they follow up in real time and never forget a lead",
      },
      omnichannel: {
        competitor: "Email, chat widgets, and some calling (15 min/mo per user)",
        successnow: "Full omnichannel outreach (calls, SMS, WhatsApp, social, web chat) around the clock",
      },
      marketing: {
        competitor: "Marketing Hub can handle emails and landing pages, but it's a separate product (expensive)",
        successnow: "Includes automated ad campaigns and SEO built-in",
      },
    },
    features: [
      {
        title: "24/7 AI Sales Agents",
        description:
          "HubSpot can notify a rep when a lead comes in. SuccessNOW simply has the agent handle it immediately, day or night. Your HubSpot data is useless if no one calls back fast; our agents are the callback and they never miss.",
      },
      {
        title: "All-in-One Growth",
        description:
          "We integrate ads (AdsNow.ai) and SEO with your sales pipeline. HubSpot alone won't do that – you'd have to connect to Google Ads or hire a marketing agency. SuccessNOW does it for you.",
      },
      {
        title: "Plug-and-Play",
        description:
          "HubSpot can be as simple as free CRM, but to get serious marketing/automation, you drop thousands. SuccessNOW's pilot is turnkey (AI, ads, SEO, site, funnels) for one price. No upsells needed.",
      },
    ],
    painPoints:
      "Imagine spending hundreds per seat on HubSpot each month only to find leads still slipping away. HubSpot's fancy reports don't capture business that never happened. Every form fill or chat request that languishes for hours is lost.",
    cta: {
      title: "Stop tracking, start dominating: Try SuccessNOW with our pilot pricing.",
      offer: "$997 setup, 3 months FREE – includes everything (AI agents, full ads/SEO suite, funnels).",
      includes: "We'll even discount voice usage 50% (to $0.07/min).",
    },
  },
  salesforce: {
    name: "Salesforce",
    hero: {
      title: "Salesforce is a massive, multi-hundred-dollar-per-user CRM",
      subtitle:
        "With endless customization. It's a database for deals, not an AI rainmaker. SuccessNOW is simple plug-and-play: deploy AI agents that automatically get leads, qualify them, and close sales — with Ads and SEO built in.",
      tagline: "Salesforce is a complex data warehouse; SuccessNOW is a deal-maker in your pocket.",
    },
    comparison: {
      pricing: {
        competitor: "Starter starts at $25/user/mo, but true enterprise features cost $165–$330+/user/mo",
        successnow: "$997 one-time + $997/mo total, no per-user fees, all channels included",
        savings: "You save thousands on licensing",
      },
      aiReadiness: {
        competitor:
          "Has released AI (Einstein) for predictions, but it's mostly analytics; you still need humans or separate apps to act on leads",
        successnow:
          "AI agents come live and immediately act on leads 24/7. No Salesforce admin or complex flows needed",
      },
      complexity: {
        competitor: "Setting up can take months with consultants",
        successnow:
          "Instant: we configure your workflows on our end. Within minutes of signing up, your AI is calling leads or running ads",
      },
      integratedGrowth: {
        competitor: "Out of the box, does not run ads, SEO, or websites",
        successnow:
          "Bundles an entire marketing stack. You get paid and organic traffic feeding your Salesforce or any CRM",
      },
    },
    features: [
      {
        title: "AI Super Agents",
        description:
          "Salesforce can route leads to reps; SuccessNOW's agents become your reps. They handle calls/text/emails on autopilot, ensuring no Salesforce-recorded lead ever goes cold.",
      },
      {
        title: "Full Lead Gen",
        description:
          "SuccessNOW does what Salesforce doesn't – generating leads. Our AdsNow.ai brings new prospects daily, and SEOExperts ensures people find you online. This turns Salesforce from an after-the-fact tracker into a front-line growth engine.",
      },
      {
        title: "Instant ROI",
        description:
          "Think of SuccessNOW as an immediate sales hire. Training it is instant and it costs pennies on the dollar of a human. Salesforce's AI apps exist, but a human must still feed and manage them. We do it for you.",
      },
    ],
    painPoints:
      "Every moment you spend in Salesforce adjusting fields or waiting on IT is a moment that lead is cooling off. As data shows, speed wins: prospects choose whoever answers first. If your Salesforce alerts ping but humans can't respond, SuccessNOW steps in instantly.",
    cta: {
      title: "Flip the switch: Go from zero to AI-driven sales in minutes.",
      offer: "Pilot pricing: $997 setup + 3 months free, includes everything (AI voice, funnels, ads/SEO).",
      includes: "This is like buying Salesforce and getting a built-in sales team for under $1K.",
    },
  },
  claude: {
    name: "Claude",
    hero: {
      title: "Claude (by Anthropic) is a next-gen LLM for research and writing",
      subtitle:
        "Think \"smarter ChatGPT.\" It's great for generating detailed answers and planning, but not for running a business's sales process. Claude chats; SuccessNOW converts. While Claude can sift information and write plans, SuccessNOW's AI agents are built to actively call, message, and close real customers 24/7.",
      tagline: "Claude chats; SuccessNOW converts.",
    },
    comparison: {
      function: {
        competitor:
          "AI collaborator that answers questions, drafts content, and digests docs. It's essentially a brainstorming partner with expanded memory",
        successnow:
          "Business execution platform: it will pick up the phone, book appointments, and launch ad campaigns automatically",
      },
      channels: {
        competitor:
          "Works in text or through integrations (like Google Docs). Doesn't by itself answer phones or send texts",
        successnow: "Agents cover voice, SMS, email, social media and chat – Claude alone does none of that",
      },
      marketing: {
        competitor: "No built-in ads or CRM",
        successnow: "Includes a complete marketing funnel and campaign toolkit",
      },
      businessFocus: {
        competitor:
          "Isn't specifically for sales. Updates mention research assistants and workspace integration, but nothing about talking to customers",
        successnow: "Entire design is to capture and convert business – a difference in mission",
      },
    },
    features: [
      {
        title: "Conversational Sales vs Research",
        description:
          "Use Claude to speed up your strategy: it can search and summarize. But when a lead arrives, Claude can't pick up the phone. SuccessNOW uses its own GPT-4o instance – trained on your business – to immediately engage the lead, qualify it, and book it.",
      },
      {
        title: "Ad & SEO Inclusion",
        description:
          "Claude has no ad integration. SuccessNOW includes AdsNow.ai and SEOExperts.ai, so while Claude is aggregating info for you, SuccessNOW is getting you that info by pulling in more leads via advertising and search.",
      },
      {
        title: "Automation",
        description:
          'Claude can automate parts of content creation, but you still need tools to act. SuccessNOW is an automated tool: it will handle a whole workflow (calls + follow-ups). You won\'t catch Claude "booking a meeting" on its own; SuccessNOW is built for that.',
      },
    ],
    painPoints:
      "Think of Claude as a quiet partner helping you think. Meanwhile, every minute of quiet means your competition could be using a tool like SuccessNOW to actively sell. Leads coming in now should result in sales now, not later.",
    cta: {
      title: "The Full Conversion Platform: Deploy SuccessNOW today",
      offer: "$997 setup + 3 months FREE.",
      includes:
        "This pilot gives you unlimited AI agents to run voice+chat sales, plus AdsNow.ai Platinum ($998 value) and SEOExperts.ai.",
    },
  },
  chatgpt: {
    name: "ChatGPT",
    hero: {
      title: "ChatGPT is an extraordinary AI content engine",
      subtitle:
        "It writes copy, answers questions, and – with plugins – can automate some tasks. But it's not built to own your sales pipeline. SuccessNOW does. Where ChatGPT writes content, SuccessNOW wins clients.",
      tagline: "ChatGPT writes content; SuccessNOW wins clients.",
    },
    comparison: {
      functionality: {
        competitor:
          'Excels at generating text and answering queries. New ChatGPT "agent" can browse and even perform tasks, but still has limitations (often needing human tweaks and can\'t finalize actions)',
        successnow:
          'AI agents don\'t "get stuck" – they handle complex sales workflows themselves, booking meetings and updating systems directly',
      },
      channels: {
        competitor:
          "ChatGPT (with an agent) works with apps or browsers. Cannot make phone calls or send SMS out of the box",
        successnow: "Built for real-world outreach: voice calls, texts, emails, etc.",
      },
      leadConversion: {
        competitor: "You might prompt ChatGPT to draft an email, but it won't actually send it or follow up",
        successnow: "Agents do all of that autonomously. Lead enters, and SuccessNOW's AI handles every step to close",
      },
      marketingSuite: {
        competitor: "No native ads/SEO modules",
        successnow: "Includes AdsNow.ai and SEOExperts.ai as standard",
      },
    },
    features: [
      {
        title: "Automation vs Conversation",
        description:
          'The ChatGPT "agent" shows promise, but even tech reviewers note it still needs human help for real transactions. It may browse and fill forms, but struggles with actual bookings and can stall. SuccessNOW\'s AI was built from the ground up for sales – no sandbox, no lost context.',
      },
      {
        title: "Business Integration",
        description:
          "You can connect ChatGPT to Gmail or create a plugin, but you have to set it up for each task. SuccessNOW is a turnkey suite: within minutes, you have ads running, funnels collecting leads, and AI agents nurturing them.",
      },
      {
        title: "Result Focused",
        description:
          "ChatGPT is a tool in your toolbox. SuccessNOW is the whole toolbox plus the skilled technician. It's designed to move the needle on revenue instantly.",
      },
    ],
    painPoints:
      "A blog written by ChatGPT won't call back missed inquiries. A schedule created by ChatGPT won't automatically confirm appointments. Every minute you rely on manual processes (or need to prompt an AI for each action) costs sales.",
    cta: {
      title: "From GPT to ROI: Get the full SuccessNOW suite",
      offer: "AI Agents + Ads + SEO + Funnels – at pilot pricing: $997 setup + 3 months FREE.",
      includes: "We'll include all features (a total value of ~$4,900/mo) for a flat fee.",
    },
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const competitor = competitorData[params.slug as keyof typeof competitorData]

  if (!competitor) {
    return {
      title: "Competitor Not Found | SuccessNOW AI",
      description: "The requested competitor comparison page was not found.",
    }
  }

  return {
    title: `SuccessNOW vs ${competitor.name} - Complete Comparison | SuccessNOW AI`,
    description: `See why SuccessNOW AI beats ${competitor.name} with better pricing, more features, and complete business automation. ${competitor.hero.tagline}`,
    keywords: `SuccessNOW vs ${competitor.name}, ${competitor.name} alternative, AI voice agents comparison, business automation comparison`,
    openGraph: {
      title: `SuccessNOW vs ${competitor.name} - Why We Win`,
      description: competitor.hero.tagline,
      url: `https://successnow.ai/competitors/${params.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(competitorData).map((slug) => ({
    slug,
  }))
}

export default function CompetitorComparisonPage({ params }: Props) {
  const competitor = competitorData[params.slug as keyof typeof competitorData]

  if (!competitor) {
    notFound()
  }

  const relatedComparisons = Object.entries(competitorData)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 6)
    .map(([slug, data]) => ({
      name: data.name,
      slug,
      description: data.hero.subtitle.slice(0, 100) + "...",
      category: getCategoryForCompetitor(data.name),
      savings: data.comparison.pricing?.savings || "Better value",
    }))

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      <CompetitorComparisonSchema
        competitorName={competitor.name}
        competitorSlug={params.slug}
        successnowAdvantages={[
          "24/7 AI voice agents",
          "Complete marketing automation",
          "Lower pricing with more features",
          "Instant setup and deployment",
        ]}
        competitorLimitations={
          competitor.comparison.channels?.competitor ? [competitor.comparison.channels.competitor] : []
        }
        pricingComparison={{
          competitor: competitor.comparison.pricing?.competitor || "Higher pricing",
          successnow: competitor.comparison.pricing?.successnow || "$997/mo",
          savings: competitor.comparison.pricing?.savings || "Better value",
        }}
      />
      <CompetitorFAQSchema competitorName={competitor.name} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <CompetitorBreadcrumb competitorName={competitor.name} competitorSlug={params.slug} />

          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/competitors"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Comparisons
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className="mb-8">
              <Badge className="bg-gray-900/90 text-white border-2 border-red-400/60 px-6 py-2 text-sm font-medium backdrop-blur-sm shadow-lg">
                <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
                Competitor Analysis
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">SuccessNOW vs</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500">
                {competitor.name}
              </span>
            </h1>

            <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{competitor.hero.title}</h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">{competitor.hero.subtitle}</p>
              <p className="text-xl font-semibold text-cyan-300">{competitor.hero.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-white">Head-to-Head</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Comparison
            </span>
          </h2>

          <div className="grid gap-8">
            {Object.entries(competitor.comparison).map(([key, value]) => (
              <Card key={key} className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="w-5 h-5 text-red-400" />
                        <span className="font-semibold text-red-300">{competitor.name}</span>
                      </div>
                      <p className="text-gray-300">{value.competitor}</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="font-semibold text-green-300">SuccessNOW</span>
                      </div>
                      <p className="text-gray-300">{value.successnow}</p>
                      {value.savings && (
                        <div className="mt-2">
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">{value.savings}</Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-white">Why SuccessNOW</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Dominates
            </span>
          </h2>

          <div className="grid gap-8">
            {competitor.features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-cyan-300 flex items-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-red-400">Every Missed Lead</span>{" "}
              <span className="text-white">Is Lost Revenue</span>
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">{competitor.painPoints}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">{competitor.cta.title}</span>
          </h2>

          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <div className="text-2xl font-bold text-white mb-4">{competitor.cta.offer}</div>
            <p className="text-lg text-gray-300 mb-4">{competitor.cta.includes}</p>
            <div className="text-sm text-green-400 font-semibold">
              30-day money-back guarantee • No Risk, Just Missed Opportunity!
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                See Live Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="https://signup.successnow.ai" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400/50 text-white hover:bg-cyan-500/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                Start Pilot Program
              </Button>
            </Link>
          </div>

          {/* Navigation to other comparisons */}
          <div className="border-t border-gray-700 pt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Compare Against Other Competitors</h3>
            <Link href="/competitors">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
                View All Comparisons
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <RelatedComparisons currentCompetitor={competitor.name} relatedComparisons={relatedComparisons} />
    </div>
  )
}

function getCategoryForCompetitor(name: string): string {
  const categories: Record<string, string> = {
    "Lindy AI": "Voice AI",
    JustCall: "Call Center",
    Synthflow: "Voice AI",
    "Regal AI": "Enterprise",
    "Resemble AI": "Voice Cloning",
    "Thinkrr.ai": "Agency Tool",
    HubSpot: "CRM",
    Salesforce: "Enterprise CRM",
    Claude: "AI Assistant",
    ChatGPT: "AI Assistant",
  }
  return categories[name] || "AI Tool"
}
