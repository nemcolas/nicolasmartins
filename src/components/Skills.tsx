"use client";

import { Monitor, Server, Code2, BarChart2, Database, Cloud, Award, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";
import { certifications } from "@/data/skills";
import { useInView } from "@/hooks/useInView";

const CATEGORIES = [
  { key: "cat_frontend" as const, icon: <Monitor className="w-3.5 h-3.5" />, skills: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { key: "cat_backend" as const, icon: <Server className="w-3.5 h-3.5" />, skills: ["Node.js", "NestJS", "Spring Boot", "REST APIs", "Swagger"] },
  { key: "cat_ecommerce" as const, icon: <ShoppingBag className="w-3.5 h-3.5" />, skills: ["Magento 2", "Tiny ERP", "Eccosys", "PHP", "Python Scripts"] },
  { key: "cat_languages" as const, icon: <Code2 className="w-3.5 h-3.5" />, skills: ["TypeScript", "Python", "Java", "C#", "PHP"] },
  { key: "cat_data" as const, icon: <BarChart2 className="w-3.5 h-3.5" />, skills: ["Pandas", "Scikit-learn", "PyTorch", "Matplotlib", "Jupyter"] },
  { key: "cat_databases" as const, icon: <Database className="w-3.5 h-3.5" />, skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Prisma ORM"] },
  { key: "cat_devops" as const, icon: <Cloud className="w-3.5 h-3.5" />, skills: ["Docker", "AWS", "Azure", "Bash", "CI/CD"] },
];

export function Skills() {
  const { lang } = useLanguage();
  const t = i18n.skills;
  const { ref: headerRef, inView: headerIn } = useInView();
  const { ref: listRef, inView: listIn } = useInView(0.05);
  const { ref: certsRef, inView: certsIn } = useInView();

  return (
    <section id="skills" className="py-28 border-t border-zinc-800/40">
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
          >
            {t.heading[lang]}
          </h2>
        </div>

        <div ref={listRef} className="divide-y divide-zinc-800/40 mb-16">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.key}
              className={`grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-5 items-start transition-all duration-700 ease-out ${
                listIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: listIn ? `${i * 60}ms` : "0ms" }}
            >
              <div className="flex items-center gap-2 text-zinc-600">
                {cat.icon}
                <span className="text-xs font-mono uppercase tracking-wide">{t[cat.key][lang]}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 text-xs font-mono hover:border-zinc-600 hover:text-zinc-200 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          ref={certsRef}
          className={`transition-all duration-700 ease-out ${
            certsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Award className="w-3.5 h-3.5" />
            {t.certs_heading[lang]}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className={`p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-700 ease-out ${
                  certsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: certsIn ? `${i * 60}ms` : "0ms" }}
              >
                <div className="text-zinc-300 text-sm font-medium mb-1">{cert.name}</div>
                <div className="text-zinc-600 text-xs font-mono">{cert.issuer}</div>
                <div className="text-zinc-700 text-xs mt-1 font-mono">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
