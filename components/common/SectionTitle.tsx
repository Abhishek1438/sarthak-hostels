interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionTitle({ title, subtitle, centered = true, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] mb-3 md:mb-4">{title}</h2>
      {subtitle && (
        <p className="text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed px-2">{subtitle}</p>
      )}
    </div>
  )
}
