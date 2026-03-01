import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Importa il componente Header (Navbar)
import Header from './components/navbar';
import Footer from './components/footer';

import Home from './pages/home';
import Artisan from './pages/artisan';

// Importa i tuoi stili
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header />

        <main id="main-content" className="flex-grow-1" role="main">
          <Routes>
            <Route path="/" element={<Home />}/>
            {/* Aggiungi qui le altre rotte man mano che crei le pagine */}
            <Route path="/artisan/:id" element={<Artisan />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
