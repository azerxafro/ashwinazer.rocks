"use client"

import { Hero } from "@/components/hero"
import { Music } from "@/components/sections/music"
import { About } from "@/components/sections/about"
import { Tour } from "@/components/sections/tour"
import { Contact } from "@/components/sections/contact"
import { Leva } from "leva"

export default function Home() {
  return (
    <>
      <Hero />
      <Music />
      <About />
      <Tour />
      <Contact />
      <Leva hidden />
    </>
  )
}
