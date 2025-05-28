import { useEffect, useRef, useState } from "react";
import { FaReact, FaPenNib, FaShoppingBag } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import "./Projets.css";

const projetsData = [
  {
    title: "Mon Portfolio",
    description:
      "Un portfolio professionnel conçu avec React.js et Tailwind CSS pour présenter mes projets, compétences et mon parcours. Responsive, rapide et bien animé.",
    icon: <MdWeb size={50} color="#0ea5e9" />,
    projectUrl: "",
  },
  {
    title: "Blog Technique",
    description:
      "Un blog moderne développé avec React. Il permet de publier et de gérer des articles, avec une interface utilisateur claire et intuitive.",
    icon: <FaPenNib size={50} color="#6366f1" />,
    projectUrl: "",
  },
  {
    title: "Site E-commerce",
    description:
      "Plateforme e-commerce performante construite avec React et Node.js. Fonctionnalités : panier, paiements, admin panel et notifications en temps réel.",
    icon: <FaShoppingBag size={50} color="#22c55e" />,
    projectUrl: "",
  },
];

export default function Projets() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projets-section" id="projets" ref={containerRef}>
      <h2 className={`projets-title ${visible ? "fade-in-top" : ""}`}>
        Projets Réalisés
      </h2>
      <p className={`projets-subtitle ${visible ? "fade-in-top" : ""}`}>
        Voici quelques projets qui démontrent mes compétences en développement frontend moderne.
      </p>
      <div className="projets-cards">
        {projetsData.map((projet, index) => (
          <div
            key={index}
            className={`projet-card ${visible ? `slide-in delay-${index}` : "hidden"}`}
          >
            <div className="icon-wrapper">{projet.icon}</div>
            <h3>{projet.title}</h3>
            <p>{projet.description}</p>
            <a
              href={projet.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-projet"
            >
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
