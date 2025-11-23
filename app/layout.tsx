import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import PageTransition from "@/components/PageTransition";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tam's AC - Bengkel AC Mobil & Bus Terbaik di Bandung",
  description:
    "Bengkel spesialis AC mobil dan bus terpercaya di Bandung sejak 2010. Layanan servis AC, isi freon, ganti spare parts, dan diagnosa gratis. Bergaransi dan teknisi berpengalaman.",
  keywords: [
    "Bengkel AC Mobil Bandung",
    "Service AC Mobil Bandung",
    "Tam's AC",
    "Tam's AC Mobil",
    "Tam's AC Bandung",
    "Tam's AC Mobil Bandung",
    "Tams AC",
    "Tams AC Mobil",
    "Tams AC Bandung",
    "Tams AC Mobil Bandung",
    "AC Mobil Gatot Subroto",
    "Isi Freon AC Mobil Bandung",
    "Ganti Kompresor AC Mobil",
    "Service AC Bus Bandung",
    "Bengkel AC Terdekat",
    "Spesialis AC Mobil Bandung",
  ],
  authors: [{ name: "Tam's AC Team" }],
  creator: "Tam's AC",
  publisher: "Tam's AC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Tam's AC - Solusi AC Mobil & Bus Terpercaya",
    description:
      "Bengkel AC kendaraan profesional di Bandung. Melayani servis, perawatan, dan perbaikan AC mobil & bus dengan harga transparan dan bergaransi.",
    url: "https://tamsac.vercel.app",
    siteName: "Tam's AC Bandung",
    images: [
      {
        url: "/images/logo.png", // Assuming this exists, or use a hero image
        width: 800,
        height: 600,
        alt: "Tam's AC Mobil & Bus",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tam's AC - Bengkel AC Mobil & Bus Bandung",
    description:
      "Solusi masalah AC kendaraan Anda. Dingin, sejuk, dan nyaman kembali bersama Tam's AC.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token", // Placeholder, user would need to add real one
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Tam's AC Mobil & Bus",
    image: "https://tamsac.vercel.app/images/logo.png",
    "@id": "https://tamsac.vercel.app",
    url: "https://tamsac.vercel.app",
    telephone: "+6287825263379",
    email: "tamsirac999@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Gatot Subroto No.201",
      addressLocality: "Bandung",
      addressRegion: "Jawa Barat",
      postalCode: "40273",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.928689,
      longitude: 107.619497,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "$$",
    sameAs: [
      "https://wa.me/6287825263379",
      // Add social media links here if available
    ],
  };

  return (
    <html lang="id">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
