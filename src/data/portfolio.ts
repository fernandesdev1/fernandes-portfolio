export const portfolioData = {
  name: "Lindoberto Fernandes",
  title: "Full Stack Developer",
  location: "Cajazeiras, Paraíba",
  age: 19,
  bio: "Desenvolvedor apaixonado por tecnologia, estudando programação desde os 13 anos. Com foco em criar soluções robustas e escaláveis, domino do backend ao frontend, unindo lógica e design de forma harmônica.",
  skills: [
    "PHP", "Node.js", "Python", "JavaScript", "TypeScript",
    "SQL", "React", "APIs Restful", "PostgreSQL", "SQLite",
    "Tailwind CSS", "Prisma", "Docker"
  ],
  projects: [
    {
      id: "fluxora-erp",
      name: "Fluxora ERP",
      description: "Sistema de gestão empresarial com foco em flexibilidade. Migração de categorias baseadas em strings para um sistema relacional robusto.",
      tech: ["React", "Node.js", "Prisma", "TypeScript"],
      github: "https://github.com/fernandesdev1/fluxoraerp",
      category: "Full Stack"
    },
    {
      id: "price-tracker",
      name: "Price Tracker Bot",
      description: "Bot modular para monitoramento de preços. Monitora URLs, armazena histórico em SQLite e alerta sobre quedas de preço.",
      tech: ["Python", "BeautifulSoup", "SQLite", "Schedule"],
      github: "https://github.com/fernandesdev1/price-tracker-bot",
      category: "Automation"
    },
    {
      id: "pedecaja",
      name: "PedeCaja Platform",
      description: "Plataforma de delivery segura com arquitetura protegida, autenticação via cookies HttpOnly e validação rígida de dados.",
      tech: ["Node.js", "React", "JWT", "Security"],
      github: "https://github.com/fernandesdev1/pedecaja-demo",
      category: "Backend / Security"
    }
  ],
  contact: {
    github: "https://github.com/fernandesdev1",
    email: "nandessdev@gmail.com", // Placeholder
    linkedin: "https://www.linkedin.com/in/lindoberto-fernandes-499598404" // Placeholder
  }
};
