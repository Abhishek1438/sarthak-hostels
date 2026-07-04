import SectionTitle from '@/components/common/SectionTitle'
import {
  Salad, Coffee, Sun, Moon, Star, Utensils
} from 'lucide-react'

const FOOD_TOPICS = [
  {
    id: 'healthy',
    title: 'Healthy Meals',
    description: 'Every meal at Sarthak is nutritionally balanced and designed to fuel students through long study sessions and active campus days.',
    icon: Salad,
    color: '#DCFCE7',
    iconColor: '#16A34A',
  },
  {
    id: 'breakfast',
    title: 'Breakfast',
    description: 'Start your day right with a hearty, wholesome breakfast served fresh every morning — the perfect fuel before heading to university.',
    icon: Coffee,
    color: '#FEF9C3',
    iconColor: '#CA8A04',
  },
  {
    id: 'lunch',
    title: 'Lunch',
    description: 'A satisfying midday meal with a variety of freshly prepared dishes — including regional favourites and student staples.',
    icon: Sun,
    color: '#FFF7ED',
    iconColor: '#EA580C',
  },
  {
    id: 'dinner',
    title: 'Dinner',
    description: 'Wind down the day with a warm, home-style dinner. Comforting and filling, served at a convenient time every evening.',
    icon: Moon,
    color: '#EFF6FF',
    iconColor: '#2563EB',
  },
  {
    id: 'hygiene',
    title: 'Hygiene Standards',
    description: 'The kitchen and dining area are maintained to the highest hygiene standards. Food is prepared fresh in a clean, safe environment every day.',
    icon: Star,
    color: '#F5F3FF',
    iconColor: '#7C3AED',
  },
  {
    id: 'dining',
    title: 'Dining Area',
    description: 'A clean, well-maintained dining space where residents enjoy meals together — fostering community and a sense of belonging.',
    icon: Utensils,
    color: '#FDF2F8',
    iconColor: '#BE185D',
  },
]

export default function FoodSection() {
  return (
    <section id="food" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Meals & Dining"
          subtitle="Home-style, hygienic, and freshly prepared — three meals a day, every day."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FOOD_TOPICS.map((topic) => {
            const Icon = topic.icon
            return (
              <div
                key={topic.id}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ backgroundColor: topic.color }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
                >
                  <Icon size={22} style={{ color: topic.iconColor }} />
                </div>
                <h3 className="text-base font-bold text-[#111827]">{topic.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{topic.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
