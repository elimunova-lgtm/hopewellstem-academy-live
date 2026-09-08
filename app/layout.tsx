import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ConditionalChrome from "@/components/ConditionalChrome";
import SeoBreadcrumbs from "@/components/SeoBreadcrumbs";
import { site, socials } from "@/lib/site";
import { images } from "@/lib/images";
import { cldUrl } from "@/lib/cloudinary";

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
  alternates: { canonical: "/" },
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
    images: [
      {
        url: cldUrl("stemhsa/heroes/lab3", {
          width: 1200,
          height: 630,
          crop: "fill",
          gravity: "center",
          format: "jpg",
        }),
        width: 1200,
        height: 630,
        alt: `${site.name} — Leading STEM School in Nakuru, Kenya`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Excellence in STEM Education`,
    description: site.description,
    images: [
      cldUrl("stemhsa/heroes/lab3", {
        width: 1200,
        height: 630,
        crop: "fill",
        gravity: "center",
        format: "jpg",
      }),
    ],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: images.favicon,
    apple: images.favicon,
  },
};

const jsonLdSchool = {
  "@context": "https://schema.org",
  "@type": "School",
  "@id": `${site.url}/#school`,
  name: site.name,
  alternateName: ["Hopewell STEM", "HSA", "Hopewell STEM Academy Nakuru"],
  url: site.url,
  logo: images.logo,
  image: images.logo,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pipeline",
    addressLocality: "Nakuru",
    addressRegion: "Nakuru County",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -0.3031,
    longitude: 36.08,
  },
  areaServed: ["Nakuru", "Nakuru County", "Kenya"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "07:30",
      closes: "16:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Academic Programmes at Hopewell STEM Academy",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Playgroup (Early Years)",
          url: `${site.url}/academics/playgroup`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Primary School",
          url: `${site.url}/academics/primary`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Junior High School",
          url: `${site.url}/academics/junior-high`,
        },
      },
    ],
  },
  sameAs: socials.map((social) => social.href),
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  alternateName: ["Hopewell STEM", "HSA"],
  publisher: {
    "@id": `${site.url}/#school`,
  },
  inLanguage: "en-KE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchool) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <SeoBreadcrumbs />
        <ConditionalChrome>{children}</ConditionalChrome>
      </body>
    </html>
  );
}
