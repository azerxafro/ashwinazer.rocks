"use client"

import Link from "next/link"
import { MobileMenu } from "./mobile-menu"

export const Header = () => {
  return (
    <div className="fixed z-50 pt-4 md:pt-6 top-0 left-0 w-full px-4">
      <header className="flex items-center justify-between container mx-auto px-4 py-3 rounded-2xl bg-background/60 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/5">
        <Link href="/">
          <div className="font-sentient text-xl md:text-2xl font-light">ASHWIN AZER</div>
        </Link>
        <nav className="flex max-lg:hidden items-center justify-center gap-x-8">
          {["Music", "About", "Tour", "Contact"].map((item) => (
            <Link
              className="uppercase inline-block font-mono text-sm text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>
        <Link
          className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-sm px-4 py-2 rounded-full bg-primary text-background hover:bg-primary/90"
          href="/#listen"
        >
          Listen
        </Link>
        <MobileMenu />
      </header>
    </div>
  )
}
