"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Maximize2, Minimize2, ArrowLeft } from "lucide-react"

interface Template {
  url: string
  title: string
  description?: string
  isComingSoon?: boolean
}

interface MultiTemplateModalProps {
  templates: Template[]
  title: string
  buttonText: string
  buttonClassName?: string
}

export function MultiTemplateModal({ templates, title, buttonText, buttonClassName }: MultiTemplateModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const openModal = () => setIsOpen(true)

  const closeModal = () => {
    setIsOpen(false)
    setSelectedTemplate(null)
    setIsFullscreen(false)
  }

  const selectTemplate = (template: Template) => {
    if (template.isComingSoon) return
    setSelectedTemplate(template)
  }

  const goBack = () => {
    setSelectedTemplate(null)
    setIsFullscreen(false)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedTemplate) {
          goBack()
        } else {
          closeModal()
        }
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
      // Ensure modal is on top
      document.body.style.position = "relative"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
      document.body.style.position = "unset"
    }
  }, [isOpen])

  if (!isOpen) {
    return (
      <Button
        onClick={openModal}
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
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm" style={{ zIndex: 9998 }} onClick={closeModal} />

      {/* Modal Window */}
      <div className="fixed inset-0 flex items-center justify-center p-2" style={{ zIndex: 9999 }}>
        <div
          className={`relative bg-white shadow-2xl transition-all duration-300 ${
            isFullscreen ? "w-screen h-screen" : "w-[96vw] h-[96vh] rounded-lg"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div
            className={`flex items-center justify-between p-4 border-b bg-gray-50 ${!isFullscreen ? "rounded-t-lg" : ""}`}
          >
            <div className="flex items-center space-x-4 flex-1">
              {selectedTemplate && (
                <Button
                  onClick={goBack}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                  title="Back to Templates"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
              )}
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {selectedTemplate ? selectedTemplate.title : title}
              </h3>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              {selectedTemplate && (
                <Button
                  onClick={toggleFullscreen}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                  title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                  {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                </Button>
              )}
              <Button
                onClick={closeModal}
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <div
            className={`${isFullscreen ? "h-[calc(100vh-64px)]" : "h-[calc(96vh-64px)]"} ${!isFullscreen ? "rounded-b-lg" : ""} overflow-hidden`}
          >
            {selectedTemplate ? (
              <div className="w-full h-full bg-white">
                <iframe
                  src={selectedTemplate.url}
                  className="w-full h-full border-0"
                  title={selectedTemplate.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  style={{ backgroundColor: "white" }}
                />
              </div>
            ) : (
              <div className="p-8 h-full overflow-y-auto bg-white">
                <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Choose a Template to Preview:</h4>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                  {templates.map((template, index) => (
                    <div
                      key={index}
                      className={`border border-gray-200 rounded-lg p-6 transition-all duration-200 ${
                        template.isComingSoon
                          ? "opacity-60 cursor-not-allowed bg-gray-50"
                          : "hover:border-[#00BFFF] hover:shadow-lg cursor-pointer bg-white hover:scale-105"
                      }`}
                      onClick={() => selectTemplate(template)}
                    >
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">{template.title}</h5>
                      {template.description && <p className="text-gray-600 mb-4 text-sm">{template.description}</p>}
                      <Button
                        className={`w-full ${
                          template.isComingSoon
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#00BFFF] hover:bg-[#00BFFF]/90"
                        } text-white transition-all duration-200`}
                        disabled={template.isComingSoon}
                        onClick={(e) => {
                          e.stopPropagation()
                          selectTemplate(template)
                        }}
                      >
                        {template.isComingSoon ? "🚧 Coming Soon" : "Preview Template"}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
