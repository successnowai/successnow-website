"use client"

import * as React from "react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

/**
 * A reusable modal that launches the voice-demo iframe.
 * You can wrap any custom children inside <DemoPopup>…</DemoPopup>;
 * if no children are supplied, the default iframe is rendered.
 */
function DemoPopup({
  triggerLabel = "Launch Demo",
  children,
}: {
  triggerLabel?: string
  children?: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className="font-semibold">
          {triggerLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl p-0 overflow-hidden bg-transparent border-none" hideCloseButton>
        {children ?? (
          <iframe
            src="https://iframes.ai/o/1750493608926x366840044583387140?color=c540ea&icon=bot"
            allow="microphone"
            className="w-full aspect-video border-none rounded-lg"
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

export { DemoPopup }
export default DemoPopup
