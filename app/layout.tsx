// NO "use client" here!

import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({ variable: "--font-inter", subsets: ['latin'] });
const exo2 = Exo_2({ variable: "--font-exo2", subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Luqman Salad - Software Engineer",
  description: "Software Engineer and Content Creator who writes articles on technology and artificial intelligence",
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${exo2.className} antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
