// app/portfolio/components/home/hero/HeroCSR.jsx
"use client";

import React from "react";
import Link from "next/link";

export default function HeroCSR({ initialData }) {
  const data = initialData;
  if (!data) return null;

  const {
    heading,
    subheading,
    description,
    background_image,
    primary_image,
    primary_button_text,
    primary_button_url,
    secondary_button_text,
    secondary_button_url,
  } = data;

  const bgImage = background_image || primary_image || "";

  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 min-h-[90vh] flex items-center">
        <div className="max-w-2xl text-white">
          {heading && (
            <h1 className="main-heading mb-4 text-white">{heading}</h1>
          )}

          {description && (
            <p className="body-text mb-6 text-white">{description}</p>
          )}

          <div className="flex flex-wrap items-center gap-4 mb-6">
            {primary_button_text && (
              <Link
                href={primary_button_url || "#"}
                className="button px-6 py-3 rounded-none whitespace-nowrap"
              >
                {primary_button_text}
              </Link>
            )}

            {secondary_button_text && (
              <Link
                href={secondary_button_url || "#"}
                className="px-6 py-3 rounded-none whitespace-nowrap border border-white text-white 
                           hover:bg-white/20 hover:text-white transition-colors duration-200"
              >
                {secondary_button_text}
              </Link>
            )}
          </div>
        </div>

        {subheading && (
          <div className="absolute right-4" style={{ top: "86vh" }}>
            <div className="text-white text-sm font-lato tracking-[0.2em]">
              {subheading}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
