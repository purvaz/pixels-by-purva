// Landing page

import Navbar from "@/components/Navbar";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="pt-[140px] flex flex-col min-h-screen font-serif">
      {/* Navbar containing title, subtitle and tabs */}
      <main className="font-serif">
        <Navbar
          title="Pixels by Purva"
          subtitle="A glimpse into how I see the world through my lens"
        />
      </main>

      {/* The photo gallery component */}
      <div className="pt-12 md:pt-0"> {/* Adjust pt-32 based on navbar height */}
        <PhotoGallery />
      </div>

      {/* Footer containing logo and copyright */}
      <Footer></Footer>
      <Analytics/>
    </div>
  );
}
