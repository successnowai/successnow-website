import type React from "react"

interface JsonLdScriptProps {
  data: object
}

const JsonLdScript: React.FC<JsonLdScriptProps> = ({ data }) => {
  // Using JSON.stringify and dangerouslySetInnerHTML is the recommended approach by Google
  // for injecting JSON-LD. Next.js will handle the script tag placement correctly.
  // The content is structured data, not user-generated, so the risk of XSS is minimal.
  // We can add an extra layer of safety by replacing '<' to prevent breaking out of the script tag.
  const sanitizedData = JSON.stringify(data).replace(/</g, "\\u003c")

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: sanitizedData }} />
}

export default JsonLdScript
