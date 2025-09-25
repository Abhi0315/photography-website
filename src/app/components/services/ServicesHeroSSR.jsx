import ServicesHeroCSR from "./ServicesHeroCSR";
import { fetchServicePage } from "../../lib/api";

export default async function ServicesHeroSSR() {
  const data = await fetchServicePage();
  if (!data) return null;

  let section = data;
  if (Array.isArray(data)) {
    section = data.find((s) => s.section_type === "HERO") || data[0] || null;
  }

  if (!section) return null;

  return <ServicesHeroCSR initialData={section} />;
}
