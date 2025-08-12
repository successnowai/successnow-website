"use client"

import type React from "react"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"

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
 * React Component
 *******************/
export default function AffiliateCalculators() {
  const [price, setPrice] = useState(997)
  const [months, setMonths] = useState(12)
  const [churnPct, setChurnPct] = useState(5)
  const [directNew, setDirectNew] = useState(4)
  const [numAff, setNumAff] = useState(1)
  const [affNew, setAffNew] = useState(10)

  // Standard affiliate calculator state
  const [affiliateReferrals, setAffiliateReferrals] = useState(5)
  const [affiliatePrice, setAffiliatePrice] = useState(997)

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

  // Standard affiliate calculations
  const affiliateCommission = useMemo(() => {
    const rate = affiliateCommissionRateByReferrals(affiliateReferrals)
    const mrr = affiliateReferrals * affiliatePrice
    return {
      rate,
      mrr,
      monthlyEarnings: mrr * rate,
      annualEarnings: mrr * rate * 12,
    }
  }, [affiliateReferrals, affiliatePrice])

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Standard Affiliate Calculator */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6">Standard Affiliate Calculator</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <L label="Monthly Plan Price (MRR)">
                <input
                  type="number"
                  value={affiliatePrice}
                  onChange={(e) => setAffiliatePrice(Number(e.target.value || 0))}
                  className="w-full rounded bg-black/40 border border-white/10 px-3 py-2"
                />
              </L>
              <L label="Active Referrals">
                <input
                  type="number"
                  value={affiliateReferrals}
                  onChange={(e) => setAffiliateReferrals(Number(e.target.value || 0))}
                  className="w-full rounded bg-black/40 border border-white/10 px-3 py-2"
                />
              </L>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-6">
              <S label="Tier Rate" value={`${Math.round(affiliateCommission.rate * 100)}%`} />
              <S label="Monthly MRR" value={fmtUSD(affiliateCommission.mrr)} />
              <S label="Monthly Earnings" value={fmtUSD(affiliateCommission.monthlyEarnings)} />
              <S label="Annual Earnings" value={fmtUSD(affiliateCommission.annualEarnings)} />
            </div>

            {/* Tier Table */}
            <div className="overflow-hidden rounded-xl border border-slate-700/50">
              <table className="w-full text-sm">
                <thead className="bg-slate-800/60">
                  <tr>
                    <th className="p-3 text-left">Active Referrals</th>
                    <th className="p-3 text-left">Commission Rate</th>
                    <th className="p-3 text-left">Example Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { range: "1–9", rate: 0.2, example: 5 },
                    { range: "10–24", rate: 0.25, example: 15 },
                    { range: "25+", rate: 0.3, example: 30 },
                  ].map((tier) => (
                    <tr key={tier.range} className="odd:bg-slate-900/40 even:bg-slate-900/20">
                      <td className="p-3">{tier.range}</td>
                      <td className="p-3">{Math.round(tier.rate * 100)}%</td>
                      <td className="p-3">{fmtUSD(tier.example * affiliatePrice * tier.rate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Agency Partner Calculator */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6">Agency Partner Calculator</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              <L label="MRR Price">
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value || 0))}
                  className="w-full rounded bg-black/40 border border-white/10 px-3 py-2"
                />
              </L>
              <L label="Months">
                <input
                  type="number"
                  value={months}
                  min={1}
                  max={60}
                  onChange={(e) => setMonths(Number(e.target.value || 0))}
                  className="w-full rounded bg-black/40 border border-white/10 px-3 py-2"
                />
              </L>
              <L label="Churn %">
                <input
                  type="number"
                  value={churnPct}
                  min={0}
                  max={100}
                  onChange={(e) => setChurnPct(Number(e.target.value || 0))}
                  className="w-full rounded bg-black/40 border border-white/10 px-3 py-2"
                />
              </L>
              <L label="Direct New / Mo">
                <input
                  type="number"
                  value={directNew}
                  min={0}
                  onChange={(e) => setDirectNew(Number(e.target.value || 0))}
                  className="w-full rounded bg-black/40 border border-white/10 px-3 py-2"
                />
              </L>
              <L label="# Affiliates">
                <input
                  type="number"
                  value={numAff}
                  min={0}
                  onChange={(e) => setNumAff(Number(e.target.value || 0))}
                  className="w-full rounded bg-black/40 border border-white/10 px-3 py-2"
                />
              </L>
              <L label="Affiliate New / Mo (avg)">
                <input
                  type="number"
                  value={affNew}
                  min={0}
                  onChange={(e) => setAffNew(Number(e.target.value || 0))}
                  className="w-full rounded bg-black/40 border border-white/10 px-3 py-2"
                />
              </L>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm mb-6">
              <S label={`Active Direct @ M${months}`} value={last?.activeDirect ?? 0} />
              <S label={`Active via Affiliates @ M${months}`} value={last?.activeFromAffiliatesTotal ?? 0} />
              <S label={`Affiliate Tier @ M${months}`} value={`${Math.round((last?.tierRate ?? 0) * 100)}%`} />
              <S label={`Your MRR @ M${months}`} value={fmtUSD(last?.partnerTotal ?? 0)} />
              <S label={`12-Mo Total`} value={fmtUSD(yearTotal)} />
            </div>

            <div className="text-xs text-slate-400 bg-slate-800/40 rounded-lg p-4">
              <p className="mb-2">
                <strong>How Agency Partner Commissions Work:</strong>
              </p>
              <p className="mb-1">• You earn 40% of MRR on ALL clients in your organization</p>
              <p className="mb-1">• Direct clients: You keep the full 40%</p>
              <p>• Affiliate-sourced clients: You pay affiliate commission out of your 40%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function L({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1 text-xs">
      <span className="opacity-70">{label}</span>
      {children}
    </label>
  )
}

function S({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-[11px] opacity-70">{label}</div>
      <div className="text-base font-semibold">{typeof value === "number" ? value : value}</div>
    </div>
  )
}

function fmtUSD(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

/********************
 * (Optional) Standard Affiliate Calculator Helpers
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
