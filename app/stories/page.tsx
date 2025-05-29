import Navbar from "@/components/Navbar"

export default function Stories() {

    return (
        <div className="flex flex-col min-h-screen font-serif">
            <header>
                <Navbar
                    title="Stories"
                    subtitle="A glimpse into the mind behind the lens"
                />
            </header>
        </div>
    )
}