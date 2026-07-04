'use client'
import { Phone } from 'lucide-react'
import { PHONE } from '@/lib/data'

export default function CTASection() {
  return (
    <section
      className="w-full py-14 md:py-20 px-4"
      style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)' }}
    >
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5 md:gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
          Ready to Find Your New Home?
        </h2>
        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl px-2">
          Join hundreds of students who call Sarthak Boys Hostel home. Safe, comfortable, and right next to Manipal University Jaipur.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-2">
          <a
            href={`tel:${PHONE.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white text-[#2563EB] font-semibold text-base hover:bg-gray-50 transition-colors min-h-[44px] w-full sm:w-auto"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white font-semibold text-base hover:bg-white/10 transition-colors min-h-[44px] w-full sm:w-auto"
          >
            Book Visit
          </a>
        </div>
      </div>
    </section>
  )
}
