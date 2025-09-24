"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarCSR({ initialData }) {
  const [data] = useState(initialData);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  if (!data) return null;

  const menus = data?.menus.filter((item) => item.is_active) || [];
  const lastCtaIndex = menus.map((m) => m.is_button).lastIndexOf(true);
  const cta = lastCtaIndex !== -1 ? menus[lastCtaIndex] : null;
  const navItems = menus.filter((_, idx) => idx !== lastCtaIndex);

  const mid = Math.ceil(navItems.length / 2);
  const leftItems = navItems.slice(0, mid);
  const rightItems = navItems.slice(mid);

  const isActive = (url) => pathname === url;

  return (
    <nav className="w-full bg-white shadow-md px-4 sm:px-6 lg:px-8 py-4 relative sticky top-0 z-50">
      <div className="hidden md:grid grid-cols-3 items-center lg:grid-cols-3">
        <div className="flex justify-end space-x-8 lg:space-x-12">
          {leftItems.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={`nav text-black transition-colors duration-200 ${
                isActive(item.url)
                  ? "uppercase font-bold"
                  : "normal-case font-medium"
              }`}
            >
              {item.text}
            </Link>
          ))}
        </div>

        <div className="flex justify-center logo italic">
          {data.footer.name}
        </div>

        <div className="flex justify-start space-x-8 lg:space-x-12">
          {rightItems.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={`nav text-black transition-colors duration-200 ${
                isActive(item.url)
                  ? "uppercase font-bold"
                  : "normal-case font-medium"
              }`}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>

      {cta && (
        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2">
          <Link
            href={cta.url}
            className="button px-6 py-3 text-lg rounded-none whitespace-nowrap"
          >
            {cta.text}
          </Link>
        </div>
      )}

      <div className="md:hidden flex items-center justify-between w-full px-4">
        <div className="logo italic">{data.footer.name}</div>
        <button
          aria-label="Open menu"
          className="focus:outline-none text-black"
          onClick={() => setMobileOpen(true)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-0 right-0 h-full w-full bg-white flex flex-col">
          <div className="flex justify-end p-4">
            <button
              aria-label="Close menu"
              className="focus:outline-none p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center py-6">
            <div className="logo text-3xl">{data.footer.name}</div>
          </div>

          <div className="flex flex-col flex-1 justify-center items-stretch">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex-1 border-b border-gray-200 flex items-center justify-center"
              >
                <Link
                  href={item.url}
                  className={`nav text-black text-2xl py-0 block hover:text-muted-bronze transition-colors duration-200 ${
                    isActive(item.url)
                      ? "uppercase font-bold"
                      : "normal-case font-medium"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.text}
                </Link>
              </div>
            ))}
          </div>

          {cta && (
            <div className="w-full px-6 py-10 flex justify-center">
              <Link
                href={cta.url}
                className="button w-full max-w-md px-8 py-4 text-xl rounded-none whitespace-nowrap block text-center font-semibold hover:bg-opacity-90 transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {cta.text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
