import FooterCSR from "./FooterCSR";
import { fetchHeaderFooterData } from "../../lib/api";

export default async function FooterSSR() {
  const data = await fetchHeaderFooterData();
  if (!data) return null;

  return <FooterCSR initialData={data} />;
}
