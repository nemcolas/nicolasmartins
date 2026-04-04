export type Lang = "pt" | "en";
export type BiStr = { pt: string; en: string };

export const i18n = {
  nav: {
    about:      { pt: "Sobre",       en: "About" },
    experience: { pt: "Experiência", en: "Experience" },
    skills:     { pt: "Habilidades", en: "Skills" },
    projects:   { pt: "Projetos",    en: "Projects" },
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
      pt: "Atualmente sou Desenvolvedor E-commerce na Prospirity, integrando ERPs (Tiny, Eccosys) ao Magento 2 — sincronizando produtos, estoque e pedidos para lojas de e-commerce. Antes disso, trabalhei por mais de um ano em uma software house desenvolvendo soluções Full-Stack e gerenciando requisitos técnicos de produtos digitais do zero ao deploy.",
      en: "I currently work as an E-commerce Developer at Prospirity, integrating ERPs (Tiny, Eccosys) with Magento 2 — syncing products, inventory, and order flows for e-commerce stores. Before that, I spent over a year at a software house building Full-Stack solutions and managing the full technical requirements lifecycle from zero to deployment.",
    },
    p2: {
      pt: "Sou formado em Análise e Desenvolvimento de Sistemas pela FIAP e tenho certificações em Machine Learning (Coursera, Andrew Ng), Scrum e C#. Escrevo Python, TypeScript, Java e C# — e penso em sistemas, não só em features.",
      en: "I hold a Systems Analysis & Development degree from FIAP and certifications in Machine Learning (Coursera, Andrew Ng), Scrum, and C#. I write Python, TypeScript, Java, and C# — and I think in systems, not just features.",
    },
    lang_pt:    { pt: "🇧🇷 Português — Nativo",   en: "🇧🇷 Portuguese — Native" },
    lang_en:    { pt: "🇺🇸 Inglês — Avançado",    en: "🇺🇸 English — Advanced" },
    stat1_val:  { pt: "2+",  en: "2+" },
    stat1_lbl:  { pt: "Anos na área de tech",   en: "Years in tech" },
    stat2_val:  { pt: "5+",  en: "5+" },
    stat2_lbl:  { pt: "Projetos entregues",      en: "Projects delivered" },
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
    subtitle:   {
      pt: "Cada projeto apresentado como estudo de caso: problema, solução, decisões e impacto.",
      en: "Each project presented as a case study: problem, solution, decisions, and impact.",
    },
    problem:    { pt: "Problema",  en: "Problem" },
    solution:   { pt: "Solução",   en: "Solution" },
    impact:     { pt: "Impacto",   en: "Impact" },
    view_code:  { pt: "Ver Código", en: "View Code" },
    live_demo:  { pt: "Ver Demo",  en: "Live Demo" },
    production: { pt: "Produção",  en: "Production" },
    prototype:  { pt: "Protótipo", en: "Prototype" },
    wip:        { pt: "Em Progresso", en: "In Progress" },
  },

  contact: {
    label:    { pt: "Contato",       en: "Contact" },
    heading1: { pt: "Vamos construir", en: "Let's build" },
    heading2: { pt: "algo juntos.",    en: "something." },
    desc: {
      pt: "Estou buscando oportunidades em desenvolvimento Full-Stack, E-commerce e ML — remoto ou São Paulo. Se você tem um problema interessante pra resolver, quero ouvir.",
      en: "I'm actively looking for Full-Stack, E-commerce, and ML engineering roles — remote or São Paulo-based. If you have an interesting problem to solve, I want to hear about it.",
    },
  },

  footer: {
    built: { pt: "Construído com", en: "Built with" },
    rights: { pt: "Nicolas Alexandre Martins", en: "Nicolas Alexandre Martins" },
  },

  egg: {
    title:    { pt: "Sei fazer coisas maneiras", en: "I can make cool stuff" },
    subtitle: { pt: "passe o mouse aqui ↑",      en: "hover here ↑" },
    active:   { pt: "🔥 olha que legal!",        en: "🔥 hey, it works!" },
    cursor_label:  { pt: "Escolha o comportamento do mouse:", en: "Pick a cursor style:" },
    keep_prompt:   { pt: "Manter o mouse assim?",             en: "Keep this cursor?" },
    keep_yes:      { pt: "Sim!",                              en: "Yes!" },
    keep_no:       { pt: "Não",                               en: "No" },
    locked:        { pt: "✓ Mantido!",                        en: "✓ Locked!" },
    reset:         { pt: "resetar",                           en: "reset" },
    cursor_normal:     { pt: "Normal",     en: "Normal" },
    cursor_crosshair:  { pt: "Mira",       en: "Crosshair" },
    cursor_zoom:       { pt: "Zoom",       en: "Zoom" },
    cursor_grab:       { pt: "Agarrar",    en: "Grab" },
    cursor_wait:       { pt: "Esperar",    en: "Wait" },
    cursor_help:       { pt: "Ajuda",      en: "Help" },
    cursor_text:       { pt: "Texto",      en: "Text" },
    cursor_cell:       { pt: "Célula",     en: "Cell" },
  },
} as const;

/** Helper: pull the right language string from a BiStr node */
export function tr<T extends BiStr>(node: T, lang: Lang): string {
  return node[lang];
}
