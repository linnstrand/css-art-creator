import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Css Art",
  description: "Create cool stuff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          CSS Art Creator
          <nav>
            <Link href="/">ClipArt</Link>
            <Link href="shadows">Borders and Shadows</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
