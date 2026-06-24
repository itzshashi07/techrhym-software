'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Zap, Code, Share2 } from 'lucide-react'
import Image from 'next/image'

const LOGO = 'https://Techrhym.com/wp-content/uploads/2021/11/BD65F365-BB40-4953-833D-758675FD89EE_-removebg-preview-e1743497389170.png'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-border bg-gradient-to-b from-transparent to-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img src={LOGO} alt="Techrhym" className="h-10 w-auto object-contain" />
              <span className="font-display text-lg font-bold"></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Business automation, Zoho consulting, AI & custom software development partner for modern global businesses.
            </p>
            <div className="flex gap-2 mt-5">
              {[
                { icon: Zap, label: 'LinkedIn' },
                { icon: Code, label: 'GitHub' },
                { icon: Mail, label: 'Email' },
                { icon: Share2, label: 'Share' }
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <a
                    key={i}
                    href="#"
                    aria-label={social.label}
                    className="h-9 w-9 grid place-items-center rounded-lg border border-border hover:bg-secondary hover:text-primary transition"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-foreground">Zoho CRM Implementation</Link></li>
              <li><Link href="/services" className="hover:text-foreground">AI Chatbots</Link></li>
              <li><Link href="/services" className="hover:text-foreground">WhatsApp Automation</Link></li>
              <li><Link href="/services" className="hover:text-foreground">Custom Software</Link></li>
              <li><Link href="/services" className="hover:text-foreground">Business Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link href="/clients" className="hover:text-foreground">Our Clients</Link></li>
              <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <a href="mailto:Info@Techrhym.com" className="hover:text-foreground">Info@Techrhym.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <a href="tel:+918078633912" className="hover:text-foreground">+91 8078 633 912</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Sector 66, Noida, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Techrhym. All rights reserved.</p>
          <p>Business Automation • CRM • AI • Custom Software</p>
        </div>
      </div>
    </footer>
  )
}
