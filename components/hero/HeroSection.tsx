'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Users, Wifi, Shield, Phone, Navigation } from 'lucide-react'
import { STATS, PHONE, MAPS_DIRECTIONS_URL } from '@/lib/data'
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
    <section
      id="home"
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY }}>
        <Image
          src="/hostel/outsidejpg.jpg"
          alt="Exterior view of Sarthak Boys Hostel building"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.52)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-4 sm:px-6 text-center text-white py-24">
        <motion.h1
          {...fadeUp(0)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-4 md:mb-6"
        >
          Comfortable Student Living Near Manipal University Jaipur
        </motion.h1>

        <motion.p
          {...fadeUp(0.1)}
          className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mb-7 md:mb-8 leading-relaxed px-2"
        >
          Safe, affordable, and fully furnished accommodation designed for students who want to focus on what matters most.
        </motion.p>

        <motion.div {...fadeUp(0.2)} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 md:mb-12 w-full max-w-xs sm:max-w-none sm:w-auto">
          <a
            href={`tel:${PHONE.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-green-500 text-white font-semibold text-base hover:bg-green-600 transition-colors min-h-[48px] w-full sm:w-auto"
            aria-label={`Call us at ${PHONE}`}
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#2563EB] text-white font-semibold text-base hover:bg-[#1d4ed8] transition-colors min-h-[48px] w-full sm:w-auto"
            aria-label="Get directions to Sarthak Boys Hostel (opens in new tab)"
          >
            <Navigation size={18} />
            Directions
          </a>
          <button
            onClick={() => scrollToSection('gallery')}
            className="px-7 py-3 rounded-lg border-2 border-white text-white font-semibold text-base hover:bg-white/10 transition-colors min-h-[48px] w-full sm:w-auto"
          >
            Explore Hostel
          </button>
        </motion.div>

        {/* Stats Card — horizontal scroll on very small screens */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-row gap-5 sm:gap-8 px-5 sm:px-8 py-4 sm:py-5 rounded-2xl overflow-x-auto w-full max-w-sm sm:max-w-none sm:w-auto"
          style={{
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.25)',
            scrollbarWidth: 'none',
          }}
        >
          {STATS.map((stat) => {
            const Icon = iconMap[stat.icon]
            return (
              <div key={stat.description} className="flex items-center gap-2 sm:gap-3 shrink-0">
                {Icon && <Icon size={20} className="text-[#F59E0B] shrink-0" />}
                <div className="text-left">
                  <div className="text-base sm:text-xl font-bold text-white leading-tight">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-white/80">{stat.description}</div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
