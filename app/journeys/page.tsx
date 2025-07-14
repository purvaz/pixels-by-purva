import { PhotoMeta } from "@/types/photoMetaData";
import rawPhotoMetaData from "@/data/photoMetaData.json";
import Navbar from "@/components/Navbar";
import JourneysGrid from "@/components/JourneysGrid";

const photoMetaData = rawPhotoMetaData as PhotoMeta[];

export default function JourneysPage() {
  // Get all unique locations
  const locations = Array.from(
    new Set(photoMetaData.map((p) => p.location))
  );

  // For each location, find its cover image
  const locationCovers: { location: string; coverPhoto: PhotoMeta }[] = locations.map((location) => {
    const coverPhoto =
      photoMetaData.find((p) => p.location === location && p.isLocationCover) ||
      photoMetaData.find((p) => p.location === location);

    if (!coverPhoto) {
      throw new Error(`No photo found for location "${location}"`);
    }

    return { location, coverPhoto };
  });

  return (
    <div className="pt-[140px] flex flex-col min-h-screen font-serif">
      <main>
        <Navbar
          title="Journeys"
          subtitle="A photographic journey through places that left me spellbound"
        />

        <div className="pt-28 md:pt-6">
          <JourneysGrid
            locationCovers={locationCovers}
            allPhotos={photoMetaData}
          />
        </div>
      </main>
    </div>
  );
}
