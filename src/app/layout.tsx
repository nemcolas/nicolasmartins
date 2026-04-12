import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nicolas Martins — Full-Stack Engineer",
  description:
    "Full-Stack Engineer and Requirements Analyst based in São Paulo. Experienced with React, Next.js, Node.js, Spring Boot, Python, and Machine Learning. Open to remote opportunities.",
  keywords: [
    "Full-Stack Developer",
    "Full-Stack Engineer",
    "Junior Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Python Developer",
    "Java Developer",
    "Spring Boot",
    "TypeScript",
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
    title: "Nicolas Martins — Full-Stack Engineer",
    description:
      "Full-Stack Engineer who ships scalable software and bridges business requirements to production code.",
    siteName: "Nicolas Martins Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Martins — Full-Stack Engineer",
    description:
      "Full-Stack Engineer who ships scalable software and bridges business requirements to production code.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
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
      </body>
    </html>
  );
}
