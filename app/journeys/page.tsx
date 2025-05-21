import { photoMetaData } from "@/lib/photoMetaData";
import Navbar from "@/components/Navbar";
import JourneysGrid from "@/components/JourneysGrid"; 

export default function JourneysPage() {
  // Get all unique locations
  const locations = Array.from(
    new Set(photoMetaData.map((p) => p.location))
  );

  // For each location, find its cover image
  const locationCovers = locations.map((location) => {
    const coverPhoto =
      photoMetaData.find(
        (p) => p.location === location && p.isLocationCover
      ) ||
      photoMetaData.find((p) => p.location === location);

    return { location, coverPhoto };
  });

  return (
    <div className="flex flex-col min-h-screen font-serif">
      <main>
        <Navbar
          title="Journeys"
          subtitle="A photographic journey through places that left me spellbound"
        />

        <JourneysGrid
          locationCovers={locationCovers}
          allPhotos={photoMetaData}
        />
      </main>
    </div>
  );
}
