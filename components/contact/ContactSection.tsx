'use client'
import { Phone, Mail, MapPin } from 'lucide-react'
import { PHONE, EMAIL, ADDRESS, SITE_NAME } from '@/lib/data'
import SectionTitle from '@/components/common/SectionTitle'

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contact Us"
          subtitle="Reach out to us for availability, pricing, or to schedule a visit."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold text-[#111827]">Get in Touch</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#EFF6FF] shrink-0">
                  <Phone size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-xs text-[#6B7280] mb-0.5">Phone</div>
                  <a
                    href={`tel:${PHONE.replace(/\s/g, '')}`}
                    className="text-sm font-semibold text-[#111827] hover:text-[#2563EB] transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#EFF6FF] shrink-0">
                  <Mail size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-xs text-[#6B7280] mb-0.5">Email</div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm font-semibold text-[#111827] hover:text-[#2563EB] transition-colors break-all"
                  >
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#EFF6FF] shrink-0">
                  <MapPin size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-xs text-[#6B7280] mb-0.5">Address</div>
                  <p className="text-sm font-semibold text-[#111827] leading-snug">{ADDRESS}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form
            action={`mailto:${EMAIL}`}
            method="GET"
            className="bg-[#F8FAFC] rounded-2xl p-6 flex flex-col gap-4"
            noValidate
          >
            <h3 className="text-xl font-bold text-[#111827]">Send a Message</h3>

            <div className="flex flex-col gap-1">
              <label htmlFor="contact-name" className="text-sm font-medium text-[#374151]">
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="e.g. Rahul Sharma"
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="contact-email" className="text-sm font-medium text-[#374151]">
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="e.g. rahul@example.com"
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="contact-message" className="text-sm font-medium text-[#374151]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="body"
                placeholder="Tell us what you need…"
                rows={4}
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
