'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ROOMS } from '@/lib/rooms'
import RoomCard from './RoomCard'
import SectionTitle from '@/components/common/SectionTitle'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function RoomsSection() {
  const reducedMotion = useReducedMotion()
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const visibleRooms = ROOMS.filter((r) => r.imagePath !== null)

  return (
    <section id="rooms" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Rooms"
          subtitle="Choose the room type that fits your budget and lifestyle. All rooms come fully furnished."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleRooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={reducedMotion ? {} : inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <RoomCard room={room} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
