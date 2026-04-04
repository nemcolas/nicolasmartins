"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";

export function Hero() {
  const { lang } = useLanguage();
  const t = i18n.hero;

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-medium tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
          {t.available[lang]}
        </div>

        <h1 className="text-[clamp(3.5rem,12vw,8rem)] font-bold tracking-tight leading-none mb-2 text-white">
          Nicolas
        </h1>
        <h1 className="text-[clamp(3.5rem,12vw,8rem)] font-bold tracking-tight leading-none mb-8 text-zinc-700">
          Martins
        </h1>

        <p className="text-xl md:text-2xl text-zinc-300 font-light mb-4 max-w-2xl">
          {t.role[lang]}
        </p>
        <p className="text-base md:text-lg text-zinc-500 max-w-xl mb-12 leading-relaxed">
          {t.description[lang]}
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium text-sm transition-colors duration-200"
          >
            {t.cta_projects[lang]}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-lg font-medium text-sm transition-all duration-200"
          >
            {t.cta_contact[lang]}
          </a>
          <a
            href="https://github.com/nemcolas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-zinc-300 rounded-lg font-medium text-sm transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            {t.cta_github[lang]}
          </a>
        </div>

        <div className="flex items-center gap-2 text-zinc-600 text-sm">
          <MapPin className="w-3.5 h-3.5" />
          {t.location[lang]}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-700 text-xs">
        <span className="tracking-widest uppercase text-[10px]">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-700 to-transparent" />
      </div>
    </section>
  );
}
