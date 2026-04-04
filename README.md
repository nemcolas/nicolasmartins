# Nicolas Martins — Developer Portfolio

Personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.
Designed to communicate technical depth and product thinking to engineering recruiters.

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router, Static Export) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Deploy | Vercel (zero-config) |

## Architecture

```
src/
├── app/
│   ├── globals.css       # Tailwind v4 + global styles
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Section composition
├── components/
│   ├── Navbar.tsx        # Sticky navbar with mobile menu
│   ├── Hero.tsx          # Hero section with CTA
│   ├── About.tsx         # Bio + stats + education
│   ├── Experience.tsx    # Timeline of work history
│   ├── Skills.tsx        # Skill categories + certifications
│   ├── Projects.tsx      # Case-study project cards
│   ├── Contact.tsx       # Contact CTA + social links
│   └── Footer.tsx        # Minimal footer
└── data/
    ├── projects.ts       # Project case study data
    ├── skills.ts         # Skill categories + certifications
    └── experience.ts     # Work experience data
```

All content lives in typed data files — update copy without touching components.

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Static export → /out directory
```

## Deployment (Vercel)

1. Push to GitHub (`git remote set-url origin https://github.com/nemcolas/nicolas-martins.git`)
2. Import repo at vercel.com
3. Framework: Next.js (auto-detected)
4. Deploy — no environment variables needed

The `output: 'export'` config in `next.config.ts` produces a fully static build.

## Design Decisions

- **Forced dark theme** — consistent brand identity, no toggle
- **Content-first** — data files decoupled from UI components
- **No animation libraries** — CSS transitions only, minimal bundle
- **Static export** — optimal performance for a portfolio use case
- **Case-study format** — projects presented as Problem → Solution → Impact

## Updating Content

To add or update a project, edit `src/data/projects.ts`:

```ts
{
  id: "my-project",
  title: "Project Title",
  tagline: "One-line description",
  tags: ["Next.js", "TypeScript"],
  featured: true,           // true = full case study card
  status: "production",     // "production" | "prototype" | "wip"
  github: "https://github.com/nemcolas/repo",
  live: "https://...",      // optional
  problem: "...",
  solution: "...",
  decisions: ["..."],
  challenges: ["..."],
  impact: ["..."],
}
```

## License

MIT
