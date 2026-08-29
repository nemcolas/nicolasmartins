export type SkillCategory = {
  name: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "E-commerce Headless",
    icon: "ShoppingBag",
    skills: ["Magento 2", "Shopify", "Hydrogen", "GraphQL", "PHP", "Tiny ERP", "REST APIs"],
  },
  {
    name: "Frontend",
    icon: "Layout",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    name: "Backend & Data",
    icon: "Server",
    skills: ["Node.js", "Python", "Pandas", "Scikit-learn", "PostgreSQL", "Prisma"],
  },
  {
    name: "Infra & Tooling",
    icon: "Cloud",
    skills: ["Vercel", "Git", "Stripe", "Clerk"],
  },
];

export const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera · Andrew Ng (DeepLearning.AI)",
    year: "2024",
  },
  {
    name: "Scrum Foundation Professional (SFPC)",
    issuer: "Certiprof",
    year: "2024",
  },
  {
    name: "C# Fundamentals with Microsoft",
    issuer: "FreeCodeCamp",
    year: "2024",
  },
  {
    name: "DevOps",
    issuer: "FIAP",
    year: "2024",
  },
  {
    name: "Business Management",
    issuer: "FIAP",
    year: "2024",
  },
];
