import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouCourse Platform",
  description: "This is a study project using Next.js 14 and TailwindCSS.",
};

interface RootLayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
