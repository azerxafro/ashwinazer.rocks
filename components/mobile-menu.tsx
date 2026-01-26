"use client"

import { cn } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface MobileMenuProps {
  className?: string
}

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Music", href: "#music" },
    { name: "About", href: "#about" },
    { name: "Tour", href: "#tour" },
    { name: "Contact", href: "#contact" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn("group lg:hidden p-2 text-foreground transition-colors", className)}
          aria-label="Open menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div 
          data-overlay="true" 
          className="fixed z-30 inset-0 bg-background/80 backdrop-blur-xl" 
          onClick={() => setIsOpen(false)}
        />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (e.target instanceof HTMLElement && e.target.dataset.overlay !== "true") {
              e.preventDefault()
            }
          }}
          className="fixed top-0 left-0 w-full h-full z-40 flex items-center justify-center"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          <nav className="flex flex-col items-center space-y-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="text-3xl font-sentient text-foreground/80 transition-colors ease-out duration-150 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-8 pt-8 border-t border-border">
              <Link
                href="/#listen"
                onClick={handleLinkClick}
                className="inline-block px-8 py-3 text-lg font-mono uppercase bg-primary text-background rounded-full transition-colors ease-out duration-150 hover:bg-primary/90"
              >
                Listen Now
              </Link>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
