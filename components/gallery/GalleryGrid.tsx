'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GALLERY_IMAGES, type GalleryImage } from '@/lib/gallery'
import Lightbox from './Lightbox'
import SectionTitle from '@/components/common/SectionTitle'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const CATEGORIES = ['All', 'Rooms', 'Exterior', 'Amenities', 'Dining', 'Common Areas'] as const
type Category = typeof CATEGORIES[number]

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const reducedMotion = useReducedMotion()
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const filtered: GalleryImage[] =
    activeCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Photo Gallery"
          subtitle="Take a look around — every corner of Sarthak Boys Hostel is designed with students in mind."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[36px]"
              style={{
                backgroundColor: activeCategory === cat ? '#2563EB' : '#F1F5F9',
                color: activeCategory === cat ? '#fff' : '#374151',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3"
        >
          {filtered.map((img, i) => (
            <motion.button
              key={img.id}
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={reducedMotion ? {} : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setLightboxIndex(i)}
              className="relative overflow-hidden rounded-xl bg-gray-100 group focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              style={{ aspectRatio: '4/3' }}
              aria-label={`View photo: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-250 group-hover:scale-[1.08]"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </motion.button>
          ))}
        </div>

        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </div>
    </section>
  )
}
