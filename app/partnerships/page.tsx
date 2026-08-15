'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GlassCard } from '@/components/glass-card'
import { EzButton } from '@/components/ez-button'
import { SocietiesSection } from '@/components/societies-section'
import { submitPartnership } from '@/lib/api'
import { whatsappUrl, WHATSAPP_DISPLAY } from '@/lib/contact'
import { motion } from 'framer-motion'

const types = [
  { value: 'society', label: 'Housing Society' },
  { value: 'city', label: 'City / Municipality' },
  { value: 'school', label: 'School / University' },
  { value: 'commercial', label: 'Commercial Complex' },
  { value: 'other', label: 'Other' },
]

export default function PartnershipsPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    type: 'society',
    location: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('saving')
    try {
      await submitPartnership(form)
      const msg = `Hi Eco Zindagi! Partnership inquiry:\n\nName: ${form.name}\nOrg: ${form.organization}\nType: ${form.type}\nLocation: ${form.location}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
      window.open(whatsappUrl(msg), '_blank')
      setStatus('done')
      setForm({ name: '', email: '', phone: '', organization: '', type: 'society', location: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />
      <main className="mesh-bg min-h-screen">
        <section className="border-b border-white/40 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Institutional Partnerships</p>
            <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Green & Clean Systems for Societies & Cities
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              Partner with Eco Zindagi to install smart waste infrastructure across your community. From housing societies in Lahore to city-wide pilots — our team designs, deploys, and maintains the full circular system.
            </p>
          </div>
        </section>

        <SocietiesSection compact />

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <GlassCard glow className="p-6">
              <h2 className="font-heading text-xl font-bold text-foreground">Request a Partnership</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your details and our team will reach out within 48 hours. You can also WhatsApp us at {WHATSAPP_DISPLAY}.
              </p>

              {status === 'done' && (
                <div className="mt-4 rounded-lg border border-primary/20 bg-primary/10 p-3 text-sm text-primary">
                  Inquiry saved! We&apos;ve opened WhatsApp so you can connect with our team directly.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
                  Something went wrong. Please try WhatsApp or email us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="rounded-xl border border-border bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="rounded-xl border border-border bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone (+92 ...)" className="w-full rounded-xl border border-border bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                <input required value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} placeholder="Society / City / Organization name" className="w-full rounded-xl border border-border bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="rounded-xl border border-border bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    {types.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  <input required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="City / Location" className="rounded-xl border border-border bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your community size, waste challenges, and goals..." className="w-full resize-none rounded-xl border border-border bg-white/70 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                <button type="submit" disabled={status === 'saving'} className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-105 disabled:opacity-60">
                  {status === 'saving' ? 'Submitting...' : 'Submit & Contact Team'}
                </button>
              </form>
            </GlassCard>

            <div className="space-y-4">
              {[
                { step: '01', title: 'Site Assessment', desc: 'Our team visits your society or city block to map waste flows, space, and community needs.' },
                { step: '02', title: 'Custom Deployment', desc: 'We install EcoBuck units in homes and Community EcoBuck 120L at central collection points.' },
                { step: '03', title: 'Training & Onboarding', desc: 'Residents, staff, and management teams learn segregation, maintenance, and circular operations.' },
                { step: '04', title: 'Ongoing Support', desc: 'Filters, refills, sensor monitoring, and Eco Zindagi team support keep the system running clean.' },
              ].map((s, i) => (
                <motion.div key={s.step} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                  <GlassCard hover className="flex gap-4 p-5">
                    <span className="font-heading text-2xl font-bold text-primary/40">{s.step}</span>
                    <div>
                      <h3 className="font-heading font-bold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-14 sm:px-6 lg:px-8">
          <GlassCard glow className="mx-auto max-w-4xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[220px] bg-white md:min-h-[280px]">
                <Image src="/products/bioloop-60.png" alt="BioLoop-60" fill className="object-contain p-6" />
              </div>
              <div className="flex flex-col justify-center p-8">
                <h2 className="font-heading text-xl font-bold text-foreground">Ready to transform your community?</h2>
                <p className="mt-2 text-sm text-muted-foreground">Join housing societies and city pilots already working with Eco Zindagi across Pakistan.</p>
                <div className="mt-4">
                  <a
                    href={whatsappUrl('Hi! I want to discuss a society/city partnership with Eco Zindagi.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-105"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>
      </main>
      <Footer />
    </>
  )
}
