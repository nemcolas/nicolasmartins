"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";

export function About() {
  const { lang } = useLanguage();
  const t = i18n.about;

  const STATS = [
    { value: t.stat1_val[lang], label: t.stat1_lbl[lang] },
    { value: t.stat2_val[lang], label: t.stat2_lbl[lang] },
    { value: t.stat3_val[lang], label: t.stat3_lbl[lang] },
    { value: t.stat4_val[lang], label: t.stat4_lbl[lang] },
  ];

  return (
    <section id="about" className="py-28 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-4">
              {t.label[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              {t.heading[lang]}
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>{t.p1[lang]}</p>
              <p>{t.p2[lang]}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-300">
                {t.lang_pt[lang]}
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-300">
                {t.lang_en[lang]}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}

            <div className="col-span-2 p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 text-sm font-bold">F</span>
                </div>
                <div>
                  <div className="text-white font-medium mb-0.5">{t.edu_name[lang]}</div>
                  <div className="text-zinc-500 text-sm">{t.edu_degree[lang]}</div>
                  <div className="text-zinc-600 text-xs mt-1">{t.edu_period[lang]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
