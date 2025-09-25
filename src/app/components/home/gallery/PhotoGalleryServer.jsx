import { fetchHomePage } from "../../../lib/api";
import PhotoGalleryClient from "./PhotoGalleryClient";

export default async function PhotoGalleryServer() {
  const data = await fetchHomePage();

  if (!data || !Array.isArray(data)) {
    return (
      <section className="w-full h-[60vh] flex items-center justify-center bg-gray-100 text-gray-800">
        <p>No data returned from API</p>
      </section>
    );
  }

  const gallerySection = data.find(
    (section) => section.section_type === "GALLERY" && section.is_active
  );

  if (!gallerySection) {
    return (
      <section className="w-full h-[60vh] flex items-center justify-center bg-gray-100 text-gray-800">
        <p>No active gallery section found</p>
      </section>
    );
  }

  return <PhotoGalleryClient gallery={gallerySection} />;
}
