"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { photoMetaData } from "@/lib/photoMetaData";

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

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
        {photoMetaData.map((photo) => (
          <div
            key={photo.filename}
            className="relative group overflow-hidden rounded cursor-pointer"
            onClick={() => setSelectedPhoto(`/images/${photo.filename}`)}
          >
            <Image
              src={`/images/${photo.filename}`}
              alt={photo.label}
              width={500}
              height={700}
              className="w-full h-auto object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Label */}
            <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-white text-sm bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              {photo.label}
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Overlay */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          style={{ animation: "fadeIn 0.3s ease-out forwards" }}
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-[90%] max-h-[90%]">
            <Image
              src={selectedPhoto}
              alt="Enlarged photo"
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
      )}
    </>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import photos from "@/lib/images";
// import { photoMetaData } from "@/lib/photoMetaData";

// export default function PhotoGallery() {
//     return (
//         <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-12">
//             {photoMetaData.map((photo, i) => (
//                 <div key={photo.filename} className="relative group overflow-hidden rounded shadow-sm">
//                     <Image
//                         src={`/images/${photo.filename}`}
//                         alt={photo.label}
//                         width={500}
//                         height={700}
//                         className="w-full h-auto object-cover"
//                     />

//                     {/* Dark Overlay on Hover */}
//                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

//                     {/* Text Label */}
//                     <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-white text-sm text-center bg-black bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         {photo.label}
//                     </div>
//                 </div>
//             ))}
//         </section>
//         // <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-12">
//         //   {photos.map((src, i) => (
//         //     <motion.div
//         //       key={src}
//         //       initial={{ opacity: 0, y: 40 }}
//         //       whileInView={{ opacity: 1, y: 0 }}
//         //       transition={{ duration: 0.6, delay: i * 0.1 }}
//         //       viewport={{ once: true }}
//         //     >
//         //       <Image
//         //         key={i} 
//         //         src={src}
//         //         alt={`Photo ${i}`}
//         //         width={500}
//         //         height={600}
//         //         className="w-full h-auto object-cover rounded"
//         //       />
//         //     </motion.div>
//         //   ))}
//         // </section>
//     );
// }
