'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { teamMembers, awards } from '@/lib/product-data'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Header */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-6xl font-bold text-foreground">About EcoBuck</h1>
            <p className="text-xl text-muted-foreground">
              Founded by climate scientists. Built for impact. Designed for everyone.
            </p>
          </motion.div>
        </section>

        {/* Founder Story */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl font-bold text-foreground">Our Origin</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    EcoBuck was founded in 2021 when three MIT climate researchers decided the world couldn't wait for incremental progress. We built the company around a simple idea: direct air capture technology shouldn't be locked away in labs—it should be accessible, affordable, and beautiful.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today EcoBuck is removing millions of tons of CO₂ annually while helping individuals, businesses, and institutions take concrete action on climate. We're not a charity. We're a company that proves climate action and growth are the same thing.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="h-96 rounded-2xl bg-card border border-border overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-accent/10 to-transparent" />
                </motion.div>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make climate action personal, profitable, and planet-positive. We're building the infrastructure that allows anyone to measure, reduce, and offset their carbon footprint with hardware they trust.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Science-First',
                      description: 'Every claim backed by peer-reviewed research. No greenwashing.',
                    },
                    {
                      title: 'Impact Verified',
                      description: 'Real CO₂ removed. Real data. Real accountability to our planet.',
                    },
                    {
                      title: 'Accessible Innovation',
                      description: 'Premium technology at prices that make sense for personal use.',
                    },
                    {
                      title: 'Transparency Always',
                      description: 'Open about our methods, impact, and the work ahead.',
                    },
                  ].map((value, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-6 border border-border rounded-xl bg-card/50 hover:border-accent transition-colors"
                    >
                      <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Scientists and entrepreneurs united by a mission to solve the climate crisis with hardware and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.filter((m) => m.type !== 'intern').map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center space-y-4"
                >
                  <div className="h-48 w-48 mx-auto rounded-xl bg-muted border border-border overflow-hidden relative">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="192px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary/10 font-heading text-2xl font-bold text-primary">
                        {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-accent font-semibold">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground">Recognition</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Honored by industry leaders and climate organizations worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 border border-border rounded-xl bg-card hover:border-accent transition-colors"
                >
                  <p className="text-sm text-accent font-semibold mb-2">{award.year}</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{award.title}</h3>
                  <p className="text-muted-foreground text-sm">{award.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h2 className="text-4xl font-bold text-foreground">Be Part of the Solution</h2>
            <p className="text-lg text-muted-foreground">
              Every BioLoop device deployed brings us closer to a sustainable future. Join thousands who are taking action.
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
