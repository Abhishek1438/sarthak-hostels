'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AMENITIES } from '@/lib/data'
import AmenityCard from './AmenityCard'
import SectionTitle from '@/components/common/SectionTitle'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function AmenitiesSection() {
  const reducedMotion = useReducedMotion()
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="amenities" ref={ref} className="py-12 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Amenities"
          subtitle="Everything you need to study, rest, and thrive — all included in your stay."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {AMENITIES.map((amenity, i) => (
            <motion.div
              key={amenity.id}
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={reducedMotion ? {} : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <AmenityCard name={amenity.label} icon={amenity.icon} description={amenity.description} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
