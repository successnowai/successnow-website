"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface LeadMagnetCardProps {
  title: string
  description: string
  formContent: React.ReactNode
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="bg-gray-900/50 border-gray-700 hover:border-[#4DA6FF]/50 transition-all duration-300 w-full max-w-sm">
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-[#4DA6FF] hover:bg-[#3d8bff] text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200">
              Get Free Guide
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-[90vw] max-h-[95vh] overflow-y-auto bg-white p-0">
            <DialogHeader className="p-6 pb-2">
              <DialogTitle className="text-2xl font-bold text-gray-900">{dialogTitle}</DialogTitle>
              <DialogDescription className="text-gray-600">{dialogDescription}</DialogDescription>
            </DialogHeader>
            <div className="px-6 pb-6">{formContent}</div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}
