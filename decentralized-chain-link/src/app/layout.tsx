import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decentralized Chain Link",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}>
        <Navbar></Navbar>
        <br /><br /><br />
        {children}
        <br /><br /><br />
        <Footer/>
      </body>
    </html>
  );
}