"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertCircle, ExternalLink } from "lucide-react"

interface HealthCheckData {
  timestamp: string
  status: string
  structured_data: any
  files: any
  audio_content: any
  voice_search: any
  ai_optimization: any
  meta_tags: any
  faq_implementation: any
  testing_endpoints: any
  recommendations: string[]
  external_validation: any
}

export default function SEOTestPage() {
  const [healthData, setHealthData] = useState<HealthCheckData | null>(null)
  const [loading, setLoading] = useState(false)
  const [testResults, setTestResults] = useState<any>({})

  const runHealthCheck = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/seo-health-check")
      const data = await response.json()
      setHealthData(data)
    } catch (error) {
      console.error("Health check failed:", error)
    } finally {
      setLoading(false)
    }
  }

  const testEndpoint = async (endpoint: string, name: string) => {
    try {
      const response = await fetch(endpoint)
      const isSuccess = response.ok
      setTestResults((prev: any) => ({
        ...prev,
        [name]: { status: isSuccess ? "success" : "error", response: response.status },
      }))
    } catch (error) {
      setTestResults((prev: any) => ({
        ...prev,
        [name]: { status: "error", response: "Failed to fetch" },
      }))
    }
  }

  useEffect(() => {
    runHealthCheck()
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
      case "healthy":
      case "active":
      case "enabled":
      case "accessible":
      case "optimized":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">SEO Health Check & Testing</h1>
          <p className="text-gray-300 mb-6">
            Comprehensive testing dashboard for SuccessNOW.ai SEO implementation and external discoverability.
          </p>
          <Button onClick={runHealthCheck} disabled={loading} className="mb-6">
            {loading ? "Running Health Check..." : "Refresh Health Check"}
          </Button>
        </div>

        {healthData && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Overall Status */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getStatusIcon(healthData.status)}
                  Overall Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-green-400">{healthData.status.toUpperCase()}</p>
                <p className="text-sm text-gray-400">Last checked: {new Date(healthData.timestamp).toLocaleString()}</p>
              </CardContent>
            </Card>

            {/* Structured Data */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getStatusIcon(healthData.structured_data.status)}
                  Structured Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Types: {healthData.structured_data.types.length}</p>
                <p className="text-sm mb-2">Rendering: {healthData.structured_data.rendering}</p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => testEndpoint(healthData.structured_data.validation_endpoint, "schema_validation")}
                >
                  Test Validation
                </Button>
              </CardContent>
            </Card>

            {/* Files Accessibility */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle>File Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(healthData.files).map(([file, data]: [string, any]) => (
                    <div key={file} className="flex items-center justify-between">
                      <span className="text-sm">{file}</span>
                      {getStatusIcon(data.status)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Audio Content */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getStatusIcon(healthData.audio_content.status)}
                  Audio Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Format: {healthData.audio_content.format}</p>
                <p className="text-sm mb-2">Provider: {healthData.audio_content.tts_provider}</p>
                <p className="text-sm mb-2">Storage: {healthData.audio_content.storage}</p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => testEndpoint(healthData.audio_content.sitemap, "audio_sitemap")}
                >
                  Test Audio Sitemap
                </Button>
              </CardContent>
            </Card>

            {/* Voice Search */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getStatusIcon(healthData.voice_search.status)}
                  Voice Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Speakable: {healthData.voice_search.speakable_content ? "Yes" : "No"}</p>
                <p className="text-sm mb-2">Assistants: {healthData.voice_search.assistant_compatibility.length}</p>
                <p className="text-sm">
                  Natural Language: {healthData.voice_search.natural_language_queries ? "Yes" : "No"}
                </p>
              </CardContent>
            </Card>

            {/* AI Optimization */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle>AI Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">
                  Answer Engine Ready: {healthData.ai_optimization.answer_engine_ready ? "Yes" : "No"}
                </p>
                <p className="text-sm mb-2">Supported Engines: {healthData.ai_optimization.supported_engines.length}</p>
                <p className="text-sm">Citation Ready: {healthData.ai_optimization.citation_ready ? "Yes" : "No"}</p>
              </CardContent>
            </Card>

            {/* Test Results */}
            <Card className="bg-gray-900 border-gray-700 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Endpoint Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {Object.entries(healthData.testing_endpoints).map(([name, endpoint]: [string, any]) => (
                    <Button
                      key={name}
                      size="sm"
                      variant="outline"
                      onClick={() => testEndpoint(endpoint, name)}
                      className="text-xs"
                    >
                      Test {name.replace("_", " ")}
                    </Button>
                  ))}
                </div>

                {Object.keys(testResults).length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold">Test Results:</h4>
                    {Object.entries(testResults).map(([name, result]: [string, any]) => (
                      <div key={name} className="flex items-center justify-between p-2 bg-gray-800 rounded">
                        <span className="text-sm">{name}</span>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(result.status)}
                          <span className="text-xs text-gray-400">{result.response}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* External Validation */}
            <Card className="bg-gray-900 border-gray-700 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>External Validation Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(healthData.external_validation).map(([name, url]: [string, any]) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">{name.replace("_", " ").toUpperCase()}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="bg-gray-900 border-gray-700 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {healthData.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
