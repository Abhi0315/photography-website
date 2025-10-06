import ShowcaseCSR from "./ShowcaseCSR";
import { fetchPortfolioPage } from "@/app/lib/api";

export default async function ShowcaseServer() {
  const data = await fetchPortfolioPage();
  if (!data) return null;

  const sections = Array.isArray(data) ? data : [data];
  const showcase = sections.find((s) => s && s.section_type === "SHOWCASE");

  if (!showcase) return null; // only check if it exists

  return <ShowcaseCSR initialData={showcase} />;
}
