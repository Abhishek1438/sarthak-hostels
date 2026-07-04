'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import SectionTitle from '@/components/common/SectionTitle'

export default function AboutSection() {
  const reducedMotion = useReducedMotion()
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const animateLeft = reducedMotion
    ? {}
    : { initial: { opacity: 0, x: -40 }, animate: inView ? { opacity: 1, x: 0 } : {}, transition: { duration: 0.5 } }

  const animateRight = reducedMotion
    ? {}
    : { initial: { opacity: 0, x: 40 }, animate: inView ? { opacity: 1, x: 0 } : {}, transition: { duration: 0.5, delay: 0.1 } }

  return (
    <section id="about" ref={ref} className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Sarthak Boys Hostel" subtitle="A home away from home for students at Manipal University Jaipur" />
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 items-center">
          {/* Image */}
          <motion.div {...animateLeft} className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/10', minHeight: 260 }}>
            <Image
              src="/hostel/ggdsg.jpg"
              alt="Comfortable interior of Sarthak Boys Hostel common area"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
          </motion.div>

          {/* Text */}
          <motion.div {...animateRight} className="flex flex-col gap-5">
            <p className="text-[#374151] leading-relaxed">
              Welcome to <strong>Sarthak Boys Hostel</strong> — a premium student accommodation located within walking distance from Manipal University Jaipur. We provide a comfortable living environment designed to help students thrive both academically and personally.
            </p>
            <ul className="space-y-3">
              {[
                { title: 'Safe Environment', desc: 'Round-the-clock security, CCTV coverage, and controlled entry ensure resident safety at all times.' },
                { title: 'Affordable Pricing', desc: 'Transparent, all-inclusive pricing with no hidden charges — great value for what you get.' },
                { title: 'Comfortable Living', desc: 'Fully furnished, well-ventilated rooms with quality beds, study desks, and storage space.' },
                { title: 'Community Atmosphere', desc: 'Connect with like-minded peers, build friendships, and enjoy a vibrant community life.' },
                { title: 'Modern Amenities', desc: 'High-speed WiFi, power backup, RO water, laundry, and housekeeping — all at your doorstep.' },
                { title: 'Walking Distance from MUJ', desc: 'Skip long commutes. Manipal University Jaipur is just a short walk away.' },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#2563EB] shrink-0" />
                  <span className="text-sm text-[#374151]">
                    <strong className="text-[#111827]">{item.title}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
