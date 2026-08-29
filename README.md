# Nicolas Martins — Developer Portfolio

Portfólio pessoal em **Next.js 16**, **TypeScript** e **Tailwind CSS v4**.
Bilíngue (pt-BR / en), export estático, sem dependência de runtime no servidor.

🔗 [github.com/nemcolas/nicolasmartins](https://github.com/nemcolas/nicolasmartins)

## Stack

| Camada | Tech |
|--------|------|
| Framework | Next.js 16 (App Router, Static Export) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS v4 |
| Ícones | Lucide React |
| i18n | Context API própria, sem lib externa |
| Deploy | Vercel (zero-config) |

Quatro dependências de produção no total: `next`, `react`, `react-dom`, `lucide-react`.

## Arquitetura

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 + estilos globais
│   ├── layout.tsx           # Root layout + metadata de SEO
│   └── page.tsx             # Composição das seções
├── components/
│   ├── Navbar.tsx           # Navbar sticky com menu mobile
│   ├── Hero.tsx             # Hero com parallax e spotlight no cursor
│   ├── About.tsx            # Bio, stats e formação
│   ├── Experience.tsx       # Timeline de experiência
│   ├── Skills.tsx           # Categorias de skills + certificações
│   ├── Projects.tsx         # Cards de projeto em formato de estudo de caso
│   ├── Automations.tsx      # Automações em produção no trabalho atual
│   ├── AIUsage.tsx          # Como uso IA no dia a dia
│   ├── Contact.tsx          # CTA de contato + links sociais
│   ├── Footer.tsx           # Rodapé
│   ├── MagicCard.tsx        # Card com borda que segue o cursor
│   └── EasterEgg.tsx        # Easter egg interativo
├── contexts/
│   └── LanguageContext.tsx  # Estado de idioma (pt-BR / en)
├── data/
│   ├── translations.ts      # Todas as strings de UI + tipos Lang/BiStr
│   ├── projects.ts          # Estudos de caso dos projetos
│   ├── experience.ts        # Histórico profissional
│   ├── automations.ts       # Automações
│   └── skills.ts            # Certificações (+ espelho das categorias)
└── hooks/
    └── useInView.ts         # IntersectionObserver para animações de entrada
```

Todo o conteúdo vive em arquivos de dados tipados — dá pra atualizar copy sem tocar em componente.

## Rodando local

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Export estático → /out
```

Não há variáveis de ambiente. O build é totalmente estático.

## Decisões de design

- **Dark theme fixo** — identidade consistente, sem toggle.
- **Conteúdo desacoplado da UI** — dados tipados em `src/data`, componentes só renderizam.
- **i18n sem biblioteca** — Context API + objeto `BiStr` (`{ pt, en }`). Troca de idioma sem reload.
- **Sem lib de animação** — só CSS transitions e IntersectionObserver, pra manter o bundle mínimo.
- **Export estático** — zero cold start, custo zero em idle.
- **Projetos como estudo de caso** — Problema → Solução → Decisões → Desafios → Impacto, em vez de screenshot com lista de tecnologias.

## Atualizando conteúdo

Textos bilíngues usam o tipo `BiStr` de `src/data/translations.ts`:

```ts
export type BiStr = { pt: string; en: string };
```

Para adicionar um projeto, edite `src/data/projects.ts`:

```ts
{
  id: "meu-projeto",
  title: "Título do Projeto",
  tagline: { pt: "Uma linha em português", en: "One line in English" },
  tags: ["Next.js", "TypeScript"],
  featured: true,             // true = card completo de estudo de caso
  status: "production",       // "production" | "prototype" | "wip"
  github: "https://github.com/nemcolas/repo",
  live: "https://...",        // opcional
  problem:  { pt: "...", en: "..." },
  solution: { pt: "...", en: "..." },
  decisions:  [{ pt: "...", en: "..." }],
  challenges: [{ pt: "...", en: "..." }],
  impact:     [{ pt: "...", en: "..." }],
}
```

As strings de interface (navbar, headings, labels) ficam em `src/data/translations.ts`.

## Deploy

1. Push para o GitHub.
2. Importar o repositório em [vercel.com](https://vercel.com).
3. Framework detectado automaticamente como Next.js.
4. Deploy — sem variáveis de ambiente.

O `output: 'export'` em `next.config.ts` gera o build estático em `/out`.
