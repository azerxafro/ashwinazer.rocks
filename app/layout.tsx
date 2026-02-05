import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ashwin Azer | Music Artist - Hip-Hop, Rap & Indie",
  description: "Official website of Ashwin Azer (Lucid ASH), independent music artist from Coimbatore, India. Stream albums like DESTINY, DEMON SMILE, Pikachu on Spotify, Apple Music.",
  keywords: ["Ashwin Azer", "Lucid ASH", "Hip-Hop", "Rap", "Indie", "Indian Music Artist", "Coimbatore", "Tamil Rapper", "DESTINY album", "DEMON SMILE", "Pikachu NEW ERA", "Wa'Cali", "South Indian Hip-Hop"],
  authors: [{ name: "Ashwin Azer", url: "https://ashwinazer.rocks" }],
  creator: "Ashwin Azer",
  publisher: "Ashwin Azer",
  generator: "Next.js",
  applicationName: "Ashwin Azer Official",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashwinazer.rocks",
    siteName: "Ashwin Azer",
    title: "Ashwin Azer | Music Artist - Hip-Hop, Rap & Indie",
    description: "Stream music by Ashwin Azer & Lucid ASH. Albums: DESTINY, DEMON SMILE, Pikachu. Independent artist from India blending Hip-Hop, Rap & Indie.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ashwin Azer - Music Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Azer | Music Artist",
    description: "Independent Hip-Hop, Rap & Indie artist from India. Stream on Spotify, Apple Music.",
    images: ["/og-image.jpg"],
    creator: "@azerxafro",
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
  icons: {
    icon: [
      { url: "/favicon-custom.png", type: "image/png" },
    ],
    shortcut: "/favicon-custom.png",
    apple: "/favicon-custom.png",
  },
  alternates: {
    canonical: "https://ashwinazer.rocks",
  },
  category: "music",
}

// JSON-LD Structured Data for Music Artist
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "Ashwin Azer",
  "alternateName": ["Lucid ASH", "azerxafro"],
  "url": "https://ashwinazer.rocks",
  "description": "Independent Hip-Hop, Rap & Indie music artist from Coimbatore, India",
  "genre": ["Hip-Hop", "Rap", "Indie"],
  "foundingLocation": {
    "@type": "Place",
    "name": "Coimbatore, Tamil Nadu, India"
  },
  "sameAs": [
    "https://open.spotify.com/artist/4qSmbN4VuMODJnTNxAFvti",
    "https://music.apple.com/in/artist/ashwin-azer/1526462423",
    "https://www.youtube.com/c/ashwinazer",
    "https://www.instagram.com/azerxafro",
    "https://musicbrainz.org/artist/b43aaeda-d79e-4711-b242-feebf44c76fb"
  ],
  "member": {
    "@type": "Person",
    "name": "Ashwin Ramesh",
    "alternateName": "Ashwin Azer"
  },
  "album": [
    {
      "@type": "MusicAlbum",
      "name": "DESTINY",
      "datePublished": "2024"
    },
    {
      "@type": "MusicAlbum", 
      "name": "DEMON SMILE",
      "datePublished": "2024"
    },
    {
      "@type": "MusicAlbum",
      "name": "Pikachu (NEW ERA)",
      "datePublished": "2023"
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-custom.png" />
        <link rel="apple-touch-icon" href="/favicon-custom.png" />
        <link rel="canonical" href="https://ashwinazer.rocks" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  )
}
