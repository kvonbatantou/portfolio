import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const whatsappNumber = "221123456789";

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Nom: ${formData.nom}%0AEmail: ${formData.email}%0AMessage: ${formData.message || "Bonjour, j'aimerais discuter de mes besoins en développement web avec vous."}`
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, "_blank");
    setFormData({ nom: "", email: "", message: "" });
  };

  return (
    <section
      ref={sectionRef}
      className={`contact-section ${isVisible ? "fade-in" : "fade-out"}`}
      id="contact"
    >
      <div className="contact-container">
        <h2 className="contact-title">Me Contacter</h2>
        <p className="contact-description">
          Si tu souhaites collaborer ou échanger sur des projets, je serai ravi de discuter avec toi !
          <br />
          N'hésite pas à m'envoyer un message, ou connecte-toi avec moi sur mes réseaux.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Ton nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ton email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Ton message (facultatif)"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="contact-button">
            Envoyer via WhatsApp
          </button>
        </form>

        <div className="contact-socials">
          <h3>Ou contacte-moi sur mes réseaux :</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
