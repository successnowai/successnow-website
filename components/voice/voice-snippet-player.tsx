"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface VoiceSnippetPlayerProps {
  text: string
  category?: string
  voice?: string
  className?: string
  variant?: "default" | "compact" | "inline"
  autoGenerate?: boolean
}

interface VoiceData {
  url: string
  cached: boolean
  success: boolean
  error?: string
}

export function VoiceSnippetPlayer({
  text,
  category = "test",
  voice = "alloy",
  className,
  variant = "default",
  autoGenerate = false,
}: VoiceSnippetPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [voiceData, setVoiceData] = useState<VoiceData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)

  // Generate voice snippet
  const generateVoice = async () => {
    if (isGenerating || !text.trim()) return

    setIsGenerating(true)
    setError(null)

    try {
      const response = await fetch("/api/generate-voice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text.trim(),
          voice,
          category,
          format: "mp3",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate voice")
      }

      setVoiceData(data)
    } catch (err: any) {
      setError(err.message || "Failed to generate voice")
      console.error("Voice generation error:", err)
    } finally {
      setIsGenerating(false)
    }
  }

  // Toggle play/pause
  const togglePlay = async () => {
    if (!voiceData?.url) return

    const audio = audioRef.current
    if (!audio) return

    try {
      if (audio.paused) {
        await audio.play()
        setIsPlaying(true)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    } catch (err) {
      console.error("Audio play error:", err)
      setError("Failed to play audio")
    }
  }

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    const handleError = () => {
      setError("Failed to load audio")
      setIsPlaying(false)
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("error", handleError)

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("error", handleError)
    }
  }, [voiceData])

  // Auto-generate on mount if enabled
  useEffect(() => {
    if (autoGenerate && !voiceData && !isGenerating) {
      generateVoice()
    }
  }, [autoGenerate])

  // Format time display
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  // Render variants
  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        {voiceData?.url && <audio ref={audioRef} src={voiceData.url} preload="metadata" />}

        {!voiceData ? (
          <Button
            onClick={generateVoice}
            disabled={isGenerating}
            size="sm"
            variant="outline"
            className="h-8 px-2 border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/10 bg-transparent"
          >
            {isGenerating ? <Loader2 className="h-3 w-3 animate-spin" /> : <Volume2 className="h-3 w-3" />}
          </Button>
        ) : (
          <Button
            onClick={togglePlay}
            size="sm"
            variant="outline"
            className="h-8 px-2 border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/10 bg-transparent"
          >
            {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          </Button>
        )}

        {error && <span className="text-xs text-red-400">Error</span>}
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <span className={cn("inline-flex items-center gap-1 ml-2", className)}>
        {voiceData?.url && <audio ref={audioRef} src={voiceData.url} preload="metadata" />}

        {!voiceData ? (
          <button
            onClick={generateVoice}
            disabled={isGenerating}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            title="Generate audio"
          >
            {isGenerating ? <Loader2 className="h-3 w-3 animate-spin" /> : <Volume2 className="h-3 w-3" />}
          </button>
        ) : (
          <button
            onClick={togglePlay}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            title={isPlaying ? "Pause audio" : "Play audio"}
          >
            {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          </button>
        )}
      </span>
    )
  }

  // Default variant
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg border border-cyan-500/20 bg-black/40 backdrop-blur-sm",
        className,
      )}
    >
      {voiceData?.url && <audio ref={audioRef} src={voiceData.url} preload="metadata" />}

      <div className="flex items-center gap-2">
        {!voiceData ? (
          <Button
            onClick={generateVoice}
            disabled={isGenerating}
            size="sm"
            className="bg-cyan-600 hover:bg-cyan-700 text-white"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Volume2 className="h-4 w-4 mr-2" />
                Generate Audio
              </>
            )}
          </Button>
        ) : (
          <Button onClick={togglePlay} size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white">
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Play
              </>
            )}
          </Button>
        )}
      </div>

      {voiceData && duration > 0 && (
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-500 transition-all duration-100"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <span>{formatTime(duration)}</span>
        </div>
      )}

      {voiceData?.cached && <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Cached</span>}

      {error && <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">{error}</span>}
    </div>
  )
}
