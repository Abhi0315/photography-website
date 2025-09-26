import ServiceSectionCSR from "../components/services/ServiceSectionCSR";
import ServicesHeroCSR from "../components/services/ServicesHeroCSR";
import { fetchServicePage } from "../lib/api";

export const metadata = {
  title: "Photography | Services",
  description: "A photography portfolio website",
};

export default async function ServicesSectionsSSR() {
  const data = await fetchServicePage();
  if (!data) return null;

  const sections = Array.isArray(data) ? data : [data];
  const activeSections = sections
    .filter((s) => s && s.is_active)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div>
      {activeSections.map((section) => {
        const SectionComponent =
          section.section_type === "HERO" ? ServicesHeroCSR : ServiceSectionCSR;

        return <SectionComponent key={section.id} initialData={section} />;
      })}
    </div>
  );
}
