import React from "react";
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const artisanDuMois = [
    {id: 1, nom: "Nom artisan N°1", etoiles: 5},
    {id: 2, nom: "Nom artisan N°2", etoiles: 4.5},
    {id: 3, nom: "Nom artisan N°3", etoiles: 4}
];

function Home() {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<i key={i} className="bi bi-star-fill text-success me-1"></i>);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<i key={i} className="bi bi-star-half text-success me-1"></i>);
            } else {
                stars.push(<i key={i} className="bi bi-star text-success me-1"></i>);
            }
        }
        return stars;
    };

    const steps = [
        {id:1, text: "Choisir la catégorie d'artisanat dans le menu."},
        {id:2, text: "Choisir un artisan."},
        {id:3, text: "Le contacter via le formulaire de contact."},
        {id:4, text: "Une réponse sera apportée sous 48h."}
    ];

    return (
        <div className="home-page">
            {/* HERO SECTION */}
            <section className="hero-section text-center py-5">
                <Container>
                    <div className="hero-box p-5 rounded-4 shadow">
                        <h1 className="display-5 fw-bold text-white mb-4">
                            Trouvez l'artisasn parfait pour vos projets
                        </h1>
                        <Button variant="light" size="lg" className="px-5 rounded-pill fw-bold">
                            Commencer
                        </Button>
                    </div>
                </Container>
            </section>

            {/* "HOW IT WORKS" SECTION */}
            <section className="how-it-works rounded-4 py-5 bg-light shadow-sm">
                <Container>
                    <h2 className="text-center mb-5 fw-bold section-title">
                        Comment trouver mon artisan ?
                    </h2>
                    <Row className="g-4">
                        {steps.map((step) => (
                            <Col key={step.id} xs={12} md={6} lg={3}>
                                <Card className="h-100 border-0 shadow text-center p-4 step-card rounded-4">
                                    <Card.Body>
                                        <div className="step-number mb-3">{step.id}.</div>
                                        <Card.Text className="text-muted">
                                            {step.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            {/* Artisan Cards */}
            <section className="artisan-cards rounded-4 py-5">
                <Container className="bg-light-blue-section p-5 rounded-5 shadow-sm">
                    <h2 className="mb-5 acards-title">
                        Artisans du mois
                    </h2>

                    <Row className="g-4 justify-content-center">
                        {artisanDuMois.map((artisan) => (
                            <Col key={artisan.id} lg={4} md={6} xs={12}>
                                <Link to={`/artisan/${artisan.id}`} className="text-decoration-none text-dark">
                                    <Card className="h-100 border-0 shadow-sm artisan-card rounded-4 p-3">
                                        <Card.Body className="text-start">
                                            {/* Icone Profile */}
                                            <div className="profile-icon-container mb-3">
                                                <i className="bi bi-person-circle display-1"></i>
                                            </div>
    
                                            <Card.Title className="fw-bold h5">{artisan.nom}</Card.Title>
                                            <Card.Text className="mb-1">Spécialité</Card.Text>
                                            <Card.Text className="text-muted mb-3">Adresse artisan N°{artisan.id}</Card.Text>
        
                                            {/* Etoiles */}
                                            <div className="rating-stars">
                                                {renderStars(artisan.etoiles)}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;