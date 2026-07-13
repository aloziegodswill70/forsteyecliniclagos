interface Props {
  rating?: number;
  reviewCount?: number;
}

export default function ReviewSchema({
  rating = 4.9,
  reviewCount = 150,
}: Props) {
  const schema = {
    "@context": "https://schema.org",

    "@type": "MedicalClinic",

    name: "Forst Eye Clinic",

    aggregateRating: {
      "@type": "AggregateRating",

      ratingValue: rating,

      reviewCount,
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