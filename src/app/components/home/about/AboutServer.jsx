import { fetchHomePage } from "../../../lib/api";
import AboutClient from "./AboutClient";

export default async function AboutServer() {
  try {
    const data = await fetchHomePage();

    const aboutSection = data?.find(
      (section) => section.section_type === "ABOUT" && section.is_active
    );

    if (!aboutSection) {
      console.warn("⚠️ No ABOUT section found in API response");
      return null;
    }

    return <AboutClient about={aboutSection} />;
  } catch (error) {
    console.error("❌ Failed to fetch About section:", error);
    return null;
  }
}
