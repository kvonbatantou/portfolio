import { Code, Layout, Zap, Atom } from "lucide-react";

export const skillsData = [
  {
    name: "HTML5",
    icon: <Code color="#e44d26" size={40} />,
    level: 90,
    description: "Structure sémantique, SEO, accessibilité",
  },
  {
    name: "CSS3",
    icon: <Layout color="#264de4" size={40} />,
    level: 85,
    description: "Flexbox, Grid, animations, responsive design",
  },
  {
    name: "JavaScript",
    icon: <Zap color="#f0db4f" size={40} />,
    level: 80,
    description: "ES6+, DOM, API, événements",
  },
  {
    name: "React.js",
    icon: <Atom color="#61dafb" size={40} />,
    level: 75,
    description: "Hooks, composants réutilisables, gestion d'état, routing",
  }
];
