import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Zap, ArrowRight, CheckCircle, XCircle, DollarSign } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import StarryBackground from "@/components/ui/starry-background"
import CompetitorBreadcrumb from "@/components/ui/competitor-breadcrumb"
import { VoiceSnippetPlayer } from "@/components/voice/voice-snippet-player"

const competitorData = {
  "lindy-ai": {
    name: "Lindy AI",
    hero: {
      title: "Why pay triple the rate for half the features?",
      subtitle:
        "Lindy is billed as an AI calling assistant ($0.19/min) that mainly answers calls. But SuccessNOW is your entire growth engine – omnichannel AI agents that make calls, SMS, email, chat, plus built‑in ads, SEO, funnels, and integrations. In short: Lindy answers calls; SuccessNOW converts leads into customers.",
      tagline:
        "Every minute you stick with one-channel Lindy, you're losing prospects and revenue that SuccessNOW would capture.",
      urgency: "Every minute you're stuck using inferior tools, your business bleeds money.",
    },
    comparison: {
      pricing: {
        competitor: "$0.19/min (GPT-4o)",
        successnow: "$0.07/min on our pilot program",
        savings: "More than half Lindy's rate - and even lower with volume/bonus",
      },
      channels: {
        competitor: "Primarily voice (with some SMS/email)",
        successnow:
          "Every channel – voice, SMS, email, WhatsApp, DMs, web chat – from the same AI agent, so no lead slips through a gap",
      },
      advertising: {
        competitor: "No built-in ad or traffic tool",
        successnow:
          "AdsNow.ai (AI‑powered ad campaigns) at no extra platform cost. Your ads go live immediately as part of the package, maximizing ROI",
      },
      seo: {
        competitor: "No SEO or content growth features",
        successnow:
          "SEOExperts.ai for automated organic growth. It's like hiring an SEO team in the same system that handles your leads",
      },
      funnels: {
        competitor: "Doesn't help build pages or funnels",
        successnow:
          "Creates high-converting websites and funnels on signup, so you can capture and nurture leads automatically – a turnkey marketing stack out of the box",
      },
      integrations: {
        competitor: "Integrates with your CRM, but custom work means coding",
        successnow:
          "DevNow.ai offers custom integrations and API access, plus all major CRM sync out-of-box. Launch in minutes without developer headaches",
      },
      agency: {
        competitor: "No agency partnership",
        successnow:
          "SuccessNOW powers AgencyNow.ai, a done‑for-you AI agency model (50/50 revenue split) so you get ongoing support and extra reach if you want",
      },
    },
    features: [
      {
        title: "AI Super Agents (SalesBotNow.ai)",
        description:
          'Think of SuccessNOW as "your best salesperson who never sleeps." Our AI agents take & make calls, answer SMS/Email/Social, qualify leads, book appointments, and even launch paid ads — all 24/7. They remember context from every interaction, updating your CRM in real time and nurturing prospects seamlessly. This goes far beyond Lindy\'s simple answer machine.',
      },
      {
        title: "AdsNow.ai – AI Advertising",
        description:
          "Unlike Lindy, SuccessNOW's platform proactively drives traffic. AdsNow.ai (included at a $998/mo value) uses AI targeting to put your offer in front of the right people. It automates campaign setup and optimization, so leads flow into your newly built funnel from day one – no extra budget or agency needed.",
      },
      {
        title: "SEOExperts.ai – Organic Growth",
        description:
          "We don't stop at paid ads. SuccessNOW includes AI-powered SEO to climb Google and get free traffic. Our agents optimize your content and rank you higher, turning every blog post into a lead magnet. Lindy has no equivalent – with SuccessNOW, organic leads start compounding on their own.",
      },
      {
        title: "DevNow.ai – Custom Integrations",
        description:
          'Need a special integration? DevNow.ai handles it. We tailor your AI stack to your exact needs – connecting SuccessNOW to your databases, tools, or custom apps. No more "does it integrate?" worries. Our white‑label, API‑ready platform makes it plug‑and‑play across your tech stack.',
      },
      {
        title: "AgencyNow.ai – Done-For-You AI Agency",
        description:
          "Finally, whereas Lindy leaves you solo, SuccessNOW powers AgencyNow. We even let you become a partner or offer our tech under your brand. The agency model means you get built-in marketing expertise: we handle backend, you sell and profit 50/50.",
      },
    ],
    painPoints: {
      title: "Every Missed Lead Is Lost Revenue",
      description:
        "Every minute you're stuck using inferior tools, your business bleeds money. For example, calls after hours go to voicemail (Lindy can't capture them). That's an industry-average $50K+ lost per year in missed sales. While you wait days to call back, 70% of prospects have already bought elsewhere. Inconsistent follow-ups throw away 80% of qualified leads. Staff get overwhelmed with admin instead of selling (60% productivity loss). SuccessNOW fixes all of this at once with automation – no lead is left behind. When your competitors are using AI, every delay is a competitive hit.",
      stats: [
        { value: "$50K+", label: "Lost per year in missed after-hours sales" },
        { value: "70%", label: "Of prospects buy elsewhere while you wait days to call back" },
        { value: "80%", label: "Of qualified leads thrown away by inconsistent follow-ups" },
        { value: "60%", label: "Productivity loss when staff handle admin vs selling" },
      ],
    },
    cta: {
      title: "Act now: Join our pilot program and get the full SuccessNOW suite for pennies.",
      offer: "Today's deal: only $997 setup (90% off!) and your first 3 months FREE, cancel any time.",
      includes:
        "This includes custom site, funnels, AdsNow Platinum, SEOExperts, and unlimited AI agents. (Valued at over $4,000/mo.) We're even backed by $250K in pilot funding to make AI affordable.",
      guarantee:
        "No Risk: 30-day money‑back guarantee – if you're not absolutely blown away by how many leads and sales SuccessNOW generates, just cancel for a full refund. But every day you wait, you lose more customers. Stop paying triple for half a solution. Switch to SuccessNOW – the only platform that truly builds your growth engine, not just handles calls.",
    },
    testimonial: {
      name: "Jennifer Martinez",
      title: "Business Owner",
      location: "Miami, FL",
      quote: `Switching from Lindy AI was the best decision we made. SuccessNOW delivers everything they promised and more - at a fraction of the cost.`,
    },
  },
  justcall: {
    name: "JustCall",
    hero: {
      title: "JustCall charges you like it's 1999 – nearly $1/min for its AI voice agent",
      subtitle:
        "And treats its tools as a virtual call center. SuccessNOW is the 24/7 AI sales force that costs pennies and closes deals. While JustCall is a messaging/call tool, SuccessNOW is a full growth ecosystem.",
      tagline:
        "Why hire expensive operators for repetitive calls when an AI agent can qualify and book leads 10× cheaper?",
      urgency: "You cannot afford missed opportunities.",
    },
    comparison: {
      pricing: {
        competitor: "$0.99/min",
        successnow: "$0.07/min with our pilot discounts",
        savings: "About 10× cheaper per minute",
      },
      channels: {
        competitor: "Essentially a phone/SMS/Email system (a virtual call center)",
        successnow:
          "Everything: calls, text, email, social media, WhatsApp, chat – truly omnichannel. No lead falls through the cracks of siloed tools",
      },
      aiSalesBots: {
        competitor: "Agents can take inbound calls, but require heavy human oversight",
        successnow:
          "AI Super Agents not only answer inbound leads, they proactively follow up, qualify, nurture, and close using natural conversation. It's like having a full sales team on autopilot",
      },
      crmFunnels: {
        competitor: "Basic CRM integration",
        successnow:
          "Full CRM sync plus instant white-label website and funnels. When a call comes in, our agent books appointments into your calendar automatically. And your lead flows into a proven funnel built by AI – tasks JustCall can't do",
      },
      adsSeo: {
        competitor: "No built-in marketing features",
        successnow:
          "AdsNow.ai Platinum and SEOExperts.ai. Your marketing happens inside one platform. JustCall leaves you hunting for separate tools",
      },
      costsValue: {
        competitor: "Pricing plans are confusing and legacy-feeling",
        successnow:
          "Pilot is straightforward: one low setup and monthlies, all features included. As one client said, we save teams hundreds of thousands in staffing – SuccessNOW does the heavy lifting for you",
      },
    },
    features: [
      {
        title: "AI Agents (SalesBotNow.ai)",
        description:
          "SuccessNOW's agents answer and initiate calls, texts, emails, social messages – qualifying leads in real time. While JustCall needs humans to manage follow-ups, SuccessNOW's AI proactively nurtures every prospect. It updates your CRM immediately and even runs an email/SMS sequence if needed.",
      },
      {
        title: "AdsNow.ai & SEOExperts.ai",
        description:
          "We don't stop at calls. SuccessNOW runs your ads and SEO automatically (Worth ~$2,000/mo value). These lead-gen engines feed into your AI agents. JustCall gives you one slice of the puzzle; we deliver the whole funnel on autopilot.",
      },
      {
        title: "Integrated Funnels & Site",
        description:
          "From day one, SuccessNOW spins up a high-converting website and sales funnels tailored to your niche. Leads that come in through ads or organic search are captured by our funnels and handed off to AI agents. JustCall lacks any of this – it's a call center, not a growth system.",
      },
      {
        title: "DevNow & AgencyNow",
        description:
          "Need a special integration? DevNow.ai has you covered. And if you're an agency, AgencyNow.ai lets you white-label our entire infrastructure. JustCall has no partner network – SuccessNOW gives resellers a turnkey AI agency in a box.",
      },
    ],
    painPoints: {
      title: "Emotional Pain Points",
      description:
        "You cannot afford missed opportunities. With JustCall, after-hours inquiries and unanswered texts slip away. Each missed lead is lost forever. Imagine doing nothing and your competitors picking up leads 24/7. Studies show slow response kills 70% of deals. Inconsistent follow-up wastes 80% of qualified leads. SuccessNOW solves these – there's always an agent answering, qualifying, booking, and nurturing leads. Your team is free to focus on closing, not on dialing and chasing.",
      stats: [
        { value: "70%", label: "Of deals killed by slow response" },
        { value: "80%", label: "Of qualified leads wasted by inconsistent follow-up" },
        { value: "24/7", label: "Competitors picking up leads while you sleep" },
        { value: "100%", label: "Of after-hours inquiries slip away with JustCall" },
      ],
    },
    cta: {
      title: "Don't wait: SuccessNOW's full package is live now at a crazy discount.",
      offer: "For a limited time, get the complete suite for $997 setup + 3 months FREE, cancel anytime.",
      includes:
        "That includes custom site, funnels, AI agents, AdsNow.ai Platinum, SEOExperts.ai, and all features in our platform. No hidden fees – just instant, measurable ROI.",
    },
    testimonial: {
      name: "Carlos Rodriguez",
      title: "Sales Director",
      location: "Houston, TX",
      quote: `We ditched JustCall and immediately saw 300% more qualified appointments. The AI never sleeps, never takes breaks, and converts better than our best human reps.`,
    },
  },
  synthflow: {
    name: "Synthflow",
    hero: {
      title: "Synthflow markets an AI voice agent at about $0.12–$0.13/min",
      subtitle:
        "After your plan's included minutes, plus separate platform fees. SuccessNOW is nearly half the price, plus does so much more. Synthflow plugs into Salesforce for voice calls, but SuccessNOW plugs into your entire sales and marketing machine.",
      tagline: "Synthflow gives you calls; SuccessNOW gives you calls and customers and growth.",
      urgency: "Why settle for a half-built strategy when you can have the full stack?",
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
        title: "Voice + Omni-Channels (SalesBotNow.ai)",
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
    painPoints: {
      title: "Missing Leads Means Lost Revenue",
      description:
        "Missing even a few leads means losing real revenue. Synthflow's limitations are the same old problems: calls at 2am go unanswered, email inquiries get ignored, follow-ups slip. Meanwhile, your competitors with SuccessNOW are capturing those leads instantly.",
      stats: [
        { value: "2AM", label: "Calls go unanswered with Synthflow" },
        { value: "24/7", label: "SuccessNOW captures every lead" },
        { value: "10×", label: "Conversion increase with omnichannel" },
        { value: "0", label: "Marketing tools in Synthflow" },
      ],
    },
    cta: {
      title: "Join Now: For a limited time, lock in our pilot deal.",
      offer: "$997 setup + 3 months FREE – everything included.",
      includes:
        "You get the fully integrated SuccessNOW platform (Agents, AdsNow, SEO, Funnels, DevNow, Agency partner materials) for 79% off.",
      guarantee: "Risk-Free: If SuccessNOW doesn't crush your lead-to-sale targets, get a full refund within 30 days.",
    },
    testimonial: {
      name: "Amanda Chen",
      title: "Marketing Director",
      location: "San Francisco, CA",
      quote: `Synthflow only handled our calls. SuccessNOW handles our entire pipeline - from ads to close. We're getting 5x more qualified leads now.`,
    },
  },
  "regal-ai": {
    name: "Regal AI",
    hero: {
      title: "Regal.ai is an enterprise-grade contact center solution",
      subtitle:
        "Voice-first, for large operations priced around $0.10–$0.20/min. It's powerful, but it's a single enterprise tool – expensive and focused on calls. SuccessNOW gives you that power without the price, plus a full marketing suite.",
      tagline: "Why pay enterprise prices for only calls, when SuccessNOW gives you the entire suite for 90% less?",
      urgency: "Don't pay enterprise rates to get enterprise performance – get it at local biz prices instead.",
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
      pricingModel: {
        competitor: "Targets large volumes (no free tiers)",
        successnow:
          "Pilot program gives small businesses enterprise capability for a fixed fee (90% off setup, 50% off monthly)",
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
    painPoints: {
      title: "Enterprise Performance Without Enterprise Prices",
      description:
        "Big companies using Regal aren't losing leads – big sums are invested to capture them. But for you, missing leads is just as costly. Every unsaved lead in your small business eats up your margins. Studies show customers prefer instant responses – if you're still manually chasing calls, you lose 70% of deals.",
      stats: [
        { value: "$25K", label: "Regal's typical entry fee" },
        { value: "70%", label: "Of deals lost to slow response" },
        { value: "90%", label: "Savings with SuccessNOW vs enterprise pricing" },
        { value: "24/7", label: "AI availability vs human limitations" },
      ],
    },
    cta: {
      title: "Enterprise Power, SMB Price: For a very limited time, get the SuccessNOW Enterprise package",
      offer: "$997 setup (was $9,988) and 50% off monthly.",
      includes:
        "This includes unlimited AI agents, full lead management suite, AdsNow Platinum ($998 value), SEOExperts, custom funnel, and 2 months free.",
      guarantee: "No-Risk Guarantee: We even apply a 30-day money-back guarantee.",
    },
    testimonial: {
      name: "Michael Thompson",
      title: "Operations Manager",
      location: "Chicago, IL",
      quote: `We were quoted $25K just to start with Regal. SuccessNOW gave us enterprise-level performance for under $1K. The ROI is incredible.`,
    },
  },
  "resemble-ai": {
    name: "Resemble AI",
    hero: {
      title: "Resemble AI charges a scant $0.018/min",
      subtitle:
        "But that only gets you voice cloning (text-to-speech). It can mimic voices, not engage prospects. SuccessNOW gives you real conversational agents who think, sell, and book appointments – plus ads, SEO, funnels and more.",
      tagline: "Resemble gives you a fake voice; SuccessNOW gives you a real sales team.",
      urgency: "Don't outsource your voice – insource your sales power.",
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
      useCase: {
        competitor: "If you just want to clone your founder's voice for a promo video, Resemble's cheap TTS is fine",
        successnow: "If you want a scalable sales force chasing and closing leads, you need SuccessNOW",
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
      {
        title: "Customization & Support",
        description:
          "We give you white-label funnels and hands-on setup; Resemble is a self-serve voice studio. If you need integration with your CRM or a custom workflow, SuccessNOW's DevNow handles it. Resemble won't answer the phone for you, but SuccessNOW will.",
      },
    ],
    painPoints: {
      title: "Static Voice vs Dynamic Sales Power",
      description:
        "Imagine using Resemble's clone to record a voicemail greeting, only to still lose the lead as soon as the beep ended. That's the business risk of a static \"voice.\" Every day you rely on only call recordings or a human salesperson, you're missing leads overnight.",
      stats: [
        { value: "Static", label: "Resemble's voice cloning capability" },
        { value: "Dynamic", label: "SuccessNOW's conversational AI" },
        { value: "0", label: "Sales automation in Resemble" },
        { value: "24/7", label: "SuccessNOW's always-on sales team" },
      ],
    },
    cta: {
      title: "Get the Real Deal: For a limited time, lock in SuccessNOW's full suite at pilot pricing.",
      offer: "Only $997 one-time (normally $9,988) and your first 3 months FREE of platform.",
      includes:
        "You'll get unlimited AI voice agents, website+funnels, AdsNow Platinum, SEOExperts, and everything else we have.",
      guarantee: "Guaranteed Results: We're so confident, it's risk-free: 30‑day money-back.",
    },
    testimonial: {
      name: "David Park",
      title: "Tech Startup Founder",
      location: "Austin, TX",
      quote: `Resemble could only clone voices. SuccessNOW clones entire sales teams. We went from zero to $50K MRR in 3 months.`,
    },
  },
  "thinkrr-ai": {
    name: "Thinkrr.ai",
    hero: {
      title: "Thinkrr's AVA Voice AI for agencies costs $497/mo plus $0.18/min voice usage",
      subtitle:
        "And it's tied to HighLevel. It's basically a voicemail/appointment setter. SuccessNOW is three times cheaper, fully omnichannel, and far more powerful. While Thinkrr is \"a voice tool,\" SuccessNOW is an entire agency in a box.",
      tagline: "Why rent a receptionist when you can deploy a full AI team?",
      urgency: "Stop leaking potential income due to process gaps.",
    },
    comparison: {
      pricing: {
        competitor: "$497/mo + $0.18/min of talk",
        successnow: "$997 setup + $997/mo with half-price voice (~$0.07/min)",
        savings: "~3x cheaper on voice",
      },
      channels: {
        competitor: "Limited to voice (inbound/outbound) and HighLevel integration",
        successnow: "Voice, SMS, email, chat, WhatsApp and plugs into any CRM/Web. We don't lock you into one platform",
      },
      aiCapabilities: {
        competitor: "AVA can handle calls and GHL workflows",
        successnow:
          "Agents go further: they qualify, book, follow up, and even do prospect research. Our agents can adapt mid-call and learn your sales pitch – AVA is scripted",
      },
      marketing: {
        competitor: "No ads or SEO. Creates a demo site, but it's just a portal",
        successnow:
          "Launches full marketing campaigns (AdsNow.ai) and SEO content, plus a conversion funnel. Leads turn into customers on auto-pilot",
      },
      whiteLabel: {
        competitor: "Agency pricing includes white-labeling for GHL, but you still manage every client",
        successnow:
          "AgencyNow.ai offers built-in marketing playbooks, branding, and 50/50 revenue share. We even build your agency website in 7 days with pre-loaded niches",
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
      {
        title: "DevNow & Support",
        description:
          'We custom-build any automation you need through DevNow.ai. Thinkrr requires sticking to its built-in flows. Need something new? SuccessNOW can do it; thinkrr might say "on our roadmap."',
      },
    ],
    painPoints: {
      title: "Tool vs Partner",
      description:
        "Thinkrr is a tool; SuccessNOW is a partner. If you're an agency or high-volume biz, using only Thinkrr means juggling clients across multiple platforms and still hiring people. Every feature gap in Thinkrr is another gap in revenue. Picture this: with Thinkrr, after calls you manually kick off email sequences and ads separately. With SuccessNOW, our AI handles all that instantly.",
      stats: [
        { value: "Tool", label: "What Thinkrr provides" },
        { value: "Partner", label: "What SuccessNOW provides" },
        { value: "Manual", label: "Thinkrr's follow-up process" },
        { value: "Automated", label: "SuccessNOW's complete workflow" },
      ],
    },
    cta: {
      title: "Turnkey Agency-in-a-Box: Join our pilot and launch with the full SuccessNOW stack",
      offer: "$997 setup + 3 months FREE.",
      includes:
        "You get our Platinum platform, including AdsNow.ai and SEOExperts.ai, unlimited AI agents, plus our DFY agency framework.",
      guarantee: "Worry-Free: If SuccessNOW doesn't double or triple your conversions in 30 days, get your money back.",
    },
    testimonial: {
      name: "Lisa Rodriguez",
      title: "Agency Owner",
      location: "Phoenix, AZ",
      quote: `Thinkrr was just another tool to manage. SuccessNOW became our entire backend. We scaled from 5 to 50 clients without hiring anyone.`,
    },
  },
  hubspot: {
    name: "HubSpot",
    hero: {
      title: "HubSpot is a great tracker – but at $100+/user/mo",
      subtitle:
        "It's a high-ticket CRM, not an AI-first sales team. SuccessNOW is built from the ground up for closing deals, integrating AI agents with ads and SEO – all for a fraction of the cost.",
      tagline: "HubSpot helps you track leads. SuccessNOW helps you close them instantly.",
      urgency:
        "In today's market, speed is survival – if HubSpot users aren't responding in seconds, you are winning those customers.",
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
        successnow:
          "Full omnichannel outreach (calls, SMS, WhatsApp, social, web chat) around the clock, all synced into your CRM",
      },
      marketing: {
        competitor: "Marketing Hub can handle emails and landing pages, but it's a separate product (expensive)",
        successnow:
          "Automated ad campaigns and SEO built-in – HubSpot requires you to plug into other tools or pay more. You get the full funnel, not just lead tracking",
      },
      complexity: {
        competitor:
          "Often needs 24/7 admin and a marketing team to set up workflows (HubSpot even limits simple automations on free/cheap plans)",
        successnow: "Deploys in minutes – you don't need any tech setup",
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
    painPoints: {
      title: "Tracking vs Taking Action",
      description:
        "Imagine spending hundreds per seat on HubSpot each month only to find leads still slipping away. HubSpot's fancy reports don't capture business that never happened. Every form fill or chat request that languishes for hours is lost. SuccessNOW prevents that: the instant a lead lands, our AI is on it.",
      stats: [
        { value: "$100+", label: "Per user per month for HubSpot" },
        { value: "$1,500", label: "HubSpot onboarding fee" },
        { value: "Hours", label: "How long leads wait with HubSpot" },
        { value: "Seconds", label: "SuccessNOW response time" },
      ],
    },
    cta: {
      title: "Stop tracking, start dominating: Try SuccessNOW with our pilot pricing.",
      offer: "$997 setup, 3 months FREE – includes everything (AI agents, full ads/SEO suite, funnels).",
      includes: "We'll even discount voice usage 50% (to $0.07/min).",
      guarantee: "No Risk, All Reward: 30-day money-back guarantee.",
    },
    testimonial: {
      name: "Sarah Johnson",
      title: "Sales Manager",
      location: "Denver, CO",
      quote: `HubSpot showed us where leads were going. SuccessNOW actually catches them. We're closing 4x more deals with half the effort.`,
    },
  },
  salesforce: {
    name: "Salesforce",
    hero: {
      title: "Salesforce is a massive, multi-hundred-dollar-per-user CRM",
      subtitle:
        "With endless customization. It's a database for deals, not an AI rainmaker. SuccessNOW is simple plug-and-play: deploy AI agents that automatically get leads, qualify them, and close sales — with Ads and SEO built in.",
      tagline: "Salesforce is a complex data warehouse; SuccessNOW is a deal-maker in your pocket.",
      urgency: "Don't buy a database and a degree of complexity; invest in an AI that books the meeting.",
    },
    comparison: {
      pricing: {
        competitor:
          "Starter (all-in-one suite) starts at $25/user/mo, but true enterprise features cost $165–$330+/user/mo",
        successnow:
          "~$997 one-time + $997/mo total, no per-user fees, all channels included. You save thousands on licensing",
        savings: "90% cheaper than enterprise Salesforce",
      },
      aiReadiness: {
        competitor:
          "Has released AI (Einstein) for predictions, but it's mostly analytics; you still need humans or separate apps to act on leads",
        successnow:
          "AI agents come live and immediately act on leads 24/7. No Salesforce admin or complex flows needed",
      },
      complexity: {
        competitor: "Setting up Salesforce can take months with consultants",
        successnow:
          "Instant: we configure your workflows on our end. Within minutes of signing up, your AI is calling leads or running ads",
      },
      integratedGrowth: {
        competitor: "Out of the box, Salesforce does not run ads, SEO, or websites",
        successnow:
          "Bundles an entire marketing stack. You get paid and organic traffic feeding your Salesforce or any CRM. Salesforce requires third-party marketing apps at extra cost",
      },
      userExperience: {
        competitor: "Built for large sales teams managing pipelines and custom reports",
        successnow:
          "Built for getting new customers. We automate lead capture and conversion so your small team can scale up without scaling headcount",
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
    painPoints: {
      title: "Database vs Deal-Maker",
      description:
        "Every moment you spend in Salesforce adjusting fields or waiting on IT is a moment that lead is cooling off. As data shows, speed wins: prospects choose whoever answers first. If your Salesforce alerts ping but humans can't respond, SuccessNOW steps in instantly.",
      stats: [
        { value: "$165-$330+", label: "Per user per month for enterprise Salesforce" },
        { value: "Months", label: "Typical Salesforce setup time" },
        { value: "Minutes", label: "SuccessNOW deployment time" },
        { value: "24/7", label: "AI availability vs human limitations" },
      ],
    },
    cta: {
      title: "Flip the switch: Go from zero to AI-driven sales in minutes.",
      offer: "Pilot pricing: $997 setup + 3 months free, includes everything (AI voice, funnels, ads/SEO).",
      includes: "This is like buying Salesforce and getting a built-in sales team for under $1K.",
      guarantee: "Risk-Free Guarantee: 30-day money-back if it's not the easiest win you've made.",
    },
    testimonial: {
      name: "Robert Kim",
      title: "VP of Sales",
      location: "Seattle, WA",
      quote: `Salesforce was costing us $15K/month in licenses alone. SuccessNOW does everything Salesforce does plus actually closes deals - for under $1K.`,
    },
  },
  claude: {
    name: "Claude",
    hero: {
      title: "Claude (by Anthropic) is a next-gen LLM for research and writing",
      subtitle:
        "Think \"smarter ChatGPT.\" It's great for generating detailed answers and planning, but not for running a business's sales process. Claude chats; SuccessNOW converts. While Claude can sift information and write plans, SuccessNOW's AI agents are built to actively call, message, and close real customers 24/7.",
      tagline: "Claude is a quiet partner helping you think. SuccessNOW is an active partner making you money.",
      urgency: "Don't let your business stay in analysis mode while your rivals automate the hustle.",
    },
    comparison: {
      function: {
        competitor:
          "AI collaborator that answers questions, drafts content, and digests docs. Essentially a brainstorming partner with expanded memory",
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
        successnow:
          "Complete marketing funnel and campaign toolkit. Claude might help you write an ad or email, but SuccessNOW runs the ad and the call center",
      },
      businessFocus: {
        competitor:
          "Isn't specifically for sales. Updates mention research assistants and workspace integration, but nothing about talking to customers or generating leads",
        successnow: "Entire design is to capture and convert business – a difference in mission",
      },
    },
    features: [
      {
        title: "Conversational Sales vs Research",
        description:
          "Use Claude to speed up your strategy: it can search and summarize. But when a lead arrives, Claude can't pick up the phone. SuccessNOW uses its own GPT-4o instance – trained on your business – to immediately engage the lead, qualify it, and book it. It's agentic AI, not just a Q&A chatbot.",
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
    painPoints: {
      title: "Analysis vs Action",
      description:
        "Think of Claude as a quiet partner helping you think. Meanwhile, every minute of quiet means your competition could be using a tool like SuccessNOW to actively sell. Leads coming in now should result in sales now, not later. Unlike Claude's research updates, SuccessNOW's AI will answer that same inquiry phone call or email the moment it lands.",
      stats: [
        { value: "Research", label: "What Claude excels at" },
        { value: "Sales", label: "What SuccessNOW excels at" },
        { value: "Thinking", label: "Claude's primary function" },
        { value: "Converting", label: "SuccessNOW's primary function" },
      ],
    },
    cta: {
      title: "The Full Conversion Platform: Deploy SuccessNOW today",
      offer: "$997 setup + 3 months FREE.",
      includes:
        "This pilot gives you unlimited AI agents to run voice+chat sales, plus AdsNow.ai Platinum ($998 value) and SEOExperts.ai.",
      guarantee:
        "Think of it as combining Claude's smarts with an army of closers – at one low price. No Risk: 30-day guarantee.",
    },
    testimonial: {
      name: "Dr. Emily Watson",
      title: "Consultant",
      location: "Boston, MA",
      quote: `Claude helped me research my market. SuccessNOW helped me dominate it. I went from planning to profiting in weeks, not months.`,
    },
  },
  chatgpt: {
    name: "ChatGPT",
    hero: {
      title: "ChatGPT is an extraordinary AI content engine",
      subtitle:
        "It writes copy, answers questions, and – with plugins – can automate some tasks. But it's not built to own your sales pipeline. SuccessNOW does. Where ChatGPT writes content, SuccessNOW wins clients.",
      tagline: "Use ChatGPT for ideas; use SuccessNOW for action.",
      urgency: "Don't just chat about growth – achieve it.",
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
        successnow:
          "Agents do all of that autonomously. Lead enters, and SuccessNOW's AI handles every step to close. ChatGPT is great for ideas; SuccessNOW is an entire sales team in code",
      },
      marketingSuite: {
        competitor: "No native ads/SEO modules",
        successnow:
          "Includes AdsNow.ai and SEOExperts.ai as standard. ChatGPT would rely on external platforms for traffic – SuccessNOW brings the traffic in for you",
      },
    },
    features: [
      {
        title: "Automation vs Conversation",
        description:
          'The ChatGPT "agent" shows promise, but even tech reviewers note it still needs human help for real transactions. It may browse and fill forms, but struggles with actual bookings and can stall. SuccessNOW\'s AI was built from the ground up for sales – no sandbox, no lost context. It can book appointments, reschedule, handle objections – end-to-end.',
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
    painPoints: {
      title: "Content vs Conversion",
      description:
        "A blog written by ChatGPT won't call back missed inquiries. A schedule created by ChatGPT won't automatically confirm appointments. Every minute you rely on manual processes (or need to prompt an AI for each action) costs sales. OpenAI's own research shows their agent can still \"fall short\" on real tasks.",
      stats: [
        { value: "Content", label: "ChatGPT's strength" },
        { value: "Conversion", label: "SuccessNOW's strength" },
        { value: "Manual", label: "ChatGPT requires human prompts" },
        { value: "Automated", label: "SuccessNOW handles full workflows" },
      ],
    },
    cta: {
      title: "From GPT to ROI: Get the full SuccessNOW suite",
      offer: "AI Agents + Ads + SEO + Funnels – at pilot pricing: $997 setup + 3 months FREE.",
      includes: "We'll include all features (a total value of ~$4,900/mo) for a flat fee.",
      guarantee: "100% Secure: 30-day money-back. Use ChatGPT for ideas; use SuccessNOW for action.",
    },
    testimonial: {
      name: "Alex Rivera",
      title: "Digital Marketer",
      location: "Los Angeles, CA",
      quote: `ChatGPT wrote my marketing copy. SuccessNOW turned that copy into $100K in sales. There's no comparison when it comes to results.`,
    },
  },
}

interface CompetitorPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CompetitorPageProps) {
  const competitor = competitorData[params.slug as keyof typeof competitorData]

  if (!competitor) {
    return {
      title: "Competitor Not Found | SuccessNOW AI",
      description: "The requested competitor comparison page was not found.",
    }
  }

  return {
    title: `SuccessNOW vs ${competitor.name} - Complete Comparison | Save Up to 93%`,
    description: `See why SuccessNOW beats ${competitor.name} with up to 93% cost savings and 5x more features. ${competitor.hero.subtitle.slice(0, 100)}...`,
    keywords: `SuccessNOW vs ${competitor.name}, ${competitor.name} alternative, AI voice agents comparison, business automation comparison, ${competitor.name.toLowerCase().replace(/\s+/g, "-")}-alternative, voice AI pricing, lead generation software`,
    openGraph: {
      title: `SuccessNOW vs ${competitor.name} - Why We Win Every Time`,
      description: `Complete comparison showing why SuccessNOW dominates ${competitor.name}. Up to 93% cheaper with enterprise features.`,
      url: `https://successnow.ai/competitors/${params.slug}`,
      siteName: "SuccessNOW AI",
      images: [
        {
          url: `/images/competitors/${params.slug}-comparison.png`,
          width: 1200,
          height: 630,
          alt: `SuccessNOW vs ${competitor.name} Comparison`,
        },
      ],
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `SuccessNOW vs ${competitor.name} - Complete Comparison`,
      description: `See why businesses are switching from ${competitor.name} to SuccessNOW. Up to 93% savings with 5x more features.`,
      images: [`/images/competitors/${params.slug}-comparison.png`],
    },
    alternates: {
      canonical: `https://successnow.ai/competitors/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "competitor-comparison": competitor.name,
      "pricing-advantage": "up-to-93-percent-savings",
      "feature-advantage": "5x-more-features",
    },
  }
}

export default function CompetitorPage({ params }: CompetitorPageProps) {
  const competitor = competitorData[params.slug as keyof typeof competitorData]

  if (!competitor) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ComparisonPage",
            name: `SuccessNOW vs ${competitor.name} - Complete Comparison`,
            description: competitor.hero.subtitle,
            url: `https://successnow.ai/competitors/${params.slug}`,
            mainEntity: {
              "@type": "Product",
              name: "SuccessNOW AI",
              description: "Complete AI business automation platform with voice agents, ads, SEO, and funnels",
              brand: {
                "@type": "Brand",
                name: "SuccessNOW AI",
              },
              offers: {
                "@type": "Offer",
                price: "997",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2024-12-31",
                seller: {
                  "@type": "Organization",
                  name: "SuccessNOW AI",
                },
              },
            },
            comparedTo: {
              "@type": "Product",
              name: competitor.name,
              description: `${competitor.name} business automation solution`,
            },
            speakable: {
              "@type": "SpeakableSpecification",
              xpath: [
                "/html/body//h1[1]",
                "/html/body//h2[contains(@class, 'text-')]",
                "/html/body//p[contains(@class, 'text-xl')]",
              ],
            },
            publisher: {
              "@type": "Organization",
              name: "SuccessNOW AI",
              logo: "https://successnow.ai/images/successnow-logo.png",
            },
            datePublished: "2024-01-15",
            dateModified: new Date().toISOString(),
            inLanguage: "en-US",
          }),
        }}
      />

      <section className="relative pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <CompetitorBreadcrumb competitorName={competitor.name} />
        </div>
      </section>

      <section className="relative pt-8 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-red-900/90 text-white border-2 border-red-400/60 px-6 py-2 text-sm font-medium backdrop-blur-sm shadow-lg hover:shadow-red-500/25 transition-all duration-300">
              <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
              {competitor.hero.urgency}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">SuccessNOW vs</span>
            <br />
            <span className="text-red-400 neon-text-red">{competitor.name}</span>
          </h1>

          <div className="max-w-5xl mx-auto bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm mb-12">
            <h2 className="text-2xl md:text-3xl text-white leading-relaxed mb-6 font-bold">{competitor.hero.title}</h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">{competitor.hero.subtitle}</p>
            <p className="text-lg text-cyan-300 font-semibold">{competitor.hero.tagline}</p>
          </div>

          <div className="mb-12">
            <VoiceSnippetPlayer
              text={`${competitor.hero.title} ${competitor.hero.subtitle}`}
              category={`competitor-${params.slug}`}
              variant="compact"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                className="border-2 border-green-400/50 text-white hover:bg-green-500/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                Join Pilot Program - 90% Off!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Side-by-Side</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                Comparison
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See exactly why SuccessNOW dominates {competitor.name} in every category that matters
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(competitor.comparison).map(([key, value]) => (
              <Card key={key} className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white capitalize flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span className="text-red-400 font-semibold">{competitor.name}:</span>
                    </div>
                    <p className="text-gray-300 text-sm">{value.competitor}</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-semibold">SuccessNOW:</span>
                    </div>
                    <p className="text-gray-300 text-sm">{value.successnow}</p>
                    {value.savings && (
                      <div className="mt-2 text-cyan-300 font-semibold text-sm">💰 {value.savings}</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why SuccessNOW</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                Always Wins
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While {competitor.name} gives you pieces, SuccessNOW delivers the complete solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitor.features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-500/60 hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-12 backdrop-blur-sm">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-red-400 neon-text-red">
                  {competitor.painPoints?.title || "The Cost of Staying Behind"}
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                {competitor.painPoints?.description || competitor.painPoints}
              </p>
            </div>

            {competitor.painPoints?.stats && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {competitor.painPoints.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm text-center"
                  >
                    <div className="text-3xl font-bold text-red-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center">
              <p className="text-lg text-cyan-300 font-semibold">
                SuccessNOW eliminates these problems completely with 24/7 AI automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Real Results from</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                Real Customers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what happens when businesses switch from {competitor.name} to SuccessNOW
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {competitor.testimonial?.name?.charAt(0) || "S"}
                </div>
                <div className="ml-6">
                  <div className="text-xl font-semibold text-white">
                    {competitor.testimonial?.name || "Success Story"}
                  </div>
                  <div className="text-gray-400">{competitor.testimonial?.title || "Business Owner"}</div>
                  <div className="text-sm text-cyan-400">{competitor.testimonial?.location || "USA"}</div>
                </div>
              </div>
              <blockquote className="text-2xl text-gray-300 italic leading-relaxed mb-6">
                "
                {competitor.testimonial?.quote ||
                  `Switching from ${competitor.name} to SuccessNOW was the best business decision we made this year.`}
                "
              </blockquote>
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 text-yellow-400">
                    ⭐
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Stop Paying More</span>
            <br />
            <span className="text-green-400">For Less Results</span>
          </h2>

          <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <div className="text-2xl font-bold text-white mb-4">
              {competitor.cta?.title || "🚨 Limited Time Pilot Program"}
            </div>
            <div className="text-xl text-green-400 font-semibold mb-4">
              {competitor.cta?.offer || "Only $997 setup (90% off!) + First 3 months FREE"}
            </div>
            <p className="text-lg text-gray-300 mb-4">
              {competitor.cta?.includes ||
                "Complete SuccessNOW suite: Custom site, funnels, AdsNow Platinum, SEOExperts, unlimited AI agents"}
            </p>
            <div className="text-sm text-cyan-300 font-semibold">
              Valued at over $4,000/mo • Backed by $250K pilot funding
            </div>
          </div>

          <div className="mb-8">
            <VoiceSnippetPlayer
              text={`${competitor.cta?.title || "Limited Time Pilot Program"} ${competitor.cta?.offer || "Only $997 setup and first 3 months FREE"} ${competitor.cta?.guarantee || "30-day money-back guarantee"}`}
              category={`competitor-${params.slug}-cta`}
              variant="compact"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="https://signup.successnow.ai" target="_blank">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Claim Your Pilot Spot Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400/50 text-white hover:bg-cyan-500/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                <Zap className="w-5 h-5 mr-2" />
                See Live Demo First
              </Button>
            </Link>
          </div>

          <div className="bg-black/40 rounded-xl p-6">
            <div className="text-green-400 font-bold text-lg mb-2">🛡️ 30-Day Money-Back Guarantee</div>
            <p className="text-gray-300 mb-4">
              {competitor.cta?.guarantee ||
                "If you're not absolutely blown away by how many leads and sales SuccessNOW generates, just cancel for a full refund."}
            </p>
            <p className="text-red-400 font-semibold">
              But every day you wait, competitors using SuccessNOW are capturing the leads you're missing.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
