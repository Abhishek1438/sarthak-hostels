import Image from 'next/image'
import { Users, Check } from 'lucide-react'
import type { Room } from '@/lib/rooms'

interface RoomCardProps {
  room: Room
}

export default function RoomCard({ room }: RoomCardProps) {
  if (!room.imagePath) return null

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
      <div className="relative" style={{ aspectRatio: '16/10' }}>
        <Image
          src={room.imagePath}
          alt={`${room.title} — Sarthak Boys Hostel`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-[#111827]">{room.title}</h3>
          <span className="flex items-center gap-1 text-xs text-[#6B7280] bg-[#F1F5F9] px-2 py-1 rounded-full">
            <Users size={12} />
            Max {room.maxOccupancy}
          </span>
        </div>
        <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{room.description}</p>
        <ul className="space-y-1 mt-auto">
          {room.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2 text-sm text-[#374151]">
              <Check size={14} className="text-[#2563EB] shrink-0" />
              {feat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
