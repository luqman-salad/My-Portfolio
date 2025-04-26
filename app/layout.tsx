import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Luqman Salad - Software Engineer",
  description: "Software Engineer and Content Creator who writes articles on technology and artificial intelligence",
  icons: {
    icon: '/favicon.png' //website icon
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className={`${exo2.className} antialiased mx-3 fixed top-0 left-0 w-full z-50`}><Head /></header>
        <main className={`${exo2.className} antialiased max-w-3xl m-auto`}>
          {children}
          <Footer/>
        </main>
        
      </body>
    </html>
  );
}
