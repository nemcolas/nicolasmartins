import type { BiStr } from "./translations";

export type Project = {
  id: string;
  title: string;
  tagline: BiStr;
  tags: string[];
  featured: boolean;
  status: "production" | "prototype" | "wip";
  github: string;
  live?: string;
  problem: BiStr;
  solution: BiStr;
  decisions: BiStr[];
  challenges: BiStr[];
  impact: BiStr[];
};

export const projects: Project[] = [
  {
    id: "mise",
    title: "Mise — Gestao de Fichas Tecnicas",
    tagline: {
      pt: "SaaS multi-tenant para restaurantes calcularem CMV, montarem fichas tecnicas e controlarem custos em tempo real.",
      en: "Multi-tenant SaaS that lets restaurants calculate food cost, build technical sheets, and track margins in real time.",
    },
    tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Stripe", "Tailwind", "shadcn/ui"],
    featured: true,
    status: "production",
    github: "https://github.com/nemcolas/mise",
    live: "https://mise-navy.vercel.app",
    problem: {
      pt: "Restaurantes perdem margem todo mês sem saber exatamente por que. O CMV fica na cabeca do chef ou numa planilha desatualizada — sem visibilidade real de custo por prato, sem controle de desperdício, sem como escalar esse processo pra uma equipe.",
      en: "Restaurants bleed margin every month without knowing exactly why. Food cost lives in the chef's head or a stale spreadsheet — no real cost visibility per dish, no waste control, no way to scale that process across a team.",
    },
    solution: {
      pt: "Um SaaS com modelo de 3 camadas: Materia Prima → Insumo → Prato. O custo é calculado em tempo real a cada render — nunca fica desatualizado no banco. Cada restaurante é um tenant isolado via Clerk Organizations, com controle de acesso por perfil. Plano gratuito funcional + upgrade via Stripe.",
      en: "A SaaS with a 3-tier model: Raw Material → Prepared Item → Dish. Cost is calculated at runtime on every render — never stale in the database. Each restaurant is an isolated tenant via Clerk Organizations, with role-based access control. Functional free plan + Stripe-powered upgrades.",
    },
    decisions: [
      {
        pt: "Custo nunca armazenado no banco — calculado no runtime pra garantir que qualquer atualizacao de preco de insumo reflete instantaneamente em todos os pratos.",
        en: "Cost never stored in the database — calculated at runtime so any ingredient price update reflects instantly across all dishes.",
      },
      {
        pt: "Clerk Organizations como camada de multi-tenancy — isolamento de dados garantido sem precisar de schema separado por cliente.",
        en: "Clerk Organizations as the multi-tenancy layer — data isolation guaranteed without needing separate schemas per client.",
      },
      {
        pt: "Neon serverless PostgreSQL + Prisma — zero custo em idle, escala automaticamente, migrações versionadas.",
        en: "Neon serverless PostgreSQL + Prisma — zero cost at idle, auto-scales, versioned migrations.",
      },
    ],
    challenges: [
      {
        pt: "Garantir que colaboradores nunca vejam custo — enforced no nível da API, nao só no frontend.",
        en: "Ensuring collaborators never see cost data — enforced at the API level, not just the frontend.",
      },
      {
        pt: "Modelar os limites de plano (pratos, matérias-primas, usuários) sem poluir toda a camada de negócio com verificacoes.",
        en: "Modeling plan limits (dishes, raw materials, users) without polluting the entire business layer with checks.",
      },
    ],
    impact: [
      {
        pt: "Multi-tenant funcional: cada restaurante tem seus dados isolados com controle de perfis",
        en: "Functional multi-tenancy: each restaurant has isolated data with role-based access",
      },
      {
        pt: "Modelo freemium com Stripe: upgrade de plano sem sair do app",
        en: "Freemium model with Stripe: plan upgrades without leaving the app",
      },
      {
        pt: "Export de ficha tecnica em PDF — funcionalidade exclusiva do plano pago",
        en: "PDF technical sheet export — paid-plan exclusive feature",
      },
    ],
  },
  {
    id: "cat-tracker",
    title: "PawTrack — Lost & Found Cats Map",
    tagline: {
      pt: "Mapa mobile colaborativo com pixel art para reportar e encontrar gatos perdidos ou em adoção.",
      en: "Collaborative pixel-art mobile map for reporting and finding lost or adoptable cats in your city.",
    },
    tags: ["React Native", "Expo", "TypeScript", "React Navigation", "expo-location", "react-native-maps", "JSON Server"],
    featured: true,
    status: "prototype",
    github: "https://github.com/nemcolas/cat-tracker-pixel",
    problem: {
      pt: "Adoção de gatos é notoriamente mais difícil que a de cães — mas não existe uma ferramenta simples e colaborativa para reportar gatos perdidos ou encontrados. Plataformas existentes são genéricas demais ou difíceis de usar. Gatos mais velhos e com necessidades especiais ficam invisíveis.",
      en: "Cat adoption is notoriously harder than dogs — yet there's no simple, community-driven tool to report lost or found cats. Existing platforms are either too broad or clunky. Older and special-needs cats have the worst adoption rates because awareness doesn't reach the right people.",
    },
    solution: {
      pt: "Um app mobile em pixel art onde qualquer pessoa pode marcar um ponto no mapa reportando um gato perdido ou encontrado, adicionar foto e descrição, e explorar os reportes próximos. Uma tela de recursos lista organizações de adoção. A estética retrô cria uma identidade memorável.",
      en: "A pixel-art React Native Expo app where anyone can drop a pin on a map to report a lost or found cat, attach a photo, and browse nearby reports. A resources screen surfaces adoption organizations. The retro aesthetic creates a distinctive, memorable brand.",
    },
    decisions: [
      {
        pt: "React Native Expo para build cross-platform (APK via EAS Build) sem precisar de Mac.",
        en: "React Native Expo for cross-platform builds (Android APK via EAS Build) without a Mac.",
      },
      {
        pt: "JSON Server como mock de REST API desde o início — mantendo o contrato limpo para migrar ao backend real sem reescrever o cliente.",
        en: "JSON Server as mock REST API from day one — keeping the client contract clean for backend migration without rewriting the app.",
      },
      {
        pt: "URL da API via variável de ambiente (EXPO_PUBLIC_API_URL) — sem IPs hardcoded no código-fonte.",
        en: "API URL via environment variable (EXPO_PUBLIC_API_URL) — no hardcoded IPs in source code.",
      },
    ],
    challenges: [
      {
        pt: "Configurar permissões de localização para funcionar tanto no Expo Go quanto no APK standalone.",
        en: "Getting expo-location permissions to work reliably in both Expo Go and standalone APK builds.",
      },
      {
        pt: "Modelar os dados do pin de forma simples o suficiente para reportes rápidos, mas completa para que alguém possa agir com base no avistamento.",
        en: "Designing the pin data model to balance simplicity for quick reports vs completeness for someone to act on a sighting.",
      },
    ],
    impact: [
      {
        pt: "Protótipo navegável completo: mapa, formulário de reporte, recursos e tela sobre o projeto",
        en: "Fully navigable prototype: map, report form, resources, and about screens",
      },
      {
        pt: "Contrato REST limpo (axios + JSON Server) torna a migração para backend real trivial",
        en: "Clean REST contract (axios + JSON Server) makes a real backend migration trivial",
      },
      {
        pt: "APK buildável via `eas build --platform android` — sem precisar de Mac",
        en: "APK buildable via `eas build --platform android` — no Mac required",
      },
    ],
  },
  {
    id: "gsia",
    title: "Blue Future — Plastic Waste Intelligence",
    tagline: {
      pt: "Notebooks Jupyter transformados em dashboard web interativo — dados ambientais acessíveis a qualquer pessoa.",
      en: "Jupyter notebooks transformed into an interactive web dashboard — environmental data accessible to everyone.",
    },
    tags: ["Python", "Pandas", "Scikit-learn", "Next.js", "Recharts", "TypeScript", "Data Viz"],
    featured: true,
    status: "prototype",
    github: "https://github.com/nemcolas/GSIA",
    problem: {
      pt: "A produção global de plástico cresceu de 2M toneladas em 1950 para 460M em 2019 — mas esses dados vivem em CSVs acadêmicos e notebooks que tomadores de decisão em sustentabilidade não conseguem usar. A análise existia; o produto não.",
      en: "Global plastic production grew from 2M tons in 1950 to 460M tons in 2019 — but this data lives in academic CSVs and Jupyter notebooks that sustainability decision-makers can't use. The analysis existed; a product did not.",
    },
    solution: {
      pt: "Transformei um projeto de ciência de dados em Python/scikit-learn num dashboard Next.js interativo. Um script de pré-processamento converte os CSVs originais em JSON. O dashboard expõe tendências de produção, resíduos per capita por país, métodos de descarte e os resultados do modelo de Regressão Linear.",
      en: "Transformed a Python/scikit-learn data science project into an interactive Next.js dashboard. A preprocessing script converts the original CSV datasets into clean JSON. The dashboard surfaces production trends, per-capita waste by country, disposal breakdowns, and the Linear Regression model results.",
    },
    decisions: [
      {
        pt: "Pré-processamento dos CSVs para JSON estático no build — zero custo de servidor, carregamento instantâneo.",
        en: "Pre-process CSVs to static JSON at build time — zero server costs, instant page loads.",
      },
      {
        pt: "Recharts ao invés de D3 — API mais simples, totalmente React, sem manipulação imperativa do DOM.",
        en: "Recharts over D3 — simpler API, fully React-native, no D3 imperative DOM manipulation.",
      },
      {
        pt: "Mantive os notebooks originais no repositório e tornei o pipeline reproduzível com dependências fixadas.",
        en: "Kept the original Python notebooks in the repo and made the data pipeline reproducible with pinned dependencies.",
      },
    ],
    challenges: [
      {
        pt: "O R²=0.20 da regressão linear é fraco para um feature único. Em vez de esconder, o dashboard contextualiza: explica por que um modelo multivariado seria necessário.",
        en: "The linear regression R²=0.20 is weak from a single feature. Rather than hide it, the dashboard contextualizes it: explaining why multivariate models are needed.",
      },
      {
        pt: "Padronizar nomes de países em 5 CSVs diferentes com convenções inconsistentes.",
        en: "Normalizing country names across 5 CSV datasets with inconsistent naming conventions.",
      },
    ],
    impact: [
      {
        pt: "Análise de dados acessível a usuários não-técnicos — sem precisar de Python",
        en: "Notebook analysis accessible to non-technical users — no Python required",
      },
      {
        pt: "Dashboard carrega em < 1s (JSON estático, sem chamadas de API no render)",
        en: "Dashboard loads in < 1s (static JSON, no API calls on render)",
      },
      {
        pt: "Demonstra ownership completo do pipeline: dados → análise → produto",
        en: "Demonstrates full pipeline ownership: data → analysis → product",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Este Portfólio",
    tagline: {
      pt: "Portfólio de alta performance com i18n, Easter egg interativo e estudo de caso como formato de projeto.",
      en: "High-performance portfolio with i18n, interactive Easter egg, and case-study project format.",
    },
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Static Export", "i18n", "Vercel"],
    featured: false,
    status: "production",
    github: "https://github.com/nemcolas/nicolasmartins",
    problem: {
      pt: "A maioria dos portfólios de desenvolvedores júnior são genéricos, lentos e não passam no teste dos 10 segundos do recrutador.",
      en: "Most junior developer portfolios are generic, slow, and fail the 10-second recruiter scan.",
    },
    solution: {
      pt: "Portfólio exportado estaticamente em Next.js que trata cada projeto como um estudo de caso, com i18n pt-BR/en e Easter egg interativo.",
      en: "Statically-exported Next.js portfolio that treats each project as a case study, with pt-BR/en i18n and an interactive Easter egg.",
    },
    decisions: [
      {
        pt: "Export estático para deploys Vercel com zero cold-start.",
        en: "Static export for zero-cold-start Vercel deploys.",
      },
      {
        pt: "Todo o conteúdo em arquivos de dados tipados — separação entre dados e UI.",
        en: "All content in typed data files — complete separation between data and UI.",
      },
      {
        pt: "Sem bibliotecas de animação — só CSS transitions para manter o bundle mínimo.",
        en: "No animation libraries — CSS transitions only to keep the bundle tiny.",
      },
    ],
    challenges: [],
    impact: [
      {
        pt: "Target: 100/100 Lighthouse performance no mobile",
        en: "Target: 100/100 Lighthouse performance on mobile",
      },
      {
        pt: "i18n pt-BR/en com um clique — sem reload de página",
        en: "pt-BR/en i18n with one click — no page reload",
      },
    ],
  },
];
