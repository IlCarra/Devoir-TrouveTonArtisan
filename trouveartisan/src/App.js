import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Importa il componente Header (Navbar)
import Header from './components/navbar'; 

// Importa i tuoi stili
import './App.scss';

// Componenti di pagina temporanei (o quelli che hai già creato)
const Home = () => <div className="p-5"><h1>Accueil - Région Auvergne-Rhône-Alpes</h1></div>;
const Administration = () => <div className="p-5"><h1>L'Administration</h1></div>;

function App() {
  return (
    <Router>
      <div className="App">
        {/* 2. Inserisci l'Header qui: sarà presente in tutte le pagine */}
        <Header />

        {/* 3. Il contenuto principale (Accessibilità: role="main" e id per lo skip link) */}
        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/administration" element={<Administration />} />
            {/* Aggiungi qui le altre rotte man mano che crei le pagine */}
          </Routes>
        </main>

        {/* Qui potresti inserire il componente Footer più avanti */}
      </div>
    </Router>
  );
}

export default App;
