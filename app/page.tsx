'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { ProductExplodedSection } from '@/components/product-exploded-section'
import { HomeSection, SectionHeader } from '@/components/home-section'
import { GlassCard } from '@/components/glass-card'
import { impactStats, getFeaturedProducts } from '@/lib/product-data'
import { blogPosts } from '@/lib/blog-data'
import { HeroSection } from '@/components/hero-section'
import { SocietiesSection } from '@/components/societies-section'
import { BlogCard } from '@/components/blog-card'
import { EzButton } from '@/components/ez-button'
import { SponsorsMarquee } from '@/components/sponsors-marquee'
import { motion } from 'framer-motion'

const pillars = [
  { title: 'Segregate at Source', desc: 'Smart drawers separate organics, recyclables & reject waste.', icon: '♻️' },
  { title: 'Compost with Confidence', desc: 'Odor-controlled processing built for indoor Pakistani homes.', icon: '🌱' },
  { title: 'Circular by Design', desc: 'From BrownBoost to GrowMix — waste becomes value.', icon: '♾️' },
]

export default function Home() {
  const featured = getFeaturedProducts()

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />

        {/* Impact stats */}
        <HomeSection tone="muted" tight className="relative overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full border border-primary/10"
          />
          <SectionHeader
            eyebrow="Impact in Pakistan"
            title="Small Steps Today, Zero Waste Tomorrow"
            description="We're a startup — but every household we onboard moves Pakistan closer to circular living."
          />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {impactStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <GlassCard hover glow className="p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-primary lg:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold text-foreground">{stat.metric}</p>
                  <p className="text-[10px] text-muted-foreground">{stat.unit}</p>
                  <p className="mt-1 text-[10px] font-semibold text-accent-foreground">{stat.change}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </HomeSection>

        <ProductExplodedSection />

        <SocietiesSection tight flushTop />

        {/* Pillars */}
        <HomeSection tight>
          <SectionHeader
            eyebrow="How Eco Zindagi Works"
            title="Clean-Tech for Everyday Homes"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard hover glow className="p-5">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="mt-3 font-heading text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </HomeSection>

        {/* Featured products */}
        <HomeSection tone="muted" tight>
          <SectionHeader
            align="left"
            eyebrow="Product Lineup"
            title="Built for Pakistani Households"
            action={<EzButton href="/shop" variant="link">View all</EzButton>}
          />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} compact glass />
            ))}
          </div>
        </HomeSection>

        <SponsorsMarquee />

        {/* Blog preview */}
        <HomeSection tight>
          <SectionHeader
            align="left"
            eyebrow="From the Journal"
            title="Clean-Tech Stories & Guides"
            action={<EzButton href="/blog" variant="link">Read blog</EzButton>}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </HomeSection>

        {/* CTA */}
        <HomeSection tight className="pb-8">
          <GlassCard glow className="mx-auto max-w-2xl p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Join Pakistan&apos;s Zero-Waste Movement
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              From kitchen caddies to community BioLoop systems — start where you are, grow with us.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <EzButton href="/shop" variant="primary">Shop Products</EzButton>
              <EzButton href="/team#interns" variant="ghost">Intern with Us</EzButton>
            </div>
          </GlassCard>
        </HomeSection>
      </main>
      <Footer />
    </>
  )
}
