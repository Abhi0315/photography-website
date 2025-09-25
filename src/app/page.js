import HeroServer from "./components/home/hero/HeroServer";
import PhotoGalleryServer from "./components/home/gallery/PhotoGalleryServer";

export default async function Page() {
  return (
    <main>
      {/* Hero Section */}
      <HeroServer />

      {/* Gallery Section */}
      <PhotoGalleryServer />
    </main>
  );
}
