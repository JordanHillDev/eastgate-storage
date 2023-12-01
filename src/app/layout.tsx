import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eastgate Storage",
  description: "Your Trusted Self Storage Solution",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="
                  default-src 'self' https://www.google.com;
                  script-src 'self' www.google.com maps.googleapis.com 'unsafe-inline' 'unsafe-eval';
                  style-src 'self' 'unsafe-inline';
                  img-src 'self' data: maps.gstatic.com www.google-analytics.com;
                  font-src 'self';
                  connect-src 'self' www.google-analytics.com;
              "
        />
      </head>

      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
