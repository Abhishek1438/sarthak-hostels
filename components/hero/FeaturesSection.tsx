'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FEATURES } from '@/lib/data'
import FeatureCard from '@/components/common/FeatureCard'
import SectionTitle from '@/components/common/SectionTitle'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function FeaturesSection() {
  const reducedMotion = useReducedMotion()
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="features" ref={ref} className="py-12 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Us"
          subtitle="Everything you need for a comfortable and productive student life — all under one roof."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={reducedMotion ? {} : inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <FeatureCard label={feature.label} icon={feature.icon} description={feature.description} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
