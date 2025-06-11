// Wrapper for the Themes Page images

"use client";

import { useState } from "react";
import Image from "next/image";
import { PhotoMeta, Theme } from "@/types/photoMetaData";
import LightboxGallery from "@/components/LightboxGallery";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

// Custom font 
const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export default function ThemesGrid({
    themeCovers,
    allPhotos,
}: {
    themeCovers: { theme: Theme; coverPhoto: PhotoMeta }[];
    allPhotos: PhotoMeta[];
}) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState<PhotoMeta[]>([]);
    const [startIndex, setStartIndex] = useState(0);

    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-12 pb-12">
                {themeCovers.map(({ theme, coverPhoto }) => {
                    return (
                        <motion.div
                            key={`${theme}-${coverPhoto.filename}`}
                            className="relative group cursor-pointer h-80 rounded overflow-hidden"
                            onClick={() => {
                                const images = allPhotos.filter((p) =>
                                    p.theme.includes(theme as Theme)
                                );
                                setSelectedImages(images);
                                setStartIndex(0);
                                setIsLightboxOpen(true);
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* Background Image */}
                            <Image
                                src={`/images/${coverPhoto.filename}`}
                                alt={coverPhoto.label}
                                fill
                                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Full dark overlay for contrast */}
                            <div className="absolute inset-0 bg-black/30 z-10" />

                            {/* Soft semi-transparent strip near the bottom */}
                            <div className="absolute inset-x-0 bottom-8 z-20 py-1 text-center"
                                style={{ backgroundColor: "rgba(253, 250, 246, 0.85)" }}>
                                <span className={`${greatVibes.className} text-gray-900 text-3xl italic tracking-wide opacity-80`}>
                                    {theme}
                                </span>
                            </div>
                        </motion.div>
                    )
                })}
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
