"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Database, Key, Upload, Download, Globe, Users, BarChart3 } from "lucide-react"

export default function AdminDashboard() {
  const [apiKeys, setApiKeys] = useState({
    ghlApiKey: "",
    vapiApiKey: "",
    geteverbotsApiKey: "",
    vercelApiKey: "",
    stripeApiKey: "",
  })

  const [integrationSettings, setIntegrationSettings] = useState({
    ghlWebhookUrl: "",
    ghlLocationId: "",
    vapiAssistantId: "",
    geteverbotsWorkspaceId: "",
  })

  const handleApiKeyUpdate = (key: string, value: string) => {
    setApiKeys((prev) => ({ ...prev, [key]: value }))
  }

  const handleIntegrationUpdate = (key: string, value: string) => {
    setIntegrationSettings((prev) => ({ ...prev, [key]: value }))
  }

  const saveSettings = async () => {
    try {
      // Save to environment variables or database
      const response = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKeys, integrationSettings }),
      })

      if (response.ok) {
        alert("Settings saved successfully!")
      }
    } catch (error) {
      console.error("Error saving settings:", error)
      alert("Error saving settings")
    }
  }

  const handleFileUpload = async (type: string, file: File) => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("type", type)

    try {
      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        alert(`${type} uploaded successfully!`)
      }
    } catch (error) {
      console.error("Upload error:", error)
      alert("Upload failed")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SuccessNOW Admin Dashboard</h1>
          <p className="text-gray-600">Manage integrations, API keys, and system settings</p>
        </div>

        <Tabs defaultValue="integrations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="integrations" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Integrations</span>
            </TabsTrigger>
            <TabsTrigger value="api-keys" className="flex items-center space-x-2">
              <Key className="w-4 h-4" />
              <span>API Keys</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center space-x-2">
              <Database className="w-4 h-4" />
              <span>Data</span>
            </TabsTrigger>
            <TabsTrigger value="uploads" className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Uploads</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Users</span>
            </TabsTrigger>
          </TabsList>

          {/* Integrations Tab */}
          <TabsContent value="integrations">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>GoHighLevel Integration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="GHL Webhook URL"
                    value={integrationSettings.ghlWebhookUrl}
                    onChange={(e) => handleIntegrationUpdate("ghlWebhookUrl", e.target.value)}
                  />
                  <Input
                    placeholder="GHL Location ID"
                    value={integrationSettings.ghlLocationId}
                    onChange={(e) => handleIntegrationUpdate("ghlLocationId", e.target.value)}
                  />
                  <div className="text-sm text-gray-600">
                    Configure GoHighLevel for CRM, forms, and payment processing
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AI Chat Integration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Vapi Assistant ID"
                    value={integrationSettings.vapiAssistantId}
                    onChange={(e) => handleIntegrationUpdate("vapiAssistantId", e.target.value)}
                  />
                  <Input
                    placeholder="GetEverBots Workspace ID"
                    value={integrationSettings.geteverbotsWorkspaceId}
                    onChange={(e) => handleIntegrationUpdate("geteverbotsWorkspaceId", e.target.value)}
                  />
                  <div className="text-sm text-gray-600">Configure AI chat services for website integration</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* API Keys Tab */}
          <TabsContent value="api-keys">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Service API Keys</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">GoHighLevel API Key</label>
                    <Input
                      type="password"
                      placeholder="Enter GHL API Key"
                      value={apiKeys.ghlApiKey}
                      onChange={(e) => handleApiKeyUpdate("ghlApiKey", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Vapi.ai API Key</label>
                    <Input
                      type="password"
                      placeholder="Enter Vapi API Key"
                      value={apiKeys.vapiApiKey}
                      onChange={(e) => handleApiKeyUpdate("vapiApiKey", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">GetEverBots API Key</label>
                    <Input
                      type="password"
                      placeholder="Enter GetEverBots API Key"
                      value={apiKeys.geteverbotsApiKey}
                      onChange={(e) => handleApiKeyUpdate("geteverbotsApiKey", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform API Keys</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Vercel API Key</label>
                    <Input
                      type="password"
                      placeholder="Enter Vercel API Key"
                      value={apiKeys.vercelApiKey}
                      onChange={(e) => handleApiKeyUpdate("vercelApiKey", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Stripe API Key</label>
                    <Input
                      type="password"
                      placeholder="Enter Stripe API Key"
                      value={apiKeys.stripeApiKey}
                      onChange={(e) => handleApiKeyUpdate("stripeApiKey", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Data Tab */}
          <TabsContent value="data">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Data Import/Export</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Leads (CSV)
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Analytics
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Import Lead Data
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ADF/XML Integration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-600 mb-4">Configure ADF/XML endpoints for lead distribution</div>
                  <Input placeholder="ADF Endpoint URL" />
                  <Input placeholder="XML Endpoint URL" />
                  <Button className="w-full">Test Connection</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Uploads Tab */}
          <TabsContent value="uploads">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>File Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Templates</label>
                    <input
                      type="file"
                      accept=".zip,.html,.css,.js"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload("template", e.target.files[0])}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Assets</label>
                    <input
                      type="file"
                      accept=".jpg,.png,.gif,.svg,.pdf"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload("asset", e.target.files[0])}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>FTP Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="FTP Host" />
                  <Input placeholder="FTP Username" />
                  <Input type="password" placeholder="FTP Password" />
                  <Input placeholder="FTP Directory" />
                  <Button className="w-full">Test FTP Connection</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Website Traffic</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-[#00BFFF]">12,543</div>
                  <div className="text-sm text-gray-600">Total Visitors</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lead Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">847</div>
                  <div className="text-sm text-gray-600">Total Leads</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">6.8%</div>
                  <div className="text-sm text-gray-600">Visitor to Lead</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">User management features coming soon...</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <Button onClick={saveSettings} className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white px-8 py-2">
            Save All Settings
          </Button>
        </div>
      </div>
    </div>
  )
}
