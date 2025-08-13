import './Zertifikate.css';
import React, { useState,useEffect} from 'react'; /*useEffect wird mir helfen, die Niveaus zu animieren*/
import {NavLink} from 'react-router-dom';
import zert1 from './assets/ExamDocker.png'
import zert2 from './assets/git.png'
//import zert4 from './assets/react.png'*/
import zert3 from './assets/dockerComp.png'



const zertifs=[
    { 
      id: 1,
      src: zert1,
      link: (
        <div style={{background:'red', padding:'10px', color:'white'}}>
           <a href='https://www.linkedin.com/learning/certificates/0ae2ae3d13e97cf31016ab663c5e618f37d4ed81ce992e8fd39cca95c1555c20?trk=share_certificate'>Zertifikat in LINKEDIN überprüfen</a>
        </div>
        
      )
      },
    {
      id: 2,
      src: zert2,
      link: (
        <div style={{background:'red', padding:'10px', color:'white'}}>
           <a href='https://www.linkedin.com/learning/certificates/36c2176955fd29d613d683b4eac72305ff1f843c2893eaa46940c024c2e88a7d?trk=share_certificate'>Zertifikat in LINKEDIN überprüfen</a>
        </div>)
    },
    {
      id: 3,
      src: zert3,
      link: (
        <div style={{background:'red', padding:'10px', color:'white'}}>
           <a href='https://www.linkedin.com/learning/certificates/133bce8f943e6cadf904598cd9c33d47bc89097261d70b3df7e750e7b50ee479?trk=share_certificate'>Zertifikat in LINKEDIN überprüfen</a>
        </div>)
    },
    
  ];
export default function Zertifikate() {
        const [openIndex, setOpenIndex] = useState(null);
  

     return (
        <div className="zertifikate-container">
          <nav className="navbar">
            <div className="logo">MnK<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmN6dHdwMGNzcTZnbzU2ZTBmeXpjYXg5d2QzdWVyaWY1dm40c2cxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yfPmYMIsbeuRP8odz0/giphy.gif" alt="smile" width="40" height="40" /></div>
            <ul className="nav-links">
              <li><NavLink to="/" >Home</NavLink></li>
              <li><NavLink to="/über-mich" >Über mich</NavLink></li>
              <li><NavLink to="/zertifikate" end>Zertifikate</NavLink></li>
              <li><NavLink to="/lebenslauf">Lebenslauf</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            </ul>
          </nav>

          <h3 className="zertifikate-intro"> Diese zertifikate habe ich auf Online Plattform wie LinkedIn bekommen, um meine Kenntnisse zu erweitern</h3>

      <section className="cert-grid">
        {zertifs.map((c, i) => (
          <article className="cert-card" key={c.id}>
            <button
              className="cert-img-btn"
              onClick={() => setOpenIndex(i)}
              aria-label={`Zertifikat in groß öffnen`}
            >
              <img src={c.src} alt={c.id} loading="lazy" />
            </button>
      
          </article>
        ))}
      </section>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)} // clic sur l’overlay ferme
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
          
            <img
              src={zertifs[openIndex].src}
              alt={zertifs[openIndex].id}
              className="lightbox-image"
            />
            <div style={{padding:'20px'}}>{zertifs[openIndex].link}</div>
          </div>
        </div>
      )}
    </div>
  );
}