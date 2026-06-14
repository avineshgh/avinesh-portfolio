import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avinesh Harikrishnan — AI Engineer",
  description:
    "Building digital products, brands, and experiences. AI engineer specializing in Generative AI, Agentic AI, Voice AI and Intelligent Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-[#111111] text-white antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
