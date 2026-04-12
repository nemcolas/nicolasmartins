"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";
import { useInView } from "@/hooks/useInView";

export function AIUsage() {
  const { lang } = useLanguage();
  const t = i18n.ai;
  const { ref: headerRef, inView: headerIn } = useInView();
  const { ref: listRef, inView: listIn } = useInView(0.05);

  const PRINCIPLES = [t.p1, t.p2, t.p3];

  return (
    <section id="ai" className="py-28 border-t border-zinc-800/40">
      <div className="max-w-6xl mx-auto px-6">

        {/* Split header */}
        <div
          ref={headerRef}
          className={`grid md:grid-cols-[2fr_3fr] gap-12 md:gap-20 mb-16 items-start transition-all duration-700 ease-out ${
            headerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
              {t.label[lang]}
            </p>
            <h2
              className="text-4xl md:text-5xl text-white leading-[1.05]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.heading[lang]}
            </h2>
          </div>
          <div className="md:pt-14">
            <p className="text-zinc-400 text-lg leading-relaxed">{t.body[lang]}</p>
          </div>
        </div>

        {/* Principles */}
        <div ref={listRef} className="divide-y divide-zinc-800/40 border-t border-zinc-800/40">
          {PRINCIPLES.map((p, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-[60px_1fr] gap-4 md:gap-8 py-7 items-start transition-all duration-700 ease-out ${
                listIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: listIn ? `${i * 100}ms` : "0ms" }}
            >
              <span
                className="text-2xl text-zinc-800 leading-none italic pt-0.5 select-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                0{i + 1}
              </span>
              <p className="text-zinc-500 leading-relaxed text-[15px]">{p[lang]}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
