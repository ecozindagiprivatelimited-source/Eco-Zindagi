'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion'
import { BIOLOOP_IMAGES } from '@/lib/bioloop-assets'
import { EzButton } from '@/components/ez-button'

export const EXPLODED_SCENES = [
  {
    id: 'closed',
    title: 'Meet BioLoop-60',
    description:
      'A compact smart composting and waste-sorting device designed for modern indoor spaces.',
    image: BIOLOOP_IMAGES.product,
    imageAlt: 'BioLoop-60 closed product view',
  },
  {
    id: 'drawers',
    title: 'Three-Drawer Separation',
    description:
      'Organic waste, dry recyclables, and reject waste stay separated at the source through dedicated modular drawers.',
    image: BIOLOOP_IMAGES.drawersOpen,
    imageAlt: 'BioLoop-60 with drawers open',
  },
  {
    id: 'semi-exploded',
    title: 'Odor-Free Processing',
    description:
      'Charcoal filtration and bio-inoculum support help keep decomposition clean, controlled, and indoor-friendly.',
    image: BIOLOOP_IMAGES.semiExploded,
    imageAlt: 'BioLoop-60 semi-exploded view',
  },
  {
    id: 'full-exploded',
    title: 'Smart Circular Living',
    description:
      'Sensor monitoring, compost output, app insights, and EcoBucks rewards connect into one sustainable product ecosystem.',
    image: BIOLOOP_IMAGES.fullExploded,
    imageAlt: 'BioLoop-60 full exploded view',
  },
] as const

/** Labels for every scene — positioned on the product image */
const SCENE_LABELS: Record<number, { label: string; sub?: string; className: string; align: 'left' | 'right' }[]> = {
  0: [
    { label: 'Compact Footprint', sub: 'Fits any room', className: 'top-[8%] left-0', align: 'left' },
    { label: '3 Waste Streams', sub: 'Segregate at source', className: 'top-[30%] right-0', align: 'right' },
    { label: 'Indoor Ready', sub: 'Whisper-quiet', className: 'bottom-[20%] left-0', align: 'left' },
  ],
  1: [
    { label: '8L Organics', sub: 'Food scraps', className: 'top-[10%] left-0', align: 'left' },
    { label: '12L Recyclables', sub: 'Paper & plastic', className: 'top-[32%] right-0', align: 'right' },
    { label: '4L Reject', sub: 'Sanitary waste', className: 'bottom-[24%] left-0', align: 'left' },
    { label: '28L Compost', sub: 'Starter chamber', className: 'bottom-[8%] right-0', align: 'right' },
  ],
  2: [
    { label: 'Charcoal Filter', sub: 'Odor control', className: 'top-[8%] right-0', align: 'right' },
    { label: 'Ventilated Lid', sub: 'Clean airflow', className: 'top-[28%] left-0', align: 'left' },
    { label: 'Bio-Inoculum', sub: 'Faster breakdown', className: 'bottom-[22%] right-0', align: 'right' },
  ],
  3: [
    { label: 'IoT Sensors', sub: 'Smart monitoring', className: 'top-[10%] left-0', align: 'left' },
    { label: 'Service Panel', sub: 'Easy maintenance', className: 'top-[34%] right-0', align: 'right' },
    { label: 'Compost Output', sub: 'Liquid fertilizer', className: 'bottom-[18%] left-0', align: 'left' },
    { label: 'Modular Parts', sub: 'Fully serviceable', className: 'bottom-[8%] right-0', align: 'right' },
  ],
}

const SCENE_COUNT = EXPLODED_SCENES.length

