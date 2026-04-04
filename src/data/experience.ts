import type { BiStr } from "./translations";

export type Experience = {
  company: string;
  role: BiStr;
  period: BiStr;
  current: boolean;
  location: string;
  summary: BiStr;
  highlights: BiStr[];
  tags?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Prospirity",
    role: {
      pt: "Desenvolvedor E-commerce",
      en: "E-commerce Developer",
    },
    period: { pt: "Jan 2026 — Presente", en: "Jan 2026 — Present" },
    current: true,
    location: "São Paulo, SP",
    summary: {
      pt: "Desenvolvimento e manutenção de aplicacoes de e-commerce — integrações com ERPs, desenvolvimento interno com Next.js/React/TypeScript e suporte a plataformas de loja.",
      en: "Building and maintaining e-commerce applications — ERP integrations, internal tooling with Next.js/React/TypeScript, and storefront platform support.",
    },
    highlights: [
      {
        pt: "Desenvolvo ferramentas internas com Next.js, React e TypeScript — dashboards, automações e fluxos operacionais.",
        en: "Build internal tools with Next.js, React, and TypeScript — dashboards, automations, and operational workflows.",
      },
      {
        pt: "Integro ERPs (Tiny, Eccosys) ao Magento 2 para sincronizar produtos, estoque e pedidos dos clientes.",
        en: "Integrate ERPs (Tiny, Eccosys) with Magento 2 to sync products, inventory, and order flows for clients.",
      },
      {
        pt: "Faço manutencao e customizacao de lojas Magento 2 — módulos, REST APIs e extensões.",
        en: "Maintain and customize Magento 2 stores — modules, REST APIs, and custom extensions.",
      },
      {
        pt: "Diagnostico e resolvo problemas de integração entre plataforma, ERP e sistemas terceiros.",
        en: "Diagnose and fix integration issues between storefront, ERP, and third-party systems.",
      },
    ],
    tags: ["Next.js", "React", "TypeScript", "Magento 2", "PHP", "REST API", "E-commerce"],
  },
  {
    company: "Software House",
    role: {
      pt: "Desenvolvedor Full-Stack & Analista de Produto",
      en: "Full-Stack Developer & Product Analyst",
    },
    period: { pt: "Nov 2024 — Out 2025", en: "Nov 2024 — Oct 2025" },
    current: false,
    location: "São Paulo, SP",
    summary: {
      pt: "Atuei no ciclo completo de produtos digitais — participava de reunioes com stakeholders, elaborava documentacao da aplicacao e desenvolvia as solucoes do zero ao deploy.",
      en: "Owned the full lifecycle of digital products — from stakeholder meetings and product documentation to building and deploying the solutions.",
    },
    highlights: [
      {
        pt: "Participava ativamente de reunioes com stakeholders: levantamento de requisitos, alinhamento de escopo e priorizacao de backlog.",
        en: "Active participant in stakeholder meetings: requirements gathering, scope alignment, and backlog prioritization.",
      },
      {
        pt: "Elaborei documentacao tecnica completa de aplicacoes — UML, casos de uso, specs de API e fluxos de usuario.",
        en: "Wrote full application documentation — UML, use cases, API specs, and user flows.",
      },
      {
        pt: "Desenvolvi solucoes Full-Stack web e mobile: landing pages, sistemas embarcados e apps escaláveis.",
        en: "Built Full-Stack web and mobile solutions: landing pages, embedded systems, and scalable apps.",
      },
      {
        pt: "Coordenei squads multidisciplinares conectando time técnico e necessidades de negócio.",
        en: "Coordinated multidisciplinary squads bridging engineering and business requirements.",
      },
    ],
  },
  {
    company: "Setor de A&B",
    role: {
      pt: "Liderança Operacional",
      en: "Operations Lead",
    },
    period: { pt: "Nov 2022 — Dez 2023", en: "Nov 2022 — Dec 2023" },
    current: false,
    location: "São Paulo, SP",
    summary: {
      pt: "Gestão de equipe em ambiente de alta demanda — experiência que moldou minha visão de processos e liderança.",
      en: "Team management in a high-demand environment — experience that shaped my process and leadership thinking.",
    },
    highlights: [
      {
        pt: "Padronização de processos operacionais e coordenação de equipe.",
        en: "Operational process standardization and team coordination.",
      },
      {
        pt: "Desenvolvimento de habilidades de comunicação e gestão sob pressão.",
        en: "Developed communication and pressure-management skills.",
      },
    ],
  },
];
