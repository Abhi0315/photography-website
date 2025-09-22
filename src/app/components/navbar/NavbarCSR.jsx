"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarCSR({ initialData }) {
  const [data] = useState(initialData);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const menus = data?.menus.filter((item) => item.is_active) || [];
  const leftItems = menus.slice(0, 2);
  const rightItems = menus.slice(2, 4);
  const cta = menus.find((item) => item.is_button);

  // Combine nav items for mobile menu
  const mobileItems = [...leftItems, ...rightItems];

  // Function to check if a menu item is active
  const isActive = (url) => {
    return pathname === url;
  };

  return (
    <nav className="w-full bg-white shadow-md px-4 sm:px-6 lg:px-8 py-4 flex items-center relative">
      {/* Left + Logo + Right */}
      <div className="hidden lg:flex flex-1 justify-center items-center">
        {/* Left nav items */}
        <div className="flex space-x-8 mr-12">
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

        {/* Logo / Name - Now in Italic */}
        <div className="logo text-center mx-12 italic">{data.footer.name}</div>

        {/* Right nav items */}
        <div className="flex space-x-8 ml-12">
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

      {/* Tablet Layout (md and lg) */}
      <div className="hidden md:flex lg:hidden flex-1 justify-between items-center">
        {/* Left items for tablet */}
        <div className="flex space-x-6">
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

        {/* Center logo for tablet - Now in Italic */}
        <div className="logo italic">{data.footer.name}</div>

        {/* Right items for tablet */}
        <div className="flex space-x-6">
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

      {/* Mobile Logo - Now in Italic */}
      <div className="md:hidden flex-1 text-center logo italic">
        {data.footer.name}
      </div>

      {/* CTA button - Desktop & Tablet */}
      {cta && (
        <div className="hidden md:block ml-4">
          <Link
            href={cta.url}
            className="button px-4 py-2 rounded-none whitespace-nowrap"
          >
            {cta.text}
          </Link>
        </div>
      )}

      {/* Mobile hamburger - Standard Hamburger Icon */}
      <div className="md:hidden ml-4">
        <button
          aria-label="Open menu"
          className="focus:outline-none"
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

      {/* Mobile menu - Full screen slide from right */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Full screen white background */}
        <div className="absolute top-0 right-0 h-full w-full bg-white">
          {/* Close button - positioned properly */}
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
                  d="M6 18L18-6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile nav content - reduced top space */}
          <div className="flex flex-col items-center justify-start pt-8 px-6 h-full">
            {/* Navigation items */}
            <div className="w-full max-w-md space-y-2">
              {mobileItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full text-center border-b border-gray-200"
                >
                  <Link
                    href={item.url}
                    className={`nav text-black text-lg py-4 block hover:text-muted-bronze transition-colors duration-200 ${
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

            {/* Mobile CTA button */}
            {cta && (
              <div className="mt-8 w-full max-w-md">
                <Link
                  href={cta.url}
                  className="button px-6 py-3 rounded-none whitespace-nowrap block text-center font-semibold hover:bg-opacity-90 transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {cta.text}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
