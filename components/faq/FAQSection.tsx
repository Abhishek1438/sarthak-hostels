'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/faq'
import SectionTitle from '@/components/common/SectionTitle'

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId((current) => (current === id ? null : id))

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before joining Sarthak Boys Hostel."
        />
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-[#F8FAFC] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="font-semibold text-sm text-[#111827] pr-4">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-[#2563EB] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-[#6B7280] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 pb-5 text-sm text-[#6B7280] leading-relaxed bg-white"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
