"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";
import { automations, type Automation } from "@/data/automations";
import { useInView } from "@/hooks/useInView";

function AutoItem({ auto, index }: { auto: Automation; index: number }) {
  const { ref, inView } = useInView();
  const { lang } = useLanguage();

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-[56px_1fr_auto] gap-4 md:gap-8 py-7 items-start transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
    >
      <span className="text-2xl text-zinc-800 font-mono leading-none pt-0.5 select-none">
        0{index + 1}
      </span>
      <div>
        <h3 className="text-white font-medium mb-2 text-[15px]">{auto.title[lang]}</h3>
        <p className="text-zinc-500 text-[15px] leading-relaxed">{auto.description[lang]}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 md:justify-end md:max-w-[180px]">
        {auto.stack.map((s) => (
          <span
            key={s}
            className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-600 text-xs font-mono whitespace-nowrap"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Automations() {
  const { lang } = useLanguage();
  const t = i18n.automations;
  const { ref: headerRef, inView: headerIn } = useInView();

  return (
    <section id="automations" className="py-28 border-t border-zinc-800/40">
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
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            {t.heading[lang]}
          </h2>
          <p className="text-zinc-500 text-[15px] max-w-xl leading-relaxed">
            {t.sub[lang]}
          </p>
        </div>

        <div className="divide-y divide-zinc-800/40 border-t border-zinc-800/40">
          {automations.map((auto, i) => (
            <AutoItem key={i} auto={auto} index={i} />
          ))}
        </div>

        <p className="mt-8 text-xs font-mono text-zinc-700">
          // {t.note[lang]}
        </p>

      </div>
    </section>
  );
}
