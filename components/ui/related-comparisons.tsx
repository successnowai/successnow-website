import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface RelatedComparison {
  name: string
  slug: string
  description: string
  category: string
  savings: string
}

interface RelatedComparisonsProps {
  currentCompetitor: string
  relatedComparisons: RelatedComparison[]
}

export function RelatedComparisons({ currentCompetitor, relatedComparisons }: RelatedComparisonsProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">Compare Against</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Other Competitors
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {relatedComparisons.map((comparison) => (
            <Card
              key={comparison.slug}
              className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-500/60 hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">{comparison.category}</span>
                  <span className="text-xs text-green-400 font-semibold">{comparison.savings}</span>
                </div>
                <CardTitle className="text-lg font-bold text-white">vs {comparison.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-400 text-sm mb-4">{comparison.description}</p>
                <Link href={`/competitors/${comparison.slug}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 bg-transparent"
                  >
                    View Comparison
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/competitors">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
              View All Comparisons
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
