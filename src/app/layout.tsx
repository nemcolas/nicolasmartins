import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#05050a] text-zinc-100 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
