"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true); // mobile tabs are shown by default

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

        {/* Mobile Chevron Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile tabs"
          className="md:hidden"
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
              <Link
                key={href}
                href={href}
                className={linkClass(href)}
                onClick={() => setIsOpen(false)} // optional: collapse on selection
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
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
