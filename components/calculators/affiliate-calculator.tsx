"use client"

// Affiliate & Partner Commission Sample (locked tiers + 40% partner share)
// - Affiliates earn: 1–9 = 20%, 10–24 = 25%, 25+ = 30%
// - Agency Partner earns 40% of MRR on ALL clients in their org.
//   • Direct clients: partner keeps full 40%.
//   • Affiliate-sourced clients: partner pays the affiliate tiered % OUT OF the 40%.
//     Partner NET on affiliate-sourced MRR = 40% - tier%.
// This file exports pure calc utilities + a tiny React demo.

import type React from "react"
import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/********************
 * Calc Utilities
 *******************/
export type TierRate = 0 | 0.2 | 0.25 | 0.3

export interface PartnerInputs {
  price: number // MRR per client (e.g., 997)
  months: number // horizon
  churnPct: number // monthly churn %
  directNewPerMonth: number // partner's own new clients each month
  numAffiliates: number // recruited affiliates count
  affNewPerMonth: number // avg new clients per affiliate each month
}

export interface MonthRow {
  month: number
  activeDirect: number
  activePerAffiliate: number // same for each affiliate in this symmetric model
  activeFromAffiliatesTotal: number // activePerAffiliate * numAffiliates
  tierRate: TierRate // 0.20 | 0.25 | 0.30 | 0
  mrrDirect: number // gross MRR from direct clients
  mrrAffGross: number // gross MRR from affiliate clients
  partnerFromDirect: number // 40% of mrrDirect
  affiliatePayout: number // tier% * mrrAffGross (paid from partner's 40%)
  partnerNetFromAff: number // 40% * mrrAffGross - affiliatePayout
  partnerTotal: number // partnerFromDirect + partnerNetFromAff
}

export function affiliateTierByActive(activePerAffiliate: number): TierRate {
  if (activePerAffiliate >= 25) return 0.3
  if (activePerAffiliate >= 10) return 0.25
  if (activePerAffiliate >= 1) return 0.2
  return 0
}

export function projectPartnerEarnings({
  price,
  months,
  churnPct,
  directNewPerMonth,
  numAffiliates,
  affNewPerMonth,
}: PartnerInputs): MonthRow[] {
  const rows: MonthRow[] = []
  const partnerShare = 0.4

  let activeDirect = 0
  let activePerAffiliate = 0

  for (let m = 1; m <= months; m++) {
    activeDirect = Math.max(0, Math.round(activeDirect * (1 - churnPct / 100) + directNewPerMonth))
    activePerAffiliate = Math.max(0, Math.round(activePerAffiliate * (1 - churnPct / 100) + affNewPerMonth))

    const activeFromAffiliatesTotal = activePerAffiliate * numAffiliates
    const tierRate = affiliateTierByActive(activePerAffiliate)

    const mrrDirect = activeDirect * price
    const mrrAffGross = activeFromAffiliatesTotal * price

    const partnerFromDirect = mrrDirect * partnerShare // 40%
    const grossPartnerOnAff = mrrAffGross * partnerShare // 40% before paying affiliate
    const affiliatePayout = mrrAffGross * tierRate // paid from partner's 40%
    const partnerNetFromAff = Math.max(0, grossPartnerOnAff - affiliatePayout) // 40% - tier

    rows.push({
      month: m,
      activeDirect,
      activePerAffiliate,
      activeFromAffiliatesTotal,
      tierRate,
      mrrDirect,
      mrrAffGross,
      partnerFromDirect,
      affiliatePayout,
      partnerNetFromAff,
      partnerTotal: partnerFromDirect + partnerNetFromAff,
    })
  }

  return rows
}

// One-off snapshot (no time series) if you already know the active counts
export function snapshotPartnerEarnings({
  price,
  activeDirect,
  affiliatesActiveCounts, // array of active counts per affiliate (for per‑affiliate tiering)
}: {
  price: number
  activeDirect: number
  affiliatesActiveCounts: number[]
}) {
  const partnerShare = 0.4
  const mrrDirect = activeDirect * price
  const partnerFromDirect = mrrDirect * partnerShare

  let mrrAffGross = 0
  let payout = 0
  for (const active of affiliatesActiveCounts) {
    const tier = affiliateTierByActive(active)
    const gross = active * price
    mrrAffGross += gross
    payout += gross * tier // paid from partner's 40%
  }
  const grossPartnerOnAff = mrrAffGross * partnerShare
  const partnerNetFromAff = Math.max(0, grossPartnerOnAff - payout)
  const total = partnerFromDirect + partnerNetFromAff

  return {
    mrrDirect,
    partnerFromDirect,
    mrrAffGross,
    affiliatePayout: payout,
    partnerNetFromAff,
    partnerTotal: total,
  }
}

/********************
 * Standard Affiliate Calculator Helpers
 *******************/
export function affiliateCommissionRateByReferrals(activeReferrals: number): TierRate {
  if (activeReferrals >= 25) return 0.3
  if (activeReferrals >= 10) return 0.25
  if (activeReferrals >= 1) return 0.2
  return 0
}

export function calcAffiliateCommission(activeReferrals: number, price: number) {
  const rate = affiliateCommissionRateByReferrals(activeReferrals)
  const mrr = activeReferrals * price
  return {
    rate,
    mrr,
    monthlyEarnings: mrr * rate,
    annualEarnings: mrr * rate * 12,
  }
}

function fmtUSD(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

/********************
 * React Components
 *******************/
export default function AffiliateCalculator() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Affiliate & Partner Revenue Calculators</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Calculate your potential earnings as a SuccessNOW affiliate or agency partner with our interactive tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StandardAffiliateCalculator />
          <AgencyPartnerCalculator />
        </div>
      </div>
    </div>
  )
}

