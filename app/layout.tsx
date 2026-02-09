import "@/styles/globals.css"
import type React from "react"

export const metadata = {
  title: "Ashwin Azer - Video Editor & Content Creator",
  description: "Professional video editor specializing in engaging visual storytelling, color grading, and motion graphics. Based in Coimbatore, India. Portfolio showcasing YouTube content, movie analysis, and creative projects.",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon-custom.png', type: 'image/png' },
    ],
    shortcut: '/favicon-custom.png',
    apple: '/favicon-custom.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon-custom.png" />
        <link rel="apple-touch-icon" href="/favicon-custom.png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
