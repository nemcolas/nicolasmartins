export type Lang = "pt" | "en";
export type BiStr = { pt: string; en: string };

export const i18n = {
  nav: {
    about:      { pt: "Sobre",       en: "About" },
    experience: { pt: "Experiência", en: "Experience" },
    skills:     { pt: "Habilidades", en: "Skills" },
    projects:   { pt: "Projetos",    en: "Projects" },
    ai:         { pt: "IA",          en: "AI" },
    contact:    { pt: "Contato",     en: "Contact" },
    hire:       { pt: "Me Contrate", en: "Hire Me" },
  },

  hero: {
    available:    { pt: "Disponível para oportunidades",                   en: "Available for opportunities" },
    role:         { pt: "Desenvolvedor Full-Stack & E-commerce",            en: "Full-Stack & E-commerce Developer" },
    description:  {
      pt: "Construo integrações de sistemas, desenvolvo produtos digitais e entrego código que vai pra produção. Aberto a oportunidades em Full-Stack, E-commerce e ML.",
      en: "I build system integrations, develop digital products, and write code that ships to production. Open to Full-Stack, E-commerce, and ML opportunities.",
    },
    cta_projects: { pt: "Ver Projetos",        en: "View Projects" },
    cta_contact:  { pt: "Entrar em Contato",   en: "Get in Touch" },
    cta_github:   { pt: "GitHub",              en: "GitHub" },
    location:     { pt: "São Paulo, SP · Brasil → Remoto", en: "São Paulo, SP · Brazil → Remote" },
  },

  about: {
    label:   { pt: "Sobre",   en: "About" },
    heading: {
      pt: "Desenvolvedor Full-Stack com visão de produto.",
      en: "Full-Stack Developer with product thinking.",
    },
    p1: {
      pt: "Trabalho como Desenvolvedor E-commerce na Prospirity, desenvolvendo ferramentas internas com Next.js, React e TypeScript e tambem mantendo integracoes de lojas com ERPs. Antes disso, passei cerca de um ano em uma software house onde, alem de desenvolver, participava de reunioes com stakeholders, elaborava documentacao de produto e ajudava a definir o escopo dos projetos.",
      en: "I work as an E-commerce Developer at Prospirity — building internal tools with Next.js, React, and TypeScript alongside storefront maintenance and ERP integrations. Before that, I spent about a year at a software house where besides coding I joined stakeholder meetings, wrote product documentation, and helped define scope — something close to a technical PM role.",
    },
    p2: {
      pt: "Formado em Analise e Desenvolvimento de Sistemas pela FIAP, com certificacoes em Machine Learning (Coursera, Andrew Ng), Scrum e C#. Trabalho principalmente com Python, TypeScript, Java e C#.",
      en: "I hold a Systems Analysis & Development degree from FIAP and certifications in Machine Learning (Coursera, Andrew Ng), Scrum, and C#. I write Python, TypeScript, Java, and C# — and I think in systems, not just features.",
    },
    lang_pt:    { pt: "🇧🇷 Português — Nativo",   en: "🇧🇷 Portuguese — Native" },
    lang_en:    { pt: "🇺🇸 Inglês — Avançado",    en: "🇺🇸 English — Advanced" },
    stat1_val:  { pt: "2+",  en: "2+" },
    stat1_lbl:  { pt: "Anos na área de tech",   en: "Years in tech" },
    stat2_val:  { pt: "10+", en: "10+" },
    stat2_lbl:  { pt: "Projetos entregues, de landing pages a apps mobile", en: "Projects delivered — from landing pages to mobile apps" },
    stat3_val:  { pt: "15+", en: "15+" },
    stat3_lbl:  { pt: "Tecnologias",             en: "Technologies" },
    stat4_val:  { pt: "ML",  en: "ML" },
    stat4_lbl:  { pt: "Certificado (Andrew Ng)", en: "Certified (Andrew Ng)" },
    edu_name:   { pt: "FIAP — Faculdade de Informática e Administração Paulista", en: "FIAP — Faculdade de Informática e Administração Paulista" },
    edu_degree: { pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas", en: "Systems Analysis & Development" },
    edu_period: { pt: "Ago 2023 — Ago 2025", en: "Aug 2023 — Aug 2025" },
  },

  experience: {
    label:   { pt: "Experiência", en: "Experience" },
    heading: { pt: "Onde trabalhei", en: "Where I've worked" },
    current: { pt: "Atual",        en: "Current" },
    scroll:  { pt: "Role para ver mais", en: "Scroll to see more" },
  },

  skills: {
    label:          { pt: "Habilidades",        en: "Skills" },
    heading:        { pt: "Com o que trabalho", en: "What I work with" },
    certs_heading:  { pt: "Certificações",       en: "Certifications" },
    cat_frontend:   { pt: "Front-end",           en: "Frontend" },
    cat_backend:    { pt: "Back-end",            en: "Backend" },
    cat_languages:  { pt: "Linguagens",          en: "Languages" },
    cat_data:       { pt: "Dados & ML",          en: "Data & ML" },
    cat_databases:  { pt: "Bancos de Dados",     en: "Databases" },
    cat_devops:     { pt: "DevOps & Cloud",      en: "DevOps & Cloud" },
  },

  projects: {
    label:      { pt: "Projetos",       en: "Projects" },
    heading:    { pt: "O que construí", en: "What I've built" },
    problem:    { pt: "Problema",  en: "Problem" },
    solution:   { pt: "Solução",   en: "Solution" },
    impact:     { pt: "Impacto",   en: "Impact" },
    view_code:  { pt: "Ver Código", en: "View Code" },
    live_demo:  { pt: "Ver Demo",  en: "Live Demo" },
    production: { pt: "Produção",  en: "Production" },
    prototype:  { pt: "Protótipo", en: "Prototype" },
    wip:        { pt: "Em Progresso", en: "In Progress" },
  },

  ai: {
    label:   { pt: "IA no dia a dia", en: "AI in practice" },
    heading: { pt: "Como uso IA",     en: "How I use AI" },
    body: {
      pt: "Uso LLMs, crio agentes e automato partes do fluxo de trabalho. O que aprendi: o modelo amplifica o que voce ja tem. Requisito ruim produz codigo ruim mais rapido.",
      en: "I use LLMs, build custom agents, and automate parts of my workflow. What I've learned: the model amplifies what you already have. Weak requirements just produce wrong code faster.",
    },
    p1: {
      pt: "Antes de qualquer prompt, escrever historias de usuario e casos de uso claros. Quanto mais contexto estruturado, mais certeiro o modelo fica.",
      en: "Before any prompt, write clear user stories and use cases. The more structured the context, the more precise the output.",
    },
    p2: {
      pt: "Design patterns e principios de arquitetura continuam valendo. O modelo nao raciocina por voce, so executa melhor quando voce sabe o que esta pedindo.",
      en: "Design patterns and architecture principles still apply. The model doesn't think for you, it just executes better when you know what you're asking.",
    },
    p3: {
      pt: "Supervisao constante. Reviso tudo, porque o modelo nao conhece o contexto do projeto nem sabe o que nao pode mudar.",
      en: "Constant supervision. I review everything, because the model doesn't know your project context or what it shouldn't touch.",
    },
  },

  contact: {
    label:    { pt: "Contato",       en: "Contact" },
    heading1: { pt: "Vamos construir", en: "Let's build" },
    heading2: { pt: "algo juntos.",    en: "something." },
    desc: {
      pt: "Estou buscando oportunidades em Full-Stack, E-commerce e ML, remoto ou em Sao Paulo. Se voce tem um problema interessante pra resolver, me fala.",
      en: "I'm actively looking for Full-Stack, E-commerce, and ML engineering roles — remote or São Paulo-based. If you have an interesting problem to solve, I want to hear about it.",
    },
  },

  footer: {
    built: { pt: "Construído com", en: "Built with" },
    rights: { pt: "Nicolas Alexandre Martins", en: "Nicolas Alexandre Martins" },
  },

  egg: {
    title:    { pt: "Sei fazer coisas maneiras", en: "I can make cool stuff" },
    subtitle: { pt: "clique ou arraste aqui ↑",  en: "click or drag here ↑" },
    active:   { pt: "⚡ ta vendo?",              en: "⚡ see what I mean?" },
  },
} as const;

/** Helper: pull the right language string from a BiStr node */
export function tr<T extends BiStr>(node: T, lang: Lang): string {
  return node[lang];
}
