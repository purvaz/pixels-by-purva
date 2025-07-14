import Navbar from "@/components/Navbar"
import StoriesGrid from "@/components/StoriesGrid"

export default function Stories() {

    return (
        <div className="pt-[140px] flex flex-col min-h-screen font-serif">
            <header>
                <Navbar
                    title="Stories"
                    subtitle="The words spoken between the photographs"
                />
            </header>
            <main>
            <div className="pt-10 md:pt-0">
                <StoriesGrid/>
                </div>
            </main>
        </div>
    )
}