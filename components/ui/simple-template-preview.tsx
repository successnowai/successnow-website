"use client"

import type React from "react"

interface SimpleTemplatePreviewProps {
  templateId: string
  imageUrl: string
  title: string
}

const SimpleTemplatePreview: React.FC<SimpleTemplatePreviewProps> = ({ templateId, imageUrl, title }) => {
  const handlePreview = () => {
    // Use the proper template route that handles URL masking and page titles
    window.open(`/template/${templateId}`, "_blank")
  }

  return (
    <div className="relative group">
      <div className="aspect-w-4 aspect-h-3">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="object-cover rounded-md shadow-md" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
        <button
          onClick={handlePreview}
          className="bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Preview
        </button>
      </div>
    </div>
  )
}

export default SimpleTemplatePreview
