import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { MaintenanceGate } from "@/components/maintenance-mode"

function getMetadataBase(): URL | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL
  try {
    return new URL(raw ?? "http://localhost:3000")
  } catch {
    return undefined
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Sque - Legal Revenue & Operating System",
    template: "%s | Sque",
  },
  description:
    "Stop losing billable time you've already earned. Sque captures work automatically and runs billing as your system of record.",
  keywords: "legal billing, revenue recovery, legal tech, AI automation, billable hours",
  authors: [{ name: "Sque" }],
  openGraph: {
    title: "Sque - Legal Revenue & Operating System",
    description:
      "Stop losing billable time you've already earned. Sque captures work automatically and runs billing as your system of record.",
    url: "/",
    siteName: "Sque",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sque - Legal Revenue & Operating System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sque - Legal Revenue & Operating System",
    description:
      "Stop losing billable time you've already earned. Sque captures work automatically and runs billing as your system of record.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <MaintenanceGate>{children}</MaintenanceGate>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}