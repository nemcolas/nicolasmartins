"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";

export function Footer() {
  const { lang } = useLanguage();
  const t = i18n.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
        <span className="font-mono font-bold text-zinc-500">nm.</span>
        <span>© {year} {t.rights[lang]}</span>
        <span>
          {t.built[lang]}{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            Next.js
          </a>{" "}
          &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
