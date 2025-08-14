"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, Download, AlertCircle } from "lucide-react"

interface VoiceSnippetPlayerProps {
  text: string
  voice?: string
  category?: string
  className?: string
  variant?: "default" | "compact" | "inline"
  autoGenerate?: boolean
}

export function VoiceSnippetPlayer({
  text,
  voice = "alloy",
  category = "general",
  className = "",
  variant = "default",
  autoGenerate = false,
}: VoiceSnippetPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const generateVoice = async () => {
    if (audioUrl) {
      // Audio already generated, just play it
      playAudio()
      return
    }

    setIsLoading(true)
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

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setAudioUrl(data.url)

      // Auto-play after generation if requested
      setTimeout(() => playAudio(), 100)
    } catch (error) {
      console.error("Voice generation error:", error)
      setError(error instanceof Error ? error.message : "Failed to generate voice")
    } finally {
      setIsLoading(false)
    }
  }

  const playAudio = () => {
    if (audioRef.current && audioUrl) {
      if (audioRef.current.src !== audioUrl) {
        audioRef.current.src = audioUrl
      }
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const togglePlayPause = () => {
    if (!audioUrl) {
      generateVoice()
      return
    }

    if (isPlaying) {
      pauseAudio()
    } else {
      playAudio()
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime
      const total = audioRef.current.duration
      setProgress((current / total) * 100)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setProgress(0)
  }

  const handleError = () => {
    setError("Failed to load audio")
    setIsPlaying(false)
  }

  const downloadAudio = () => {
    if (audioUrl) {
      const link = document.createElement("a")
      link.href = audioUrl
      link.download = `voice-snippet-${Date.now()}.mp3`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  // Auto-generate on mount if requested
  useEffect(() => {
    if (autoGenerate && !audioUrl && !isLoading) {
      generateVoice()
    }
  }, [autoGenerate])

  if (variant === "inline") {
    return (
      <span className={`inline-flex items-center gap-1 ${className}`}>
        <button
          onClick={togglePlayPause}
          disabled={isLoading}
          className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 transition-colors disabled:opacity-50"
          title={isLoading ? "Generating..." : isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <div className="w-3 h-3 border border-cyan-400 border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-3 h-3 text-cyan-400" />
          ) : (
            <Play className="w-3 h-3 text-cyan-400 ml-0.5" />
          )}
        </button>
        {error && <AlertCircle className="w-4 h-4 text-red-400" title={error} />}
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onError={handleError}
          preload="none"
        />
      </span>
    )
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 p-2 bg-gray-900/50 rounded-lg border border-gray-800 ${className}`}>
        <button
          onClick={togglePlayPause}
          disabled={isLoading}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 transition-colors disabled:opacity-50"
          title={isLoading ? "Generating..." : isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <div className="w-4 h-4 border border-cyan-400 border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-4 h-4 text-cyan-400" />
          ) : (
            <Play className="w-4 h-4 text-cyan-400 ml-0.5" />
          )}
        </button>

        {audioUrl && (
          <div className="flex-1 min-w-0">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div
                className="bg-cyan-400 h-1 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {duration > 0 && <span className="text-xs text-gray-400 tabular-nums">{formatTime(duration)}</span>}

        {error && <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" title={error} />}

        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onError={handleError}
          preload="none"
        />
      </div>
    )
  }

  // Default variant
  return (
    <div className={`bg-gray-900/50 rounded-lg border border-gray-800 p-4 ${className}`}>
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlayPause}
          disabled={isLoading}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 transition-colors disabled:opacity-50"
          title={isLoading ? "Generating..." : isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-6 h-6 text-cyan-400" />
          ) : (
            <Play className="w-6 h-6 text-cyan-400 ml-1" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-300">Voice Snippet</span>
            {audioUrl && (
              <button
                onClick={downloadAudio}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                title="Download audio"
              >
                <Download className="w-4 h-4" />
              </button>
            )}
          </div>

          {audioUrl && (
            <div className="space-y-2">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-cyan-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              {duration > 0 && (
                <div className="flex justify-between text-xs text-gray-400 tabular-nums">
                  <span>{formatTime((progress / 100) * duration)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-400">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">{error}</span>
          </div>
        )}
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={handleError}
        preload="none"
      />
    </div>
  )
}
