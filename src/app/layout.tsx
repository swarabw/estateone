import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://estateone-22qvwhhhw-estateone1.vercel.app"
  ),

  title: {
    default:
      "Kolte Patil Vyana | Luxury Riverside Homes | EstateOne Realtors",
    template: "%s | EstateOne Realtors",
  },

  description:
    "Book your dream home at Kolte Patil Vyana, Sinhgad Road, Pune. Premium 2, 3 & 3.5 BHK residences with world-class amenities. Get Price Sheet, Floor Plans & Exclusive Launch Offers.",

  keywords: [
    "Kolte Patil Vyana",
    "Kolte Patil",
    "Luxury Apartments Pune",
    "2 BHK Pune",
    "3 BHK Pune",
    "Sinhgad Road",
    "Premium Flats Pune",
    "EstateOne Realtors",
  ],

  authors: [
    {
      name: "EstateOne Realtors",
    },
  ],

  creator: "EstateOne Realtors",

  publisher: "EstateOne Realtors",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Kolte Patil Vyana | Luxury Riverside Homes",
    description:
      "Premium 2, 3 & 3.5 BHK residences at Sinhgad Road, Pune. Download Price Sheet & Book Free Site Visit.",

    url: "https://estateone-22qvwhhhw-estateone1.vercel.app",

    siteName: "EstateOne Realtors",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Kolte Patil Vyana",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kolte Patil Vyana",
    description:
      "Luxury Riverside Homes on Sinhgad Road",

    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WL95TMG9" />

      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}