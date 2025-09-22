import HeroClient from "./HeroClient";
import { fetchHomePage } from "../../lib/api";

export default async function HeroServer() {
  const data = await fetchHomePage();

  if (!data || !Array.isArray(data)) {
    return (
      <section className="w-full h-[60vh] flex items-center justify-center bg-gray-900 text-white">
        <p>No data returned from API</p>
      </section>
    );
  }

  const heroSection = data.find(
    (section) => section.section_type === "HERO" && section.is_active
  );

  if (!heroSection) {
    return (
      <section className="w-full h-[60vh] flex items-center justify-center bg-gray-900 text-white">
        <p>No active hero section found</p>
      </section>
    );
  }

  return <HeroClient hero={heroSection} />;
}
