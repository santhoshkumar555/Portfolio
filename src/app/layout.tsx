import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DotGrid from "@/components/DotGrid";
import ParticleBackground from "@/components/ParticleBackground";
import TargetCursor from "@/components/TargetCursor";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santhoshkumar G | Full Stack Developer",
  description: "Portfolio of Santhoshkumar G, a motivated MCA student and Full Stack Developer skilled in MERN stack, Next.js, and AI-driven applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ParticleBackground />
        <TargetCursor />
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <DotGrid
            dotSize={2}
            gap={10}
            baseColor="#222222"
            activeColor="#1d4ed8"
            baseOpacity={0}
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
