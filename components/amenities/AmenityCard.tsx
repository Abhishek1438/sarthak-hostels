import {
  BedDouble, Wifi, Zap, Shirt, Sparkles, UtensilsCrossed,
  Shield, Car, Droplets, Users, BookOpen, Camera, LucideProps
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  BedDouble, Wifi, Zap, Shirt, Sparkles, UtensilsCrossed,
  Shield, Car, Droplets, Users, BookOpen, Camera,
}

interface AmenityCardProps {
  name: string
  icon: string
  description?: string
}

export default function AmenityCard({ name, icon, description }: AmenityCardProps) {
  const Icon = iconMap[icon] || Wifi
  return (
    <div className="flex flex-col items-center text-center p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
      <div className="mb-3 p-3 rounded-full bg-[#EFF6FF]">
        <Icon size={22} className="text-[#2563EB]" />
      </div>
      <span className="text-sm font-semibold text-[#111827]">{name}</span>
      {description && <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">{description}</p>}
    </div>
  )
}
