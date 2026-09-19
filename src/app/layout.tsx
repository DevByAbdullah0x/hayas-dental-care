import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Haya's Dental Care · Aesthetic Dentistry & Implantology",
  description:
    "Led by Dr. Aayisha Quddus (BDS, MIHS, RDS, C-Ortho), Haya's Dental Care offers painless dental treatments, implants, braces, and cosmetic dentistry in Rawalpindi.",
  keywords: [
    "dentist rawalpindi",
    "dental implants rawalpindi",
    "braces rawalpindi",
    "teeth whitening",
    "root canal",
    "Dr Aayisha Quddus",
    "Haya's Dental Care",
    "Adiyala Road dentist",
  ],
  openGraph: {
    title: "Haya's Dental Care · Aesthetic Dentistry & Implantology",
    description:
      "Gentle, precise dental care for every smile in your family. Led by Dr. Aayisha Quddus.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${plusJakartaSans.variable} bg-background font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container`}
      >
        {children}
      </body>
    </html>
  );
}
