import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SocietiesSection } from '@/components/societies-section'
import { impactStats } from '@/lib/product-data'
import { GlassCard } from '@/components/glass-card'
import { EzButton } from '@/components/ez-button'

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main className="mesh-bg min-h-screen">
        <section className="border-b border-white/40 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Impact in Pakistan</p>
            <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">Our Growing Impact</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Every household and community we onboard moves Pakistan closer to circular, zero-waste living.
            </p>
          </div>
        </section>

        <section className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <GlassCard key={stat.metric} hover glow className="p-5 text-center">
                <p className="font-heading text-2xl font-bold text-primary lg:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold text-foreground">{stat.metric}</p>
                <p className="text-[10px] text-muted-foreground">{stat.unit}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <SocietiesSection tight />

        <section className="px-4 pb-10 pt-2 sm:px-6 lg:px-8">
          <GlassCard glow className="mx-auto max-w-2xl p-8 text-center">
            <h2 className="font-heading text-xl font-bold text-foreground">Scale Impact Across Your City</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Partner with Eco Zindagi to deploy green waste systems in housing societies, schools, and municipal zones.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <EzButton href="/partnerships" variant="primary">Partnership Program</EzButton>
              <EzButton href="/contact" variant="ghost">Contact Team</EzButton>
            </div>
          </GlassCard>
        </section>
      </main>
      <Footer />
    </>
  )
}
