// Lightbox for image viewing 

"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { PhotoMeta } from "@/types/photoMetaData";

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
  const activeThumbRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);


  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") setCurrentIndex(i => (i + 1) % images.length);
    if (e.key === "ArrowLeft") setCurrentIndex(i => (i - 1 + images.length) % images.length);
  }, [images.length, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (activeThumbRef.current && scrollContainerRef.current) {
      const active = activeThumbRef.current;
      const container = scrollContainerRef.current;

      const activeLeft = active.offsetLeft;
      const activeWidth = active.offsetWidth;
      const containerWidth = container.offsetWidth;

      // Scroll to center the active thumbnail
      container.scrollTo({
        left: activeLeft - containerWidth / 2 + activeWidth / 2,
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  const currentPhoto = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 px-4 py-2 overflow-y-auto flex flex-col items-center justify-start max-w-screen">
      {/* Close Button */}
      <button
        className="absolute top-4 right-6 text-white text-4xl font-light"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Location Title */}
      <h2
        className="text-white text-base md:text-lg font-light uppercase tracking-wide mt-4 mb-4 text-center"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {currentPhoto.label}
      </h2>

      {/* Main Image */}
      <div className="w-full max-w-5xl mb-4">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/${currentPhoto.filename}`}
          alt={currentPhoto.label}
          width={1400}
          height={900}
          className="object-contain w-full max-h-[75vh] h-auto rounded"
        />
      </div>

      {/* Image Counter with Arrows */}
      <div className="flex items-center justify-center gap-6 text-gray-300 text-sm my-2">
        <button
          className="text-2xl md:text-3xl px-2 py-1 hover:text-white transition"
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
          }
          aria-label="Previous image"
        >
          &#10094;
        </button>

        <span>
          {currentIndex + 1} / {images.length}
        </span>

        <button
          className="text-2xl md:text-3xl px-2 py-1 hover:text-white transition"
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % images.length)
          }
          aria-label="Next image"
        >
          &#10095;
        </button>
      </div>

      {/* Thumbnails */}
      <div ref={scrollContainerRef} className="w-full max-w-5xl overflow-x-auto mt-2 mb-4">
        <div className="flex gap-2 px-2 py-2 w-max">
          {images.map((img, idx) => (
            <div
              key={img.filename}
              ref={idx === currentIndex ? activeThumbRef : null}
              className={`cursor-pointer flex-shrink-0 border-2 ${idx === currentIndex ? "border-white" : "border-transparent"
                }`}
              onClick={() => setCurrentIndex(idx)}
              style={{ width: "96px", height: "64px" }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${img.filename}`}
                alt={img.label}
                width={96}
                height={64}
                className="w-full h-full object-cover block align-bottom"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );

}
