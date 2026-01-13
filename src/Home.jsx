import './Home.css';
import Typewriter from 'typewriter-effect';
import { NavLink } from 'react-router-dom';
import githubIcon from './assets/gitIcon.png'; 
import linkedIn from './assets/inlogo.webp'
import { useState } from 'react';

export default function Home() {
  // AJOUTE cet état
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">MnK<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmN6dHdwMGNzcTZnbzU2ZTBmeXpjYXg5d2QzdWVyaWY1dm40c2cxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yfPmYMIsbeuRP8odz0/giphy.gif" alt="smile" width="40" height="40" /></div>
        <button
          className="menu-toggle"
          aria-label="Menü"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/ueber-mich" onClick={() => setMenuOpen(false)}>Über mich</NavLink></li>
          <li><NavLink to="/zertifikate" onClick={() => setMenuOpen(false)}>Zertifikate</NavLink></li>
          <li><NavLink to="/lebenslauf" onClick={() => setMenuOpen(false)}>Lebenslauf</NavLink></li>
          <li><NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink></li>
        </ul>
      </nav>

      
      <div className="content">
        <h2 style={{ color: 'red', marginBottom:'20px' }}>Hallo,  Herzlich Willkommen !<br/>
            ich bin<span style={{ color: 'white' }}>
          <Typewriter
            options={{
              strings: ['Mansvell Nkwanga','Informatik Student','Software Entwickler'],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              delay: 75,
            }}
          />
        </span> </h2>
        

        <div className="buttons">
          <a href="https://github.com/mansvell" target="_blank" rel="noreferrer">GitHub <img src={githubIcon} alt="GitHub" width='25px' height='25px' /></a>
          <a href="https://www.linkedin.com/in/mansvell-nkwanga-59a0a8279" target="_blank" rel="noreferrer">LinkedIn <img src={linkedIn} alt="Linkedin" width='25px' height='25px' /></a>
        </div>
        
      </div>
        
      <div className="foot">
          <footer>©2025 Copyright: Mansvell NK.| Letzte Aktualisierung:13.01</footer>
        </div>
    </div>
    
  );
}
