import "../styles/globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-100">
          <div className="container flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-bahama-gold text-bahama-black">T</span>
              Tingum
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/search">Browse</Link>
              <Link href="/add">Add Business</Link>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="border-t border-neutral-100 mt-12">
          <div className="container py-6 text-sm text-neutral-600">
            © {new Date().getFullYear()} Tingum · Made for The Bahamas
          </div>
        </footer>
      </body>
    </html>
  );
}
