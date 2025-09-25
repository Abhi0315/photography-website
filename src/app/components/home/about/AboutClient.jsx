"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutClient({ about }) {
  if (!about) return null;

  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        {about.primary_image && (
          <div className="w-full">
            <Image
              src={about.primary_image}
              alt={about.heading || "About image"}
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Right Side - Text */}
        <div className="flex flex-col justify-center">
          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-bold uppercase mb-2 md:mb-4"
            style={{
              color: "#ad8a56",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {about.heading}
          </h2>

          {/* Subheading */}
          {about.subheading && (
            <h3 className="text-xl font-semibold mb-4">{about.subheading}</h3>
          )}

          {/* Description */}
          {about.description && (
            <div
              className="text-gray-700 leading-relaxed text-sm md:text-base max-h-[350px] overflow-y-auto pr-2"
              style={{ whiteSpace: "pre-line" }}
              dangerouslySetInnerHTML={{ __html: about.description }}
            />
          )}

          {/* Button */}
          {about.primary_button_text && about.primary_button_url && (
            <Link
              href={about.primary_button_url}
              className="mt-6 px-6 py-2 text-white text-sm uppercase font-medium tracking-wide bg-[#ad8a56] hover:bg-[#916f45] hover:shadow-md rounded-md w-max transition"
            >
              {about.primary_button_text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
