import './Portfolio.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import githubIcon from './assets/gitIcon.png'; 
import project1 from './assets/portfolio.png';
import project2 from './assets/smart.png';
import projectDemo2 from '/smartDemo.mp4';
import project3 from './assets/qawale.jpg';
import projectDemo3 from '/QawaleDemo.mp4';
import project4 from './assets/mjshop.png';
import projectDemo4 from '/mjshopDemo.mp4';
import project5 from './assets/WPF.png';
import projectDemo5 from '/WPFDemo.mp4';

import project6 from './assets/FN.png';
import projectDemo6 from '/FNDemo.mp4';
import project7 from './assets/pokep.png';
import projectDemo7 from '/pokepDemo.mp4';
import project8 from './assets/compiler.png';
import projectScreen8 from './assets/compiler.png';
import project9 from './assets/ksp.jpg';
import projectScreen9 from './assets/ksp.jpg';
import project10 from './assets/ibitak.png';
import projectDemo10 from '/ibitakDemo.mp4';
import project11 from './assets/arduino.png';
import projectDemo11 from '/arduinoDemo.mp4'  ;
import project12 from './assets/umrhf.png';
import projectDemo12 from '/umrhfDemo.mp4';




const projects = [
  {
    id: 1,
    title: 'Mein Portfolio',
    image: project1,
    github: 'https://github.com/mansvell',
    description: (
        <div>
           <h3>Diese Webseite stellt mein Portfolio dar und besteht aus 4 Teilen. es enthält meine Informationen, Zertifikate,
              Lebenslauf und meine Projekte "sowohl Einzelprojekte als auch Teamprojekte😋"</h3>
           <div >
            <p><u>| Einzelprojekt |</u> </p>
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>React.js ,   CSS , html </span> </h3>
           </div> 
        </div>),

  },
  {
    id: 2,
    title: 'SmartSaveApp',
    image: project2,
    github: 'https://github.com/mansvell/SmartSaveApp.git',
    description: (
        <div>
           <p>Das ist eine AndroidApp ,die mit Bankkonto, Kreditkartekonto oder Sparkonto verbindet ist und ermöglicht die Verwaltung von Sparzielen 
             durch ein Sparkonto.Der User kann auch seine Umsätze kategorisieren und verwalten, also nach der Registrierung</p>
            <p><u>Vorlesung</u>: Android-Praktikum  |  (TeamArbeit-3Pers)<u>Bewertung des Projekts</u>: 100</p>
            <p><u>Meine Rollen</u>: Implementierung der Logik: 50% , Implementierung der UI :35% , Erstellung Roomdatenbank:50%</p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>KOTLIN, Jetpack Compose, Layout-XML, Roomdatabase, MySQL, Firebase, Git</span> </h3>
           </div>
           
        </div>),
    video: projectDemo2,
    screenshots: [ , ]
  },
  {
    id: 3,
    title: 'Qawale',
    image: project3,
    github: 'https://github.com/mansvell/Brettspiel-Qawale.git',
    description: (
        <div>
           <p>In diesem Projekt geht es um das neue Brettspiel Qawale, man kann gegen KI oder einen anderen Spieler spielen. 
            Es gibt auch unterschiedliche Spiellevel für KI. um zu gewinnen, muss man 4 Steine aneinanderreihen (horizontal/vertical/diagonal)</p>
            <p><u>Vorlesung</u>: Grundlage der Data Science  |  (TeamArbeit-3Pers)<u>Bewertung des Projekts</u>: 96</p>
            <p><u>Meine Rollen</u>: Implementirung der QawaleLogik: 30% , Implementierung der GUI: 100%, Trainieren der KI-Spieler: 50% </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>Python, pygame , KI  ,Git</span> </h3>
           </div>
           
        </div>),
    video: projectDemo3,
    screenshots: [ , ]
  },
  {
    id: 4,
    title: 'MJ-Shop',
    image: project4,
    github: 'https://github.com/mansvell/Webanwendung-MJ-Shop.git',
    description: (
        <div>
           <p>Das Projekt besteht aus einer Datenbank, Frontend, Backend, Tests. In der App können Nutzer Account & Rezepte erstellen,
             Rezepte kommentieren & bewerten, in Favoritenliste und Einkaufsliste hinzufügen und löschen. </p>
             <p><u>Vorlesung</u>: Informatik-projekt | (TeamArbeit-2Pers)<u>Bewertung des Projekts</u>: 82</p>
            <p><u>Meine Rollen</u>: implementierung Frontend: 100%, implementierung BackEnd: 40%, Erstellung Datenbank:100% </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>JAVA , Vert.X, HTML5, CSS , Bootstrap, Handelbar, Javascript, Git, MySQL</span> </h3>
           </div>
           
        </div>),
    video: projectDemo4,
    screenshots: [ , ]
  },
  {
    id: 5,
    title: 'Feuer-Wasser-Pflanze',
    image: project5,
    github: 'https://github.com/mansvell',
    description: (
        <div>
           <p>Das ist ein entspannendes Webspiel. Es besteht aus 3 Pokemon. Pokemon Shiggy kann nur Pokemon Glumanda schlagen,
             Pokemon Glumanda kann nur Pokemon Bisasam schlagen und Pokemon Bisasam kann nur Pokemon Shiggy schlagen.
             links erscheint der ausgewählte Pokemon des Users und rechts der Pokemon des Computers.</p>
            <p><u>| Einzelprojekt |</u> </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}> HTML5,  CSS , Javascript, Typescript </span> </h3>
           </div>
           
        </div>),
    video: projectDemo5,
    screenshots: [ , ]
  },
  
  {
    id: 6,
    title: 'Fruchtninja',
    image: project6,
    github: 'https://github.com/mansvell/Frucht-Ninja-Spiel.git',
    description: (
        <div>
           <p>Das Spiel basiert auf MVC-Struktur(Modell,View,Controller). Das Prinzip: frucht fliegen und fallen runter und der Spieler versucht,
            Bombs zu vermeiden, alle Früchte zu schneiden, bevor die runterfallen  </p>
            <p><u>Vorlesung</u>: Progrmamierung interaktive Systeme | (Einzelprojekt)<u>Bewertung des Projekts</u>: 75</p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>JAVA, Processing </span> </h3>
           </div>
           
        </div>),
        video:projectDemo6,
    screenshots: [ ],
  },
  {
    id: 7,
    title: 'PokePong',
    image: project7,
    github: 'https://github.com/mansvell/Pokemon-Pong.git',
    description: (
        <div>
           <p>Javaspiel, in dem zwei Pokemons zusammen ping-pong spielen(Steuerung 1.Spieler:W,S 2.Spieler:Up,Down)</p>
           <p><u>| Einzelprojekt |</u> </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}> JAVA, Processing </span></h3>
           </div>
           
        </div>),
    video: projectDemo7,
    screenshots: [ , ]
  },
  {
    id: 8,
    title: 'Compiler',
    image: project8,
    github: 'https://github.com/mansvell/Compilerbau.git',
    description: (
        <div>
           <p> In diesem Projekt habe ich einen Compiler für die kleine Programmiersprache "spl" gebaut.das Projekt besteht darin, 
               einen Compiler zu erstellen und in SPl-programmen zu testen. Zum Bestehen mindestens 60%. </p>
           <p><u>Vorlesung:</u> Compilerbau | (Einzelprojekt)<u>Bestanden mit</u> 90%</p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>JAVA, Kotlin, CUP, SPL</span> </h3>
           </div>
           
        </div>),
    screenshots:[projectScreen8  ] ,
  },
  {
    id: 9,
    title: 'Ninja Virtuelle Maschine',
    image: project9,
    github: 'https://github.com/mansvell',
    description: (
        <div>
           <p>in diesem Projekt habe ich eine Ninja virtuelle Maschine gebaut. Zum Bestehen mindestens 15. </p>
           <p><u>Vorlesung:</u> Konzepte Systemnaher Programmierung | (Einzelprojekt)<u>Bestanden mit</u> 18/27 </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>C# , Git</span> </h3>
           </div>
           
        </div>),
    screenshots:[ projectScreen9 ] ,
  },
  {
    id: 10,
    title: 'Ibitak Collision',
    image: project10,
    github: 'https://github.com/mansvell/Ibitak-Kollision.git',
    description: (
        <div>
           <p>Ibitak ist ein Pokemon(Vögel). In diesem kleinen Projekt sind die Behandlung von MVC-Struktur und Kollisionen sehr wichtig, viele Ibitak fliegen und
               wenn ein Ibitak den Kopf eines anderen berührt ,verschwindet dieser berührte Ibitak direkt. </p>
            <p><u>| Einzelprojekt |</u> </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}> JAVA, processing</span> </h3>
           </div>
           
        </div>),
    video: projectDemo10,
    screenshots: [ , ]
  },
  {
    id: 11,
    title: 'LED Steuerung',
    image: project11,
    github: 'https://github.com/mansvell',
    description: (
        <div>
           <p>in diesem kleinen Projekt implementiere ich die Steuerung von LED(licht). </p>
            <p><u>Vorlesung:</u> Technische Informatik 2 | (Einzelprojekt) </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}> C , Arduino ESP32</span> </h3>
           </div>
           
        </div>),
    video: projectDemo11,
    screenshots: [ , ]
  },
  
  {
    id: 12,
    title: 'Umrechnungshilfe',
    image: project12,
    github: 'https://github.com/mansvell/Umrechnungshilfe.git',
    description: (
        <div>
           <p>Das ist eine Android Anwendung ,die dem Nutzer ermöglicht ,Umrechnungen von Distanz, Temperatur, Datenkapazität vorzunehmen</p>
           <p><u>| Einzelprojekt |</u> </p>
           <div >
              <h3 ><u>Skills:</u> <span style={{color:'rgb(0, 217, 255)'}}>KOTLIN </span> </h3>
           </div>
           
        </div>),
    video: projectDemo12,
    screenshots: [ , ]
  },

];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="logo">MnK<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmN6dHdwMGNzcTZnbzU2ZTBmeXpjYXg5d2QzdWVyaWY1dm40c2cxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yfPmYMIsbeuRP8odz0/giphy.gif" alt="smile" width="40" height="40" /></div>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/über-mich">Über mich</NavLink></li>
          <li><NavLink to="/zertifikate">Zertifikate</NavLink></li>
          <li><NavLink to="/lebenslauf">Lebenslauf</NavLink></li>
          <li><NavLink to="/portfolio" end>Portfolio</NavLink></li>
        </ul>
      </nav>

      <div className="projects-grid">
        {projects.map((project,idx) => (
          <div key={idx}
              className={`project-card ${activeProject === null ? 'show' : activeProject === idx ? 'active' : 'hide'}`}
                onClick={() => setActiveProject(idx)} >

            {activeProject !== idx && (
                 <img src={project.image} alt={project.title} />
             )}

            {activeProject !== idx && (
            <div className="card-header">
              <h3>{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
            </div>
             )}

            {activeProject === idx && (
              <div className="project-content">
                <h2 style={{color:'red'}}>{project.title}</h2>
              <p>{project.description}</p>
               {project.video && (
                    <video className="videoo" controls width="70%" height="50%">
                      <source src={project.video} type="video/mp4" />
                    </video>
               )}
         
               {project.screenshots && (
                 <div className="screenshots">
                    {project.screenshots.map((img, i) => (
                       <img key={i} src={img} alt="screenshot" />
                    ))}
                 </div>
               )}

                <button className="close-btn" onClick={(e) => { 
                    e.stopPropagation();
                    setActiveProject(null);
                }}> Zurück</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


