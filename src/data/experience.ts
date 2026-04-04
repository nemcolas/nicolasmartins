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
      pt: "Desenvolvedor E-commerce (Magento 2)",
      en: "E-commerce Developer (Magento 2)",
    },
    period: { pt: "Jan 2026 — Presente", en: "Jan 2026 — Present" },
    current: true,
    location: "São Paulo, SP",
    summary: {
      pt: "Desenvolvimento e manutenção de integrações entre Magento 2 e sistemas ERP para clientes de e-commerce.",
      en: "Building and maintaining Magento 2 integrations with ERP systems for e-commerce clients.",
    },
    highlights: [
      {
        pt: "Integro ERPs como Tiny e Eccosys ao Magento 2 — sincronizando produtos, estoque e fluxo de pedidos.",
        en: "Integrate ERPs (Tiny, Eccosys) with Magento 2 — syncing products, inventory, and order flows.",
      },
      {
        pt: "Customizo layouts de lojas via modificações de frontend no Magento 2.",
        en: "Customize store layouts and frontend components in Magento 2.",
      },
      {
        pt: "Trabalho com módulos Magento 2, REST APIs e extensões customizadas.",
        en: "Work with Magento 2 modules, REST APIs, and custom extensions.",
      },
      {
        pt: "Diagnostico e resolvo problemas de integração entre plataforma e ERP.",
        en: "Diagnose and resolve integration issues between the storefront and ERP.",
      },
    ],
    tags: ["Magento 2", "PHP", "Tiny ERP", "Eccosys", "REST API", "E-commerce"],
  },
  {
    company: "Software House",
    role: {
      pt: "Analista de Requisitos & Desenvolvedor Full-Stack",
      en: "Requirements Analyst & Full-Stack Developer",
    },
    period: { pt: "Nov 2024 — Jan 2026", en: "Nov 2024 — Jan 2026" },
    current: false,
    location: "São Paulo, SP",
    summary: {
      pt: "Responsável pelo ciclo completo de produtos digitais — da documentação técnica ao deploy em produção.",
      en: "Owned the full lifecycle of digital products — from technical documentation to production deployment.",
    },
    highlights: [
      {
        pt: "Elaborei documentações técnicas completas (UML, casos de uso, specs de API) para novos produtos.",
        en: "Wrote end-to-end technical documentation (UML, use cases, API specs) for new digital products.",
      },
      {
        pt: "Gerenciei backlog e escopo junto a stakeholders, alinhando necessidades de negócio com o time técnico.",
        en: "Managed feature backlog and scope with stakeholders, bridging business goals and engineering.",
      },
      {
        pt: "Coordenei squads multidisciplinares com foco em entregas ágeis e dentro do prazo.",
        en: "Led multidisciplinary agile squads with consistent on-time delivery.",
      },
      {
        pt: "Desenvolvi soluções Full-Stack (web e mobile) — landing pages, sistemas embarcados e apps escaláveis.",
        en: "Built Full-Stack solutions (web and mobile): landing pages, embedded systems, and scalable apps.",
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
