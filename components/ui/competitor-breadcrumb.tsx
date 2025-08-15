import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface CompetitorBreadcrumbProps {
  competitorName?: string
  competitorSlug?: string
}

export function CompetitorBreadcrumb({ competitorName, competitorSlug }: CompetitorBreadcrumbProps) {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList className="text-gray-400">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-600" />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/competitors" className="hover:text-cyan-400 transition-colors">
              Competitors
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {competitorName && competitorSlug && (
          <>
            <BreadcrumbSeparator className="text-gray-600" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-medium">vs {competitorName}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default CompetitorBreadcrumb
