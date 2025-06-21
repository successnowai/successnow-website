import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-[#00BFFF]/70",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-[#00BFFF]/70",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-[#00BFFF]/70",
        link: "text-primary underline-offset-4 hover:underline focus:ring-2 focus:ring-[#00BFFF]/70",
      },
      size: {
        default: "min-h-[44px] h-10 px-4 sm:px-5 py-2 text-xs sm:text-sm", // Improved touch target
        sm: "min-h-[40px] h-9 rounded-md px-3 sm:px-4 text-xs", // Improved touch target
        lg: "min-h-[48px] h-11 rounded-md px-6 sm:px-8 text-sm sm:text-base", // Improved touch target
        icon: "min-h-[44px] min-w-[44px] h-9 w-9 sm:h-10 sm:w-10", // Improved touch target
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
