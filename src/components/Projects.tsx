"use client";

import { ExternalLink, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";
import { projects } from "@/data/projects";
import { MagicCard } from "@/components/MagicCard";
import { useInView } from "@/hooks/useInView";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const STATUS_STYLES: Record<string, string> = {
  production: "border-zinc-700 text-zinc-400",
  prototype:  "border-zinc-700 text-zinc-500",
  wip:        "border-zinc-800 text-zinc-600",
};

export function Projects() {
  const { lang } = useLanguage();
  const t = i18n.projects;
  const { ref: headerRef, inView: headerInView } = useInView();

  const statusLabel = (s: string) =>
    ({ production: t.production[lang], prototype: t.prototype[lang], wip: t.wip[lang] })[s] ?? s;

  const featured = projects.filter((p) => p.featured);
  const others   = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 border-t border-zinc-800/40">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out mb-16 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

        {/* Featured projects */}
        <div className="space-y-4 mb-10">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} lang={lang} t={t} statusLabel={statusLabel} />
          ))}
        </div>

        {/* Small cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {others.map((project, i) => (
            <SmallCard key={project.id} project={project} index={i} lang={lang} t={t} statusLabel={statusLabel} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FeaturedCard({ project, index, lang, t, statusLabel }: any) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: inView ? `${index * 120}ms` : "0ms" }}
    >
      <MagicCard
        tilt
        className="rounded-2xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/50"
      >
        <div className="p-6 md:p-8 border-b border-zinc-800/50 relative z-[3]">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div className="flex items-center gap-4">
              <span
                className="text-5xl text-zinc-800/70 leading-none select-none italic"
                style={{ fontFamily: "var(--font-display)" }}
              >
                0{index + 1}
              </span>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-mono ${STATUS_STYLES[project.status]}`}>
                {statusLabel(project.status)}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-zinc-300 text-xs font-mono transition-all"
              >
                <GitHubIcon />
                {t.view_code[lang]}
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-zinc-100 text-zinc-900 text-xs font-mono transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t.live_demo[lang]}
                </a>
              )}
            </div>
          </div>

          <h3
            className="text-2xl md:text-3xl text-white mb-2 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed">{project.tagline[lang]}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800/60 text-zinc-500 text-xs font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-800/40 relative z-[3]">
          <div className="p-6 md:p-8">
            <p className="text-xs font-mono text-zinc-700 uppercase tracking-widest mb-4">{t.problem[lang]}</p>
            <p className="text-zinc-500 text-sm leading-relaxed">{project.problem[lang]}</p>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-xs font-mono text-zinc-700 uppercase tracking-widest mb-4">{t.solution[lang]}</p>
            <p className="text-zinc-500 text-sm leading-relaxed mb-4">{project.solution[lang]}</p>
            <ul className="space-y-2">
              {project.decisions.map((d: any) => (
                <li key={d[lang]} className="flex gap-2 text-xs text-zinc-600">
                  <span className="text-zinc-700 mt-0.5 flex-shrink-0">▸</span>
                  {d[lang]}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-xs font-mono text-zinc-700 uppercase tracking-widest mb-4">{t.impact[lang]}</p>
            <ul className="space-y-3">
              {project.impact.map((item: any) => (
                <li key={item[lang]} className="flex gap-2 text-sm text-zinc-500">
                  <Check className="w-3.5 h-3.5 text-zinc-600 mt-0.5 flex-shrink-0" />
                  {item[lang]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MagicCard>
    </div>
  );
}

function SmallCard({ project, index, lang, t, statusLabel }: any) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
    >
      <MagicCard className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/50 hover:border-zinc-700/60 h-full">
        <div className="flex items-center justify-between mb-4 relative z-[3]">
          <span className={`inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-mono ${STATUS_STYLES[project.status]}`}>
            {statusLabel(project.status)}
          </span>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-700 hover:text-zinc-400 transition-colors" aria-label="GitHub">
            <GitHubIcon />
          </a>
        </div>
        <h3
          className="text-white text-lg mb-1 leading-tight relative z-[3]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h3>
        <p className="text-zinc-600 text-sm leading-relaxed mb-4 relative z-[3]">{project.tagline[lang]}</p>
        <div className="flex flex-wrap gap-1.5 relative z-[3]">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800/60 text-zinc-600 text-xs font-mono">{tag}</span>
          ))}
        </div>
      </MagicCard>
    </div>
  );
}
