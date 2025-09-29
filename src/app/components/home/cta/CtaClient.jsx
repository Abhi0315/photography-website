"use client";
import React from "react";
import Link from "next/link";
// Removed Image import as we are now using inline SVG

// New Hook SVG Component based on the desired decorative shape
const DecorativeHookSvg = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    // Use className prop to pass positioning/sizing/transform classes
    className={`w-24 h-24 absolute z-0 pointer-events-none ${className}`}
    fill="none"
  >
    {/* Simple hook path: Starts top right (90, 10), curves down and left to (50, 90) */}
    <path
      d="M 90 10 Q 90 90, 50 90"
      stroke="#b08d57"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <polygon points="55,85 55,95 45,90" fill="#b08d57" />
  </svg>
);

export default function CtaClient({ cta }) {
  if (!cta) return null;

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6">
      <div className="bg-black max-w-7xl mx-auto py-16 px-6 sm:px-12 text-center rounded-none  shadow-2xl shadow-[#b08d57]/30">
        <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-4">
          <DecorativeHookSvg className="top-[-30px] left-[-30px] transform scale-x-[-1] hidden md:block" />
          <DecorativeHookSvg className="bottom-[-30px] right-[-30px] transform scale-y-[-1] hidden md:block" />
          <h2
            className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-white z-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {cta.heading}
          </h2>
          {cta.subheading && (
            <p
              className="text-gray-300 text-base md:text-lg z-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {cta.subheading}
            </p>
          )}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 z-10">
            {cta.primary_button_text && (
              <Link
                href={cta.primary_button_url || "#"}
                className="w-full sm:w-auto bg-[#ad8a56] hover:bg-[#ad8a56] text-black font-semibold text-sm uppercase tracking-wider px-8 py-3 transition duration-300 border border-[#b08d57]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {cta.primary_button_text} →
              </Link>
            )}
            {cta.secondary_button_text && (
              <Link
                href={cta.secondary_button_url || "#"}
                className="w-full sm:w-auto bg-transparent border border-[#ad8a56] text-[#ffffff] hover:bg-[#fefefe] hover:text-[#ad8a56] font-semibold text-sm uppercase tracking-wider px-8 py-3 transition duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {cta.secondary_button_text} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
