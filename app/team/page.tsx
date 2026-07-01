'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useActionState, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GlassCard } from '@/components/glass-card'
import { teamMembers, internOpenings, type TeamMember } from '@/lib/product-data'
import { submitInternApplication, type ApplyState } from '@/app/actions/intern-apply'

const typeLabels = {
  founder: 'Leadership',
  partner: 'Partnership',
  advisor: 'Advisors',
  intern: 'Interns',
}

function MemberPhoto({ member, size = 'md' }: { member: TeamMember; size?: 'lg' | 'md' | 'sm' }) {
  const initials = member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)
  const sizeClass =
    size === 'lg' ? 'h-36 w-36 md:h-44 md:w-44' : size === 'sm' ? 'h-16 w-16' : 'h-24 w-24'

  if (!member.image) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 font-heading font-bold text-primary ${sizeClass} ${size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-sm' : 'text-xl'}`}
      >
        {initials}
      </div>
    )
  }

  return (
    <div className={`relative shrink-0 overflow-hidden rounded-2xl border border-white/60 shadow-lg shadow-primary/10 ${sizeClass}`}>
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes={size === 'lg' ? '176px' : size === 'sm' ? '64px' : '96px'}
        className="object-cover object-top"
      />
    </div>
  )
}

function MemberCard({ member, photoSize = 'md' }: { member: TeamMember; photoSize?: 'lg' | 'md' | 'sm' }) {
  return (
    <div className="flex items-start gap-4">
      <MemberPhoto member={member} size={photoSize} />
      <div>
        <h4 className="font-heading font-bold text-foreground">{member.name}</h4>
        <p className="text-xs font-semibold text-primary">{member.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
      </div>
    </div>
  )
}

function InternForm() {
  const [state, action, pending] = useActionState<ApplyState, FormData>(submitInternApplication, null)
  const [selected, setSelected] = useState('')

  return (
    <form action={action} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold text-foreground">Full Name</label>
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-lg border border-primary/20 bg-white/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-foreground">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full rounded-lg border border-primary/20 bg-white/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-semibold text-foreground">Role Applying For</label>
        <select
          name="role"
          required
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full rounded-lg border border-primary/20 bg-white/60 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="" disabled>Select a role…</option>
          {internOpenings.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-xs font-semibold text-foreground">Why do you want to join?</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about yourself, your skills, and why you're passionate about sustainability…"
          className="w-full rounded-lg border border-primary/20 bg-white/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      {state && (
        <p className={`rounded-lg px-4 py-2.5 text-sm font-medium ${state.success ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'}`}>
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60 sm:w-auto"
      >
        {pending ? 'Sending…' : 'Submit Application'}
      </button>
    </form>
  )
}

export default function TeamPage() {
  const founder = teamMembers.filter((m) => m.type === 'founder')
  const partners = teamMembers.filter((m) => m.type === 'partner')
  const advisors = teamMembers.filter((m) => m.type === 'advisor')
  const interns = teamMembers.filter((m) => m.type === 'intern')

  return (
    <>
      <Navbar />
      <main className="mesh-bg min-h-screen">
        <section className="border-b border-white/40 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              The People Behind Eco Zindagi
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-3xl font-bold text-foreground sm:text-4xl"
            >
              Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base"
            >
              Founders, advisors, and interns united by one mission — make zero-waste living real for everyday households.
            </motion.p>
          </div>
        </section>

        {/* Founder spotlight */}
        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {founder.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard className="overflow-hidden p-6 md:p-8">
                  <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
                    <MemberPhoto member={member} size="lg" />
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                        {typeLabels.founder}
                      </p>
                      <h2 className="font-heading text-2xl font-bold text-foreground">{member.name}</h2>
                      <p className="mt-1 text-sm font-semibold text-accent-foreground">{member.role}</p>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partner */}
        <section className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h3 className="mb-5 font-heading text-lg font-bold text-foreground">Strategic Partnership</h3>
            <div className="grid gap-5 md:grid-cols-2">
              {partners.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <GlassCard hover className="p-5">
                    <MemberCard member={member} />
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h3 className="mb-5 font-heading text-lg font-bold text-foreground">Advisory Board</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {advisors.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <GlassCard hover className="p-5">
                    <MemberCard member={member} />
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current interns */}
        <section className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h3 className="mb-5 font-heading text-lg font-bold text-foreground">Our Interns</h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {interns.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                >
                  <GlassCard hover className="h-full p-5">
                    <div className="flex flex-col items-center text-center">
                      <MemberPhoto member={member} size="md" />
                      <h4 className="mt-4 font-heading font-bold text-foreground">{member.name}</h4>
                      <p className="mt-1 text-xs font-semibold text-primary">{member.role}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join */}
        <section id="interns" className="px-4 py-10 pb-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <GlassCard className="p-6 md:p-8">
              <div className="mb-6 text-center">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Join the Mission</p>
                <h3 className="font-heading text-xl font-bold text-foreground">Internship Opportunities</h3>
                <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
                  We&apos;re a growing startup — always looking for passionate students and early-career talent in Pakistan.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {internOpenings.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-3 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-foreground">{role}</span>
                  </div>
                ))}
              </div>
              <InternForm />
            </GlassCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
