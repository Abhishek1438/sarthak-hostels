export interface Room {
  id: string
  title: string
  description: string
  features: string[]
  maxOccupancy: number
  imagePath: string | null
}

export const ROOMS: Room[] = [
  {
    id: "single",
    title: "Single Room",
    description:
      "Your own private sanctuary — a fully furnished single occupancy room designed for focused study and comfortable rest.",
    features: [
      "Private attached bathroom",
      "Study table & chair",
      "Wardrobe storage",
      "High-speed WiFi",
      "Daily housekeeping",
    ],
    maxOccupancy: 1,
    imagePath: "/hostel/unnamed 1.jpg",
  },
  {
    id: "double",
    title: "Double Sharing",
    description:
      "A spacious room designed for two, offering the perfect balance of privacy and companionship in a clean, modern environment.",
    features: [
      "Shared attached bathroom",
      "Individual study desks",
      "Personal wardrobes",
      "High-speed WiFi",
      "RO drinking water",
    ],
    maxOccupancy: 2,
    imagePath: "/hostel/unnamed 2.jpg",
  },
  {
    id: "triple",
    title: "Triple Sharing",
    description:
      "An affordable shared room for three students, thoughtfully designed to maximize space while ensuring everyone has room to breathe.",
    features: [
      "Shared bathroom",
      "Study desks for all",
      "Shared wardrobe",
      "High-speed WiFi",
      "Power backup",
    ],
    maxOccupancy: 3,
    imagePath: "/hostel/unnamed 3.jpg",
  },
]
