import HeroCSR from "./HeroCSR";
import { fetchPortfolioPage } from "@/app/lib/api";

export default async function HeroServer() {
  const data = await fetchPortfolioPage();
  if (!data) return null;

  const sections = Array.isArray(data) ? data : [data];

  const heroSection = sections.find((s) => s && s.section_type === "HERO");

  if (!heroSection) return null;

  return <HeroCSR initialData={heroSection} />;
}
