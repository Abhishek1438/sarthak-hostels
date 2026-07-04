import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarthakboyshostel.com"),
  title: "Sarthak Boys Hostel | Student PG Near Manipal University Jaipur",
  description:
    "Sarthak Boys Hostel — safe, affordable, and fully furnished student accommodation near Manipal University Jaipur. High-speed WiFi, meals, 24×7 security & more.",
  keywords: [
    "boys hostel near Manipal University Jaipur",
    "student PG Jaipur",
    "student hostel MUJ",
    "affordable hostel Jaipur",
    "Sarthak Boys Hostel",
  ],
  openGraph: {
    title: "Sarthak Boys Hostel | Student PG Near Manipal University Jaipur",
    description:
      "Safe, affordable, and fully furnished student accommodation near Manipal University Jaipur. High-speed WiFi, meals, 24×7 security & more.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/hostel/outsidejpg.jpg",
        width: 1200,
        height: 630,
        alt: "Sarthak Boys Hostel exterior — student accommodation near Manipal University Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Boys Hostel | Student PG Near Manipal University Jaipur",
    description:
      "Safe, affordable, and fully furnished student accommodation near Manipal University Jaipur.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Sarthak Boys Hostel",
  description:
    "Safe, affordable, and fully furnished student accommodation near Manipal University Jaipur.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Manipal University Jaipur",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "303007",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.836671,
    longitude: 75.5701501,
  },
  telephone: "+919876543210",
  email: "info@sarthakboyshostel.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
