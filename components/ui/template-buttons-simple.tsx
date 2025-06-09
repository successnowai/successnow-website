"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Sparkles } from "lucide-react"

interface Template {
  id: string
  title: string
  description: string
  url: string
  imageUrl?: string
}

interface TemplateButtonsSimpleProps {
  templates: Template[]
  baseButtonText?: string
  className?: string
}

export function TemplateButtonsSimple({
  templates,
  baseButtonText = "View Template",
  className = "",
}: TemplateButtonsSimpleProps) {
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null)

  const handleTemplateClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className={`grid gap-4 ${templates.length === 1 ? "grid-cols-1 max-w-md mx-auto" : templates.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"} ${className}`}
    >
      {templates.map((template) => (
        <Card
          key={template.id}
          className="group relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700/50 hover:border-[#00BFFF]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#00BFFF]/20"
          onMouseEnter={() => setHoveredTemplate(template.id)}
          onMouseLeave={() => setHoveredTemplate(null)}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00BFFF]/20 via-purple-500/20 to-[#00BFFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

          <CardContent className="relative p-6 text-center space-y-4">
            {/* Icon with glow effect */}
            <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-md" />
              <div className="relative w-12 h-12 bg-gradient-to-r from-[#00BFFF] to-purple-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Template info */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300">
                {template.title}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {template.description}
              </p>
            </div>

            {/* Glowing button */}
            <Button
              onClick={() => handleTemplateClick(template.url)}
              className="relative w-full bg-gradient-to-r from-[#00BFFF] to-purple-500 hover:from-[#00BFFF]/90 hover:to-purple-500/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 group/btn overflow-hidden"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-purple-500 opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300 blur-lg" />

              {/* Button content */}
              <div className="relative flex items-center justify-center gap-2">
                <span>{baseButtonText}</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Animated shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </Button>

            {/* Floating particles effect */}
            {hoveredTemplate === template.id && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-[#00BFFF] rounded-full animate-pulse"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: "2s",
                    }}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
