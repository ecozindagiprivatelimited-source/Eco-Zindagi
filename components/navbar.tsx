'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { useCart } from '@/lib/cart-context'
import { CurrencySelector } from '@/components/currency-selector'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/blog', label: 'Blog' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/team', label: 'Team' },
  { href: '/impact', label: 'Impact' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const { cartCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          scrolled
            ? 'border-b border-primary/15 bg-white/90 shadow-lg shadow-primary/5 backdrop-blur-2xl'
            : 'border-b border-white/50 bg-white/85 backdrop-blur-xl'
        )}
      >
        {/* Accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[3.75rem] items-center justify-between gap-4">
            <Logo size="sm" />

            {/* Desktop nav — lg+ only so tablet uses mobile menu */}
            <nav className="hidden items-center rounded-2xl border border-white/60 bg-white/40 p-1 shadow-inner shadow-primary/5 backdrop-blur-md lg:flex">
              {navLinks.map((link) => {
                const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative rounded-xl px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors',
                      active ? 'text-primary-foreground' : 'text-foreground/70 hover:text-primary'
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-xl bg-primary shadow-md shadow-primary/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <CurrencySelector className="hidden lg:inline-flex" />

              <Link
                href="/shop/bioloop-60"
                className="hidden rounded-xl bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-105 active:scale-[0.98] lg:inline-flex"
              >
                Shop Now
              </Link>

              <Link
                href="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-white/50 text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-white/80 hover:text-primary"
                aria-label="Cart"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-primary-foreground ring-2 ring-white"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-white/50 text-foreground backdrop-blur-sm transition-all hover:border-primary/30 lg:hidden"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              className="fixed left-4 right-4 top-[4.25rem] z-50 overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-2xl shadow-primary/15 backdrop-blur-2xl lg:hidden"
            >
              <div className="p-2">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors',
                          active
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-primary/5 hover:text-primary'
                        )}
                      >
                        {link.label}
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
                <CurrencySelector className="mt-2 w-full lg:hidden" />
                <Link
                  href="/shop/bioloop-60"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25"
                >
                  Shop BioLoop-60
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
