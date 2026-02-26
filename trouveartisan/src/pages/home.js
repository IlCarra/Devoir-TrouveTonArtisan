import React from "react";
import {Container, Row, Col, Button, Card} from 'react-bootstrap';

function Home() {
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
            <section className="how-it-works rounded-4 py-5 bg-light">
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
        </div>
    );
};

export default Home;