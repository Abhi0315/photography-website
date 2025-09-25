"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { normalizeImageUrl } from "../../lib/api";

export default function ServiceSectionCSR({ initialData }) {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const ROTATE_INTERVAL = 5000;

  useEffect(() => {
    if (!initialData?.is_active) return;
    const activeImages = (initialData.content_items || [])
      .filter((it) => it?.is_active)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
    setImages(activeImages);
  }, [initialData]);

  useEffect(() => {
    if (images.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 600);
    }, ROTATE_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [images]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    images.forEach((img) => {
      const i = new window.Image();
      i.src = normalizeImageUrl(img.image);
    });
  }, [images]);

  if (!initialData?.is_active || images.length === 0) return null;

  const isEvenOrder = (initialData.order || 0) % 2 === 0;

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <div
            className={`relative col-span-1 lg:col-span-6 ${
              isEvenOrder ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative group">
              <div className="relative w-full h-80 sm:h-96 lg:h-[520px] overflow-hidden shadow-2xl shadow-slate-300/50">
                {images.map((it, i) => {
                  const src = normalizeImageUrl(it.image);
                  return (
                    <div
                      key={it.id ?? i}
                      className={`absolute inset-0 transition-all duration-1000 ease-out transform ${
                        i === index
                          ? "opacity-100 scale-100 rotate-0"
                          : "opacity-0 scale-110 rotate-1"
                      } ${isTransitioning ? "!duration-1000" : ""}`}
                    >
                      <Image
                        src={src}
                        alt={
                          it.title ||
                          `${initialData.heading || "section"}-${i + 1}`
                        }
                        fill
                        priority={i === 0}
                        className="object-cover"
                        draggable={false}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-black/5" />
                    </div>
                  );
                })}

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>

              <div
                className={`absolute -top-4 -right-4 w-28 h-28 bg-muted-bronze/20 rounded-full blur-2xl ${
                  isEvenOrder ? "lg:-left-4" : "lg:-right-4"
                }`}
              />
              <div
                className={`absolute -bottom-4 -left-4 w-32 h-32 bg-muted-bronze/10 rounded-full blur-2xl ${
                  isEvenOrder ? "lg:-right-4" : "lg:-left-4"
                }`}
              />
            </div>
          </div>

          <div
            className={`col-span-1 lg:col-span-6 ${
              isEvenOrder ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="flex flex-col justify-center h-full space-y-8 lg:space-y-10">
              {initialData.heading && (
                <div className="text-center lg:text-left space-y-6">
                  <div className="inline-flex items-center space-x-3 text-muted-bronze/20">
                    <div className="w-12 h-px bg-current" />
                    <span className="text-sm font-light tracking-widest font-lato">
                      SERVICE
                    </span>
                    <div className="w-12 h-px bg-current" />
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair-display italic font-light tracking-tight text-muted-bronze leading-tight">
                    {initialData.heading}
                  </h2>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-muted-bronze to-muted-bronze/80 mx-auto lg:mx-0" />
                </div>
              )}

              {initialData.description && (
                <div className="space-y-6">
                  <p className="text-lg lg:text-xl text-black leading-relaxed font-light max-w-2xl text-center lg:text-left font-lato body-text">
                    {initialData.description}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                {initialData.primary_button_text &&
                  initialData.primary_button_url && (
                    <a
                      href={initialData.primary_button_url}
                      className="px-10 py-4 bg-muted-bronze text-white font-lato font-medium transition-all duration-300 hover:bg-black"
                      aria-label={initialData.primary_button_text}
                    >
                      {initialData.primary_button_text}
                    </a>
                  )}

                {initialData.secondary_button_text &&
                  initialData.secondary_button_url && (
                    <a
                      href={initialData.secondary_button_url}
                      className="px-10 py-4 border-2 border-black text-black font-lato font-medium transition-all duration-300 hover:bg-black hover:text-white"
                      aria-label={initialData.secondary_button_text}
                    >
                      {initialData.secondary_button_text}
                    </a>
                  )}
              </div>

              <div className="flex justify-center lg:justify-start">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-muted-bronze/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-playfair-display {
          font-family: var(--font-playfair-display);
        }

        .font-lato {
          font-family: var(--font-lato);
        }
      `}</style>
    </section>
  );
}
