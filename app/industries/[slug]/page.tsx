import type { Metadata } from "next"
import { notFound } from "next/navigation"

// Import all industry client components
import AutoDealersNowClient from "../../autodealersnow/AutoDealersNowClient"
import ChiropractorsNowClientPage from "../../chiropractorsnow/ChiropractorsNowClientPage"
import ContractorsNowClientPage from "../../contractorsnow/ContractorsNowClientPage"
import DentistsNowClientPage from "../../dentistsnow/DentistsNowClientPage"
import GymsNowClientPage from "../../gymsnow/GymsNowClientPage"
import HVACNowClientPage from "../../hvacnow/HVACNowClientPage"
import LawyersNowClientPage from "../../lawyersnow/LawyersNowClientPage"
import MedspaNowClientPage from "../../medspanow/MedspaNowClientPage"
import MortgageNowClientPage from "../../mortgagenow/MortgageNowClientPage"
import PlumbersNowClientPage from "../../plumbersnow/PlumbersNowClientPage"
import RealtorNowClientPage from "../../realtornow/RealtorNowClientPage"
import RestaurantsNowClientPage from "../../restaurantsnow/RestaurantsNowClientPage"
import RoofersNowClientPage from "../../roofersnow/RoofersNowClientPage"
import SolarNowClientPage from "../../solarnow/SolarNowClientPage"

// Industry configuration mapping
const industryConfig = {
  "autodealers-now": {
    component: AutoDealersNowClient,
    title: "AutoDealersNOW - AI-Powered Auto Dealership Solutions | SuccessNOW",
    description:
      "Transform your auto dealership with AI that books test drives, confirms appointments, and nurtures every lead until they buy. Boost sales with AutoDealersNOW.",
  },
  "chiropractors-now": {
    component: ChiropractorsNowClientPage,
    title: "ChiropractorsNOW - AI-Powered Chiropractic Practice Solutions | SuccessNOW",
    description:
      "Transform your chiropractic practice with AI that books appointments, confirms them, and nurtures every patient. Boost your practice with ChiropractorsNOW.",
  },
  "contractors-now": {
    component: ContractorsNowClientPage,
    title: "ContractorsNOW - AI-Powered General Contractor Solutions | SuccessNOW",
    description:
      "Transform your contracting business with AI that qualifies leads, books estimates, and nurtures prospects until they hire you. Boost sales with ContractorsNOW.",
  },
  "dentists-now": {
    component: DentistsNowClientPage,
    title: "DentistsNOW - AI-Powered Dental Practice Solutions | SuccessNOW",
    description:
      "Transform your dental practice with AI that books appointments, confirms them, and nurtures every patient. Boost your practice with DentistsNOW.",
  },
  "gyms-now": {
    component: GymsNowClientPage,
    title: "GymsNOW - AI-Powered Gym & Fitness Solutions | SuccessNOW",
    description:
      "Transform your gym with AI that books classes, reduces cancellations, and nurtures members for better retention. Boost membership with GymsNOW.",
  },
  "hvac-now": {
    component: HVACNowClientPage,
    title: "HVACNOW - AI-Powered HVAC Business Solutions | SuccessNOW",
    description:
      "Transform your HVAC business with AI that schedules maintenance, provides instant quotes, and nurtures leads until they book service. Boost sales with HVACNOW.",
  },
  "lawyers-now": {
    component: LawyersNowClientPage,
    title: "LawyersNOW - AI-Powered Legal Practice Solutions | SuccessNOW",
    description:
      "Transform your law practice with AI that handles intake, books consultations, and pre-qualifies cases to maximize billable hours. Boost clients with LawyersNOW.",
  },
  "medspa-now": {
    component: MedspaNowClientPage,
    title: "MedspaNOW - AI-Powered Medical Spa Solutions | SuccessNOW",
    description:
      "Transform your medspa with AI that books appointments, promotes services, and collects reviews automatically. Boost bookings with MedspaNOW.",
  },
  "mortgage-now": {
    component: MortgageNowClientPage,
    title: "MortgageNOW - AI-Powered Mortgage Broker Solutions | SuccessNOW",
    description:
      "Transform your mortgage business with AI that pre-qualifies applicants, automates document reminders, and nurtures leads until they're ready to buy. Boost closings with MortgageNOW.",
  },
  "plumbers-now": {
    component: PlumbersNowClientPage,
    title: "PlumbersNOW - AI-Powered Plumbing Business Solutions | SuccessNOW",
    description:
      "Transform your plumbing business with AI that books emergency calls instantly, automates service reminders, and dispatches technicians faster. Boost sales with PlumbersNOW.",
  },
  "realtor-now": {
    component: RealtorNowClientPage,
    title: "RealtorNOW - AI-Powered Real Estate Solutions | SuccessNOW",
    description:
      "Transform your real estate business with AI that qualifies buyers, books showings, and nurtures leads automatically. Boost sales with RealtorNOW.",
  },
  "restaurants-now": {
    component: RestaurantsNowClientPage,
    title: "RestaurantsNOW - AI-Powered Restaurant Solutions | SuccessNOW",
    description:
      "Transform your restaurant with AI that automates reservations, manages waitlists, and promotes specials to keep your tables full. Boost revenue with RestaurantsNOW.",
  },
  "roofers-now": {
    component: RoofersNowClientPage,
    title: "RoofersNOW - AI-Powered Roofing Company Solutions | SuccessNOW",
    description:
      "Transform your roofing business with AI that automates quote requests, schedules inspections 24/7, and follows up on estimates to win more bids. Boost sales with RoofersNOW.",
  },
  "solar-now": {
    component: SolarNowClientPage,
    title: "SolarNOW - AI-Powered Solar Company Solutions | SuccessNOW",
    description:
      "Transform your solar business with AI that generates qualified leads, automates consultation booking, and nurtures prospects long-term. Boost sales with SolarNOW.",
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const config = industryConfig[params.slug as keyof typeof industryConfig]

  if (!config) {
    return {
      title: "Industry Not Found | SuccessNOW",
      description: "The requested industry page could not be found.",
    }
  }

  return {
    title: config.title,
    description: config.description,
  }
}

export default function IndustryPage({ params }: Props) {
  const config = industryConfig[params.slug as keyof typeof industryConfig]

  if (!config) {
    notFound()
  }

  const Component = config.component
  return <Component />
}

// Generate static params for all industry slugs
export async function generateStaticParams() {
  return Object.keys(industryConfig).map((slug) => ({
    slug,
  }))
}
