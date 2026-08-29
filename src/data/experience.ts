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
      pt: "Desenvolvimento e manutenção de aplicações de e-commerce: storefronts headless em React/Next.js/Hydrogen consumindo GraphQL, integrações com ERPs e ferramentas internas em TypeScript.",
      en: "Building and maintaining e-commerce applications: headless storefronts in React/Next.js/Hydrogen consuming GraphQL, ERP integrations, and internal tooling in TypeScript.",
    },
    highlights: [
      {
        pt: "Construo storefronts headless em React, Next.js e Shopify Hydrogen, consumindo as APIs GraphQL do Magento 2 e da Shopify Storefront para montar PLP, PDP, carrinho e checkout.",
        en: "Build headless storefronts with React, Next.js, and Shopify Hydrogen, consuming the Magento 2 and Shopify Storefront GraphQL APIs to assemble PLP, PDP, cart, and checkout.",
      },
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
    tags: ["Next.js", "React", "Hydrogen", "GraphQL", "TypeScript", "Python", "Magento 2", "Shopify", "Tiny ERP", "REST API"],
  },
  {
    company: "Rime Tecnologia",
    role: {
      pt: "Analista de Requisitos e Desenvolvedor Full-Stack",
      en: "Requirements Analyst & Full-Stack Developer",
    },
    period: { pt: "Nov 2024 - Out 2025", en: "Nov 2024 - Oct 2025" },
    current: false,
    location: "São Paulo, SP",
    summary: {
      pt: "Fui a ponte entre cliente e time técnico: levantava requisito em reunião, escrevia a documentação e entregava a solução do zero ao deploy. Web, mobile e landing pages, com escopo e prazo acordados direto com o stakeholder.",
      en: "I was the bridge between client and engineering: gathering requirements in meetings, writing the documentation, and shipping the solution from scratch to deploy. Web, mobile, and landing pages, with scope and deadlines agreed directly with the stakeholder.",
    },
    highlights: [
      {
        pt: "Conduzia reuniões de levantamento e traduzia pedido de cliente em escopo fechado, backlog priorizado e prazo realista.",
        en: "Ran requirements meetings and translated client requests into closed scope, prioritized backlog, and realistic deadlines.",
      },
      {
        pt: "Entreguei soluções web e mobile de ponta a ponta: landing pages, sistemas embarcados e aplicações escaláveis.",
        en: "Delivered end-to-end web and mobile solutions: landing pages, embedded systems, and scalable applications.",
      },
      {
        pt: "Escrevia a documentação que sustentava a entrega, UML, casos de uso, specs de API e fluxos de usuário, reduzindo retrabalho e ruído com o cliente.",
        en: "Wrote the documentation that held delivery together, UML, use cases, API specs, and user flows, cutting rework and client-side noise.",
      },
      {
        pt: "Coordenei squads multidisciplinares, mantendo a entrega dentro do prazo e alinhada com a expectativa do cliente.",
        en: "Coordinated multidisciplinary squads, keeping delivery on schedule and aligned with client expectations.",
      },
    ],
    tags: ["Web & Mobile", "Landing Pages", "Sistemas Embarcados", "UML", "Gestão de Backlog"],
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
