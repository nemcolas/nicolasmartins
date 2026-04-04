"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";
import { experiences } from "@/data/experience";

export function Experience() {
  const { lang } = useLanguage();
  const t = i18n.experience;

  return (
    <section id="experience" className="py-28 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-4">
          {t.label[lang]}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          {t.heading[lang]}
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-[13px] top-0 bottom-0 w-px bg-zinc-800" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative flex gap-8 md:gap-12">
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mt-1 ${
                      exp.current
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-zinc-700 bg-zinc-900"
                    }`}
                  >
                    {exp.current && (
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-slow" />
                    )}
                  </div>
                </div>

                <div className="pb-2 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.role[lang]}
                      </h3>
                      <div className="text-blue-400 font-medium text-sm">
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zinc-400 text-sm">{exp.period[lang]}</div>
                      <div className="text-zinc-600 text-xs">{exp.location}</div>
                    </div>
                  </div>

                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-3">
                      <span className="w-1 h-1 rounded-full bg-blue-400" />
                      {t.current[lang]}
                    </span>
                  )}

                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-500 text-xs font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {exp.summary[lang]}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h[lang]} className="flex gap-3 text-sm text-zinc-500">
                        <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                        {h[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
