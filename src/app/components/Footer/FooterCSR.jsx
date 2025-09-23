"use client";

import Link from "next/link";
import Image from "next/image";
import { normalizeImageUrl } from "../../lib/api";
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuArrowUpRight,
  LuMail,
  LuPhone,
  LuMapPin,
} from "react-icons/lu";

export default function FooterCSR({ initialData }) {
  if (!initialData) return null;

  const { footer, quick_links, made_with_text } = initialData;

  const images = [
    footer.image1,
    footer.image2,
    footer.image3,
    footer.image4,
  ].map(normalizeImageUrl);

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Quick Links Section */}
          <div className="text-center w-full py-8 md:py-8 md:px-6 border-b md:border-b-0 md:border-r border-muted-bronze flex flex-col justify-center">
            <div className="space-y-4 mx-auto">
              <h3 className="font-semibold text-lg relative inline-block pb-2">
                Quick Links
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-muted-bronze"></span>
              </h3>
              <ul className="space-y-3">
                {quick_links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      className="group flex items-center justify-center gap-1 text-gray-300 hover:text-white transition-all duration-200 py-1"
                    >
                      <LuArrowUpRight
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        size={12}
                      />
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-muted-bronze group-hover:w-full transition-all duration-200"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center w-full py-8 md:py-8 md:px-6 border-b md:border-b-0 md:border-r border-muted-bronze flex flex-col justify-center">
            <div className="space-y-4 mx-auto">
              <h3
                className="font-semibold italic text-3xl md:text-5xl lg:text-6xl relative inline-block pb-2"
                style={{ color: "#AD8A56" }}
              >
                {footer.name}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-muted-bronze"></span>
              </h3>

              {/* Contact Info with Icons */}
              <div className="space-y-3 text-gray-300">
                {/* Email */}
                <div className="flex items-center justify-center gap-3 hover:text-white transition-colors duration-200 py-1">
                  <LuMail
                    className="text-muted-bronze flex-shrink-0"
                    size={16}
                  />
                  <p className="text-left">{footer.email}</p>
                </div>

                {/* Phone Number */}
                <div className="flex items-center justify-center gap-3 hover:text-white transition-colors duration-200 py-1">
                  <LuPhone
                    className="text-muted-bronze flex-shrink-0"
                    size={16}
                  />
                  <p className="text-left">{footer.phone_number}</p>
                </div>

                {/* Address */}
                <div className="flex items-center justify-center gap-3 hover:text-white transition-colors duration-200 py-1">
                  <LuMapPin
                    className="text-muted-bronze flex-shrink-0"
                    size={16}
                  />
                  <p className="text-left">{footer.address}</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 pt-2">
                {[
                  {
                    href: footer.facebook_url,
                    icon: LuFacebook,
                    label: "Facebook",
                  },
                  {
                    href: footer.instagram_url,
                    icon: LuInstagram,
                    label: "Instagram",
                  },
                  {
                    href: footer.linkedin_url,
                    icon: LuLinkedin,
                    label: "LinkedIn",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative p-2 rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon
                      size={18}
                      className="text-gray-400 group-hover:text-muted-bronze transition-colors duration-200"
                    />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="space-y-1 pt-2">
                <p className="text-sm text-gray-400 py-1">
                  {footer.copyright_text}
                </p>
                <p className="text-sm text-gray-400 py-1">{made_with_text}</p>
              </div>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="text-center w-full py-8 md:py-8 md:px-6 flex flex-col justify-center">
            <div className="space-y-4 mx-auto">
              <a
                href={footer.instagram_url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-1 text-gray-300 hover:text-muted-bronze transition-all duration-200 py-2"
              >
                <span>Visit Instagram</span>
                <LuArrowUpRight
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  size={14}
                />
              </a>
              <div className="grid grid-cols-2 gap-3 justify-center w-44 mx-auto pt-1">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden aspect-square transition-transform duration-300 hover:scale-105"
                  >
                    <Image
                      src={img}
                      alt={`Footer image ${idx + 1}`}
                      width={84}
                      height={84}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-muted-bronze opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
