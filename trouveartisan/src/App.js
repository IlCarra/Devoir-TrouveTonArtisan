import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Importa il componente Header (Navbar)
import Header from './components/navbar'; 

// Importa i tuoi stili
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main id="main-content" role="main">
          <Routes>
            <Route path="/"/>
            {/* Aggiungi qui le altre rotte man mano che crei le pagine */}
          </Routes>
        </main>

        {/* Qui potresti inserire il componente Footer più avanti */}
      </div>
    </Router>
  );
}

export default App;
