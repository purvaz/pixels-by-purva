"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Navbar({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true); // default to true
  const [showNavbar, setShowNavbar] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(true);
  const lastScrollY = useRef(0);
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  const MOBILE_MENU_KEY = "mobileTabsOpen";

  // Load menu state from sessionStorage on mount
  useEffect(() => {
    const saved = sessionStorage.getItem(MOBILE_MENU_KEY);
    if (saved !== null) setIsOpen(saved === "true");
  }, []);

  // Save menu state whenever it changes
  useEffect(() => {
    sessionStorage.setItem(MOBILE_MENU_KEY, isOpen.toString());
  }, [isOpen]);

  const linkClass = (href: string) =>
    `${pathname === href ? "text-teal-600" : "text-gray-800"} hover:text-teal-600`;

  const links = [
    { href: "/", label: "Showcase" },
    { href: "/journeys", label: "Journeys" },
    { href: "/themes", label: "Themes" },
    { href: "/stories", label: "Stories" },
    { href: "/about", label: "About" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowSubtitle(currentScrollY < 10);

      const delta = currentScrollY - lastScrollY.current;
      
      // Prevent flicker when at or very near top
      if (currentScrollY < 10) {
        setShowNavbar(true);
        setShowSubtitle(true);
        return;
  }

      if (Math.abs(delta) < 20) return;

      if (delta > 0) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => {
        if (window.scrollY > 20) setShowNavbar(false);
      }, 3000);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`transition-transform duration-300 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 left-0 w-full z-50 bg-[#FDFAF6] px-4 md:px-8 lg:px-12 pt-10 pb-4 font-serif`}
    >
      <div className="flex flex-row items-center justify-between">
        {/* Title */}
        <h1
          className="text-3xl md:text-4xl tracking-wider font-[400] uppercase"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {title}
        </h1>

        {/* Mobile Chevron Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile tabs"
          className="block md:hidden"
        >
          <span className="material-icons text-3xl text-gray-700">
            {isOpen ? "expand_less" : "expand_more"}
          </span>
        </button>

        {/* Desktop Tabs */}
        <nav className="hidden md:flex mt-4 md:mt-0 gap-6 text-sm uppercase font-medium tracking-wide">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Tabs */}
      {isOpen && (
        <nav className="mt-4 md:hidden overflow-x-auto">
          <div className="flex gap-6 text-sm uppercase font-medium tracking-wide pb-1 px-1 min-w-max no-scrollbar">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass(href)}>
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <hr className="my-4 border-t border-black" />

      {/* Subtitle */}
      {subtitle && showSubtitle && (
        <p
          className="text-lg font-[300] uppercase tracking-widest text-gray-800"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
