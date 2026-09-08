import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FlyerGallery from "@/components/FlyerGallery";
import GalleryGrid from "@/components/GalleryGrid";
import { SectionHeading, CTASection } from "@/components/ui";
import { getPublishedFlyers } from "@/lib/cms";
import { galleryItems } from "@/lib/gallery";
import { listCloudinaryPhotos } from "@/lib/gallery-live";
import { heroes } from "@/lib/heroes";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore life at Hopewell STEM Academy — STEM projects, sports, robotics, learning and community moments.",
  alternates: { canonical: "/get-involved/gallery" },
};

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const flyers = await getPublishedFlyers();
  const livePhotos = await listCloudinaryPhotos();
  const photos = livePhotos.length > 0 ? livePhotos : galleryItems;

  return (
    <>
      <PageHero
        title="School Gallery"
        subtitle="Moments of learning, discovery and joy from across our school community."
        image={heroes.getInvolvedGallery}
        crumbs={[{ label: "Home", href: "/" }, { label: "Get Involved", href: "/get-involved" }, { label: "Gallery" }]}
      />

      <section className="section">
        <div className="container-page">
          <FlyerGallery flyers={flyers} />

          <div className={flyers.length > 0 ? "mt-16" : ""}>
            <SectionHeading
              eyebrow="Life at Hopewell"
              title="Captured Moments"
              intro="Browse photos from our classrooms, labs, fields and events. Click any image for full view."
            />
            <div className="mt-10">
              <GalleryGrid items={photos} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to See More?"
        text="Follow us on social media for the latest photos, stories and updates from Hopewell STEM Academy."
        primary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}