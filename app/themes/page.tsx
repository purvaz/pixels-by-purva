import Navbar from "@/components/Navbar";
import ThemesGrid from "@/components/ThemesGrid";
import { getThemeCovers } from "@/lib/helper";
import { PhotoMeta } from "@/types/photoMetaData";
import rawPhotoMetaData from "@/data/photoMetaData.json"

const photoMetaData = rawPhotoMetaData as PhotoMeta[];

export default function ThemesPage() {
    
    const themeCovers = getThemeCovers(photoMetaData);

    return (
        <div className="flex flex-col min-h-screen font-serif">
            <main>
                <Navbar
                    title="Themes"
                    subtitle="Photographs, curated by the moods they capture"
                />

                <ThemesGrid themeCovers={themeCovers} allPhotos={photoMetaData} />
            </main>
        </div>
    )
}