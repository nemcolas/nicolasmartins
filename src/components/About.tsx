"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";
import { useInView } from "@/hooks/useInView";

export function About() {
  const { lang } = useLanguage();
  const t = i18n.about;
  const { ref: leftRef, inView: leftIn } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();

  const STATS = [
    { value: t.stat1_val[lang], label: t.stat1_lbl[lang] },
    { value: t.stat2_val[lang], label: t.stat2_lbl[lang] },
    { value: t.stat3_val[lang], label: t.stat3_lbl[lang] },
    { value: t.stat4_val[lang], label: t.stat4_lbl[lang] },
  ];

  return (
    <section id="about" className="py-28 border-t border-zinc-800/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ease-out ${
              leftIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
              {t.label[lang]}
            </p>
            <h2
              className="text-3xl md:text-4xl text-white mb-8 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.heading[lang]}
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed text-[15px]">
              <p>{t.p1[lang]}</p>
              <p>{t.p2[lang]}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-400 font-mono">
                {t.lang_pt[lang]}
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-400 font-mono">
                {t.lang_en[lang]}
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 ease-out delay-150 ${
              rightIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="divide-y divide-zinc-800/60">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-baseline gap-5 py-5 transition-all duration-700 ease-out ${
                    rightIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: rightIn ? `${150 + i * 80}ms` : "0ms" }}
                >
                  <span
                    className="text-4xl text-white w-16 flex-shrink-0 leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm text-zinc-500 leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>

            <div
              className={`mt-8 flex items-start gap-4 pt-6 border-t border-zinc-800/60 transition-all duration-700 ease-out ${
                rightIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: rightIn ? "500ms" : "0ms" }}
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                <span className="text-zinc-400 text-sm font-bold font-mono">F</span>
              </div>
              <div>
                <div className="text-white text-sm font-medium mb-0.5">{t.edu_name[lang]}</div>
                <div className="text-zinc-500 text-sm">{t.edu_degree[lang]}</div>
                <div className="text-zinc-700 text-xs mt-1 font-mono">{t.edu_period[lang]}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