function StandardAffiliateCalculator() {
  const [referrals, setReferrals] = useState(5)
  const [price, setPrice] = useState(997)

  const commission = useMemo(() => calcAffiliateCommission(referrals, price), [referrals, price])

  const tiers = [
    { range: "1–9", rate: 0.2, example: 5 },
    { range: "10–24", rate: 0.25, example: 15 },
    { range: "25+", rate: 0.3, example: 30 },
  ]

  return (
    <Card className="bg-slate-900/60 backdrop-blur-xl border-slate-700/50 shadow-2xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl">Standard Affiliate Calculator</CardTitle>
        <p className="text-sm text-slate-400">Calculate your commission based on active referrals</p>
      </CardHeader>
      <CardContent className="space-y-6">
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
            <Label htmlFor="referrals">Active Referrals</Label>
            <Input
              id="referrals"
              type="number"
              value={referrals}
              min={0}
              onChange={(e) => setReferrals(Number(e.target.value || 0))}
              className="bg-slate-900/70 border-slate-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <Stat label="Commission Rate" value={`${Math.round(commission.rate * 100)}%`} />
          <Stat label="Monthly MRR" value={fmtUSD(commission.mrr)} />
          <Stat label="Monthly Earnings" value={fmtUSD(commission.monthlyEarnings)} />
          <Stat label="Annual Earnings" value={fmtUSD(commission.annualEarnings)} />
        </div>

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
              {tiers.map((tier) => {
                const exampleEarnings = tier.example * price * tier.rate
                return (
                  <tr key={tier.range} className="odd:bg-slate-900/40 even:bg-slate-900/20">
                    <td className="p-3">{tier.range}</td>
                    <td className="p-3">{Math.round(tier.rate * 100)}%</td>
                    <td className="p-3">
                      {tier.example} referrals × {fmtUSD(price)}
                    </td>
                    <td className="p-3 font-medium">{fmtUSD(exampleEarnings)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

function AgencyPartnerCalculator() {
  const [price, setPrice] = useState(997)
  const [months, setMonths] = useState(12)
  const [churnPct, setChurnPct] = useState(5)
  const [directNew, setDirectNew] = useState(4)
  const [numAff, setNumAff] = useState(1)
  const [affNew, setAffNew] = useState(10)

  const rows = useMemo(
    () =>
      projectPartnerEarnings({
        price,
        months,
        churnPct,
        directNewPerMonth: directNew,
        numAffiliates: numAff,
        affNewPerMonth: affNew,
      }),
    [price, months, churnPct, directNew, numAff, affNew],
  )

  const last = rows[rows.length - 1]
  const yearTotal = rows.reduce((s, r) => s + r.partnerTotal, 0)

  return (
    <Card className="bg-slate-900/60 backdrop-blur-xl border-slate-700/50 shadow-2xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl">Agency Partner Calculator</CardTitle>
        <p className="text-sm text-slate-400">40% MRR share on all clients in your organization</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Field label="MRR Price">
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value || 0))}
              className="bg-slate-900/70 border-slate-700"
            />
          </Field>
          <Field label="Months">
            <Input
              type="number"
              value={months}
              min={1}
              max={60}
              onChange={(e) => setMonths(Number(e.target.value || 0))}
              className="bg-slate-900/70 border-slate-700"
            />
          </Field>
          <Field label="Churn %">
            <Input
              type="number"
              value={churnPct}
              min={0}
              max={100}
              onChange={(e) => setChurnPct(Number(e.target.value || 0))}
              className="bg-slate-900/70 border-slate-700"
            />
          </Field>
          <Field label="Direct New / Mo">
            <Input
              type="number"
              value={directNew}
              min={0}
              onChange={(e) => setDirectNew(Number(e.target.value || 0))}
              className="bg-slate-900/70 border-slate-700"
            />
          </Field>
          <Field label="# Affiliates">
            <Input
              type="number"
              value={numAff}
              min={0}
              onChange={(e) => setNumAff(Number(e.target.value || 0))}
              className="bg-slate-900/70 border-slate-700"
            />
          </Field>
          <Field label="Affiliate New / Mo (avg)">
            <Input
              type="number"
              value={affNew}
              min={0}
              onChange={(e) => setAffNew(Number(e.target.value || 0))}
              className="bg-slate-900/70 border-slate-700"
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
          <Stat label={`Active Direct @ M${months}`} value={last?.activeDirect ?? 0} />
          <Stat label={`Active via Affiliates @ M${months}`} value={last?.activeFromAffiliatesTotal ?? 0} />
          <Stat label={`Affiliate Tier @ M${months}`} value={`${Math.round((last?.tierRate ?? 0) * 100)}%`} />
          <Stat label={`Your MRR @ M${months}`} value={fmtUSD(last?.partnerTotal ?? 0)} />
          <Stat label={`12-Mo Total`} value={fmtUSD(yearTotal)} />
        </div>

        <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50">
          <h4 className="font-semibold mb-2">How Agency Partner Commissions Work:</h4>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>
              • You earn <strong>40% of MRR</strong> on ALL clients in your organization
            </li>
            <li>
              • <strong>Direct clients:</strong> You keep the full 40%
            </li>
            <li>
              • <strong>Affiliate-sourced clients:</strong> You pay affiliate commission out of your 40%
            </li>
            <li>• Your net from affiliate clients = 40% - affiliate tier rate</li>
          </ul>
        </div>
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

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-3">
      <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
      <div className="text-lg font-semibold mt-1">{typeof value === "number" ? value : value}</div>
    </div>
  )
}
