'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '@/components/common/SectionTitle'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const GROUPS = [
  {
    label: 'Community',
    description:
      'Life at Sarthak is more than just a place to sleep. The friendly atmosphere makes it easy to form lasting friendships. Weekend activities — from cricket matches to movie nights — bring residents together and make the hostel feel like home.',
    images: [
      { src: '/hostel/gdfgsfrg.jpg', alt: 'Students in common area at Sarthak Boys Hostel' },
      { src: '/hostel/ggdsg.jpg', alt: 'Community gathering space at the hostel' },
    ],
    bgColor: '#EFF6FF',
  },
  {
    label: 'Study Atmosphere',
    description:
      'A quiet, focused study environment is one of Sarthak\'s biggest strengths. Dedicated study rooms, consistent high-speed WiFi, and a culture of academic respect help you make the most of your university years.',
    images: [
      { src: '/hostel/ungfdgnamed.jpg', alt: 'Study space and interior at Sarthak Boys Hostel' },
      { src: '/hostel/unnamfdsfed.jpg', alt: 'Well-lit interior room at the hostel' },
    ],
    bgColor: '#F0FDF4',
  },
  {
    label: 'Comfortable Living',
    description:
      'From clean, well-ventilated rooms to a safe and secure environment, Sarthak ensures your comfortable stay throughout your academic journey. Housekeeping, power backup, RO water, and CCTV coverage mean you can focus entirely on your studies.',
    images: [
      { src: '/hostel/unnamgdfsged.jpg', alt: 'Common seating area at Sarthak Boys Hostel' },
      { src: '/hostel/ggdsg.jpeg', alt: 'Clean interior common room at the hostel' },
    ],
    bgColor: '#FFFBEB',
  },
]

export default function HostelLifeSection() {
  const reducedMotion = useReducedMotion()
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="hostel-life" ref={ref} className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Life at Sarthak"
          subtitle="More than just accommodation — a community where students grow together."
        />
        <div className="flex flex-col gap-8 md:gap-16">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={reducedMotion ? {} : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.15 }}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: group.bgColor }}
            >
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 sm:mb-3">{group.label}</h3>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-4 sm:mb-6 max-w-3xl">{group.description}</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {group.images.map((img) => (
                    <div
                      key={img.src}
                      className="relative rounded-xl overflow-hidden"
                      style={{ aspectRatio: '4/3' }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
