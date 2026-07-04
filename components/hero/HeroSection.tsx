'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Users, Wifi, Shield } from 'lucide-react'
import { STATS } from '@/lib/data'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Users,
  Wifi,
  Shield,
}

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const fadeUp = (delay: number) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        }

  return (
    <section id="home" ref={ref} className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 600 }}>
      {/* Parallax background */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY }}>
        <Image
          src="/hostel/outsidejpg.jpg"
          alt="Exterior view of Sarthak Boys Hostel building"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.52)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <motion.h1
          {...fadeUp(0)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6"
        >
          Comfortable Student Living Near Manipal University Jaipur
        </motion.h1>

        <motion.p {...fadeUp(0.1)} className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
          Safe, affordable, and fully furnished accommodation designed for students who want to focus on what matters most.
        </motion.p>

        <motion.div {...fadeUp(0.2)} className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 rounded-lg bg-[#2563EB] text-white font-semibold text-base hover:bg-[#1d4ed8] transition-colors min-h-[44px] min-w-[44px]"
          >
            Book Now
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="px-8 py-3 rounded-lg border-2 border-white text-white font-semibold text-base hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px]"
          >
            Explore Hostel
          </button>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-6 sm:gap-10 px-8 py-5 rounded-2xl"
          style={{
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.25)',
          }}
        >
          {STATS.map((stat) => {
            const Icon = iconMap[stat.icon]
            return (
              <div key={stat.description} className="flex items-center gap-3">
                {Icon && <Icon size={22} className="text-[#F59E0B]" />}
                <div className="text-left">
                  <div className="text-xl font-bold text-white">{stat.label}</div>
                  <div className="text-sm text-white/80">{stat.description}</div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
