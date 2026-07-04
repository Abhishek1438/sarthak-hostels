export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: "Rooms" | "Exterior" | "Amenities" | "Dining" | "Common Areas"
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src: "/hostel/outsidejpg.jpg",
    alt: "Exterior view of Sarthak Boys Hostel main building",
    category: "Exterior",
  },
  {
    id: "2",
    src: "/hostel/unnamed.jpg",
    alt: "Sarthak Boys Hostel exterior and surroundings",
    category: "Exterior",
  },
  {
    id: "3",
    src: "/hostel/unnamed.png",
    alt: "Hostel building and campus entrance",
    category: "Exterior",
  },
  {
    id: "4",
    src: "/hostel/unnamed 1.jpg",
    alt: "Single occupancy student room with study desk",
    category: "Rooms",
  },
  {
    id: "5",
    src: "/hostel/unnamed 2.jpg",
    alt: "Double sharing room with individual study areas",
    category: "Rooms",
  },
  {
    id: "6",
    src: "/hostel/unnamed 3.jpg",
    alt: "Triple sharing room with comfortable beds",
    category: "Rooms",
  },
  {
    id: "7",
    src: "/hostel/unnamed 3 2.jpg",
    alt: "Well-maintained student room interior",
    category: "Rooms",
  },
  {
    id: "8",
    src: "/hostel/1.jpg",
    alt: "Hostel amenities and facilities",
    category: "Amenities",
  },
  {
    id: "9",
    src: "/hostel/2.jpg",
    alt: "Hostel facilities and common resources",
    category: "Amenities",
  },
  {
    id: "10",
    src: "/hostel/gdfgsfrg.jpg",
    alt: "Interior common spaces at the hostel",
    category: "Common Areas",
  },
  {
    id: "11",
    src: "/hostel/ggdsg.jpg",
    alt: "Common area and student gathering space",
    category: "Common Areas",
  },
  {
    id: "12",
    src: "/hostel/ggdsg.jpeg",
    alt: "Interior view of hostel common room",
    category: "Common Areas",
  },
  {
    id: "13",
    src: "/hostel/ungfdgnamed.jpg",
    alt: "Hostel interior corridor and spaces",
    category: "Common Areas",
  },
  {
    id: "14",
    src: "/hostel/unnamfdsfed.jpg",
    alt: "Well-maintained interior of hostel",
    category: "Common Areas",
  },
  {
    id: "15",
    src: "/hostel/unnamgdfsged.jpg",
    alt: "Hostel common area seating",
    category: "Common Areas",
  },
  {
    id: "16",
    src: "/hostel/WhatsApp Image 2026-07-03 at 8.57.19 AM.jpeg",
    alt: "Recent photo of Sarthak Boys Hostel exterior",
    category: "Exterior",
  },
]
