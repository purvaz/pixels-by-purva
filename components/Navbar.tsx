"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ title, subtitle }: { title: string; subtitle?: string }) {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `${pathname === href ? "text-teal-600" : "text-gray-800"} hover:text-teal-600`;

  return (
    <header className="px-4 md:px-8 lg:px-12 pt-10 pb-6 font-serif">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1
          className="text-3xl md:text-4xl tracking-wider font-[400] uppercase"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {title}
        </h1>
        <nav className="mt-4 md:mt-0 flex gap-6 text-sm uppercase font-medium tracking-wide">
          <Link href="/" className={linkClass("/")}>Showcase</Link>
          <Link href="/journeys" className={linkClass("/journeys")}>Journeys</Link>
          <Link href="/themes" className={linkClass("/themes")}>Themes</Link>
          <Link href="/journal" className={linkClass("/journal")}>Stories</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
        </nav>
      </div>

      <hr className="my-4 border-t border-black" />

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
