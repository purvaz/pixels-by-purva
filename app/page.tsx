import Image from "next/image";
// import { motion } from "framer-motion";
import PhotoGallery from "@/components/PhotoGallery";
// import { photoMetaData } from "@/lib/photoMetaData";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-serif">
    <main className="font-serif">
      <header className="px-4 md:px-8 lg:px-12 pt-10 pb-6">
        {/* Name + Nav in top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl md:text-4xl tracking-wider font-[400] uppercase" style={{ fontFamily: "var(--font-cormorant)" }}>PURVA Zinjarde</h1>
          <nav className="mt-4 md:mt-0 flex gap-6 text-sm uppercase font-medium tracking-wide">
            <a href="#" className="text-teal-600">Work</a>
            <a href="#">Journal</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>

        {/* Thin line */}
        <hr className="my-4 border-t border-black" />

        {/* Subtitle below the line */}
        <p className="text-lg font-[300] uppercase tracking-widest text-gray-800" style={{ fontFamily: "var(--font-cormorant)" }}>
          An Amateur Photographer Based in San Francisco
        </p>
      </header>
    </main>

      <PhotoGallery />
      <footer className="mt-auto border-t border-black px-4 md:px-8 lg:px-10 py-4 text-sm tracking-wide text-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="w-18 h-18">
            <Image
              src="/logo/logo.png" // Replace with your actual logo path
              alt="Purva Zinjarde Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <p className="text-center md:text-right w-full md:w-auto">
            © Copyright of Purva Zinjarde
          </p>
        </div>
      </footer>
    </div>
  );
}
