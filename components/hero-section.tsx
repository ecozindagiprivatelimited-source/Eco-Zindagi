'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BIOLOOP_PRODUCT_IMAGE, BIOLOOP_PRODUCT_ALT } from '@/lib/bioloop-assets'
import { GlassCard } from '@/components/glass-card'
import { EzButton } from '@/components/ez-button'
import Link from 'next/link'


const HERO_FEATURES = [
  { label: '3 Smart Waste Streams', icon: '♻️' },
  { label: 'Odor-Controlled', icon: '🛡️' },
  { label: 'Biogas + Fertilizer', icon: '🔥' },
  { label: 'Modular Design', icon: '🧩' },
  { label: 'Indoor Friendly', icon: '🏠' },
] as const

const PRODUCT_CALLOUTS = [
  {
    label: 'Multi-Stream Segregation',
    sub: '3 dedicated drawers',
    className: 'top-[8%] left-0',
    align: 'left' as const,
    delay: 0.5,
  },
  {
    label: 'Odor Filtration',
    sub: 'Charcoal filter system',
    className: 'top-[34%] right-0',
    align: 'right' as const,
    delay: 0.65,
  },
  {
    label: 'Composting Chamber',
    sub: 'Indoor-friendly processing',
    className: 'bottom-[32%] left-0',
    align: 'left' as const,
    delay: 0.8,
  },
  {
    label: 'Secure Lock',
    sub: 'Child & pet safe',
    className: 'bottom-[16%] right-0',
    align: 'right' as const,
    delay: 0.95,
  },
] as const

const TICKER = ['EcoBuck', 'ZERO-WASTE SYSTEM', 'BIOGAS READY', 'MADE IN PAKISTAN', 'CLEAN-TECH STARTUP']

function ProductCallout({
  label,
  sub,
  className,
  align,
  delay,
}: {
  label: string
  sub: string
  className: string
  align: 'left' | 'right'
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -8 : 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute z-20 hidden items-center gap-1.5 lg:flex ${className} ${align === 'right' ? 'flex-row-reverse' : ''}`}
    >
      <div className="rounded-lg border border-white/70 bg-white/55 px-2.5 py-1.5 shadow-md shadow-primary/10 backdrop-blur-md">
        <p className="whitespace-nowrap text-[10px] font-bold text-foreground">{label}</p>
        <p className="whitespace-nowrap text-[9px] text-muted-foreground">{sub}</p>
      </div>
      <div className="flex items-center">
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(74,124,68,0.6)]" />
        <span className={`h-px w-8 bg-gradient-to-r ${align === 'left' ? 'from-primary/60 to-primary/10' : 'from-primary/10 to-primary/60'}`} />
      </div>
    </motion.div>
  )
}

function MobileCalloutPills() {
  return (
    <div className="mt-3 flex flex-wrap justify-center gap-1.5 lg:hidden">
      {PRODUCT_CALLOUTS.map((c, i) => (
        <motion.span
          key={c.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.08 }}
          className="rounded-full border border-primary/20 bg-white/50 px-2 py-0.5 text-[9px] font-semibold text-foreground backdrop-blur-sm"
        >
          {c.label}
        </motion.span>
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/50">
      <div className="mesh-bg absolute inset-0" />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Pakistan&apos;s Clean-Tech Startup
            </motion.div>

            <h1 className="font-heading text-[1.65rem] font-extrabold uppercase leading-[1.12] tracking-tight text-foreground sm:text-[1.85rem] lg:text-[2rem]">
              <span className="block">Smart Waste.</span>
              <span className="block">Cleaner Living.</span>
              <span className="block text-gradient">Zero-Waste Starts at Home.</span>
            </h1>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Eco Zindagi builds smart bins, composting systems, and circular living products — segregate today, compost tomorrow.
            </p>

            <div className="flex flex-wrap gap-2">
              {HERO_FEATURES.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                >
                  <GlassCard className="flex items-center gap-2 px-3 py-1.5">
                    <span className="text-sm">{f.icon}</span>
                    <span className="text-[10px] font-semibold text-foreground/80">{f.label}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <EzButton
                href="/prebook"
                variant="primary"
                className="text-xs sm:text-sm"
              >
                Pre-book EcoBuck
              </EzButton>

              <EzButton
                href="/shop/EcoBuck"
                variant="ghost"
                className="text-xs sm:text-sm"
              >
                Explore - EcoBuck
              </EzButton>

              <EzButton
                href="/team"
                variant="ghost"
                className="text-xs sm:text-sm"
              >
                Meet the Team
              </EzButton>
            </div>
          </motion.div>

          {/* Product — no white card, transparent + callout labels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mx-auto w-full max-w-[380px] lg:ml-auto lg:max-w-[420px]"
          >
            <div className="relative flex h-[280px] items-end justify-center sm:h-[340px] lg:h-[400px]">
              {/* Soft floor glow only — no white box */}
              <div className="pointer-events-none absolute bottom-[4%] left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(74,124,68,0.2)_0%,transparent_70%)] blur-md" />

              {PRODUCT_CALLOUTS.map((callout) => (
                <ProductCallout key={callout.label} {...callout} />
              ))}

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-[92%] w-[72%]"
              >
                <Image
                  src={BIOLOOP_PRODUCT_IMAGE}
                  alt={BIOLOOP_PRODUCT_ALT}
                  fill
                  sizes="(max-width: 1024px) 300px, 380px"
                  className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(45,80,55,0.2)]"
                  priority
                />
              </motion.div>

              {/* BioLoop badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-primary/25 bg-white/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-sm"
              >
                EcoBuck
              </motion.div>
            </div>
            <MobileCalloutPills />
          </motion.div>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-xl border border-primary/25 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-3 shadow-inner shadow-primary/5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-primary/10 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-primary/10 to-transparent" />
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="flex w-max items-center gap-10 px-4"
          >
            {[...TICKER, ...TICKER].map((item, i) => (
              <span key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(74,124,68,0.6)]" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}