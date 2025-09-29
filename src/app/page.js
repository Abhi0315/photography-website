import HeroServer from "./components/home/hero/HeroServer";
import PhotoGalleryServer from "./components/home/gallery/PhotoGalleryServer";
import AboutServer from "./components/home/about/AboutServer";
import TestimonialsServer from "./components/home/testimonials/TestimonialsServer";
import CtaServer from "./components/home/cta/CtaServer";

export default async function Page() {
  return (
    <main>
      <HeroServer />
      <PhotoGalleryServer />
      <AboutServer />
      <TestimonialsServer />
      <CtaServer />
    </main>
  );
}
