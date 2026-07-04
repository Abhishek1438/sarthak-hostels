import {
  GraduationCap, Pill, Utensils, Coffee, Bus, ShoppingBag, LucideProps
} from 'lucide-react'
import { NEARBY_PLACES } from '@/lib/nearby'
import SectionTitle from '@/components/common/SectionTitle'

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  GraduationCap, Pill, Utensils, Coffee, Bus, ShoppingBag,
}

const proximityColors: Record<string, { bg: string; text: string }> = {
  'Close to Hostel': { bg: '#DCFCE7', text: '#16A34A' },
  'Nearby': { bg: '#FEF9C3', text: '#CA8A04' },
  'Easily Accessible': { bg: '#EFF6FF', text: '#2563EB' },
}

export default function NearbySection() {
  return (
    <section id="nearby" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What's Nearby"
          subtitle="Everything you need as a student is right around the corner from Sarthak Boys Hostel."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {NEARBY_PLACES.map((place) => {
            const Icon = iconMap[place.icon] || GraduationCap
            const prox = proximityColors[place.proximity] ?? { bg: '#F1F5F9', text: '#374151' }
            return (
              <div
                key={place.id}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-xl bg-[#EFF6FF]">
                    <Icon size={20} className="text-[#2563EB]" />
                  </div>
                  <span
                    className="text-xs font-medium px-2 py-1 rounded-full shrink-0 mt-1"
                    style={{ backgroundColor: prox.bg, color: prox.text }}
                  >
                    {place.proximity}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111827]">{place.name}</h3>
                  <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">{place.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
