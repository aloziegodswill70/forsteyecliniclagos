import type { Metadata } from "next";

import {
  SITE_NAME,
  TAGLINE,
  SEO_KEYWORDS,
} from "./constants";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://www.forsteyeclinic.com"),

  title: {
    default: `${SITE_NAME} | ${TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "FORST EYE CLINIC provides comprehensive eye examinations, glaucoma screening, cataract evaluation, diabetic eye care, children's eye care, dry eye treatment, OCT imaging, premium optical services and quality eye care across Lagos.",

  keywords: SEO_KEYWORDS,

  authors: [
    {
      name: SITE_NAME,
    },
  ],

  creator: SITE_NAME,

  publisher: SITE_NAME,

  applicationName: SITE_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.forsteyeclinic.com",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "Professional Eye Care Services Across Lagos.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Professional Eye Care Services Across Lagos.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Health",
};