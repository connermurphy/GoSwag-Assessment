import StylesheetRegistry from "@/lib/StylesheetRegistry";
import "./style.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoSwag - Frontend Assessment",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <StylesheetRegistry>
          {children}
        </StylesheetRegistry>
      </body>
    </html>
  );
}
