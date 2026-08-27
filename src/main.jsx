import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'; 
import './index.css';
import UeberM from './UeberM.jsx';
import Lebenslauf from './Lebenslauf.jsx';
import Zertifikate from './Zertifikate.jsx';
import Portfolio from './Portfolio.jsx';
import { AppProvider } from "./context/AppContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AppProvider>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-mich" element={<UeberM />} />
          <Route path="/lebenslauf" element={<Lebenslauf/> }/>
          <Route path="/portfolio" element={<Portfolio /> }/>
          <Route path="/zertifikate" element={<Zertifikate/>}/>
        </Routes>
      </BrowserRouter>
     </AppProvider>

  </React.StrictMode>
  
);
