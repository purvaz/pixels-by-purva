// Component for Nav Bar

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (href: string) =>
    `${pathname === href ? "text-teal-600" : "text-gray-800"} hover:text-teal-600`;

  const links = [
    { href: "/", label: "Showcase" },
    { href: "/journeys", label: "Journeys" },
    { href: "/themes", label: "Themes" },
    { href: "/stories", label: "Stories" },
    { href: "/about", label: "About" }
  ];

  return (
    <header className="px-4 md:px-8 lg:px-12 pt-10 pb-6 font-serif relative">
      <div className="flex flex-row items-center justify-between">

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl tracking-wider font-[400] uppercase"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {title}
        </h1>

        {/* Mobile Burger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden flex flex-col items-center gap-1/2 text-gray-700 text-sm uppercase tracking-wider relative"
        >
          <motion.span
            className="material-icons text-4xl"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.8, repeat: 3, ease: "easeInOut" }}
          >
            {isOpen ? "close" : "menu"}
          </motion.span>
          <span className="text-[0.7rem]">{isOpen ? "close" : "menu"}</span>
        </button>


        {/* Tabs - desktop */}
        <nav className="hidden md:flex mt-4 md:mt-0 gap-6 text-sm uppercase font-medium tracking-wide">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Tabs - mobile dropdown */}
      {isOpen && (
        <div className="mt-4 flex flex-col md:hidden gap-4 text-sm uppercase font-medium tracking-wide">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={linkClass(href)}
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <hr className="my-4 border-t border-black" />

      {/* Subtitle */}
      {subtitle && (
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
