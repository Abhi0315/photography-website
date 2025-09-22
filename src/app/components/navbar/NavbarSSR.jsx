import Link from "next/link";
import { fetchHeaderFooterData } from "../../lib/api";

export default async function NavbarSSR() {
  const data = await fetchHeaderFooterData();
  if (!data) return null;

  const menus = data.menus.filter((item) => item.is_active);
  const leftItems = menus.slice(0, 2);
  const rightItems = menus.slice(2, 4);
  const cta = menus.find((item) => item.is_button);

  return (
    <nav className="w-full bg-white shadow-md px-4 md:px-8 py-4 flex items-center relative">
      {/* Left + Logo + Right group */}
      <div className="flex flex-1 justify-center items-center">
        {/* Left nav items with spacing from logo */}
        <div className="flex space-x-4 mr-6">
          {leftItems.map((item) => (
            <Link key={item.id} href={item.url} className="nav text-black">
              {item.text}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="logo text-center">{data.footer.name}</div>

        {/* Right nav items with spacing from logo */}
        <div className="flex space-x-4 ml-6">
          {rightItems.map((item) => (
            <Link key={item.id} href={item.url} className="nav text-black">
              {item.text}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA button at extreme right */}
      {cta && (
        <div className="ml-auto">
          <Link
            href={cta.url}
            className="button px-4 py-2 rounded-md whitespace-nowrap"
          >
            {cta.text}
          </Link>
        </div>
      )}

      {/* Mobile hamburger */}
      <div className="md:hidden ml-auto">
        <button aria-label="Open menu" className="focus:outline-none">
          <svg
            className="w-6 h-6 animate-bounce-slow"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l2-2m0 0l2 2m-2-2v12m16-12l-2-2m0 0l-2 2m2-2v12M5 10h14M5 14h14"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
