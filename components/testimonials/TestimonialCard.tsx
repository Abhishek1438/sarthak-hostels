import { Star } from 'lucide-react'
import type { Testimonial } from '@/lib/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= testimonial.rating ? 'text-[#F59E0B]' : 'text-gray-200'}
            fill={star <= testimonial.rating ? '#F59E0B' : 'transparent'}
            aria-hidden="true"
          />
        ))}
        <span className="sr-only">{testimonial.rating} out of 5 stars</span>
      </div>

      {/* Review */}
      <p className="text-sm text-[#374151] leading-relaxed flex-1">&ldquo;{testimonial.review}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
          style={{ backgroundColor: '#2563EB' }}
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-[#111827]">{testimonial.name}</div>
          <div className="text-xs text-[#6B7280]">{testimonial.courseOrYear}</div>
        </div>
      </div>
    </div>
  )
}
