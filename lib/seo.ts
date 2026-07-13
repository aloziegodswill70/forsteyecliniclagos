import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const SITE_URL =
  "https://www.forsteyeclinic.com";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/forst/image/upload/forst-og-image.jpg";

export function generateSEO({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
}: SEOProps): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Forst Eye Clinic",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_NG",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}