"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import photos from "@/lib/images";

// const photos = [
//     "/images/photo1.jpg",
//     "/images/photo2.jpg",
//     "/images/photo3.jpg",
//     "/images/photo4.jpg",
//     "/images/photo5.png",
//     "/images/photo6.png",
//     "/images/photo7.png",
//     "/images/photo8.png",
//     "/images/photo9.png",
//     "/images/photo10.png",
// ];

export default function PhotoGallery() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-12">
      {photos.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            key={i} 
            src={src}
            alt={`Photo ${i}`}
            width={500}
            height={600}
            className="w-full h-auto object-cover rounded"
          />
        </motion.div>
      ))}
    </section>
  );
}
