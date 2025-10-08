"use client";
import Image from "next/image";

export default function AboutHeroClient({ about }) {
  if (!about) return null;

  return (
    <section className="bg-white">
      {/* 1. Hero Section with Background and Portrait */}
      <div className="relative w-full h-[550px] md:h-[340px]">
        {/* Background Image from API */}
        {about.background_image && (
          <Image
            src={about.background_image}
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
        )}

        {/* Dark Overlay with decreased height */}
        <div className="absolute inset-0 h-full bg-black/60" />

        {/* Content Container */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mt-o">
          {/* Text Content (on the left) */}
          <div className="flex flex-col justify-items-start h-full text-white max-w-2xl ">
            {about.title && (
              <p className="text-sm md:text-base tracking-widest font-light mb-1 mt-[230px] ">
                {about.title}
              </p>
            )}

            <h1 className="text-[38px] md:text-[40px] font-serif font-light leading-tight ">
              <span className="font-bold ">{about.heading}</span>
            </h1>

            {about.subheading && (
              <p className=" text-lg font-light ">{about.subheading}</p>
            )}
          </div>

          {/* Portrait Image (on the right, overlapping the bottom) */}
          {about.primary_image && (
            <div className="absolute right-6 md:right-16 lg:right-24 bottom-[-80px] md:bottom-[-220px] w-[280px] md:w-[380px] h-[370px] md:h-[480px] z-20">
              <Image
                src={about.primary_image}
                alt={about.heading}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* 2. Description Section (Below the Hero) */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-10 pb-24 pr-10">
        {/* Constrain the width of the paragraph to keep it on the left */}
        <div className="max-w-lg">
          {about.description
            ?.split("\r\n")
            .filter((para) => para.trim() !== "")
            .map((para, i) => (
              <p
                key={i}
                className="mb-6 text-[15px] leading-relaxed text-gray-700"
              >
                {para.trim()}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
}
