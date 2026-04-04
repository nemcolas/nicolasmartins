"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";

export function Navbar() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = i18n.nav;

  const NAV_LINKS = [
    { label: t.about[lang],      href: "#about" },
    { label: t.experience[lang], href: "#experience" },
    { label: t.skills[lang],     href: "#skills" },
    { label: t.projects[lang],   href: "#projects" },
    { label: t.contact[lang],    href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05050a]/90 backdrop-blur-md border-b border-zinc-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-lg font-bold text-white tracking-tight hover:text-blue-400 transition-colors"
        >
          nm.
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <div className="flex items-center gap-1 border border-zinc-700 rounded-lg p-0.5">
            <button
              onClick={() => setLang("pt")}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                lang === "pt"
                  ? "bg-blue-600 text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                lang === "en"
                  ? "bg-blue-600 text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="mailto:nimartins.na1@gmail.com"
            className="text-sm px-4 py-2 rounded-lg border border-zinc-700 text-zinc-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-200"
          >
            {t.hire[lang]}
          </a>
        </nav>

        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a12] border-b border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-zinc-300 hover:text-white text-sm py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
            <button
              onClick={() => { setLang("pt"); close(); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${lang === "pt" ? "bg-blue-600 text-white" : "text-zinc-500 border border-zinc-700"}`}
            >
              🇧🇷 PT
            </button>
            <button
              onClick={() => { setLang("en"); close(); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${lang === "en" ? "bg-blue-600 text-white" : "text-zinc-500 border border-zinc-700"}`}
            >
              🇺🇸 EN
            </button>
          </div>
          <a
            href="mailto:nimartins.na1@gmail.com"
            onClick={close}
            className="text-sm text-blue-400 font-medium py-1"
          >
            {t.hire[lang]} →
          </a>
        </div>
      )}
    </header>
  );
}
