"use client"

import type { ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface LeadMagnetCardProps {
  title: string
  description: string
  formContent: ReactNode
  dialogTitle: string
  dialogDescription: string
}

export function LeadMagnetCard({
  title,
  description,
  formContent,
  dialogTitle,
  dialogDescription,
}: LeadMagnetCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group w-full max-w-xs md:w-64 h-48 bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-xl cursor-pointer transition-all duration-300 hover:border-purple-300/70 hover:bg-white/10 animate-pulse-glow flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-purple-300 group-hover:text-white transition-colors duration-300">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
              {description}
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-gray-900/80 backdrop-blur-md border-purple-500 text-white">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription className="text-gray-400">{dialogDescription}</DialogDescription>
        </DialogHeader>
        {formContent}
      </DialogContent>
    </Dialog>
  )
}
