import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ConditionalChrome from "@/components/ConditionalChrome";
import { site } from "@/lib/site";
import { images } from "@/lib/images";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Leading STEM School in Nakuru, Kenya`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "STEM Kenya",
    "International School Kenya",
    "STEM Education Africa",
    "Best STEM School Kenya",
    "Private School Nakuru",
    "Robotics Education Kenya",
    "Coding for Kids Kenya",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | Excellence in STEM Education`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Excellence in STEM Education`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: images.favicon,
    apple: images.favicon,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <ConditionalChrome>{children}</ConditionalChrome>
      </body>
    </html>
  );
}
