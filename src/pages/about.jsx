import './about.css';
import Image from '../assets/images/profil.jpg';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef({
    img: null,
    desc1: null,
    desc2: null,
    desc3: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const name = entry.target.getAttribute('data-section');
            if (!visibleSections.includes(name)) {
              setVisibleSections(prev => [...prev, name]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = sectionRefs.current;
    const sections = ['img', 'desc1', 'desc2', 'desc3'];

    sections.forEach(section => {
      if (currentRefs[section]) {
        observer.observe(currentRefs[section]);
      }
    });

    return () => {
      sections.forEach(section => {
        if (currentRefs[section]) {
          observer.unobserve(currentRefs[section]);
        }
      });
    };
  }, [visibleSections]);

  const isVisible = (section) => visibleSections.includes(section);

  return (
    <div className="font">
      <div className="parent4">
        <h2>A propos de moi</h2>
        <div className="enfant5">
          <div
            ref={el => sectionRefs.current.img = el}
            data-section="img"
            className={`enfant6 ${isVisible('img') ? 'slide-in-left' : ''}`}
          >
            <img className="img" src={Image} alt="mon profil" />
          </div>

          <div className="description">
            <div
              ref={el => sectionRefs.current.desc1 = el}
              data-section="desc1"
              className={`desc1 ${isVisible('desc1') ? 'fade-in' : ''}`}
            >
              <h3>Salut, je suis <span className='spn'>Beni Justy</span></h3>
              <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
                Je suis un <strong>étudiant en deuxième année</strong> passionné par le développement web.
                Curieux, créatif et toujours à la recherche de nouveaux défis, je maîtrise HTML, CSS, JavaScript,
                React.js, Tailwind CSS et Bootstrap.
              </p>
            </div>

            <div
              ref={el => sectionRefs.current.desc2 = el}
              data-section="desc2"
              className={`desc2 ${isVisible('desc2') ? 'fade-in' : ''}`}
            >
              <div className="inf1"><span className="sp1">Nom:</span><p className="p1">Batantou</p></div>
              <div className="inf1"><span className="sp1">Prénom:</span><p className="p1">Beni Justy Caleb</p></div>
              <div className="inf1"><span className="sp1">Âge:</span><p className="p1">21 ans</p></div>
              <div className="inf1"><span className="sp1">TEL:</span><p className="p1">06 705 66 35</p></div>
              <div className="inf1"><span className="sp1">Email:</span><p className="p1">benibatantou32@gmail.com</p></div>
              <div className="inf1"><span className="sp1">Site web:</span><p className="p1">beni.eces-code.com</p></div>
            </div>

            <div
              ref={el => sectionRefs.current.desc3 = el}
              data-section="desc3"
              className={`desc3 ${isVisible('desc3') ? 'fade-in' : ''}`}
            >
              <button className="btn1">Télécharger mon CV</button>
              <Link className='lien' to="/contact">Me contacter</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
