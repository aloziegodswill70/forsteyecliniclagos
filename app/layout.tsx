import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import FloatingCall from "@/components/layout/FloatingCall";

import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF3B1F",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:
      "Forst Eye Clinic Lagos | Eye Test, Glaucoma, Cataract & Vision Care",
    template: "%s | Forst Eye Clinic",
  },

  description:
    "Professional eye care services in Lagos, Nigeria. Comprehensive eye examinations, glaucoma management, cataract care, dry eye treatment, low vision rehabilitation, pediatric eye care, digital lenses and optical services.",

  keywords: siteConfig.keywords,

  authors: [
    {
      name: "Forst Eye Clinic",
      url: siteConfig.url,
    },
  ],

  creator: "Forst Eye Clinic",
  publisher: "Forst Eye Clinic",
  applicationName: "Forst Eye Clinic",
  category: "Healthcare",

  alternates: {
    canonical: siteConfig.url,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.url,
    siteName: siteConfig.name,

    title:
      "Forst Eye Clinic Lagos | Eye Test, Glaucoma, Cataract & Vision Care",

    description:
      "Comprehensive eye examinations, glaucoma care, cataract evaluations, dry eye treatment, pediatric eye care and optical services in Lagos.",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Forst Eye Clinic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Forst Eye Clinic Lagos | Eye Test, Glaucoma, Cataract & Vision Care",

    description:
      "Professional eye care services in Lagos, Nigeria.",

    images: ["/images/logo.png"],
  },

  verification: {
    google: "ADD_GOOGLE_VERIFICATION_CODE",
  },

  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  manifest: "/site.webmanifest",

  appleWebApp: {
    capable: true,
    title: "Forst Eye Clinic",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Forst Eye Clinic",

    url: siteConfig.url,

    logo: `${siteConfig.url}/images/logo.png`,

    email: siteConfig.email,

    telephone: siteConfig.phone,
  };

  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",

    name: "Forst Eye Clinic",

    image: `${siteConfig.url}/images/logo.png`,

    url: siteConfig.url,

    telephone: siteConfig.phone,

    medicalSpecialty: "Ophthalmology",

    address: {
      "@type": "PostalAddress",

      addressLocality: "Lagos",

      addressRegion: "Lagos",

      addressCountry: "NG",
    },

    areaServed: [
      "Lagos",
      "Ogba",
      "Ikeja",
      "Festac",
      "Surulere",
      "Ajah",
      "Lekki",
      "Yaba",
      "Magodo",
      "Ojodu",
      "Ibeju Lekki",
      "Igando",
      "Agbara",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "Forst Eye Clinic",

    url: siteConfig.url,

    potentialAction: {
      "@type": "SearchAction",

      target: `${siteConfig.url}/search?q={search_term_string}`,

      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos" />

        <meta
          name="format-detection"
          content="telephone=yes"
        />

        <meta
          name="mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="Forst Eye Clinic"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
      </head>

      <body
        className={`${inter.variable} overflow-x-hidden bg-[#FAFAFA] font-sans text-neutral-900 antialiased selection:bg-[#FF3B1F] selection:text-white`}
      >
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Script
          id="medical-clinic-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalClinicSchema),
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        
          <Navbar />

          <main className="flex-1 pb-20 lg:pb-0">
            {children}
          </main>
            <Footer />

            {/* Floating Action Buttons */}
           <div className="fixed right-5 bottom-24 lg:bottom-8 z-50 flex flex-col gap-4">
              <FloatingCall />
              <FloatingWhatsApp />
            </div>

            <BottomNav />
        </div>
      </body>
    </html>
  );
}