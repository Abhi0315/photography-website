// "use client";
// import React from "react";
// import Image from "next/image";

// export default function PhotoGalleryClient({ gallery }) {
//   if (!gallery) return null;

//   return (
//     <section className="w-full px-6 py-12">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2
//           className="text-3xl md:text-4xl font-bold uppercase tracking-wide"
//           style={{ color: "#ad8a56", fontFamily: "'Playfair Display', serif" }}
//         >
//           {gallery.heading}
//         </h2>
//         {gallery.subheading && (
//           <p
//             className="mt-2 text-gray-600 text-base md:text-lg"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//           >
//             {gallery.subheading}
//           </p>
//         )}
//       </div>

//       {/* Masonry Grid */}
//       <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
//         {gallery.content_items
//           ?.filter((item) => item.is_active)
//           .map((item) => (
//             <div key={item.id} className="w-full break-inside-avoid">
//               <Image
//                 src={item.image}
//                 alt={item.title || "gallery image"}
//                 width={600}
//                 height={400}
//                 className="w-full h-auto shadow-md hover:opacity-90 transition"
//                 style={{ objectFit: "contain" }}
//                 unoptimized
//               />
//             </div>
//           ))}
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import Image from "next/image";

export default function PhotoGalleryClient({ gallery }) {
  if (!gallery) return null;

  // ✅ Only use active items with a valid image
  const images = gallery.content_items?.filter(
    (item) => item.is_active && item.image
  );

  if (!images || images.length === 0) return null;

  return (
    <section className="w-full px-6 py-12">
      {/* Heading */}
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
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {gallery.subheading}
          </p>
        )}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((item) => (
          <div key={item.id} className="break-inside-avoid">
            <Image
              src={item.image}
              alt={item.title || "gallery image"}
              width={600}
              height={400}
              className="w-full h-auto shadow-md hover:opacity-90 transition"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
