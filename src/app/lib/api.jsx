const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/header-footer/`;

export async function fetchHeaderFooterData() {
  try {
    const res = await fetch(API_BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch header/footer data");
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
