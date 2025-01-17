import type { Metadata } from "next";
import localFont from "next/font/local";
import { Pacifico } from "next/font/google";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import "./globals.css";

const geistSans = localFont({
  src: "../public/assests/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/assests/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Xanotech API Integration Assessment",
  description: "Xanotech API Integration Assessment using Unsplash's API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} font-arial antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
