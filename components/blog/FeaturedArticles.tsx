import Image from "next/image";
import Link from "next/link";

import { blogs } from "@/data/blogs";

export default function FeaturedArticles() {
  const featured = blogs.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full border border-primary px-4 py-2 text-primary text-sm font-semibold">
            Eye Health Resources
          </span>

          <h2 className="mt-5 text-primary">
            Latest Eye Health Articles
          </h2>

          <p className="mt-4 text-neutral-600 leading-8">
            Learn more about glaucoma, dry eye disease,
            cataracts, children's vision, digital eye strain,
            and comprehensive eye care.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="card card-hover overflow-hidden"
            >
              <div className="relative h-60">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-secondary text-sm font-semibold">
                  {article.category}
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  {article.title}
                </h3>

                <p className="mt-4 text-neutral-600">
                  {article.description}
                </p>

                <div className="mt-5 font-semibold text-primary">
                  Read Article →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="btn-primary"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}