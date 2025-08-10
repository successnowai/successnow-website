import type { JsonLd } from "@/lib/json-ld"

interface JsonLdScriptProps {
  data: JsonLd | object
}

export default function JsonLdScript({ data }: JsonLdScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  )
}
