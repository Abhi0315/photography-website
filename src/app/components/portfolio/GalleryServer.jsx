// app/portfolio/components/gallery/GalleryServer.jsx
import GalleryCSR from "./GalleryCSR";
import { fetchPortfolioPage } from "@/app/lib/api";

export default async function GalleryServer() {
  const data = await fetchPortfolioPage();
  if (!data) return null;

  const sections = Array.isArray(data) ? data : [data];

  // honor section-level is_active (if missing, assume true)
  const gallerySection = sections.find(
    (s) => s && s.section_type === "GALLERY" && (s.is_active ?? true)
  );

  if (!gallerySection) return null;

  return <GalleryCSR initialData={gallerySection} />;
}
