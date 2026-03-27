import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ArtisanCard from '../components/artisanCard';

function Recherche() {
    const [results, setResults] = useState([]);
    const location = useLocation();

    const query = new URLSearchParams(location.search).get('q');

    useEffect(() => {
        if (query) {
                fetch (`http://localhost:3000/api/search?q=${query}`)
                .then(res => res.json())
                .then(data => setResults(data))
                .catch(err => console.error(err));
        }
    }, [query]);

    return (
        <div className='container mt-4'>
            <h2>Resultats pour: "{query}"</h2>
            <div className='row'>
                {results.length > 0 ? (
                    results.map(art => (
                        <div className='col-md-4' key={art.id}>
                            <ArtisanCard artisan={art}></ArtisanCard>
                        </div>
                    ))
                ) : (
                    <p>Pas de artisans trouvé pour cette recherche !</p>
                )}
            </div>
        </div>
    );
}

export default Recherche;