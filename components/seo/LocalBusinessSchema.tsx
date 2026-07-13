interface Props {
  branchName?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}

export default function LocalBusinessSchema({
  branchName = "Forst Eye Clinic",
  address = "Lagos, Nigeria",
  latitude,
  longitude,
}: Props) {
  const schema = {
    "@context": "https://schema.org",

    "@type": ["MedicalClinic", "Optometrist"],

    name: branchName,

    url: "https://www.forsteyeclinic.com",

    logo:
      "https://www.forsteyeclinic.com/images/logo.png",

    image:
      "https://www.forsteyeclinic.com/images/logo.png",

    telephone: "+2348000000000",

    email: "info@forsteyeclinic.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressCountry: "NG",
    },

    geo:
      latitude && longitude
        ? {
            "@type": "GeoCoordinates",
            latitude,
            longitude,
          }
        : undefined,

    areaServed: {
      "@type": "State",
      name: "Lagos",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}