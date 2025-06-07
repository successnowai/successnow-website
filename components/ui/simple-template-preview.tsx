"use client"

import { Button } from "@/components/ui/button"

interface Template {
  id: string
  title: string
  description?: string
  isComingSoon?: boolean
}

interface SimpleTemplatePreviewProps {
  template: Template
  buttonText: string
  buttonClassName?: string
}

export function SimpleTemplatePreview({ template, buttonText, buttonClassName }: SimpleTemplatePreviewProps) {
  const handleClick = () => {
    if (template.isComingSoon) {
      alert("This template is coming soon! Join our newsletter to be notified when it's available.")
      return
    }

    // Direct template URL mapping - same as desktop
    const templateUrls: Record<string, string> = {
      // Auto Dealer Templates
      "auto-1": "https://v0-autodele-now-template-site.vercel.app/",
      "auto-2": "https://v0-autodele-now-template-site.vercel.app/",
      "auto-3": "https://v0-autodele-now-template-site.vercel.app/",
      "auto-4": "https://v0-autodele-now-template-site.vercel.app/",
      "auto-5": "https://v0-autodele-now-template-site.vercel.app/",

      // Medspa Templates
      "medspa-1": "https://v0-med-spa-now-client-template-1.vercel.app/",
      "medspa-2": "https://v0-med-spa-now-client-template-1.vercel.app/",
      "medspa-3": "https://v0-med-spa-now-client-template-1.vercel.app/",
      "medspa-4": "https://v0-med-spa-now-client-template-1.vercel.app/",
      "medspa-5": "https://v0-med-spa-now-client-template-1.vercel.app/",

      // Realtor Templates
      "realtor-1": "https://v0-realtor-template-site-1.vercel.app/",
      "realtor-2": "https://v0-realtor-professional-template.vercel.app/",
      "realtor-3": "https://v0-realtor-template-site-1.vercel.app/",
      "realtor-4": "https://v0-realtor-professional-template.vercel.app/",
      "realtor-5": "https://v0-realtor-template-site-1.vercel.app/",

      // Lawyer Templates
      "lawyer-1": "https://v0-lawyer-now-template-1.vercel.app/",
      "lawyer-2": "https://v0-lawyer-now-template-1.vercel.app/",
      "lawyer-3": "https://v0-lawyer-now-template-1.vercel.app/",
      "lawyer-4": "https://v0-lawyer-now-template-1.vercel.app/",
      "lawyer-5": "https://v0-lawyer-now-template-1.vercel.app/",

      // Mortgage Templates
      "mortgage-1": "https://v0-free-idx-api-options.vercel.app/",
      "mortgage-2": "https://v0-free-idx-api-options.vercel.app/",
      "mortgage-3": "https://v0-free-idx-api-options.vercel.app/",
      "mortgage-4": "https://v0-free-idx-api-options.vercel.app/",
      "mortgage-5": "https://v0-free-idx-api-options.vercel.app/",

      // Gym Templates
      "gym-1": "https://v0-autodele-now-template-site.vercel.app/",
      "gym-2": "https://v0-autodele-now-template-site.vercel.app/",
      "gym-3": "https://v0-autodele-now-template-site.vercel.app/",
      "gym-4": "https://v0-autodele-now-template-site.vercel.app/",
      "gym-5": "https://v0-autodele-now-template-site.vercel.app/",
    }

    const templateUrl = templateUrls[template.id]

    if (templateUrl) {
      // Open directly to the template URL, bypassing the /template/[id] route
      window.open(templateUrl, "_blank", "noopener,noreferrer")
    } else {
      // Fallback to the route-based system if URL not found
      window.open(`/template/${template.id}`, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <Button onClick={handleClick} disabled={template.isComingSoon} className={buttonClassName}>
      {buttonText}
    </Button>
  )
}
