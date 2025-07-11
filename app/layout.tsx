// Import custom fonts for the whole app

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
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body
        className={`${cormorant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
