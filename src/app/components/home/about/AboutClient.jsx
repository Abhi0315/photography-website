"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutClient({ about }) {
  if (!about) return null;

  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {about.primary_image && (
          <div className="flex justify-center items-center h-full">
            <div className="w-full max-w-[380px] h-full">
              <Image
                src={about.primary_image}
                alt={about.heading || "About image"}
                width={500}
                height={500}
                className="w-full h-full object-cover shadow-sm"
              />
            </div>
          </div>
        )}
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-3xl md:text-4xl font-bold uppercase mb-4 leading-snug"
            style={{
              color: "#ad8a56",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {about.heading}
          </h2>
          {about.subheading && (
            <h3 className="text-xl font-semibold mb-6">{about.subheading}</h3>
          )}
          {about.description && (
            <div
              className="text-gray-700 leading-relaxed text-sm md:text-base max-h-[380px] md:max-h-[420px] overflow-y-auto pr-2"
              style={{ whiteSpace: "pre-line" }}
              dangerouslySetInnerHTML={{ __html: about.description }}
            />
          )}
          {about.primary_button_text && about.primary_button_url && (
            <Link
              href={about.primary_button_url}
              className="mt-6 px-5 py-2 text-white text-sm uppercase font-medium tracking-wide bg-[#ad8a56] hover:bg-[#916f45] hover:shadow-md w-max transition"
            >
              {about.primary_button_text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
