import { Metadata } from "next"
import BlogsClientPage from "./BlogsClientPage"

export const metadata: Metadata = {
  title: "Blogs - SuccessNOW AI Insights & Updates",
  description: "Stay updated with the latest AI technology insights, business automation tips, and success stories from SuccessNOW.",
  keywords: "AI blog, business automation, lead generation tips, AI technology insights, SuccessNOW updates",
  openGraph: {
    title: "Blogs - SuccessNOW AI Insights & Updates",
    description: "Stay updated with the latest AI technology insights, business automation tips, and success stories from SuccessNOW.",
    url: "https://successnow.ai/blogs",
    siteName: "SuccessNOW",
    images: [
      {
        url: "/images/successnow-logo.png",
        width: 1200,
        height: 630,
        alt: "SuccessNOW Blogs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs - SuccessNOW AI Insights & Updates",
    description: "Stay updated with the latest AI technology insights, business automation tips, and success stories from SuccessNOW.",
    images: ["/images/successnow-logo.png"],
  },
}

export default function BlogsPage() {
  return <BlogsClientPage />
}
