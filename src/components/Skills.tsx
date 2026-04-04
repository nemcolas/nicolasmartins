"use client";

import { Monitor, Server, Code2, BarChart2, Database, Cloud, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";
import { certifications } from "@/data/skills";

const CATEGORIES = [
  {
    key: "cat_frontend" as const,
    icon: <Monitor className="w-4 h-4" />,
    skills: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    key: "cat_backend" as const,
    icon: <Server className="w-4 h-4" />,
    skills: ["Node.js", "NestJS", "Spring Boot", "Magento 2", "REST APIs", "Swagger"],
  },
  {
    key: "cat_languages" as const,
    icon: <Code2 className="w-4 h-4" />,
    skills: ["TypeScript", "Python", "Java", "C#", "PHP"],
  },
  {
    key: "cat_data" as const,
    icon: <BarChart2 className="w-4 h-4" />,
    skills: ["Pandas", "Scikit-learn", "PyTorch", "Matplotlib", "Jupyter"],
  },
  {
    key: "cat_databases" as const,
    icon: <Database className="w-4 h-4" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Prisma ORM"],
  },
  {
    key: "cat_devops" as const,
    icon: <Cloud className="w-4 h-4" />,
    skills: ["Docker", "AWS", "Azure", "Bash", "CI/CD"],
  },
];

export function Skills() {
  const { lang } = useLanguage();
  const t = i18n.skills;

  return (
    <section id="skills" className="py-28 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-4">
          {t.label[lang]}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          {t.heading[lang]}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.key}
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  {cat.icon}
                </div>
                <span className="font-medium text-white text-sm">{t[cat.key][lang]}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 text-xs font-mono hover:text-zinc-200 hover:bg-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-400" />
            {t.certs_heading[lang]}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="text-white text-sm font-medium mb-1">{cert.name}</div>
                <div className="text-zinc-500 text-xs">{cert.issuer}</div>
                <div className="text-zinc-700 text-xs mt-1">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
