"use client"

import { VoiceSnippetPlayer } from "./voice-snippet-player"
import { cn } from "@/lib/utils"

interface VoiceSnippetSectionProps {
  title?: string
  text: string
  category: string
  className?: string
  showTitle?: boolean
}

export function VoiceSnippetSection({ title, text, category, className, showTitle = true }: VoiceSnippetSectionProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {showTitle && title && (
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-medium text-gray-300">{title}</h4>
          <VoiceSnippetPlayer text={text} category={category} variant="inline" />
        </div>
      )}

      {!showTitle && <VoiceSnippetPlayer text={text} category={category} variant="compact" className="mb-2" />}

      <div className="text-gray-300 leading-relaxed">{text}</div>
    </div>
  )
}
