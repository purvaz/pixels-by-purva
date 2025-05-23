import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ['300'], // Light
  subsets: ['latin'],
  variable: '--font-cormorant'
});
 
export const metadata: Metadata = {
  title: "Pixels By Purva",
  description: "A Modern & Minimalist Website for Showcasing my Amateur Photography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
