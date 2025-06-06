"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye, Maximize2 } from "lucide-react"

interface Template {
  url: string
  title: string
  description?: string
  isComingSoon?: boolean
}

interface TemplatePreviewProps {
  templates: Template[]
  title: string
  buttonText: string
  buttonClassName?: string
}

export function TemplatePreview({ templates, title, buttonText, buttonClassName }: TemplatePreviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)

  const openTemplateSelector = () => setIsOpen(true)
  const closeModal = () => {
    setIsOpen(false)
    setSelectedTemplate(null)
  }

  const previewInModal = (template: Template) => {
    if (template.isComingSoon) {
      alert("This template is coming soon! Join our newsletter to be notified when it's available.")
      return
    }
    setSelectedTemplate(template)
  }

  const openInNewWindow = (template: Template) => {
    if (template.isComingSoon) return

    // Open in new window with instructions for fullscreen
    const newWindow = window.open(template.url, "_blank", "width=1200,height=800,scrollbars=yes,resizable=yes")

    if (newWindow) {
      newWindow.focus()

      // Show fullscreen instructions
      setTimeout(() => {
        if (newWindow && !newWindow.closed) {
          newWindow.alert("💡 Press F11 for fullscreen mode to hide the URL completely!")
        }
      }, 2000)
    }

    closeModal()
  }

  if (!isOpen) {
    return (
      <Button
        onClick={openTemplateSelector}
        className={
          buttonClassName ||
          "px-6 py-3 bg-[#00BFFF] text-[#00274D] font-semibold rounded-md hover:bg-[#00BFFF]/90 transition-all duration-200 hover:scale-105"
        }
      >
        {buttonText}
      </Button>
    )
  }

  return (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ zIndex: 99999 }}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden"
        style={{ zIndex: 100000 }}
      >
        {selectedTemplate ? (
          // Template Preview Mode
          <>
            <div className="flex items-center justify-between p-4 border-b bg-gray-50">
              <div className="flex items-center space-x-4">
                <Button
                  onClick={() => setSelectedTemplate(null)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-900"
                >
                  ← Back to Templates
                </Button>
                <h3 className="text-lg font-semibold text-gray-900">{selectedTemplate.title}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => openInNewWindow(selectedTemplate)}
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50"
                >
                  <Maximize2 className="w-4 h-4 mr-1" />
                  Open in New Window
                </Button>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-xl font-bold px-2">
                  ×
                </button>
              </div>
            </div>
            <div className="h-[calc(95vh-80px)]">
              <iframe
                src={selectedTemplate.url}
                className="w-full h-full border-0"
                title={selectedTemplate.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </>
        ) : (
          // Template Selection Mode
          <>
            <div className="flex items-center justify-between p-6 border-b bg-gray-50">
              <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">
                ×
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(95vh-120px)]">
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-4">
                  Choose a template to preview. You can view it in this modal or open in a new window.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    💡 <strong>To Hide URL:</strong> Click "Open in New Window" then press{" "}
                    <kbd className="bg-blue-200 px-2 py-1 rounded">F11</kbd> for true fullscreen mode with no URL
                    visible.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {templates.map((template, index) => (
                  <div
                    key={index}
                    className={`border border-gray-200 rounded-lg p-4 transition-all duration-200 ${
                      template.isComingSoon
                        ? "opacity-60 bg-gray-50"
                        : "hover:border-[#00BFFF] hover:shadow-lg bg-white hover:scale-105"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h5 className="text-lg font-semibold text-gray-900 flex-1">{template.title}</h5>
                      {!template.isComingSoon && <ExternalLink className="w-4 h-4 text-[#00BFFF] ml-2 flex-shrink-0" />}
                    </div>

                    {template.description && <p className="text-gray-600 mb-4 text-sm">{template.description}</p>}

                    <div className="flex flex-col gap-2">
                      <Button
                        className={`w-full ${
                          template.isComingSoon
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#00BFFF] hover:bg-[#00BFFF]/90"
                        } text-white transition-all duration-200`}
                        disabled={template.isComingSoon}
                        onClick={() => previewInModal(template)}
                      >
                        {template.isComingSoon ? (
                          <>🚧 Coming Soon</>
                        ) : (
                          <>
                            <Eye className="w-4 h-4 mr-2" />
                            Preview in Modal
                          </>
                        )}
                      </Button>

                      {!template.isComingSoon && (
                        <Button
                          variant="outline"
                          className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm"
                          onClick={() => openInNewWindow(template)}
                        >
                          <Maximize2 className="w-4 h-4 mr-2" />
                          Open in New Window (F11 to hide URL)
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
