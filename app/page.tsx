// Landing page

import Image from "next/image";
import Navbar from "@/components/Navbar";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-serif">
      {/* Navbar containing title, subtitle and tabs */}
      <main className="font-serif">
        <Navbar
          title="Purva Zinjarde"
          subtitle="An Amateur Photographer Based in San Francisco"
        />
      </main>

      {/* The photo gallery component */}
      <PhotoGallery />

      {/* Footer containing logo and copyright */}
      <footer className="mt-auto border-t border-black px-4 md:px-8 lg:px-10 py-4 text-sm tracking-wide text-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="w-18 h-18">
            <Image
              src="/logo/logo.png" 
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
