import HeroServer from "./components/home/hero/HeroServer";
import PhotoGalleryServer from "./components/home/gallery/PhotoGalleryServer";
import AboutServer from "./components/home/about/AboutServer";

export default async function Page() {
  return (
    <main>
      {/* Hero Section */}
      <HeroServer />

      {/* Gallery Section */}
      <PhotoGalleryServer />
      {/* About Section */}
      <AboutServer />
    </main>
  );
}
