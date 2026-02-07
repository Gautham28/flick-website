import type { Metadata } from "next";
import localFont from "next/font/local";
import { Martian_Mono } from "next/font/google";
import "./globals.css";

const chopsticks = localFont({
  src: "./fonts/Chopsticks.ttf", 
  variable: "--font-chopsticks",
  display: "swap",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flick",
  description: "Stop scrolling, start cleaning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chopsticks.variable} ${martianMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}