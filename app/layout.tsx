import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaushtubham Shukla | SDE & Backend Engineer",
  description: "Portfolio of Kaushtubham Shukla — Backend-focused Software Engineer specializing in Java, Spring Boot, distributed job scheduling, and AI-integrated systems.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#07070b] text-slate-100 selection:bg-pink-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
