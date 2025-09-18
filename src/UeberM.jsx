import './UeberM.css';
import React, { useState, useEffect } from 'react'; /*useEffect wird mir helfen, die Niveaus zu animieren*/
import {NavLink} from 'react-router-dom';
import B3 from './assets/B3.jpg';
import B4 from './assets/B4.jpg';



export default function UeberM() {
  const [activeCard, setActiveCard] = useState(null); // keine Auswahl am Anfang

  /*const contentinfo='Ich bin Mansvell, Student an der THM..' ; cest une possibilité*/
  const contentInfo= (
    <div>
        <p> Ich heiße Mansvell Nkwanga , bin 23 Jahre alt und wohne in Gießen.</p>
        <p> Ich studiere an der Technische Hochschule Mittelhessen(THM)im Bachelor 6.Semester. </p>
        <p>Als leidenschaftlicher Software Entwickler ist die Programmierung eine wesentlichere Sache für mich.</p>
        <p>Während meines Studiums an der THM habe ich an vielen Projekten gearbeitet, darunter
      dynamische Webanwendungen, AndroidAnwendungen, Videospiele auch mit KI. </p>
      <p>Ich bin immer motiviert, was Neues zu lernen. Meine Hobbys sind  Fußball spielen, Bücher lesen, und Reisen</p>
      <p><u>Email:</u> Mansvellnk@gmail.com</p>
      <p><u>Telephon:</u> +49 157 3463 1616</p>
    </div>
  );

  const contentBilder= (
       <div className="gallery">
           {[ B3, B4].map((src, index) => (
                < img  key={index} 
                src={src}  alt={`Bild ${index + 1}`} 
                className="gallery-image"
                 onClick={() => window.open(src, '_blank')} />
            ))}
         </div>
   );

   const skills = [
  { name: 'Java', percent: 80 },
  { name: 'Python', percent: 80 },
  { name: 'HTML5', percent: 80 },
  { name: 'Kotlin', percent: 80 },
  { name: 'CSS 3', percent: 80 },
  { name: 'Typescript', percent: 70 },
  { name: 'Javascript', percent: 70 },
  { name: 'MySQL', percent: 80 },
  { name: 'Arduino', percent: 65 },
  { name: 'C', percent: 60 },
  ];

  const kenntnisse = [
  { name: 'Datenbank', percent: 80 },
  { name: 'React.js', percent: 70 },
  { name: 'Vert.X (Backend)', percent: 80 },
  { name: 'Git & GitHub', percent: 80 },
  { name: 'Docker', percent: 70 },
  { name: 'Jetpack Compose', percent: 80 },
  { name: 'Betriebsystem: Windows/Linux', percent: 70 },
  { name: 'Bootstrap/Framework', percent: 75 },
  { name: 'LaTeX', percent: 70 },
  { name: 'Markdown', percent: 80 },
];

    const [animateBars, setAnimateBars] = useState(false); 

 useEffect(() => {
  if (activeCard === 'skills') {
    setAnimateBars(true);
  } else {
    setAnimateBars(false);
  }
}, [activeCard]);

  const contentSkills = (
   <div className="skills-wrapper">
       <div className="skills-grid">
            <h3 style={{ color: 'red' }}>Kodierfähigkeiten</h3>
              {skills.map((skill, idx) => (
               <div className="skill-bar" key={idx}>
                 <div className="label">
                   <span>{skill.name}</span>
                   <span>{skill.percent}%</span>
                 </div>
                 <div className="bar">
                   <div
                    className="progress"
                    style={{
                    width: animateBars ? `${skill.percent}%` : '0%',
                    transition: 'width 1s ease-in-out'
                    }}
                   > 
                  </div>
                 </div>
                </div>
             ))}
        </div>

        <div className="skills-grid">
           <h3 style={{ color: 'red' }}>Kenntnisse</h3>
            {kenntnisse.map((skill, idx) => (
              <div className="skill-bar" key={idx}>
                 <div className="label">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
              <div className="bar">
              <div
              className="progress"
              style={{
                width: animateBars ? `${skill.percent}%` : '0%',
                transition: 'width 1s ease-in-out'
              }}
              ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const cards = [
  { id: 'info', title:'Informationen😋', content: contentInfo },
  {id: 'bilder', title:'Bilder🖼️', content: contentBilder },
  {id: 'skills',title: 'Kodierfähigkeiten💻', content: contentSkills }
];


  return (
    <div className="ueber-container">
      <nav className="navbar">
        <div className="logo">MnK<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmN6dHdwMGNzcTZnbzU2ZTBmeXpjYXg5d2QzdWVyaWY1dm40c2cxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yfPmYMIsbeuRP8odz0/giphy.gif" alt="smile" width="40" height="40" /></div>
        <ul className="nav-links">
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/ueber-mich" end>Über mich</NavLink></li>
          <li><NavLink to="/zertifikate">Zertifikate</NavLink></li>
          <li><NavLink to="/lebenslauf">Lebenslauf</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        </ul>
      </nav>

      <div className="cards-container">
        {cards.map((card) =>(
          <div
            key={card.id}
            className={`card ${activeCard === null ? 'show' : activeCard === card.id ? 'active' : 'hide'}`}
            onClick={() => setActiveCard(card.id)}>
          
            <h2>{card.title}</h2>

            {activeCard === card.id && (
              <div className="card-content">
                <p>{card.content}</p>
                <button onClick={(e) => { e.stopPropagation(); setActiveCard(null); }}>Zurück</button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="overlay-dark"></div>
    </div>
  );
}
