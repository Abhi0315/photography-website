import HeroServer from "../components/portfolio/HeroServer";
import GalleryServer from "../components/portfolio/GalleryServer";
import ShowcaseServer from "../components/portfolio/ShowcaseServer";

export const metadata = {
  title: "Photography | Portfolio",
  description: "A photography portfolio website",
};

export default async function Page() {
  return (
    <main>
      <HeroServer />
      <GalleryServer />
      <ShowcaseServer />
    </main>
  );
}
