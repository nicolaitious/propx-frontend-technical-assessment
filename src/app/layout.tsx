import type { Metadata } from "next";
import { josefin_sans } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropX Technical Assessment",
  description: "Nicolas Muscio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin_sans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
