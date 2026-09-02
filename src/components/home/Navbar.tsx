"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07070a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight"
        >
          Mirza Muhammad<span className="text-white/40"> Shehryar</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-black md:block"
        >
          Let's talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-lg p-2 transition hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#07070a]/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex w-fit rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}