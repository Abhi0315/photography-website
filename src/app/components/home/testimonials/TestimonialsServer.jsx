import { fetchHomePage } from "../../../lib/api";
import TestimonialsClient from "./TestimonialsClient";

export default async function TestimonialsServer() {
  const data = await fetchHomePage();

  if (!data || !Array.isArray(data)) {
    return (
      <section className="w-full h-[60vh] flex items-center justify-center bg-gray-100 text-gray-800">
        <p>No data returned from API</p>
      </section>
    );
  }

  const testimonialsSection = data.find(
    (section) => section.section_type === "TESTIMONIALS" && section.is_active
  );

  if (!testimonialsSection) {
    return (
      <section className="w-full h-[60vh] flex items-center justify-center bg-gray-100 text-gray-800">
        <p>No active testimonials section found</p>
      </section>
    );
  }

  return <TestimonialsClient testimonials={testimonialsSection} />;
}
