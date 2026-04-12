"use client";

import { useEffect, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";

export function Hero() {
  const { lang } = useLanguage();
  const t = i18n.hero;

  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top, active: true });
      }}
      onMouseLeave={() => setMouse((p) => ({ ...p, active: false }))}
    >
      {/* Static atmospheric glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 25% 15%, rgba(59,130,246,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Cursor-following spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: mouse.active ? 1 : 0,
          background: `radial-gradient(750px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.022), transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
        {/* Badge */}
        <div
          className="animate-fade-up inline-flex items-center gap-2 mb-10 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-medium tracking-wide"
          style={{ animationDelay: "0ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
          {t.available[lang]}
        </div>

        {/* Name with parallax — wrapper fades in, inner translates with scroll */}
        <div
          className="animate-fade-up mb-8"
          style={{ animationDelay: "80ms" }}
        >
          <div
            style={{
              transform: `translateY(${scrollY * 0.18}px)`,
              willChange: "transform",
            }}
          >
            <h1
              className="text-[clamp(4rem,13vw,9rem)] leading-[0.9] tracking-tight text-white select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nicolas
            </h1>
            <h1
              className="text-[clamp(4rem,13vw,9rem)] leading-[0.9] tracking-tight text-zinc-500 italic select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Martins
            </h1>
          </div>
        </div>

        {/* Divider */}
        <div
          className="animate-fade-up w-10 h-px bg-zinc-700 mb-8"
          style={{ animationDelay: "220ms" }}
        />

        {/* Role */}
        <p
          className="animate-fade-up text-xl md:text-2xl text-zinc-300 font-light mb-3 max-w-2xl"
          style={{ animationDelay: "300ms" }}
        >
          {t.role[lang]}
        </p>

        {/* Description */}
        <p
          className="animate-fade-up text-base text-zinc-600 max-w-lg mb-12 leading-relaxed"
          style={{ animationDelay: "380ms" }}
        >
          {t.description[lang]}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up flex flex-wrap gap-3 mb-14"
          style={{ animationDelay: "460ms" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-900 hover:bg-zinc-100 rounded-lg font-medium text-sm transition-colors duration-200"
          >
            {t.cta_projects[lang]}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white rounded-lg font-medium text-sm transition-all duration-200"
          >
            {t.cta_contact[lang]}
          </a>
          <a
            href="https://github.com/nemcolas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-800/60 hover:border-zinc-700 text-zinc-600 hover:text-zinc-400 rounded-lg font-medium text-sm transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            {t.cta_github[lang]}
          </a>
        </div>

        {/* Location */}
        <div
          className="animate-fade-up flex items-center gap-2 text-zinc-700 text-sm font-mono"
          style={{ animationDelay: "540ms" }}
        >
          <MapPin className="w-3.5 h-3.5" />
          {t.location[lang]}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
        <div className="w-1 h-1 rounded-full bg-zinc-700" />
      </div>
    </section>
  );
}
