import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Bless</h3>
        <p className="footer-text">
          Merci de visiter mon portfolio. N'hésitez pas à me contacter pour discuter de vos projets !
        </p>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/beni-batantou-88681b316/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={22} />
          </a>
          <a href="https://github.com/kvonbatantou" target="_blank" rel="noopener noreferrer">
            <FaGithub size={22} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={22} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{opacity:'1'}}>&copy; {year} Bless - Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
