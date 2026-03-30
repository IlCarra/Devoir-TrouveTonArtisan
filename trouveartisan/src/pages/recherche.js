import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
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
        <Container className='mt-5 mb-5'>
            <h2 className='text-center mb-5 fw-bold section-title'>
                Résultats pour : <span className='text-primary'>"{query}</span>
            </h2>

            <Row className='g-4'>
                {results.length > 0 ? (
                    results.map(art => (
                        <Col key={art.id} xs={12} md={6} lg={4}>
                            <ArtisanCard artisan={art} />
                        </Col>
                    ))
                ) : (
                    <Col xs={12} className='text-center py-5'>
                        <i className='bi bi-search display-1 text-muted'></i>
                        <p className='fs-4 text-muted mt-3'>
                            Pas d'artisans touvés pour cette recherche !
                        </p>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Recherche;