import './Zertifikate.css';
import React, { useState} from 'react'; /*useEffect wird mir helfen, die Niveaus zu animieren*/
import {NavLink} from 'react-router-dom';


export default function Zertifikate() {

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
          <h2   style={{textAlign:'center'}}>Momentan habe ich noch keine Zertifikate außer die Sprachzertifikate von A1 bis C1
             und meine Leistungübersichtnote</h2>
        </div>
    )
}