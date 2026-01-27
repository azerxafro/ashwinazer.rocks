"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState, Suspense } from "react"

// Lazy load the heavy WebGL component for faster initial load
const GL = dynamic(() => import("./gl").then(mod => ({ default: mod.GL })), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />,
})

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">NEW ALBUM</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Experience <br />
          <i className="font-light">sonic</i> journeys
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          Original compositions that blend electronic and organic soundscapes
        </p>

        <Link className="contents max-sm:hidden" href="/#music">
          <Button className="mt-14" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            [Explore Music]
          </Button>
        </Link>
        <Link className="contents sm:hidden" href="/#music">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Explore Music]
          </Button>
        </Link>
      </div>
    </div>
  )
}
