export interface NearbyPlace {
  id: string
  name: string
  category: string
  proximity: "Nearby" | "Easily Accessible" | "Close to Hostel"
  icon: string
  description: string
}

export const NEARBY_PLACES: NearbyPlace[] = [
  {
    id: "university",
    name: "Manipal University Jaipur",
    category: "University",
    proximity: "Close to Hostel",
    icon: "GraduationCap",
    description: "The primary reason you are here — the campus is right around the corner.",
  },
  {
    id: "medical",
    name: "Medical Stores",
    category: "Healthcare",
    proximity: "Nearby",
    icon: "Pill",
    description: "Multiple pharmacies and medical stores are easily accessible for everyday health needs.",
  },
  {
    id: "restaurants",
    name: "Restaurants & Dhabas",
    category: "Food",
    proximity: "Nearby",
    icon: "Utensils",
    description: "A variety of local restaurants, dhabas, and food joints are close by for weekends and cravings.",
  },
  {
    id: "cafes",
    name: "Cafés & Bakeries",
    category: "Cafés",
    proximity: "Easily Accessible",
    icon: "Coffee",
    description: "Grab a coffee, work on assignments, or catch up with friends at nearby cafés.",
  },
  {
    id: "busstop",
    name: "Bus Stops",
    category: "Transport",
    proximity: "Nearby",
    icon: "Bus",
    description: "Public transport connections are close by, making city travel convenient.",
  },
  {
    id: "daily",
    name: "Daily Needs Stores",
    category: "Shopping",
    proximity: "Close to Hostel",
    icon: "ShoppingBag",
    description: "Grocery stores, stationery shops, and convenience stores are all within easy reach.",
  },
]
