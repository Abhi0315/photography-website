import NavbarCSR from "./NavbarCSR";
import { fetchHeaderFooterData } from "../../lib/api";

export default async function NavbarSSRWrapper() {
  const data = await fetchHeaderFooterData();
  if (!data) return null;

  return <NavbarCSR initialData={data} />;
}
