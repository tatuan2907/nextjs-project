import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}
          </div>
          <footer className="bg-gray-200">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
              <a href="#" className="text-xl font-bold text-gray-500 hover:text-gray-400">Brand</a>
              <p className="py-2 text-gray-500 sm:py-0">All rights reserved</p>
            </div>
          </footer>
        </Providers>

      </body>
    </html>
  );
}
