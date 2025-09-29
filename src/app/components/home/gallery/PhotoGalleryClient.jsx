"use client";
import React from "react";
import Image from "next/image";

export default function PhotoGalleryClient({ gallery }) {
  if (!gallery) return null;

  const images = gallery.content_items?.filter(
    (item) => item.is_active && item.image
  );

  if (!images || images.length === 0) return null;

  return (
    <section className="w-full px-6 py-12">
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold uppercase tracking-wide"
          style={{ color: "#ad8a56", fontFamily: "'Playfair Display', serif" }}
        >
          {gallery.heading}
        </h2>
        {gallery.subheading && (
          <p
            className="mt-2 text-gray-600 text-base md:text-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {gallery.subheading}
          </p>
        )}
      </div>
      <div className="columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((item) => (
          <div key={item.id} className="break-inside-avoid shadow-lg ">
            <Image
              src={item.image}
              alt={item.title || "gallery image"}
              width={600}
              height={400}
              className="w-full h-auto shadow-md hover:opacity-90 transition rounded-none"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
