"use client";

import Image from "next/image";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="mt-auto border-t border-black px-4 md:px-8 lg:px-10 py-4 text-sm tracking-wide text-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left: Logo + Copyright */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                    <Image
                        src="/logo/logo.png"
                        alt="Purva Zinjarde Logo"
                        width={70}
                        height={70}
                        className="object-contain"
                    />
                    <p className="text-sm text-gray-700 text-center md:text-left">
                        © Copyright of Purva Zinjarde. All rights reserved.
                    </p>
                </div>

                {/* Right: Back to top */}
                <button
                    onClick={scrollToTop}
                    className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-black hover:underline transition"
                >
                    Back to top
                    <span aria-hidden="true">↑</span>
                </button>
            </div>
        </footer>
    );
}
