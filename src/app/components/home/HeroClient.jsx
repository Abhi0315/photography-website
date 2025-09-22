"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroClient({ hero }) {
  if (!hero) return null;

  const images =
    hero.content_items
      ?.filter((item) => item.is_active)
      .map((item) => item.image) || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={hero.heading}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-start h-full text-center px-6"
        style={{ paddingTop: "42vh" }}
      >
        {" "}
        <h1
          className="text-white uppercase tracking-[0.42em] mt-[120px] font-serif"
          style={{ fontSize: "clamp(28px, 4.8vw, 64px)", lineHeight: 1 }}
        >
          {hero.heading}
        </h1>
        {hero.subheading && (
          <p className="mt-4 text-white/90 text-sm sm:text-base">
            {hero.subheading}
          </p>
        )}
        {hero.primary_button_text && hero.primary_button_url && (
          <div className="mt-8">
            <Link href={hero.primary_button_url}>
              <span
                className="inline-block px-8 py-3 rounded text-sm sm:text-base tracking-wide"
                style={{
                  background: "#b88645",
                  color: "white",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
                  fontWeight: "500",
                }}
              >
                {hero.primary_button_text}
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
