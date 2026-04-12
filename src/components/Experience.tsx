"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";
import { experiences } from "@/data/experience";
import { useInView } from "@/hooks/useInView";

function ExpItem({ exp, index }: { exp: any; index: number }) {
  const { ref, inView } = useInView();
  const { lang } = useLanguage();
  const t = i18n.experience;

  return (
    <div
      ref={ref}
      className={`relative flex gap-8 md:gap-12 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: inView ? `${index * 100}ms` : "0ms" }}
    >
      {/* Timeline dot */}
      <div className="relative flex-shrink-0">
        <div
          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mt-1 ${
            exp.current ? "border-zinc-500 bg-zinc-800" : "border-zinc-800 bg-[#080808]"
          }`}
        >
          {exp.current && (
            <div className="w-2 h-2 rounded-full bg-zinc-300 animate-pulse-slow" />
          )}
        </div>
      </div>

      <div className="pb-2 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3
              className="text-xl text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {exp.role[lang]}
            </h3>
            <div className="text-zinc-500 text-sm font-mono mt-0.5">{exp.company}</div>
          </div>
          <div className="text-right">
            <div className="text-zinc-500 text-xs font-mono">{exp.period[lang]}</div>
            <div className="text-zinc-700 text-xs font-mono">{exp.location}</div>
          </div>
        </div>

        {exp.current && (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-800/60 border border-zinc-700 text-zinc-400 text-xs font-mono mb-3">
            <span className="w-1 h-1 rounded-full bg-zinc-400" />
            {t.current[lang]}
          </span>
        )}

        {exp.tags && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {exp.tags.map((tag: string) => (
              <span key={tag} className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-500 text-xs font-mono">
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-zinc-400 text-[15px] leading-relaxed mb-4">{exp.summary[lang]}</p>

        <ul className="space-y-2">
          {exp.highlights.map((h: any) => (
            <li key={h[lang]} className="flex gap-3 text-sm text-zinc-500">
              <span className="text-zinc-700 mt-1 flex-shrink-0">▸</span>
              {h[lang]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  const { lang } = useLanguage();
  const t = i18n.experience;
  const { ref: headerRef, inView: headerIn } = useInView();

  return (
    <section id="experience" className="py-28 border-t border-zinc-800/40">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out mb-16 ${
            headerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
            {t.label[lang]}
          </p>
          <h2
            className="text-3xl md:text-4xl text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.heading[lang]}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-[13px] top-0 bottom-0 w-px bg-zinc-800/50" />
          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <ExpItem key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
