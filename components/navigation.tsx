'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const LOGO = 'https://techrhym.com/wp-content/uploads/2021/11/BD65F365-BB40-4953-833D-758675FD89EE_-removebg-preview-e1743497389170.png'

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/clients', label: 'Our Clients' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
] as const

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-elegant' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition" />
              <img src={LOGO} alt="TechRhym logo" className="relative h-10 w-auto object-contain" />
            </div>
            <div className="leading-tight hidden sm:flex flex-col">
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Automate. Scale. Grow.
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:shadow-glow transition-all duration-300"
            >
              Get Started
            </Link>
            <button
              className="lg:hidden h-9 w-9 grid place-items-center rounded-lg border border-border"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 animate-fade-up">
            <div className="glass-card rounded-xl p-2 flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-secondary"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 w-full text-center px-4 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
