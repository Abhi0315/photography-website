import HeroServer from "../components/portfolio/HeroServer";
export const metadata = {
  title: "Photography | Portfolio",
  description: "A photography portfolio website",
};

export default async function Page() {
  return (
    <main>
      <HeroServer />
    </main>
  );
}
