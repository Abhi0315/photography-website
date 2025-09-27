"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { normalizeImageUrl } from "@/app/lib/api";

export default function GalleryCSR({ initialData }) {
  const data = initialData || {};
  const contentItems = Array.isArray(data.content_items)
    ? data.content_items
    : [];

  const activeItems = contentItems.filter(
    (item) =>
      item &&
      (item.is_active ?? true) &&
      item.category &&
      (item.category.is_active ?? true)
  );

  const grouped = useMemo(() => {
    const map = new Map();
    for (const item of activeItems) {
      const cat = item.category || {};
      const slug = cat.slug || `cat-${cat.id || Math.random()}`; // internal only
      const name = cat.name || "Untitled Category"; // shown to user

      if (!map.has(slug)) {
        map.set(slug, {
          slug,
          name,
          view_more_url: cat.view_more_url || null,
          order: cat.order ?? 999,
          items: [],
        });
      }
      map.get(slug).items.push(item);
    }

    const arr = Array.from(map.values()).sort(
      (a, b) => (a.order ?? 0) - (b.order ?? 0)
    );
    arr.forEach((c) => {
      c.items.sort((x, y) => (x.order ?? 0) - (y.order ?? 0));
    });
    return arr;
  }, [activeItems]);

  const PAGE_SIZE = 8;

  const [indices, setIndices] = useState({});
  useEffect(() => {
    setIndices((prev) => {
      const init = {};
      for (const g of grouped) init[g.slug] = prev[g.slug] ?? 0;
      return init;
    });
  }, [grouped]);

  function handlePrev(slug) {
    setIndices((prev) => {
      const total = grouped.find((g) => g.slug === slug)?.items.length || 0;
      if (!total) return prev;
      const start = prev[slug] ?? 0;
      const nextStart = (start - PAGE_SIZE + total) % total;
      return { ...prev, [slug]: nextStart };
    });
  }

  function handleNext(slug) {
    setIndices((prev) => {
      const total = grouped.find((g) => g.slug === slug)?.items.length || 0;
      if (!total) return prev;
      const start = prev[slug] ?? 0;
      const nextStart = (start + PAGE_SIZE) % total;
      return { ...prev, [slug]: nextStart };
    });
  }

  function visibleItemsFor(g, start) {
    const items = g.items || [];
    const total = items.length;
    if (!total) return [];
    if (total <= PAGE_SIZE) return items;

    if (start + PAGE_SIZE <= total)
      return items.slice(start, start + PAGE_SIZE);

    const first = items.slice(start);
    const remaining = PAGE_SIZE - first.length;
    return first.concat(items.slice(0, remaining));
  }

  if (!(data.is_active ?? true)) return null;

  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-8">
          {data.heading && (
            <h2 className="text-3xl font-playfair-display uppercase text-muted-bronze">
              {data.heading}
            </h2>
          )}
          {data.subheading && (
            <p className="mt-2 text-white/80">{data.subheading}</p>
          )}
        </div>

        <div className="space-y-12">
          {grouped.map((g) => {
            const start = indices[g.slug] ?? 0;
            const visible = visibleItemsFor(g, start);

            return (
              <div key={g.slug}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="uppercase tracking-widest text-lg font-playfair-display text-muted-bronze">
                    {g.name}
                  </h3>

                  <div className="flex items-center gap-3">
                    {g.view_more_url && (
                      <Link
                        href={g.view_more_url}
                        className="button px-4 py-2 rounded-none whitespace-nowrap"
                      >
                        View More
                      </Link>
                    )}
                    <button
                      onClick={() => handlePrev(g.slug)}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => handleNext(g.slug)}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {visible.map((item) => {
                    const imgUrl = normalizeImageUrl(item.image || "");
                    return (
                      <figure key={item.id}>
                        <div className="w-full overflow-hidden rounded-none">
                          <Image
                            src={imgUrl || "/placeholder.jpg"}
                            alt={item.title || ""}
                            width={500}
                            height={500}
                            className="w-full h-[220px] md:h-[260px] object-cover rounded-none"
                          />
                        </div>
                        <figcaption className="mt-3">
                          {item.title && (
                            <div className="text-sm font-playfair-display text-white">
                              {item.title}
                            </div>
                          )}
                          {item.date && (
                            <div className="text-xs text-white/70 mt-1">
                              {item.date}
                            </div>
                          )}
                        </figcaption>
                      </figure>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
