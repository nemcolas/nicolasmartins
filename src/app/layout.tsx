import type { Metadata } from "next";
import { Space_Grotesk, Silkscreen, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/contexts/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const silkscreen = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicolas Martins | Desenvolvedor Fullstack",
  description:
    "Desenvolvedor Fullstack com experiência em e-commerce headless: layouts em React, Next.js e Hydrogen consumindo GraphQL do Magento 2 e da Shopify. Também trabalha com TypeScript, Python, automações operacionais e integrações com ERPs como Tiny e Eccosys.",
  keywords: [
    "Fullstack Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Python Developer",
    "TypeScript",
    "Magento 2",
    "Shopify",
    "Shopify Developer",
    "Shopify Hydrogen",
    "Magento Developer",
    "Headless Commerce",
    "GraphQL",
    "E-commerce Developer",
    "Desenvolvedor E-commerce",
    "Front-end E-commerce",
    "Agência Digital",
    "Landing Page",
    "ERP Integration",
    "Tiny ERP",
    "Automação",
    "Machine Learning",
    "São Paulo",
    "Remote Developer",
    "Software Engineer Brazil",
    "Nicolas Martins",
  ],
  authors: [{ name: "Nicolas Martins", url: "https://github.com/nemcolas" }],
  creator: "Nicolas Martins",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nicolas Martins | Desenvolvedor Fullstack",
    description:
      "Desenvolvedor Fullstack especializado em e-commerce headless (React, Next.js, Hydrogen, GraphQL), automações operacionais e integrações com ERP.",
    siteName: "Nicolas Martins Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Martins | Desenvolvedor Fullstack",
    description:
      "Desenvolvedor Fullstack especializado em e-commerce headless (React, Next.js, Hydrogen, GraphQL), automações operacionais e integrações com ERP.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${spaceGrotesk.variable} ${silkscreen.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#080808] text-zinc-100 antialiased">
        {/* Film grain overlay */}
        <div
          aria-hidden
          className="fixed inset-0 pointer-events-none z-[9990]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
            opacity: 0.032,
            mixBlendMode: "overlay",
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
