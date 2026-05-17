export type Lang = "pt" | "en";
export type BiStr = { pt: string; en: string };

export const i18n = {
  nav: {
    about:        { pt: "Sobre",        en: "About" },
    experience:   { pt: "Experiência",  en: "Experience" },
    skills:       { pt: "Habilidades",  en: "Skills" },
    projects:     { pt: "Projetos",     en: "Projects" },
    automations:  { pt: "Automações",   en: "Automations" },
    ai:           { pt: "IA",           en: "AI" },
    contact:      { pt: "Contato",      en: "Contact" },
    hire:         { pt: "Me Contrate",  en: "Hire Me" },
  },

  hero: {
    available:    { pt: "Disponível para oportunidades",    en: "Available for opportunities" },
    role:         { pt: "Desenvolvedor Fullstack",          en: "Fullstack Developer" },
    description:  {
      pt: "Construo produtos completos — do front ao banco de dados. Tenho experiência com SaaS, mobile e e-commerce. Atualmente trabalho com Magento 2, integrações com ERP e automações que resolvem problemas reais de operação.",
      en: "I build complete products — from frontend to database. I have experience with SaaS, mobile, and e-commerce. Currently working with Magento 2, ERP integrations, and automations that solve real operational problems.",
    },
    cta_projects: { pt: "Ver Projetos",       en: "View Projects" },
    cta_contact:  { pt: "Entrar em Contato",  en: "Get in Touch" },
    cta_github:   { pt: "GitHub",             en: "GitHub" },
    cta_cv:       { pt: "Baixar CV",          en: "Download CV" },
    location:     { pt: "São Paulo, SP · Brasil → Remoto", en: "São Paulo, SP · Brazil → Remote" },
  },

  about: {
    label:   { pt: "Sobre",   en: "About" },
    heading: {
      pt: "Desenvolvedor que entende o negócio, não só o código.",
      en: "Developer who understands the business, not just the code.",
    },
    p1: {
      pt: "Trabalho como Desenvolvedor Fullstack na Prospirity — construo ferramentas internas com Next.js, React e TypeScript, faço integrações entre e-commerce e ERPs, e crio automações que resolvem problemas reais de operação: controle de estoque, curva ABC, reposicionamento de grade de produtos.",
      en: "I work as a Fullstack Developer at Prospirity — building internal tools with Next.js, React, and TypeScript, integrating e-commerce platforms with ERPs, and creating automations that solve real operational problems: inventory control, ABC curve analysis, product grid repositioning.",
    },
    p2: {
      pt: "Antes disso, passei um ano numa software house onde fui além do código: participei de reuniões com stakeholders, escrevi documentação de produto, defini escopo e coordenei squads. Formado em Análise e Desenvolvimento de Sistemas pela FIAP, com certificação em Machine Learning pelo Coursera (Andrew Ng).",
      en: "Before that, I spent a year at a software house where I went beyond code: stakeholder meetings, product documentation, scope definition, squad coordination. Systems Analysis degree from FIAP, Machine Learning certification from Coursera (Andrew Ng).",
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
    label:          { pt: "Habilidades",              en: "Skills" },
    heading:        { pt: "Com o que trabalho",       en: "What I work with" },
    certs_heading:  { pt: "Certificações",             en: "Certifications" },
    cat_frontend:   { pt: "Front-end",                en: "Frontend" },
    cat_backend:    { pt: "Back-end",                 en: "Backend" },
    cat_ecommerce:  { pt: "E-commerce & Integrações", en: "E-commerce & Integrations" },
    cat_languages:  { pt: "Linguagens",               en: "Languages" },
    cat_data:       { pt: "Dados & ML",               en: "Data & ML" },
    cat_databases:  { pt: "Bancos de Dados",          en: "Databases" },
    cat_devops:     { pt: "DevOps & Cloud",           en: "DevOps & Cloud" },
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

  automations: {
    label:   { pt: "Automações",                      en: "Automations" },
    heading: { pt: "Scripts que estão em produção",   en: "Scripts running in production" },
    sub: {
      pt: "Automações criadas no trabalho atual — não estão no GitHub, mas resolvem problemas reais de operação de e-commerce todo dia.",
      en: "Automations built at my current job — not on GitHub, but solving real e-commerce operational problems every day.",
    },
    note: { pt: "detalhes disponíveis em entrevista", en: "details available in interview" },
  },

  ai: {
    label:   { pt: "IA no dia a dia", en: "AI in practice" },
    heading: { pt: "Como uso IA",     en: "How I use AI" },
    body: {
      pt: "Uso IA no dia a dia — pro código, pra pensar soluções, pra automatizar o repetitivo. O que aprendi é que o modelo amplifica o que você já tem: sem clareza sobre o problema, ele só produz confusão mais rápido.",
      en: "I use AI daily — for code, for thinking through solutions, for automating repetitive work. What I've learned: the model amplifies what you already have. Without clarity on the problem, it just produces confusion faster.",
    },
    p1: {
      pt: "Contexto bem escrito vale mais que prompt engenharia mirabolante. Uma história de usuário clara produz código melhor que uma instrução genérica.",
      en: "Well-written context beats elaborate prompt engineering. A clear user story produces better code than a vague instruction.",
    },
    p2: {
      pt: "Boas práticas de engenharia continuam valendo. O modelo não raciocina sobre arquitetura por você — ele executa melhor quando você já sabe o que está pedindo.",
      en: "Good engineering practices still apply. The model doesn't think about architecture for you — it executes better when you already know what you're asking.",
    },
    p3: {
      pt: "Supervisão é obrigatória. Reviso tudo que gera, porque o modelo não conhece o contexto do projeto, as restrições de negócio nem o que não pode ser tocado.",
      en: "Supervision is mandatory. I review everything it generates, because the model doesn't know the project context, business constraints, or what shouldn't be touched.",
    },
  },

  contact: {
    label:    { pt: "Contato",       en: "Contact" },
    heading1: { pt: "Vamos construir", en: "Let's build" },
    heading2: { pt: "algo juntos.",    en: "something." },
    desc: {
      pt: "Aberto a oportunidades em desenvolvimento fullstack — startups, empresas de produto ou consultoria. Estou em São Paulo, mas trabalho remoto. Se tiver um problema interessante pra resolver, manda mensagem.",
      en: "Open to fullstack development opportunities — startups, product companies, or consulting. Based in São Paulo, but work remote. If you have an interesting problem to solve, reach out.",
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
