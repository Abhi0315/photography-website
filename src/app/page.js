// src/app/page.js (server component)
import HeroSSR from "@/app/components/home/HeroServer";

export default async function Page() {
  return (
    <main>
      <HeroSSR />
    </main>
  );
}
