import Navbar from "@/components/Navbar"
import StoriesGrid from "@/components/StoriesGrid"

export default function Stories() {

    return (
        <div className="flex flex-col min-h-screen font-serif">
            <header>
                <Navbar
                    title="Stories"
                    subtitle="The words spoken between the photographs"
                />
            </header>
            <main>
                <StoriesGrid/>
            </main>
        </div>
    )
}