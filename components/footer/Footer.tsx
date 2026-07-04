import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { SITE_NAME, PHONE, EMAIL, ADDRESS, NAV_LINKS } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()
  const quickLinks = NAV_LINKS.slice(0, 5)

  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-white">{SITE_NAME}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Premium student accommodation near Manipal University Jaipur. Safe, comfortable, and fully furnished.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Sarthak Boys Hostel on Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Sarthak Boys Hostel on Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#F59E0B]" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={16} className="shrink-0 text-[#F59E0B]" />
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={16} className="shrink-0 text-[#F59E0B]" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
          © {year} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
