import { fetchHomePage } from "../../../lib/api";
import CtaClient from "./CtaClient";

export default async function CtaServer() {
  const data = await fetchHomePage();

  if (!data || !Array.isArray(data)) {
    return (
      <section className="w-full h-[40vh] flex items-center justify-center bg-gray-100 text-gray-800">
        <p>No data returned from API</p>
      </section>
    );
  }

  const ctaSection = data.find(
    (section) => section.section_type === "CTA" && section.is_active
  );

  if (!ctaSection) {
    return (
      <section className="w-full h-[40vh] flex items-center justify-center bg-gray-100 text-gray-800">
        <p>No active CTA section found</p>
      </section>
    );
  }

  return <CtaClient cta={ctaSection} />;
}
