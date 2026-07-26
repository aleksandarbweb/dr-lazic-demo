interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionTitle({ title, subtitle, align = 'center', light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`font-serif text-4xl tracking-[0.01em] md:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-foreground'}`}>
        {title}
      </h2>
      <div className={`mt-6 h-[2px] w-24 bg-primary ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${align === 'center' ? 'mx-auto' : ''} font-light ${light ? 'text-white/80' : 'text-muted-foreground'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
