
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { ThemeProvider } from "./_components/ThemeProvider";
import siteMeta from "../metadata.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteMeta.name || "LORO - TOPIK Learning Solution",
  description:
    siteMeta.description ||
    "The official product release website for LORO, the all-in-one solution for TOPIK mock tests and AI speaking practice.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: siteMeta.name || "LORO - TOPIK Learning Solution",
    description:
      siteMeta.description ||
      "The official product release website for LORO, the all-in-one solution for TOPIK mock tests and AI speaking practice.",
    images: [{ url: "/images/topik-preview.svg" }],
    siteName: "LORO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.name || "LORO - TOPIK Learning Solution",
    description:
      siteMeta.description ||
      "The official product release website for LORO, the all-in-one solution for TOPIK mock tests and AI speaking practice.",
    images: ["/images/topik-preview.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-900`}>
        <ThemeProvider>
          <div className="antialiased">
            <Header />
            <main>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}