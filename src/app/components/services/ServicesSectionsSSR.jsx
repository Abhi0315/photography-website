import ServiceSectionCSR from "./ServiceSectionCSR";
import { fetchServicePage } from "../../lib/api";

export default async function ServicesSectionsSSR() {
  const data = await fetchServicePage();
  if (!data) return null;

  const sections = Array.isArray(data) ? data : [data];
  const activeSections = sections
    .filter((s) => s && s.is_active)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div>
      {activeSections.map((section) => (
        <ServiceSectionCSR key={section.id} initialData={section} />
      ))}
    </div>
  );
}
