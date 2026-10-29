import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Natnael Haile | Senior Software Developer & Deployment Engineer",
  description:
    "Senior Software Developer specializing in Enterprise Banking (Commercial Bank of Ethiopia), Public Sector Management Systems, Fintech, and Full-Cycle Production Deployments.",
  keywords: [
    "Natnael Haile",
    "Commercial Bank of Ethiopia",
    "Software Developer Ethiopia",
    "Full Stack Developer",
    "DevOps Deployment",
    "Next.js",
    "Node.js",
    ".NET",
    "PostgreSQL",
    "Oracle DB",
    "React Native",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Toaster position="top-right" richColors closeButton />
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
