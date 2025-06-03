// Landing page photo grid

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import  photoMetaData  from "@/data/photoMetaData.json";
import { motion } from "framer-motion";

export default function PhotoGallery() {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    const dashboardPhotos = photoMetaData.filter((photo) => photo.isGallery);

    const photoObject = photoMetaData.find(
        (p) => `/images/${p.filename}` === selectedPhoto
    );

    // Handle Escape key to close
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedPhoto(null);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <>
            {/* Photo Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-12">
                {dashboardPhotos.map((photo, index) => (
                    <motion.div
                        key={photo.filename}
                        className="relative group overflow-hidden rounded cursor-pointer"
                        onClick={() => setSelectedPhoto(`/images/${photo.filename}`)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.05,
                            ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-[4/3] w-full rounded overflow-hidden">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${photo.filename}`}
                                alt={photo.label}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${photo.filename}`}
                            alt={photo.label}
                            width={500}
                            height={400}
                            className="w-full h-auto object-cover"
                        /> */}

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Label */}
                        <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-white text-sm bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                            {photo.title && (
                                <div className="text-base italic tracking-wide">
                                    "{photo.title}"
                                </div>
                            )}
                            <div className="text-xs tracking-wider">{photo.label}</div>
                        </div>
                    </motion.div>
                ))}

            </section>

            {/* Lightbox Overlay */}
            {selectedPhoto && photoObject && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 px-4 flex items-center justify-center"
                    style={{ animation: "fadeIn 0.3s ease-out forwards" }}
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div className="flex flex-col items-center max-w-[90%] max-h-[90%]">
                        {/* Title & Location */}
                        <div className="text-white text-center mb-2">
                            {photoObject.title && (
                                <div className="text-xl font-light italic leading-tight">
                                    “{photoObject.title}”
                                </div>
                            )}
                            <div className="text-xs md:text-sm tracking-wider uppercase text-gray-300">
                                {photoObject.location}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative w-full max-h-full">
                            <Image
                                src={selectedPhoto}
                                alt={photoObject.label}
                                width={1000}
                                height={1000}
                                className="w-full h-auto object-contain rounded"
                            />
                            <button
                                onClick={() => setSelectedPhoto(null)}
                                className="absolute top-2 right-2 text-white text-3xl font-light"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


