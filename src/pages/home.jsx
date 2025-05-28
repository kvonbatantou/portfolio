import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skills from '../components/skills';
import Projets from './projets';
import About from '../pages/about';
import Contact from '../pages/contact';
import './home.css';

const Home = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const timeouts = [];

    ['enfant', 'contenair', 'text1', 'text2', 'button'].forEach((item, index) => {
      const timeout = setTimeout(() => {
        setVisibleItems((prev) => [...prev, item]);
      }, index * 300);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
   <div>
      <div className="parent2">
      <div className={`enfant ${visibleItems.includes('enfant') ? 'fade-in' : ''}`}>
        <div className={`contenair ${visibleItems.includes('contenair') ? 'fade-in' : ''}`}>
          <div className="img1"></div>
          <span className={`${visibleItems.includes('text1') ? 'fade-in' : ''}`}>Beni Batantou</span>
          <p className={`${visibleItems.includes('text2') ? 'fade-in' : ''}`}>Suis un développeur web</p>
          <button className={`btn ${visibleItems.includes('button') ? 'fade-in' : ''}`}>
            <Link to="/about">En savoir plus</Link>
          </button>
        </div>
      </div>
    </div>
     <About /> 
     <Skills /> 
     <Projets /> 
     <Contact /> 
   </div>
  );
};

export default Home;
