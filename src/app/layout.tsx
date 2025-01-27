import type { Metadata } from "next";
import { Fira_Code, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Aiman Yusuf Wicaksono",
  description:
    "Hello, My name is Aiman Yusuf and i'am a software engineer from Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.style} ${firaCode.style} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
