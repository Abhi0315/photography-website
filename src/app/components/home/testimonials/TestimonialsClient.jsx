// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// export default function TestimonialsClient({ testimonials }) {
//   if (!testimonials) return null;

//   const items = testimonials.content_items?.filter(
//     (item) => item.is_active && item.image
//   );

//   if (!items || items.length === 0) return null;

//   const [current, setCurrent] = useState(0);
//   const nextSlide = () => setCurrent((prev) => (prev + 1) % items.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + items.length) % items.length);

//   return (
//     <section className="w-full px-6 py-16 bg-white">
//       <div className="text-center mb-10">
//         <h2
//           className="text-3xl md:text-4xl font-bold uppercase tracking-wide"
//           style={{ color: "#ad8a56", fontFamily: "'Playfair Display', serif" }}
//         >
//           {testimonials.heading}
//         </h2>
//         {testimonials.subheading && (
//           <p
//             className="mt-2 text-gray-600 text-base md:text-lg"
//             style={{ fontFamily: "'Playfair Display', serif" }}
//           >
//             {testimonials.subheading}
//           </p>
//         )}
//       </div>
//       <div className="relative max-w-4xl mx-auto flex items-center">
//         <button
//           onClick={prevSlide}
//           className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#ad8a56] text-white hover:bg-[#8c6e42] transition"
//         >
//           <IoChevronBack size={24} />
//         </button>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
//           {[items[current], items[(current + 1) % items.length]].map((item) => (
//             <div
//               key={item.id}
//               className="relative shadow-md overflow-hidden bg-white group"
//             >
//               <div className="w-full h-[500px] relative">
//                 <Image
//                   src={item.image}
//                   alt={item.title || "client image"}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="absolute bottom-0 left-0 w-full bg-white/95 p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500">
//                 <h3
//                   className="text-lg font-bold mb-2"
//                   style={{ fontFamily: "'Playfair Display', serif" }}
//                 >
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-700 mb-3">{item.description}</p>
//                 <div className="flex items-center justify-between">
//                   {item.button_url && item.button_text && (
//                     <a
//                       href={item.button_url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center space-x-2 text-gray-700 hover:text-[#ad8a56]"
//                     >
//                       <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ad8a56]/20">
//                         ▶
//                       </span>
//                       <span className="text-sm">{item.button_text}</span>
//                     </a>
//                   )}
//                   <div className="flex space-x-3">
//                     {item.facebook_url && (
//                       <a
//                         href={item.facebook_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ad8a56]/20 hover:bg-[#ad8a56]/40"
//                       >
//                         <FaFacebookF className="text-[#ad8a56]" size={14} />
//                       </a>
//                     )}
//                     {item.instagram_url && (
//                       <a
//                         href={item.instagram_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ad8a56]/20 hover:bg-[#ad8a56]/40"
//                       >
//                         <FaInstagram className="text-[#ad8a56]" size={14} />
//                       </a>
//                     )}
//                     {item.twitter_url && (
//                       <a
//                         href={item.twitter_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ad8a56]/20 hover:bg-[#ad8a56]/40"
//                       >
//                         <FaTwitter className="text-[#ad8a56]" size={14} />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={nextSlide}
//           className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#ad8a56] text-white hover:bg-[#8c6e42] transition"
//         >
//           <IoChevronForward size={24} />
//         </button>
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function TestimonialsClient({ testimonials }) {
  // ✅ Move useState to the top, before any conditional return
  const [current, setCurrent] = useState(0);

  if (!testimonials) return null;

  const items = testimonials.content_items?.filter(
    (item) => item.is_active && item.image
  );

  if (!items || items.length === 0) return null;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % items.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold uppercase tracking-wide"
          style={{ color: "#ad8a56", fontFamily: "'Playfair Display', serif" }}
        >
          {testimonials.heading}
        </h2>
        {testimonials.subheading && (
          <p
            className="mt-2 text-gray-600 text-base md:text-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {testimonials.subheading}
          </p>
        )}
      </div>
      <div className="relative max-w-4xl mx-auto flex items-center">
        <button
          onClick={prevSlide}
          className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#ad8a56] text-white hover:bg-[#8c6e42] transition"
        >
          <IoChevronBack size={24} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {[items[current], items[(current + 1) % items.length]].map((item) => (
            <div
              key={item.id}
              className="relative shadow-md overflow-hidden bg-white group"
            >
              <div className="w-full h-[500px] relative">
                <Image
                  src={item.image}
                  alt={item.title || "client image"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white/95 p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  {item.button_url && item.button_text && (
                    <a
                      href={item.button_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-[#ad8a56]"
                    >
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ad8a56]/20">
                        ▶
                      </span>
                      <span className="text-sm">{item.button_text}</span>
                    </a>
                  )}
                  <div className="flex space-x-3">
                    {item.facebook_url && (
                      <a
                        href={item.facebook_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ad8a56]/20 hover:bg-[#ad8a56]/40"
                      >
                        <FaFacebookF className="text-[#ad8a56]" size={14} />
                      </a>
                    )}
                    {item.instagram_url && (
                      <a
                        href={item.instagram_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ad8a56]/20 hover:bg-[#ad8a56]/40"
                      >
                        <FaInstagram className="text-[#ad8a56]" size={14} />
                      </a>
                    )}
                    {item.twitter_url && (
                      <a
                        href={item.twitter_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ad8a56]/20 hover:bg-[#ad8a56]/40"
                      >
                        <FaTwitter className="text-[#ad8a56]" size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#ad8a56] text-white hover:bg-[#8c6e42] transition"
        >
          <IoChevronForward size={24} />
        </button>
      </div>
    </section>
  );
}
