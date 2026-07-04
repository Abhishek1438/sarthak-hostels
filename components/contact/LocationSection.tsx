import { MapPin, Navigation } from 'lucide-react'
import { SITE_NAME, ADDRESS, MAPS_EMBED_URL, MAPS_DIRECTIONS_URL } from '@/lib/data'

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">{SITE_NAME}</h2>
          <p className="text-[#6B7280] text-lg">Our Location — Near Manipal University Jaipur</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ minHeight: 380 }}>
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="420"
              style={{ border: 0, display: 'block', minWidth: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing location of ${SITE_NAME}`}
            />
          </div>

          {/* Address & Directions */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#111827] mb-3 text-lg">Address</h3>
              <div className="flex items-start gap-2 text-[#374151]">
                <MapPin size={18} className="text-[#2563EB] mt-0.5 shrink-0" />
                <p className="text-sm leading-relaxed">{ADDRESS}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#111827] mb-3 text-lg">Nearby Landmarks</h3>
              <ul className="text-sm text-[#374151] space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                  Manipal University Jaipur (walking distance)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                  Jaipur—Ajmer Expressway
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                  Dehmi Kalan Village
                </li>
              </ul>
            </div>

            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to Sarthak Boys Hostel (opens in new tab)"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-colors min-h-[44px]"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
