import { GeistSans } from "geist/font/sans";
import { DM_Sans } from "next/font/google";
import { Prata } from "next/font/google";
import "./globals.css";
import * as React from "react";

const headerFont = Prata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--pf-font",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--body-font",
});

export const metadata = {
  title: "Powlan Systems",
  description:
    "A team of passionate IT specialists dedicated to empowering businesses with technology solutions that work",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${headerFont.variable} ${bodyFont.variable}`}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
