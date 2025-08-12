import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "purple" | "darker" | "neon" | "cyberpunk"
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variantClasses = {
    default: "card-stylized",
    purple: "card-stylized-purple",
    darker: "card-stylized-darker",
    neon: "bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 hover:border-pink-500/60 hover:shadow-pink-500/20 transition-all duration-300",
    cyberpunk:
      "bg-gray-900/60 backdrop-blur-xl border border-[#00BFFF]/30 hover:border-pink-500/60 hover:shadow-pink-500/20 transition-all duration-500",
  }

  return <div ref={ref} className={cn("rounded-lg shadow-sm", variantClasses[variant], className)} {...props} />
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6 text-white", className)} {...props} />
  ),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight text-white", className)}
      {...props}
    />
  ),
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-gray-300", className)} {...props} />,
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0 text-white", className)} {...props} />,
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0 text-white", className)} {...props} />
  ),
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
