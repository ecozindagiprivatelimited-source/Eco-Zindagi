import Image from 'next/image'

const partners = [
  { name: 'Ministry of Planning, Development & Special Initiatives', file: 'ministry-planning.png' },
  { name: 'Zevyer', file: 'zevyer.png' },
  { name: 'Regional Plan 9', file: 'regional-plan9.png' },
  { name: "Prime Minister's Innovation Support & Startup Grants", file: 'pm-innovation.png' },
  { name: 'AI', file: 'ai-logo.png' },
  { name: 'Uraan Pakistan', file: 'uraan-pakistan.png' },
]

export function SponsorsMarquee() {
  return (
    <section className="w-full overflow-hidden bg-white py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Sponsors &amp; Partners
      </p>

      <div className="relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

        {/* The track: two identical sets side-by-side so the loop is seamless */}
        <div
          className="flex"
          style={{
            animation: 'marquee 28s linear infinite',
            width: 'max-content',
          }}
        >
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="mx-10 flex h-20 w-44 flex-shrink-0 items-center justify-center grayscale transition-[filter] duration-300 hover:grayscale-0 sm:mx-14 sm:h-24 sm:w-56"
            >
              <Image
                src={`/partners/${p.file}`}
                alt={p.name}
                width={224}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