function SceneLabel({
  label,
  sub,
  className,
  align,
}: {
  label: string
  sub?: string
  className: string
  align: 'left' | 'right'
}) {
  return (
    <div className={`absolute z-20 hidden items-center gap-1.5 lg:flex ${className} ${align === 'right' ? 'flex-row-reverse' : ''}`}>
      <div className="rounded-lg border border-white/80 bg-white/70 px-2 py-1 shadow-md shadow-primary/10 backdrop-blur-md">
        <p className="whitespace-nowrap text-[10px] font-bold text-foreground">{label}</p>
        {sub && <p className="whitespace-nowrap text-[9px] text-muted-foreground">{sub}</p>}
      </div>
      <div className={`flex items-center ${align === 'right' ? 'flex-row-reverse' : ''}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(74,124,68,0.7)]" />
        <span className={`h-px w-6 bg-gradient-to-r ${align === 'left' ? 'from-primary/70 to-primary/10' : 'from-primary/10 to-primary/70'}`} />
      </div>
    </div>
  )
}

function SceneText({ activeScene }: { activeScene: number }) {
  const scene = EXPLODED_SCENES[activeScene]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={scene.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4 }}
        className="space-y-3"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">BioLoop-60</p>
        <h2 className="font-heading text-balance text-2xl font-bold leading-[1.12] text-foreground sm:text-3xl">
          {scene.title}
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{scene.description}</p>
      </motion.div>
    </AnimatePresence>
  )
}

function SceneProgress({
  activeScene,
  total,
  onSelect,
}: {
  activeScene: number
  total: number
  onSelect?: (index: number) => void
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-primary/15 bg-white/50 px-4 py-3 backdrop-blur-sm" aria-label="Scene progress">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect?.(i)}
          className="flex flex-col items-center gap-1"
          aria-label={`Scene ${i + 1} of ${total}`}
          aria-current={i === activeScene ? 'step' : undefined}
        >
          <motion.div
            className="rounded-full"
            animate={{
              width: i === activeScene ? 48 : 14,
              height: i === activeScene ? 8 : 6,
              backgroundColor: i === activeScene ? 'var(--primary)' : 'rgba(138,154,171,0.3)',
            }}
            transition={{ duration: 0.35 }}
          />
          {i === activeScene && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[9px] font-bold text-primary"
            >
              {i + 1}/{total}
            </motion.span>
          )}
        </button>
      ))}
    </div>
  )
}

function MobileLabelPills({ activeScene }: { activeScene: number }) {
  const labels = SCENE_LABELS[activeScene] ?? []
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeScene}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mt-2 flex flex-wrap justify-center gap-1.5 lg:hidden"
      >
        {labels.map((l) => (
          <span key={l.label} className="rounded-full border border-primary/20 bg-white/60 px-2.5 py-1 text-[9px] font-semibold text-foreground backdrop-blur-sm">
            {l.label}
          </span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

export function ProductExplodedSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeScene, setActiveScene] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const index = Math.min(
      SCENE_COUNT - 1,
      Math.max(0, Math.round(progress * (SCENE_COUNT - 1)))
    )
    setActiveScene(index)
  })

  const scene = EXPLODED_SCENES[activeScene]
  const labels = SCENE_LABELS[activeScene] ?? []

  return (
    <section
      ref={containerRef}
      className="relative mesh-bg py-8 lg:h-[220vh] lg:py-0"
      aria-label="BioLoop-60 product exploration"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:flex-row lg:items-center lg:gap-8 lg:px-8">
          {/* Product */}
          <div className="relative order-1 flex h-[240px] shrink-0 items-center justify-center sm:h-[280px] md:h-[320px] lg:order-2 lg:h-full lg:max-h-none lg:flex-1">
            <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-14 w-[65%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(74,124,68,0.18)_0%,transparent_70%)] blur-md" />

            <div className="relative h-[90%] w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={scene.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={scene.image}
                    alt={scene.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 50vw"
                    className="object-contain object-center drop-shadow-[0_16px_32px_rgba(45,80,55,0.15)]"
                    priority={activeScene === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {labels.map((l) => (
                <SceneLabel key={l.label} {...l} />
              ))}
            </div>
            <MobileLabelPills activeScene={activeScene} />
          </div>

          {/* Text */}
          <div className="relative order-2 flex flex-col justify-center gap-3 sm:gap-4 lg:order-1 lg:flex-1 lg:gap-5">
            <SceneProgress
              activeScene={activeScene}
              total={SCENE_COUNT}
              onSelect={setActiveScene}
            />
            <SceneText activeScene={activeScene} />

            <div className="hidden flex-wrap gap-2 md:flex xl:hidden">
              {labels.map((l) => (
                <span
                  key={l.label}
                  className="rounded-full border border-primary/20 bg-white/60 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur-sm"
                >
                  {l.label}
                </span>
              ))}
            </div>

            <EzButton href="/shop/bioloop-60" variant="primary" className="w-fit text-xs">
              Explore BioLoop-60
            </EzButton>
            <p className="text-xs text-muted-foreground lg:hidden">Tap the dots above to explore each view</p>
            <p className="hidden text-xs text-muted-foreground lg:block">Scroll to explore each view →</p>
          </div>
      </div>
    </section>
  )
}
