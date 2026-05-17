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
      pt: "Desenvolvedor Fullstack",
      en: "E-commerce Developer",
    },
    period: { pt: "Jan 2026 - Presente", en: "Jan 2026 - Present" },
    current: true,
    location: "São Paulo, SP",
    summary: {
      pt: "Desenvolvimento e manutenção de aplicacoes de e-commerce: integracoes com ERPs, ferramentas internas com Next.js/React/TypeScript e suporte a plataformas de loja.",
      en: "Building and maintaining e-commerce applications: ERP integrations, internal tooling with Next.js/React/TypeScript, and storefront platform support.",
    },
    highlights: [
      {
        pt: "Crio automações em Python que resolvem problemas reais de operação: detecção de divergência de SKU entre Tiny ERP e Magento 2, curva ABC de produtos, reposicionamento de grade e relatórios de performance.",
        en: "Build Python automations that solve real operational problems: SKU divergence detection between Tiny ERP and Magento 2, product ABC curve, grid repositioning, and performance reports.",
      },
      {
        pt: "Desenvolvo ferramentas internas com Next.js, React e TypeScript: dashboards operacionais e fluxos de gestão de catálogo.",
        en: "Build internal tools with Next.js, React, and TypeScript: operational dashboards and catalog management workflows.",
      },
      {
        pt: "Integro ERPs (Tiny, Eccosys) ao Magento 2 via REST API para sincronizar produtos, estoque e pedidos.",
        en: "Integrate ERPs (Tiny, Eccosys) with Magento 2 via REST API to sync products, inventory, and order flows.",
      },
      {
        pt: "Faço manutenção e customização de lojas Magento 2: módulos, APIs e extensões sob medida.",
        en: "Maintain and customize Magento 2 stores: modules, REST APIs, and custom extensions.",
      },
    ],
    tags: ["Next.js", "React", "TypeScript", "Python", "Magento 2", "Tiny ERP", "REST API"],
  },
  {
    company: "Software House",
    role: {
      pt: "Analista de Requisitos e Desenvolvimento",
      en: "Full-Stack Developer & Product Analyst",
    },
    period: { pt: "Nov 2024 - Out 2025", en: "Nov 2024 - Oct 2025" },
    current: false,
    location: "São Paulo, SP",
    summary: {
      pt: "Atuei no ciclo completo de produtos digitais: participava de reunioes com stakeholders, elaborava documentacao da aplicacao e desenvolvia as solucoes do zero ao deploy.",
      en: "Owned the full lifecycle of digital products: from stakeholder meetings and product documentation to building and deploying the solutions.",
    },
    highlights: [
      {
        pt: "Participava ativamente de reunioes com stakeholders para levantamento de requisitos, alinhamento de escopo e priorizacao de backlog.",
        en: "Active participant in stakeholder meetings: requirements gathering, scope alignment, and backlog prioritization.",
      },
      {
        pt: "Elaborei documentacao tecnica de aplicacoes: UML, casos de uso, specs de API e fluxos de usuario.",
        en: "Wrote full application documentation: UML, use cases, API specs, and user flows.",
      },
      {
        pt: "Desenvolvi solucoes Full-Stack web e mobile, incluindo landing pages, sistemas embarcados e apps escaláveis.",
        en: "Built Full-Stack web and mobile solutions: landing pages, embedded systems, and scalable apps.",
      },
      {
        pt: "Coordenei squads multidisciplinares, conectando time tecnico e necessidades de negocio.",
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
    period: { pt: "Nov 2022 - Dez 2023", en: "Nov 2022 - Dec 2023" },
    current: false,
    location: "São Paulo, SP",
    summary: {
      pt: "Gestao de equipe em ambiente de alta demanda. Experiencia que moldou minha visao de processos e lideranca.",
      en: "Team management in a high-demand environment, an experience that shaped my process and leadership thinking.",
    },
    highlights: [
      {
        pt: "Padronizacao de processos operacionais e coordenacao de equipe.",
        en: "Operational process standardization and team coordination.",
      },
      {
        pt: "Desenvolvimento de habilidades de comunicacao e gestao sob pressao.",
        en: "Developed communication and pressure-management skills.",
      },
    ],
  },
];
