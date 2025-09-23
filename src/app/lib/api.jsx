const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchHeaderFooterData() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/header-footer/`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch header/footer data");
    return res.json();
  } catch (err) {
    console.error("fetchHeaderFooterData error:", err);
    return null;
  }
}

export async function fetchHomePage() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/fetch-home_page`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Failed to fetch home page: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error("❌ fetchHomePage error:", err);
    return null;
  }
}
