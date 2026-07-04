'use client'
import {
  BedDouble, Wifi, Zap, Shirt, Sparkles, UtensilsCrossed,
  Shield, Car, Droplets, Users, BookOpen, Camera, LucideProps
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  BedDouble,
  Wifi,
  Zap,
  Shirt,
  Sparkles,
  UtensilsCrossed,
  Shield,
  Car,
  Droplets,
  Users,
  BookOpen,
  Camera,
}

interface FeatureCardProps {
  label: string
  icon: string
  description?: string
}

export default function FeatureCard({ label, icon, description }: FeatureCardProps) {
  const Icon = iconMap[icon] || Wifi

  return (
    <div
      className="flex flex-col items-center text-center p-5 rounded-xl bg-white border border-gray-100 shadow-sm cursor-default select-none"
      style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = 'scale(1.05) translateY(-4px)'
        el.style.boxShadow = '0 8px 24px rgba(37,99,235,0.15)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = 'scale(1) translateY(0)'
        el.style.boxShadow = ''
      }}
    >
      <div className="mb-3 p-3 rounded-lg bg-[#EFF6FF]">
        <Icon size={22} className="text-[#2563EB]" />
      </div>
      <span className="text-sm font-semibold text-[#111827] leading-snug">{label}</span>
      {description && <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">{description}</p>}
    </div>
  )
}
