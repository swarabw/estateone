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
  title: "Kolte Patil Vyana | Luxury Riverside Homes | EstateOne Realtors",
  description:
    "Book your dream home at Kolte Patil Vyana, Sinhgad Road, Pune. Premium 2, 3 & 3.5 BHK residences with world-class amenities. Get Price Sheet, Floor Plans & Exclusive Launch Offers.",
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