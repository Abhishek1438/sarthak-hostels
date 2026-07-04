'use client'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryImage } from '@/lib/gallery'

interface LightboxProps {
  images: GalleryImage[]
  initialIndex: number
  onClose: () => void
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const delta = touchStart - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev()
    setTouchStart(null)
  }

  const img = images[current]
  if (!img) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 shrink-0">
        <span className="text-white/60 text-sm">{current + 1} / {images.length}</span>
        <button
          onClick={onClose}
          className="p-2 rounded-full text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close lightbox"
        >
          <X size={22} />
        </button>
      </div>

      {/* Main image */}
      <div className="flex-1 relative flex items-center justify-center px-12 overflow-hidden">
        <button
          onClick={prev}
          className="absolute left-2 z-10 p-2 rounded-full text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="relative w-full h-full max-w-4xl">
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        </div>

        <button
          onClick={next}
          className="absolute right-2 z-10 p-2 rounded-full text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Caption */}
      <div className="text-center text-white/70 text-sm px-4 py-2 shrink-0">{img.alt}</div>

      {/* Thumbnails */}
      <div className="flex gap-2 px-4 pb-4 overflow-x-auto shrink-0 justify-center">
        {images.map((thumb, i) => (
          <button
            key={thumb.id}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}: ${thumb.alt}`}
            className="relative shrink-0 rounded overflow-hidden"
            style={{
              width: 56,
              height: 40,
              outline: i === current ? '2px solid #2563EB' : '2px solid transparent',
              opacity: i === current ? 1 : 0.6,
              transition: 'opacity 0.2s',
            }}
          >
            <Image src={thumb.src} alt={thumb.alt} fill className="object-cover" sizes="56px" />
          </button>
        ))}
      </div>
    </div>
  )
}
