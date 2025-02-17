import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eastgate Storage Sevierville TN: Secure, Convenient Self Storage",
  description:
    "Eastgate Storage Sevierville. Offering clean, secure, brand new, affordable storage units. Online bookings, instant access gated facility camera surveillance 24/7 access",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
