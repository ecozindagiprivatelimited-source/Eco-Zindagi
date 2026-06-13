import { cn } from '@/lib/utils'

type HomeSectionProps = {
  children: React.ReactNode
  className?: string
  tone?: 'default' | 'muted' | 'soft'
  id?: string
  tight?: boolean
}

const sectionTones = {
  default: 'bg-background',
  muted: 'bg-primary/5',
  soft: 'bg-primary/[0.04]',
}

export function HomeSection({
  children,
  className,
  tone = 'default',
  id,
  tight = false,
}: HomeSectionProps) {
  return (
    <section
      id={id}
      className={cn(tight ? 'py-6 md:py-8' : 'py-10 md:py-12', sectionTones[tone], className)}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  action?: React.ReactNode
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-6 md:mb-8',
        align === 'center' ? 'text-center' : 'flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
        className
      )}
    >
      <div className={align === 'center' ? undefined : 'max-w-2xl'}>
        {eyebrow && (
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'mt-3 text-sm leading-relaxed text-muted-foreground',
              align === 'center' && 'mx-auto max-w-3xl'
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  )
}
