import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brandBlue: "#0ea5e9",
        brandPurple: "#d946ef",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "0.5", transform: "scale(1)" },
        },
        shootingStarAnim: {
          "0%": { transform: "translateX(0) translateY(0)", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { transform: "translateX(-600px) translateY(600px)", opacity: "0" },
        },
        subtleButtonPulse: {
          "0%, 100%": {
            boxShadow: "0 0 18px 2px rgba(14, 165, 233, 0.25)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 28px 5px rgba(14, 165, 233, 0.4)",
            transform: "scale(1.025)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        twinkle: "twinkle 2s ease-in-out infinite",
        "shooting-star": "shootingStarAnim 3s linear infinite",
        "subtle-pulse": "subtleButtonPulse 3s ease-in-out infinite",
      },
      boxShadow: {
        "glow-blue-sm": "0 0 10px 2px rgba(14, 165, 233, 0.35)",
        "glow-blue-md": "0 0 18px 4px rgba(14, 165, 233, 0.45)",
        "glow-purple-sm": "0 0 10px 2px rgba(217, 70, 239, 0.35)",
        "inner-glow-blue": "inset 0 0 10px rgba(14, 165, 233, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
