import Image from "next/image";
// import { motion } from "framer-motion";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  return (
    // <main>
    //   <div>
    //     <h1>Pixels By Purva</h1>
    //   </div>
    // </main>

    <main className="font-serif">
      <header className="px-4 md:px-8 lg:px-12 pt-10 pb-6">
        {/* Name + Nav in top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl md:text-4xl tracking-wider font-extralight uppercase">PURVA Zinjarde</h1>
          <nav className="mt-4 md:mt-0 flex gap-6 text-sm uppercase font-medium tracking-wide">
            <a href="#" className="text-red-600">Work</a>
            <a href="#">Journal</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>

        {/* Thin line */}
        <hr className="my-4 border-t border-black" />

        {/* Subtitle below the line */}
        <p className="text-md font-extralight uppercase tracking-widest text-gray-700">
          Amateur Photographer Based in San Francisco
        </p>
      </header>

      <PhotoGallery />
      <footer className="mt-16 border-t border-black px-4 md:px-8 lg:px-12 py-6 text-sm tracking-wide text-gray-700">
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
    </main>
  );
}
