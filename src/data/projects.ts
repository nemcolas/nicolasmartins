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
    title: "Mise: Gestao de Fichas Tecnicas",
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
      pt: "Restaurantes perdem margem todo mes sem saber exatamente por que. O CMV fica na cabeca do chef ou numa planilha desatualizada: sem visibilidade de custo por prato, sem controle de desperdicio, sem como escalar isso pra uma equipe.",
      en: "Restaurants bleed margin every month without knowing exactly why. Food cost lives in the chef's head or a stale spreadsheet,no real cost visibility per dish, no waste control, no way to scale that process across a team.",
    },
    solution: {
      pt: "Um SaaS com modelo de 3 camadas: Materia Prima, Insumo e Prato. O custo e calculado em tempo real a cada render, nunca ficando desatualizado no banco. Cada restaurante e um tenant isolado via Clerk Organizations, com controle de acesso por perfil. Plano gratuito funcional com upgrade via Stripe.",
      en: "A SaaS with a 3-tier model: Raw Material → Prepared Item → Dish. Cost is calculated at runtime on every render,never stale in the database. Each restaurant is an isolated tenant via Clerk Organizations, with role-based access control. Functional free plan + Stripe-powered upgrades.",
    },
    decisions: [
      {
        pt: "Custo nunca armazenado no banco. Calculado no runtime, qualquer atualizacao de preco de insumo reflete instantaneamente em todos os pratos.",
        en: "Cost never stored in the database,calculated at runtime so any ingredient price update reflects instantly across all dishes.",
      },
      {
        pt: "Clerk Organizations como camada de multi-tenancy: isolamento de dados sem precisar de schema separado por cliente.",
        en: "Clerk Organizations as the multi-tenancy layer,data isolation guaranteed without needing separate schemas per client.",
      },
      {
        pt: "Neon serverless PostgreSQL com Prisma: zero custo em idle, escala automaticamente, migracoes versionadas.",
        en: "Neon serverless PostgreSQL + Prisma,zero cost at idle, auto-scales, versioned migrations.",
      },
    ],
    challenges: [
      {
        pt: "Garantir que colaboradores nunca vejam dados de custo, com validacao aplicada no nivel da API, nao so no frontend.",
        en: "Ensuring collaborators never see cost data,enforced at the API level, not just the frontend.",
      },
      {
        pt: "Modelar os limites de plano (pratos, materias-primas, usuarios) sem poluir toda a camada de negocio com verificacoes.",
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
        pt: "Export de ficha tecnica em PDF, exclusivo do plano pago",
        en: "PDF technical sheet export,paid-plan exclusive feature",
      },
    ],
  },
  {
    id: "cat-tracker",
    title: "PawTrack: Lost & Found Cats Map",
    tagline: {
      pt: "Mapa mobile colaborativo com pixel art para reportar e encontrar gatos perdidos ou em adocao.",
      en: "Collaborative pixel-art mobile map for reporting and finding lost or adoptable cats in your city.",
    },
    tags: ["React Native", "Expo", "TypeScript", "React Navigation", "expo-location", "react-native-maps", "JSON Server"],
    featured: true,
    status: "prototype",
    github: "https://github.com/nemcolas/cat-tracker-pixel",
    problem: {
      pt: "Adocao de gatos e notoriamente mais dificil que a de caes, mas nao existe uma ferramenta simples e colaborativa para reportar gatos perdidos ou encontrados. As plataformas existentes sao genericas demais ou dificeis de usar. Gatos mais velhos e com necessidades especiais ficam invisiveis.",
      en: "Cat adoption is notoriously harder than dogs,yet there's no simple, community-driven tool to report lost or found cats. Existing platforms are either too broad or clunky. Older and special-needs cats have the worst adoption rates because awareness doesn't reach the right people.",
    },
    solution: {
      pt: "Um app mobile em pixel art onde qualquer pessoa pode marcar um ponto no mapa reportando um gato perdido ou encontrado, adicionar foto e descricao, e explorar os reportes proximos. Uma tela de recursos lista organizacoes de adocao. A estetica retro cria uma identidade memoravel.",
      en: "A pixel-art React Native Expo app where anyone can drop a pin on a map to report a lost or found cat, attach a photo, and browse nearby reports. A resources screen surfaces adoption organizations. The retro aesthetic creates a distinctive, memorable brand.",
    },
    decisions: [
      {
        pt: "React Native Expo para build cross-platform (APK via EAS Build) sem precisar de Mac.",
        en: "React Native Expo for cross-platform builds (Android APK via EAS Build) without a Mac.",
      },
      {
        pt: "JSON Server como mock de REST API desde o inicio, mantendo o contrato limpo para migrar ao backend real sem reescrever o cliente.",
        en: "JSON Server as mock REST API from day one,keeping the client contract clean for backend migration without rewriting the app.",
      },
      {
        pt: "URL da API via variavel de ambiente (EXPO_PUBLIC_API_URL), sem IPs hardcoded no codigo-fonte.",
        en: "API URL via environment variable (EXPO_PUBLIC_API_URL),no hardcoded IPs in source code.",
      },
    ],
    challenges: [
      {
        pt: "Configurar permissoes de localizacao para funcionar tanto no Expo Go quanto no APK standalone.",
        en: "Getting expo-location permissions to work reliably in both Expo Go and standalone APK builds.",
      },
      {
        pt: "Modelar os dados do pin de forma simples o suficiente para reportes rapidos, mas completa para que alguem possa agir com base no avistamento.",
        en: "Designing the pin data model to balance simplicity for quick reports vs completeness for someone to act on a sighting.",
      },
    ],
    impact: [
      {
        pt: "Prototipo navegavel completo: mapa, formulario de reporte, recursos e tela sobre o projeto",
        en: "Fully navigable prototype: map, report form, resources, and about screens",
      },
      {
        pt: "Contrato REST limpo (axios + JSON Server) torna a migracao para backend real trivial",
        en: "Clean REST contract (axios + JSON Server) makes a real backend migration trivial",
      },
      {
        pt: "APK buildavel via `eas build --platform android`, sem precisar de Mac",
        en: "APK buildable via `eas build --platform android`,no Mac required",
      },
    ],
  },
  {
    id: "gsia",
    title: "Blue Future: Plastic Waste Intelligence",
    tagline: {
      pt: "Notebooks Jupyter transformados em dashboard web interativo, tornando dados ambientais acessiveis a qualquer pessoa.",
      en: "Jupyter notebooks transformed into an interactive web dashboard,environmental data accessible to everyone.",
    },
    tags: ["Python", "Pandas", "Scikit-learn", "Next.js", "Recharts", "TypeScript", "Data Viz"],
    featured: false,
    status: "prototype",
    github: "https://github.com/nemcolas/GSIA",
    live: "https://gsia-dashboard.vercel.app",
    problem: {
      pt: "A producao global de plastico cresceu de 2M toneladas em 1950 para 460M em 2019, mas esses dados ficam presos em CSVs academicos e notebooks que ninguem fora do meio tecnico consegue usar. A analise existia; o produto nao.",
      en: "Global plastic production grew from 2M tons in 1950 to 460M tons in 2019,but this data lives in academic CSVs and Jupyter notebooks that sustainability decision-makers can't use. The analysis existed; a product did not.",
    },
    solution: {
      pt: "Transformei um projeto de ciencia de dados em Python/scikit-learn num dashboard Next.js interativo. Um script de pre-processamento converte os CSVs originais em JSON. O dashboard mostra tendencias de producao, residuos per capita por pais, metodos de descarte e os resultados do modelo de Regressao Linear.",
      en: "Transformed a Python/scikit-learn data science project into an interactive Next.js dashboard. A preprocessing script converts the original CSV datasets into clean JSON. The dashboard surfaces production trends, per-capita waste by country, disposal breakdowns, and the Linear Regression model results.",
    },
    decisions: [
      {
        pt: "Pre-processamento dos CSVs para JSON estatico no build: zero custo de servidor e carregamento instantaneo.",
        en: "Pre-process CSVs to static JSON at build time,zero server costs, instant page loads.",
      },
      {
        pt: "Recharts em vez de D3: API mais simples, totalmente React, sem manipulacao imperativa do DOM.",
        en: "Recharts over D3,simpler API, fully React-native, no D3 imperative DOM manipulation.",
      },
      {
        pt: "Mantive os notebooks originais no repositorio e tornei o pipeline reproduzivel com dependencias fixadas.",
        en: "Kept the original Python notebooks in the repo and made the data pipeline reproducible with pinned dependencies.",
      },
    ],
    challenges: [
      {
        pt: "A regressão linear com uma única variável explicou pouco da variação dos dados (R²=0.20). Em vez de esconder o número ou trocar de modelo sem justificativa, publiquei o resultado no dashboard com a leitura correta: o fenômeno é multivariado e uma feature só não dá conta. O valor do projeto está no pipeline de ponta a ponta, não na força do modelo.",
        en: "The single-feature linear regression explained little of the variance (R²=0.20). Rather than hide the number or swap models without justification, I shipped the result with the right reading: the phenomenon is multivariate and one feature cannot capture it. The value here is the end-to-end pipeline, not the model's strength.",
      },
      {
        pt: "Padronizar nomes de paises em 5 CSVs diferentes com convencoes inconsistentes.",
        en: "Normalizing country names across 5 CSV datasets with inconsistent naming conventions.",
      },
    ],
    impact: [
      {
        pt: "Analise de dados acessivel a qualquer pessoa, sem precisar de Python",
        en: "Notebook analysis accessible to non-technical users,no Python required",
      },
      {
        pt: "Dashboard carrega em menos de 1s (JSON estatico, sem chamadas de API no render)",
        en: "Dashboard loads in < 1s (static JSON, no API calls on render)",
      },
      {
        pt: "Cobre o pipeline de ponta a ponta: dados, analise e produto final",
        en: "Demonstrates full pipeline ownership: data → analysis → product",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Este Portfolio",
    tagline: {
      pt: "Portfolio de alta performance com i18n, Easter egg interativo e formato de estudo de caso para cada projeto.",
      en: "High-performance portfolio with i18n, interactive Easter egg, and case-study project format.",
    },
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Static Export", "i18n", "Vercel"],
    featured: false,
    status: "production",
    github: "https://github.com/nemcolas/nicolasmartins",
    problem: {
      pt: "A maioria dos portfolios de desenvolvedores junior sao genericos, lentos e nao passam no teste dos 10 segundos do recrutador.",
      en: "Most junior developer portfolios are generic, slow, and fail the 10-second recruiter scan.",
    },
    solution: {
      pt: "Portfolio exportado estaticamente em Next.js que trata cada projeto como um estudo de caso, com i18n pt-BR/en e Easter egg interativo.",
      en: "Statically-exported Next.js portfolio that treats each project as a case study, with pt-BR/en i18n and an interactive Easter egg.",
    },
    decisions: [
      {
        pt: "Export estatico para deploys Vercel com zero cold-start.",
        en: "Static export for zero-cold-start Vercel deploys.",
      },
      {
        pt: "Todo o conteudo em arquivos de dados tipados, com separacao total entre dados e UI.",
        en: "All content in typed data files,complete separation between data and UI.",
      },
      {
        pt: "Sem bibliotecas de animacao, so CSS transitions para manter o bundle minimo.",
        en: "No animation libraries,CSS transitions only to keep the bundle tiny.",
      },
    ],
    challenges: [],
    impact: [
      {
        pt: "Target: 100/100 Lighthouse performance no mobile",
        en: "Target: 100/100 Lighthouse performance on mobile",
      },
      {
        pt: "i18n pt-BR/en com um clique, sem reload de pagina",
        en: "pt-BR/en i18n with one click,no page reload",
      },
    ],
  },
];
