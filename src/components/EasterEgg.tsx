"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";

const PARTICLES = [
  { left: "8%",  w: 8,  h: 7,  delay: "0s",    dur: "1.6s" },
  { left: "22%", w: 6,  h: 9,  delay: "0.25s", dur: "1.9s" },
  { left: "40%", w: 10, h: 8,  delay: "0.1s",  dur: "1.5s" },
  { left: "58%", w: 7,  h: 10, delay: "0.4s",  dur: "1.8s" },
  { left: "75%", w: 9,  h: 7,  delay: "0.15s", dur: "1.7s" },
  { left: "90%", w: 6,  h: 9,  delay: "0.35s", dur: "2.0s" },
];

const CURSOR_OPTIONS = [
  { value: "crosshair", emoji: "🎯", labelKey: "cursor_crosshair" as const },
  { value: "zoom-in",   emoji: "🔍", labelKey: "cursor_zoom"      as const },
  { value: "grab",      emoji: "✊", labelKey: "cursor_grab"      as const },
  { value: "wait",      emoji: "⏳", labelKey: "cursor_wait"      as const },
  { value: "help",      emoji: "❓", labelKey: "cursor_help"      as const },
];

export function EasterEgg() {
  const { lang } = useLanguage();
  const t = i18n.egg;

  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected]   = useState<string | null>(null);
  const [kept, setKept]           = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    document.body.style.cursor = kept && selected ? selected : "";
    return () => { document.body.style.cursor = ""; };
  }, [kept, selected]);

  function handleSelect(value: string) {
    setSelected(value);
    setShowPrompt(true);
    setKept(false);
  }

  function handleKeep() { setKept(true); setShowPrompt(false); }

  function handleReset() {
    setKept(false);
    setSelected(null);
    setShowPrompt(false);
  }

  const glowing = isHovered || kept;

  return (
    <section className="py-16 flex justify-center" aria-label="Easter egg">
      {/*
        ONE wrapper covers both the card and the selector panel.
        Mouse moving from card → buttons stays inside → no unwanted leave event.
      */}
      <div
        className="flex flex-col items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { if (!kept) setIsHovered(false); }}
        style={{ cursor: selected && isHovered ? selected : "auto" }}
      >
        {/* ── Card ───────────────────────────────────────────── */}
        <div
          className="relative border-2 border-dashed rounded-2xl px-14 py-10 text-center overflow-hidden transition-all duration-500 select-none"
          style={
            glowing
              ? {
                  borderColor: "rgba(96,165,250,0.7)",
                  boxShadow:
                    "0 0 20px rgba(59,130,246,0.4), 0 0 55px rgba(59,130,246,0.15), inset 0 0 30px rgba(59,130,246,0.05)",
                }
              : { borderColor: "rgba(63,63,70,1)" }
          }
        >
          {/* Smoke */}
          {isHovered &&
            PARTICLES.map((p, i) => (
              <span
                key={i}
                className="smoke-particle"
                style={{ left: p.left, width: p.w, height: p.h, animationDuration: p.dur, animationDelay: p.delay }}
              />
            ))}

          <div className={`relative z-10 transition-transform duration-300 ${glowing ? "scale-105" : ""}`}>
            <div className="text-3xl mb-3">👾</div>
            <p className="text-white font-semibold text-lg mb-1">{t.title[lang]}</p>
            <p className={`text-sm transition-colors duration-300 ${isHovered ? "text-blue-400" : "text-zinc-500"}`}>
              {isHovered ? t.active[lang] : t.subtitle[lang]}
            </p>
          </div>
        </div>

        {/* ── Cursor selector panel ──────────────────────────── */}
        <div
          className={`mt-5 flex flex-col items-center gap-3 transition-all duration-300 ${
            glowing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <p className="text-zinc-500 text-xs">{t.cursor_label[lang]}</p>

          <div className="flex gap-2">
            {CURSOR_OPTIONS.map((opt) => {
              const node = i18n.egg[opt.labelKey];
              const label = typeof node === "object" && "pt" in node ? node[lang] : "";
              return (
                <button
                  key={opt.value}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    handleSelect(opt.value);
                  }}
                  style={{ cursor: opt.value }}
                  className={`px-3 py-2 rounded-lg text-xs border transition-all duration-150 ${
                    selected === opt.value
                      ? "border-blue-500 bg-blue-500/10 text-blue-400"
                      : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  <span className="block text-base leading-none mb-1">{opt.emoji}</span>
                  {label}
                </button>
              );
            })}
          </div>

          {/* Keep / reset */}
          {showPrompt && !kept && (
            <div className="flex items-center gap-3">
              <span className="text-zinc-500 text-xs">{t.keep_prompt[lang]}</span>
              <button
                onMouseDown={handleKeep}
                className="px-3 py-1 rounded-md text-xs bg-blue-600 text-white hover:bg-blue-500 transition-colors"
              >
                {t.keep_yes[lang]}
              </button>
              <button
                onMouseDown={handleReset}
                className="px-3 py-1 rounded-md text-xs border border-zinc-700 text-zinc-400 hover:border-zinc-500 transition-all"
              >
                {t.keep_no[lang]}
              </button>
            </div>
          )}

          {kept && (
            <div className="flex items-center gap-2">
              <span className="text-zinc-600 text-xs">{t.locked[lang]}</span>
              <button onMouseDown={handleReset} className="text-zinc-500 text-xs underline hover:text-zinc-300">
                {t.reset[lang]}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
