import type { Metadata } from "next"
import TemplateClientPage from "./TemplateClientPage"

interface TemplatePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const templateTitles: Record<string, string> = {
    "auto-1": "Auto Dealer Website Template - SuccessNOW",
    "medspa-1": "Medical Spa Website Template - SuccessNOW",
    "realtor-1": "Real Estate Website Template - SuccessNOW",
    "realtor-2": "Realtor Professional Template - SuccessNOW",
    "lawyer-1": "Law Firm Website Template - SuccessNOW",
    "mortgage-1": "Mortgage Broker Template - SuccessNOW",
  }

  const title = templateTitles[params.id] || "Website Template - SuccessNOW"

  return {
    title,
    description: "Professional website template preview",
  }
}

export default function TemplatePage({ params }: TemplatePageProps) {
  return <TemplateClientPage params={params} />
}
