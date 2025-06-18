// Wrapper for the Journeys Page images

"use client";

import { useState } from "react";
import Image from "next/image";
import type { PhotoMeta } from "@/types/photoMetaData";
import LightboxGallery from "@/components/LightboxGallery";
import { motion } from "framer-motion";

export default function JourneysGrid({
  locationCovers,
  allPhotos,
}: {
  // get the location and cover photos from the metadata
  locationCovers: { location: string; coverPhoto: PhotoMeta }[];
  allPhotos: PhotoMeta[];
}) {
  // flags for lightbox open/close
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<PhotoMeta[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-12 pb-12">
        {locationCovers.map(({ location, coverPhoto }, index) => (
          // motion div for image animation 
          <motion.div
            // image display properties
            key={location}
            className="relative group cursor-pointer h-80 rounded overflow-hidden"
            onClick={() => {
              const images = allPhotos.filter((p) => p.location === location);
              setSelectedImages(images);
              setStartIndex(0);
              setIsLightboxOpen(true);
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/${coverPhoto.filename}`}
              alt={coverPhoto.label}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Location title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xl md:text-2xl font-light tracking-wide uppercase text-center px-4">
                {location}
              </span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Lightbox modal */}
      {isLightboxOpen && (
        <LightboxGallery
          images={selectedImages}
          initialIndex={startIndex}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </>
  );
}
