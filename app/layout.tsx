import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/home/footer";
import { Toaster } from "@/components/ui/sonner";
import { FloatingChatRobot } from "@/components/chat/floating-chat-robot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuccessNOW AI",
  description: "AI-Powered Solutions for Business Growth",
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingChatRobot />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
