'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/glass-card'
import { EzButton } from '@/components/ez-button'
import { HomeSection, SectionHeader } from '@/components/home-section'

const benefits = [
  { title: 'Society-Wide Segregation', desc: 'Install BioLoop units across blocks — organics, recyclables, and reject handled at source.', icon: '🏘️' },
  { title: 'City-Scale Pilots', desc: 'Deploy Community BioLoop 120L in schools, markets, and public spaces across your municipality.', icon: '🏙️' },
  { title: 'Biogas & Digestate', desc: 'Turn community waste into supplemental biogas and nutrient-rich output for green spaces.', icon: '⚡' },
  { title: 'Full Team Support', desc: 'Eco Zindagi handles installation, training, maintenance, and ongoing circular operations.', icon: '🛠️' },
]

export function SocietiesSection({
  compact = false,
  tight = false,
}: {
  compact?: boolean
  tight?: boolean
}) {
  return (
    <HomeSection tone="muted" tight={tight} className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="For Societies & Cities"
          title="Turn Your Community Into a Green & Clean System"
          description="Install Eco Zindagi products across housing societies, campuses, and city blocks — we partner with management teams to build zero-waste infrastructure at scale."
        />

        <div className={`grid items-center gap-8 ${compact ? '' : 'lg:grid-cols-2'}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <GlassCard glow className="overflow-hidden p-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white">
                <Image
                  src="/products/community-bioloop-120l.png"
                  alt="Community BioLoop 120L for societies and cities"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Housing Societies', 'Universities', 'Municipalities', 'Commercial Hubs'].map((tag) => (
                  <span key={tag} className="rounded-full border border-primary/20 bg-white/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <div className="space-y-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <GlassCard hover glow className="flex gap-4 p-4">
                  <span className="text-2xl">{b.icon}</span>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground">{b.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{b.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              <EzButton href="/partnerships" variant="primary">Partner With Us</EzButton>
              <EzButton href="/contact?subject=partnership" variant="ghost">Contact the Team</EzButton>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}
