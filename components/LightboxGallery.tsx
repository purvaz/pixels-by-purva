// Lightbox for image viewing 

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PhotoMeta } from "@/lib/photoMetaData";

export default function LightboxGallery({
  images,
  initialIndex,
  onClose
}: {
  images: PhotoMeta[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") setCurrentIndex((i) => (i + 1) % images.length);
    if (e.key === "ArrowLeft") setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const currentPhoto = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-start px-4 py-6 overflow-y-auto">
      {/* Close Button */}
      <button
        className="absolute top-4 right-6 text-white text-4xl font-light"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Location Title */}
      <h2
        className="text-white text-base md:text-lg font-light uppercase tracking-wide mt-4 mb-2"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {currentPhoto.label}
      </h2>

      {/* Main Image */}
      <div className="w-full max-w-5xl">
        <Image
          src={`/images/${currentPhoto.filename}`}
          alt={currentPhoto.label}
          width={1400}
          height={900}
          className="object-contain w-full h-auto rounded"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        }
      >
        &#10094;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        onClick={() =>
          setCurrentIndex((prev) => (prev + 1) % images.length)
        }
      >
        &#10095;
      </button>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto px-2 py-2 max-w-5xl mt-4">
        {images.map((img, idx) => (
          <div
            key={img.filename}
            className={`cursor-pointer border-2 ${
              idx === currentIndex ? "border-white" : "border-transparent"
            }`}
            onClick={() => setCurrentIndex(idx)}
            style={{ width: "96px", height: "64px" }}
          >
            <Image
              src={`/images/${img.filename}`}
              alt={img.label}
              width={96}
              height={64}
              className="w-full h-full object-cover block align-bottom"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
