import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Consolas", "Monaco", "Courier New", "monospace"],
});

export const metadata: Metadata = {
  title: "Cruise Lens Academy",
  description: "Dock here. Sail everywhere",
  openGraph: {
    images: [
      {
        url: "https://www.cruiselensacademy.com/images/snapshot.png",
        width: 1200,
        height: 630,
        alt: "Cruise Lens Academy - Dock here. Sail everywhere.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/_next/static/media/geist-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/geist-mono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} font-sans antialiased`}
      >
        <div className="min-h-screen relative bg-[#0c0a18] text-white">
          <Header />
          {children}
          <Footer />
          <FloatingCTA />
        </div>
      </body>
    </html>
  );
}
