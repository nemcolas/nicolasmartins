export type SkillCategory = {
  name: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "Layout",
    skills: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: ["Node.js", "NestJS", "Spring Boot", "REST APIs", "Swagger"],
  },
  {
    name: "Languages",
    icon: "Code",
    skills: ["TypeScript", "Python", "Java", "C#"],
  },
  {
    name: "Data & ML",
    icon: "BarChart",
    skills: ["Pandas", "Scikit-learn", "PyTorch", "Matplotlib", "Jupyter"],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Prisma ORM"],
  },
  {
    name: "DevOps & Cloud",
    icon: "Cloud",
    skills: ["Docker", "AWS", "Azure", "Bash", "CI/CD"],
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
