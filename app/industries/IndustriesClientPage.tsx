"use client"

import Navbar from "@/components/navigation/navbar"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-intersection-observer"
import {
  Sparkles,
  Bone,
  Hammer,
  Dumbbell,
  Car,
  Home,
  Utensils,
  Scale,
  Building,
  CheckCircle,
  type LucideIcon,
  SmileIcon as Tooth,
  Sun,
  Wrench,
  Wind,
  Construction,
} from "lucide-react"
import Footer from "@/components/home/footer"
import StarryBackground from "@/components/ui/starry-background"
import { cn } from "@/lib/utils"

export default function IndustriesClientPage() {
  const { ref: heroRef } = useInView()

  const specializedIndustries: {
    Icon: LucideIcon
    title: string
    description: string
    features: string[]
    slug: string
    color: string
  }[] = [
    {
      Icon: Car,
      title: "AutoDealersNOW",
      description: "AI agents to book test drives, qualify leads, and follow up 24/7, ensuring you never miss a sale.",
      features: ["24/7 Lead Conversion", "Automated Test Drives", "Financing Pre-qualification"],
      slug: "autodealersnow",
      color: "sky",
    },
    {
      Icon: Home,
      title: "RealtorsNOW",
      description: "Qualify buyers, book showings, and nurture leads automatically, so you can focus on closing deals.",
      features: ["Instant Buyer Qualification", "Automated Showings", "Hot Lead Prioritization"],
      slug: "realtornow",
      color: "green",
    },
    {
      Icon: Dumbbell,
      title: "GymsNOW",
      description: "Appointment Bot, Nurturing Bot, Ads Bot – Class fills, retention, community content.",
      features: ["Class Booking", "Member Retention", "Community Building"],
      slug: "gymsnow",
      color: "fuchsia",
    },
    {
      Icon: Scale,
      title: "LawyersNOW",
      description: "Automate client intake, book consultations, and pre-qualify cases to maximize your billable hours.",
      features: ["Automated Client Intake", "24/7 Consultation Booking", "Case Pre-qualification"],
      slug: "lawyersnow",
      color: "yellow",
    },
    {
      Icon: Sparkles,
      title: "MedspaNOW",
      description: "Reactivation Bot, OfferBot, Review Bot – Follow-ups, service promotions, 5-star reviews.",
      features: ["Appointment Booking", "Service Promotions", "Review Collection"],
      slug: "medspanow",
      color: "pink",
    },
    {
      Icon: Building,
      title: "MortgageNOW",
      description:
        "Pre-qualify applicants, automate document reminders, and nurture leads until they are ready to buy.",
      features: ["Automated Pre-qualification", "Document Reminders", "Long-term Lead Nurturing"],
      slug: "mortgagenow",
      color: "orange",
    },
    {
      Icon: Tooth,
      title: "DentistsNOW",
      description: "Book appointments 24/7, reduce no-shows, and automate patient recall to keep your schedule full.",
      features: ["24/7 Appointment Booking", "Automated Patient Recall", "No-Show Reduction"],
      slug: "dentistsnow",
      color: "blue",
    },
    {
      Icon: Bone,
      title: "ChiropractorNOW",
      description: "Appointment Bot, Nurturing Bot, Review Bot – Care reminders, education, feedback collection.",
      features: ["Appointment Booking", "Patient Education", "Feedback Collection"],
      slug: "chiropractorsnow",
      color: "teal",
    },
    {
      Icon: Sun,
      title: "SolarNOW",
      description: "Generate qualified leads, automate consultation booking, and nurture prospects long-term.",
      features: ["Qualified Lead Generation", "Automated Consultations", "Long-term Nurturing"],
      slug: "solarnow",
      color: "amber",
    },
    {
      Icon: Home,
      title: "RoofersNOW",
      description: "Automate quote requests, schedule inspections 24/7, and follow-up on estimates to win more bids.",
      features: ["Automated Quote Requests", "24/7 Inspection Scheduling", "Estimate Follow-ups"],
      slug: "roofersnow",
      color: "slate",
    },
    {
      Icon: Wrench,
      title: "PlumbersNOW",
      description: "Book emergency calls instantly, automate service reminders, and dispatch technicians faster.",
      features: ["Instant Emergency Booking", "Automated Reminders", "Faster Dispatch"],
      slug: "plumbersnow",
      color: "gray",
    },
    {
      Icon: Wind,
      title: "HVACNOW",
      description:
        "Schedule maintenance, automate tune-up reminders, and provide instant quotes to boost service contracts.",
      features: ["Maintenance Scheduling", "Tune-up Reminders", "Instant Quotes"],
      slug: "hvacnow",
      color: "cyan",
    },
    {
      Icon: Hammer,
      title: "ContractorsNOW",
      description: "Qualify leads for new projects, automate bid follow-ups, and schedule client meetings 24/7.",
      features: ["New Lead Qualification", "Automated Bid Follow-up", "24/7 Meeting Scheduler"],
      slug: "contractorsnow",
      color: "stone",
    },
    {
      Icon: Utensils,
      title: "RestaurantsNOW",
      description: "Automate reservations, manage waitlists, and promote specials to keep your tables full.",
      features: ["Automated Reservations", "Intelligent Waitlist Mgmt", "Promote Daily Specials"],
      slug: "restaurantsnow",
      color: "red",
    },
    {
      Icon: Construction,
      title: "CustomBuildNOW",
      description: "Build custom AI solutions tailored to your business's unique requirements for complete automation.",
      features: ["Tailored to Your Business", "Unique Requirements", "Complete Custom Automation"],
      slug: "custombuildnow",
      color: "indigo",
    },
  ]

  const colorVariants: { [key: string]: any } = {
    rose: {
      iconBg: "bg-rose-500/10",
      iconText: "text-rose-400",
      glowBorder: "group-hover:border-rose-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.rose.500)]",
    },
    fuchsia: {
      iconBg: "bg-fuchsia-500/10",
      iconText: "text-fuchsia-400",
      glowBorder: "group-hover:border-fuchsia-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.fuchsia.500)]",
    },
    pink: {
      iconBg: "bg-pink-500/10",
      iconText: "text-pink-400",
      glowBorder: "group-hover:border-pink-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.pink.500)]",
    },
    blue: {
      iconBg: "bg-blue-500/10",
      iconText: "text-blue-400",
      glowBorder: "group-hover:border-blue-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.blue.500)]",
    },
    teal: {
      iconBg: "bg-teal-500/10",
      iconText: "text-teal-400",
      glowBorder: "group-hover:border-teal-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.teal.500)]",
    },
    indigo: {
      iconBg: "bg-indigo-500/10",
      iconText: "text-indigo-400",
      glowBorder: "group-hover:border-indigo-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.indigo.500)]",
    },
    sky: {
      iconBg: "bg-sky-500/10",
      iconText: "text-sky-400",
      glowBorder: "group-hover:border-sky-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.sky.500)]",
    },
    green: {
      iconBg: "bg-green-500/10",
      iconText: "text-green-400",
      glowBorder: "group-hover:border-green-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.green.500)]",
    },
    yellow: {
      iconBg: "bg-yellow-500/10",
      iconText: "text-yellow-400",
      glowBorder: "group-hover:border-yellow-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.yellow.500)]",
    },
    orange: {
      iconBg: "bg-orange-500/10",
      iconText: "text-orange-400",
      glowBorder: "group-hover:border-orange-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.orange.500)]",
    },
    red: {
      iconBg: "bg-red-500/10",
      iconText: "text-red-400",
      glowBorder: "group-hover:border-red-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.red.500)]",
    },
    amber: {
      iconBg: "bg-amber-500/10",
      iconText: "text-amber-400",
      glowBorder: "group-hover:border-amber-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.amber.500)]",
    },
    slate: {
      iconBg: "bg-slate-500/10",
      iconText: "text-slate-400",
      glowBorder: "group-hover:border-slate-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.slate.500)]",
    },
    gray: {
      iconBg: "bg-gray-500/10",
      iconText: "text-gray-400",
      glowBorder: "group-hover:border-gray-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.gray.500)]",
    },
    cyan: {
      iconBg: "bg-cyan-500/10",
      iconText: "text-cyan-400",
      glowBorder: "group-hover:border-cyan-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.cyan.500)]",
    },
    stone: {
      iconBg: "bg-stone-500/10",
      iconText: "text-stone-400",
      glowBorder: "group-hover:border-stone-500/50",
      glowShadow: "group-hover:shadow-[0_0_20px_theme(colors.stone.500)]",
    },
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <StarryBackground />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-800/[0.2]"></div>

      <div className="relative z-50">
        <Navbar currentPage="industries" />
      </div>

      <main className="relative z-10 px-4 sm:px-6 lg:px-8">
        <section ref={heroRef} className="text-center py-16 sm:py-24 pt-24 sm:pt-32">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Specialized AI for Your Industry
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
              Discover pre-built, ready-to-deploy AI agents trained for the unique challenges and opportunities in your
              industry.
            </p>
          </div>
        </section>

        <section id="available-industries" className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {specializedIndustries.map((industry) => {
                const colors = colorVariants[industry.color as keyof typeof colorVariants]
                return (
                  <div
                    key={industry.title}
                    className={cn(
                      "group relative rounded-xl border border-white/10 bg-slate-900/50 p-6 text-center transition-all duration-300",
                      "hover:scale-105",
                      colors.glowBorder,
                      colors.glowShadow,
                    )}
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-4 flex justify-center">
                        <div className={cn("rounded-lg p-3", colors.iconBg)}>
                          <industry.Icon className={cn("h-8 w-8", colors.iconText)} />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                      <p className="text-slate-400 text-sm mb-4 flex-grow">{industry.description}</p>

                      <ul className="space-y-2 text-left text-sm text-slate-300 mb-6">
                        {industry.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto">
                        <Button
                          className={cn(
                            "w-full bg-slate-800 text-slate-300 border border-slate-700 transition-all duration-300",
                            "group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500 group-hover:shadow-[0_0_15px_theme(colors.pink.400)]",
                          )}
                          onClick={() => (window.location.href = `/${industry.slug}`)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
