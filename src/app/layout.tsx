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
  icons: {
    apple: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/favicon/apple-touch-icon.png",
      },
    ],
    icon: [
      {
        rel: "image/png",
        sizes: "32x32",
        url: "favicon/favicon-32x32.png",
      },
      {
        rel: "image/png",
        sizes: "16x16",
        url: "favicon/favicon-16x16.png",
      },
    ],
  },
  title: "Home - Aiman Yusuf Wicaksono",
  description:
    "Hello, My name is Aiman Yusuf and i'am a software engineer from Indonesia",
  manifest: "/favicon/site.webmanifest",
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
