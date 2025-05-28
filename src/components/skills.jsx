import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";

const useInView = () => {
  const ref = useRef();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

// Hook pour animer un compteur
const useCounter = (target, isInView) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const increment = Math.ceil(target / 30);
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 30);

    return () => clearInterval(interval);
  }, [target, isInView]);

  return count;
};

const skillsData = [
  { name: "HTML", level: "Avancé", percent: 92, icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", level: "Avancé", percent: 90, icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", level: "Intermédiaire +", percent: 65, icon: <FaJs color="#f0db4f" /> },
  { name: "Bootstrap", level: "Bonnes bases", percent: 70, icon: <BsBootstrap color="#7952B3" /> },
  { name: "React", level: "Intermédiaire +", percent: 50, icon: <FaReact color="#61dafb" /> },
  { name: "Tailwind CSS", level: "Très à l'aise", percent: 60, icon: <SiTailwindcss color="#38BDF8" /> },
];

const Skills = () => {
  const [ref, isInView] = useInView();
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    if (isInView) {
      const delays = skillsData.map((_, index) =>
        setTimeout(() => {
          setVisibleIndexes((prev) => [...prev, index]);
        }, index * 200)
      );
      return () => delays.forEach(clearTimeout);
    }
  }, [isInView]);

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="skills-container">
        <h2 className={`skills-title ${isInView ? "fade-in" : ""}`}>Mes Compétences</h2>
        <p className={`skills-description ${isInView ? "fade-in-delayed" : ""}`}>
          En tant qu’étudiant en deuxième année passionné par le développement web,
          je maîtrise les bases solides du web moderne avec <strong style={{color:'#007bff'}}>HTML</strong> et <strong style={{color:'#007bff'}}>CSS</strong>,
          tout en m’appuyant sur la puissance de <strong style={{color:'#007bff'}}>JavaScript</strong> pour créer des interfaces dynamiques.
          J’utilise <strong style={{color:'#007bff'}}>React.js</strong> pour concevoir des applications interactives et performantes,
          et je complète mes projets avec des frameworks puissants comme <strong style={{color:'#007bff'}}>Bootstrap</strong> et <strong style={{color:'#007bff'}}>Tailwind CSS</strong>
           afin d’assurer un design responsive, professionnel et élégant.
          <br /><br />
          Mon objectif est de créer des expériences utilisateurs fluides, esthétiques et modernes,
          tout en continuant d’apprendre chaque jour avec rigueur et passion.
        </p>

        <div className="skills-grid">
          {skillsData.map((skill, index) => {
            const counter = useCounter(skill.percent, isInView);
            const isVisible = visibleIndexes.includes(index);

            return (
              <div
                key={index}
                className={`skill-card ${isVisible ? "slide-up" : "hidden"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <p className="skill-level">{skill.level}</p>
                <div className="progress-bar">
                <div
                  className={`progress-fill ${skill.name.toLowerCase().replace(/\s/g, "")}`}
                  style={{ width: `${counter}%` }}
                ></div>
                <span className="progress-percent">{counter}%</span>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
