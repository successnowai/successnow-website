import TemplateClientPage from "./TemplateClientPage"

interface TemplatePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { id } = await params
  return <TemplateClientPage params={{ id }} />
}

export async function generateMetadata({ params }: TemplatePageProps) {
  const { id } = await params

  const templateTitles: Record<string, string> = {
    "auto-1": "Auto Dealer Website Template",
    "medspa-1": "Medical Spa Website Template",
    "realtor-1": "Real Estate Website Template",
    "realtor-2": "Realtor Professional Template",
    "lawyer-1": "Law Firm Website Template",
    "mortgage-1": "Mortgage Broker Template",
  }

  const title = templateTitles[id] || "Website Template"

  return {
    title: `${title} - SuccessNOW`,
    description: `Preview the ${title} designed for your business needs.`,
  }
}
