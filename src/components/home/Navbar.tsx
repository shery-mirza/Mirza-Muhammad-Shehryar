"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07070a]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="text-lg font-bold tracking-tight">
          Mirza Muhammad<span className="text-white/40"> Shehryar</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#faq"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            FAQ
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            Let's talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="rounded-lg p-2 transition hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 bg-[#07070a]/95 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">
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
            href="#faq"
            onClick={closeMenu}
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            FAQ
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 inline-flex w-fit rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            Let's talk
          </a>
        </div>
      </div>
    </nav>
  )
}