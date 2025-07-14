import Navbar from "@/components/Navbar";
import ThemesGrid from "@/components/ThemesGrid";
import { getThemeCovers } from "@/lib/helper";
import { PhotoMeta } from "@/types/photoMetaData";
import rawPhotoMetaData from "@/data/photoMetaData.json"

const photoMetaData = rawPhotoMetaData as PhotoMeta[];

export default function ThemesPage() {

    const themeCovers = getThemeCovers(photoMetaData);

    return (
        <div className="pt-[140px] flex flex-col min-h-screen font-serif">
            <main>
                <Navbar
                    title="Themes"
                    subtitle="Photographs, curated by the moods they capture"
                />
                <div className="pt-20 md:pt-6">
                    <ThemesGrid themeCovers={themeCovers} allPhotos={photoMetaData} />
                </div>
            </main>
        </div>
    )
}