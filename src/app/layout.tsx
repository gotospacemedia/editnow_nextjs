import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import localFont from "next/font/local";

const visby = localFont({
  src: [
    {
      path: "../Fonts/VisbyThin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../Fonts/VisbyLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../Fonts/VisbyRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../Fonts/VisbyMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../Fonts/VisbySemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../Fonts/VisbyBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../Fonts/VisbyExtrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../Fonts/VisbyHeavy.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-visby",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EditNow",
  description:
    "We are EditNow, a video editing service provider dedicated to transforming your creative visions into stunning reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${visby.variable} antialiased`}
      >
        <GoogleTagManager gtmId={String(process.env.NEXT_PUBLIC_GTM_ID)} />

        {children}
      </body>
    </html>
  );
}
