"use client"

import type React from "react"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

export default function AffiliateCalculators() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-center"
        >
          Affiliate & Partner Revenue Calculators
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AffiliateCalculator />
          <PartnerCalculator />
        </div>
      </div>
    </div>
  )
}

function prettyUSD(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

// ---------------- Affiliate Calculator ----------------
function AffiliateCalculator() {
  const [price, setPrice] = useState<number>(997)
  const [referrals, setReferrals] = useState<number>(5)
  const [showTierTable, setShowTierTable] = useState<boolean>(true)

  const tier = useMemo(() => {
    if (referrals >= 25) return { label: "25+ Active Referrals", rate: 0.3 }
    if (referrals >= 10) return { label: "10–24 Active Referrals", rate: 0.25 }
    return { label: "1–9 Active Referrals", rate: 0.2 }
  }, [referrals])

  const monthly = useMemo(() => referrals * price * tier.rate, [referrals, price, tier.rate])

  const tiers = [
    { range: "1–9", rate: 0.2, exampleRef: 5 },
    { range: "10–24", rate: 0.25, exampleRef: 15 },
    { range: "25+", rate: 0.3, exampleRef: 30 },
  ]

  return (
    <Card className="bg-slate-900/60 backdrop-blur-xl border-slate-700/50 shadow-2xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl">Affiliate Commission Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price">Monthly Plan Price (MRR)</Label>
            <Input
              id="price"
              type="number"
              value={price}
              min={1}
              onChange={(e) => setPrice(Number(e.target.value || 0))}
              className="bg-slate-900/70 border-slate-700"
            />
          </div>
          <div className="space-y-2">
            <Label>Active Referrals</Label>
            <div className="flex items-center gap-3">
              <Slider
                value={[referrals]}
                min={0}
                max={100}
                step={1}
                onValueChange={(v) => setReferrals(v[0])}
                className="flex-1"
              />
              <Input
                value={referrals}
                type="number"
                min={0}
                onChange={(e) => setReferrals(Number(e.target.value || 0))}
                className="w-24 bg-slate-900/70 border-slate-700"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <Stat label="Tier" value={tier.label} />
          <Stat label="Rate" value={`${Math.round(tier.rate * 100)}%`} />
          <Stat label="Your MRR" value={prettyUSD(monthly)} />
          <Stat label="Annualized" value={prettyUSD(monthly * 12)} />
        </div>

        <div className="flex items-center justify-between">
          <Label className="text-sm text-slate-400">Show tier table</Label>
          <Switch checked={showTierTable} onCheckedChange={setShowTierTable} />
        </div>

        {showTierTable && (
          <div className="overflow-hidden rounded-xl border border-slate-700/50">
            <table className="w-full text-sm">
              <thead className="bg-slate-800/60">
                <tr>
                  <th className="p-3 text-left">Active Referrals</th>
                  <th className="p-3 text-left">Commission Rate</th>
                  <th className="p-3 text-left">Example</th>
                  <th className="p-3 text-left">Monthly Earnings</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t) => {
                  const m = t.exampleRef * price * t.rate
                  return (
                    <tr key={t.range} className="odd:bg-slate-900/40 even:bg-slate-900/20">
                      <td className="p-3">{t.range}</td>
                      <td className="p-3">{Math.round(t.rate * 100)}%</td>
                      <td className="p-3">
                        {t.exampleRef} referrals × {prettyUSD(price)}
                      </td>
                      <td className="p-3 font-medium">{prettyUSD(m)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-800/40 p-4 border border-slate-700/50">
      <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  )
}

// ---------------- Partner / Reseller Calculator ----------------
// Assumptions (editable in UI): revenue share defaults to 50% of $997 MRR per active client.
// Also includes Growth Projection tab to model new clients per month, churn, and 12‑month outlook.

function PartnerCalculator() {
  // Simple MRR tab
  const [pp, setPp] = useState<number>(997) // plan price
  const [share, setShare] = useState<number>(50) // % rev share
  const [clients, setClients] = useState<number>(4)

  const simpleMRR = useMemo(() => clients * pp * (share / 100), [clients, pp, share])

  // Growth tab
  const [newPerMonth, setNewPerMonth] = useState<number>(4)
  const [months, setMonths] = useState<number>(12)
  const [churn, setChurn] = useState<number>(5) // % monthly churn

  const projection = useMemo(() => {
    const data: { month: number; active: number; mrr: number }[] = []
    let active = 0
    for (let m = 1; m <= months; m++) {
      active = Math.max(0, Math.round(active * (1 - churn / 100) + newPerMonth))
      const mrr = active * pp * (share / 100)
      data.push({ month: m, active, mrr })
    }
    return data
  }, [months, newPerMonth, churn, pp, share])

  const final = projection[projection.length - 1]

  return (
    <Card className="bg-slate-900/60 backdrop-blur-xl border-slate-700/50 shadow-2xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl">Partner / Reseller Revenue Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <Tabs defaultValue="simple" className="w-full">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="simple">Simple MRR</TabsTrigger>
            <TabsTrigger value="growth">Growth Projection</TabsTrigger>
          </TabsList>

          <TabsContent value="simple" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Field label="Monthly Plan Price (MRR)">
                <Input
                  type="number"
                  value={pp}
                  min={1}
                  onChange={(e) => setPp(Number(e.target.value || 0))}
                  className="bg-slate-900/70 border-slate-700"
                />
              </Field>
              <Field label="Revenue Share (%)">
                <div className="flex items-center gap-3">
                  <Slider
                    value={[share]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(v) => setShare(v[0])}
                    className="flex-1"
                  />
                  <Input
                    value={share}
                    type="number"
                    min={0}
                    max={100}
                    onChange={(e) => setShare(Number(e.target.value || 0))}
                    className="w-20 bg-slate-900/70 border-slate-700"
                  />
                </div>
              </Field>
              <Field label="Active Clients">
                <div className="flex items-center gap-3">
                  <Slider
                    value={[clients]}
                    min={0}
                    max={500}
                    step={1}
                    onValueChange={(v) => setClients(v[0])}
                    className="flex-1"
                  />
                  <Input
                    value={clients}
                    type="number"
                    min={0}
                    onChange={(e) => setClients(Number(e.target.value || 0))}
                    className="w-24 bg-slate-900/70 border-slate-700"
                  />
                </div>
              </Field>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <Stat label="Your Share" value={`${share}%`} />
              <Stat label="Your MRR" value={prettyUSD(simpleMRR)} />
              <Stat label="Annualized" value={prettyUSD(simpleMRR * 12)} />
              <Stat label="Per Client" value={prettyUSD(pp * (share / 100))} />
            </div>
          </TabsContent>

          <TabsContent value="growth" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="New Clients / Month">
                <div className="flex items-center gap-3">
                  <Slider
                    value={[newPerMonth]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(v) => setNewPerMonth(v[0])}
                    className="flex-1"
                  />
                  <Input
                    value={newPerMonth}
                    type="number"
                    min={0}
                    onChange={(e) => setNewPerMonth(Number(e.target.value || 0))}
                    className="w-24 bg-slate-900/70 border-slate-700"
                  />
                </div>
              </Field>
              <Field label="Monthly Churn (%)">
                <div className="flex items-center gap-3">
                  <Slider
                    value={[churn]}
                    min={0}
                    max={30}
                    step={1}
                    onValueChange={(v) => setChurn(v[0])}
                    className="flex-1"
                  />
                  <Input
                    value={churn}
                    type="number"
                    min={0}
                    max={100}
                    onChange={(e) => setChurn(Number(e.target.value || 0))}
                    className="w-24 bg-slate-900/70 border-slate-700"
                  />
                </div>
              </Field>
              <Field label="Months to Project">
                <div className="flex items-center gap-3">
                  <Slider
                    value={[months]}
                    min={1}
                    max={36}
                    step={1}
                    onValueChange={(v) => setMonths(v[0])}
                    className="flex-1"
                  />
                  <Input
                    value={months}
                    type="number"
                    min={1}
                    max={60}
                    onChange={(e) => setMonths(Number(e.target.value || 0))}
                    className="w-24 bg-slate-900/70 border-slate-700"
                  />
                </div>
              </Field>
              <Field label="Monthly Plan Price (MRR)">
                <Input
                  type="number"
                  value={pp}
                  min={1}
                  onChange={(e) => setPp(Number(e.target.value || 0))}
                  className="bg-slate-900/70 border-slate-700"
                />
              </Field>
              <Field label="Revenue Share (%)">
                <div className="flex items-center gap-3">
                  <Slider
                    value={[share]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(v) => setShare(v[0])}
                    className="flex-1"
                  />
                  <Input
                    value={share}
                    type="number"
                    min={0}
                    max={100}
                    onChange={(e) => setShare(Number(e.target.value || 0))}
                    className="w-20 bg-slate-900/70 border-slate-700"
                  />
                </div>
              </Field>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <Stat label={`Month ${months} Active`} value={`${final?.active ?? 0}`} />
              <Stat label={`MRR @ Month ${months}`} value={prettyUSD(final?.mrr ?? 0)} />
              <Stat label="Per Client (Your Share)" value={prettyUSD(pp * (share / 100))} />
              <Stat label="12-Mo Total Revenue" value={prettyUSD(projection.reduce((s, d) => s + d.mrr, 0))} />
            </div>

            <div className="h-64 w-full rounded-xl border border-slate-700/50 bg-slate-900/40 p-3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={projection} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                  <XAxis dataKey="month" tick={{ fill: "#94a3b8" }} />
                  <YAxis tick={{ fill: "#94a3b8" }} tickFormatter={(v) => `$${Math.round(v / 1000)}k`} />
                  <Tooltip
                    formatter={(v: any) => prettyUSD(Number(v))}
                    labelFormatter={(l) => `Month ${l}`}
                    contentStyle={{
                      background: "#0f172a",
                      border: "1px solid #334155",
                      borderRadius: 12,
                      color: "#e2e8f0",
                    }}
                  />
                  <Line type="monotone" dataKey="mrr" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-end gap-3">
              <Button
                variant="secondary"
                onClick={() => {
                  setNewPerMonth(4)
                  setMonths(12)
                  setChurn(5)
                  setPp(997)
                  setShare(50)
                }}
              >
                Reset Defaults
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-sm">{label}</Label>
      {children}
    </div>
  )
}
