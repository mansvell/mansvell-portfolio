import './Lebenslauf.css';
import { NavLink } from 'react-router-dom';

export default function Lebenslauf() {
  return (
    <div className="lebenslauf-container">
      <nav className="navbar">
        <div className="logo">MnK<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmN6dHdwMGNzcTZnbzU2ZTBmeXpjYXg5d2QzdWVyaWY1dm40c2cxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yfPmYMIsbeuRP8odz0/giphy.gif" alt="smile" width="40" height="40" /></div>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/über-mich">Über mich</NavLink></li>
          <li><NavLink to="/zertifikate">Zertifikate</NavLink></li>
          <li><NavLink to="/lebenslauf" end>Lebenslauf</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        </ul>
      </nav>

      <div className="download-section">
        <h3>📄 Lebenslauf herunterladen: </h3> 
        <a className="download-btn"  href="/Lebenslauf-NK.pdf"  download="Lebenslauf-NK.pdf" > Download  </a>
      </div> 

      <div className="sections">
        <div className="section left">
          <h2 style={{textAlign:'center'}}><u> - Bildungsweg - </u></h2>
          <ul>
            <li><strong style={{color:'red'}}>04/2023 - HEUTE:</strong>TECHNISCHE HOCHSCHULE MITTELHESSEN (THM)</li>
                    <p>° Programmierung interaktiver Systeme (JAVA)</p>
                    <p>° Grundlage der künstlichen Intelligenz(PYTHON) </p>
                    <p>° Datenbank ( MariaDB, SQL , ERM) </p>
                    <p>° Android-Praktikum ( AndroidApp , KOTLIN) </p>
                    <p>° Objektorientierte Programmierung(JAVA)</p>
                    <p>°  Praktische Informatik 1&2(HTML,VERT.X,CSS,JS)</p>
                    <p>°  Konzepte systemnaher Programmierung (C#)</p>
                    <p>° Algorithmen und Datenstrukturen </p>
            <li><strong style={{color:'red'}}> 10/2022 - 12/2022:</strong> EIFERT SPRACHZENTRUM (FRANKFURT)</li>
                <p> <u> Abscluss:</u> Telc-Zertifikat C1 Hochschule</p>
            <li><strong style={{color:'red'}}>12/2020 - 04/2022:</strong>GOETHE INSTITUT SPRACHSCHULE  (KAMERUN)</li>
                <p> <u> Abscluss:</u>  Goethe-Zertifikat A1, A2, B1, B2</p>
            <li><strong style={{color:'red'}}> 09/2012 - 07/2020:</strong>BILINGUALES GYMNASIUM VON MENDONG </li>
                <p><u> Abscluss:</u> Abitur mit Schwerpunkt: Mathematik, Physik, und Naturwissenschaft</p>
          </ul>
        </div>

        <div className="section right">
          <h2 style={{textAlign:'center'}}><u> - Praktische Erfahrungen</u> -</h2>
          <ul>
            <li><strong style={{color:'red'}}>04/2023 - HEUTE:</strong> TECHNISCHE HOCHSCHULE MITTELHESSEN</li>
               <p>  ° Entwicklung einer Webanwendung(MJ-Shop) von Rezepteverwaltung,wo Nutzer Account erstellen können und Rezepte verwalten (Frontend: HTML,
                              CSS,javascript,Handelbars. BackEnd: JAVA, Vert.X)</p>
                <p> ° Entwicklung von einem Brettspiel(QAWALE)in Team, in dem man gegen KI spielen kann( Python und PYGAME)</p>
               <p>° Entwicklung einer Android-App (SmartSaveApp) für die Verwaltung von Sparzielen ,Bankkonto und Sparkonto mit Kotlin & JetpackCompose</p>
                 <p>° Entwicklung von 4 Videospieleb mit java (Pokemon, Fruchtninja, pokeball,4Gewinn) mit MVC-Struktur </p>
                 <p> ° Aufbau einer virtuellen Maschine mit der Programmiersprache C#</p>
                 <p>° Aufbau eines Compilers mithilfe von JAVA, KOTLIN ,CUP </p>
          </ul>
          <h2 style={{textAlign:'center'}}><u> - Berufserfahrungen</u> -</h2>
            <p>...  </p>
        </div>
      </div>
    </div>
  );
}
