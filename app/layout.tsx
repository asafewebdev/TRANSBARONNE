import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { FAQ_ITEMS, SCHEMA_NAP, SITE } from "@/lib/constants";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "./fonts/inter-400-700-latin.woff2",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = localFont({
  src: [
    {
      path: "./fonts/barlow-condensed-700-latin.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/barlow-condensed-800-latin.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/barlow-condensed-900-latin.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.metaDescription,
  applicationName: SITE.name,
  category: "cargo transport",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.metaDescription,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Caminhão representando transporte de cargas da Trans Baronne no Brasil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.metaDescription,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const transportCompanyJsonLd = {
  "@context": "https://schema.org",
  "@type": ["MovingCompany", "LocalBusiness"],
  "@id": `${SITE.url}#transportadora`,
  name: SITE.name,
  legalName: SCHEMA_NAP.name,
  url: SITE.url,
  image: SITE.ogImage,
  telephone: SCHEMA_NAP.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SCHEMA_NAP.streetAddress,
    addressLocality: SCHEMA_NAP.addressLocality,
    addressRegion: SCHEMA_NAP.addressRegion,
    postalCode: SCHEMA_NAP.postalCode,
    addressCountry: SCHEMA_NAP.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    // TODO: Confirmar as coordenadas exatas da base antes da publicação.
    latitude: -12.6993,
    longitude: -38.3246,
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  sameAs: [SITE.instagramUrl],
  priceRange: "$$",
};

const transportServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE.url}#servico-transporte-cargas`,
  name: "Transporte de cargas para todo o Brasil",
  serviceType: "Transporte nacional de cargas",
  provider: {
    "@id": `${SITE.url}#transportadora`,
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tipos de transporte de cargas",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte de carga lotação",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte de carga fracionada",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte de cargas químicas",
        },
      },
    ],
  },
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${barlowCondensed.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(transportCompanyJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(transportServiceJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageJsonLd),
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
