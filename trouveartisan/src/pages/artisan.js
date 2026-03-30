import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Container, Row, Col, Spinner} from 'react-bootstrap';
import ContactForm from "../components/contactForm";

function Artisan() {
    const { id } = useParams();
    const [artisan, setArtisan] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/api/artisan/${id}`)
        .then(res => res.json())
        .then(data => {
            setArtisan(data);
            setLoading(false);
        })
        .catch(err => {
            console.error("Erreur dans la recuperation de l'artisan:", err);
            setLoading(false);
        });
    }, [id]);

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

    if (loading) {
        return (
            <Container className="py-5 text-center">
                <Spinner animation="border" variant="primary" />
            </Container>
        );
    }

    if (!artisan || artisan.message) {
        return (
            <Container className="py-5 text-center">
                <h2>Artisan pas touvé</h2>
            </Container>
        )
    }

    return (
        <div className="artisan-page">
            {/* HERO SECTION */}
            <section className="py-5">
                <Container>
                    <div className="artisan-header-banner bg-dark text-white p-4 p-md-5 rounded-5 shadow-lg d-flex align-items-center">
                        <Row className="w-100 align-items-center">

                            <Col key={artisan.id} xs={12} md={4} className="text-center text-md-start mb-4 mb-md-0">
                                    
                                    {/* Icone Profile */}
                                    <div className="profile-icon-wrapper bg-white rounded-circle d-inline-flex align-items-center justify-content-center3" style={{ width: '180px', height: '180px' }}>
                                        <i className="bi bi-person-circle text-dark profile-icon"></i>
                                    </div>
                            </Col>

                            <Col xs={12} md={8} className="ps-md-5">
                                <h1 className="display-5 fw-bold mb-3">{artisan.nom}</h1>

                                <div className="artisan-details fs-5">
                                    <p className="mb-2">
                                        <span className="opacity-75">Spécialité: </span> 
                                        <strong>{artisan.spécialité}</strong>
                                    </p>

                                    <p className="mb-2">
                                        <span className="opacity-75">Localisation </span> 
                                        <strong>{artisan.localisation}</strong>
                                    </p>

                                    <p className="mb-4">
                                        <span className="opacity-75">Site web: </span> 
                                        {artisan.website ? (
                                            <a
                                                href={artisan.website.startsWith('http') ? artisan.website : `https://${artisan.web}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white text-decoration-underline fw-bold"
                                            >
                                                {new URL(artisan.website.startsWith('http') ? artisan.website : `https://${artisan.website}`).hostname}
                                            </a>
                                        ) : (
                                            <span className="text-white-50">Non reseigné</span>
                                        )}
                                    </p>
                                </div>

                                <div className="rating-stars">
                                    {renderStars(artisan.note)}
                                    <span className="ms-2">({artisan.note})</span>
                                </div>                                
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            
            <Container className="mt-5">
                <div className="bg-light-blue-section p-4 p-md-5 rounded-5 shadow-sm text-start">
                    <h2 className="fw-bold mb-4">A propos</h2>
    
                    <div className="about-content">
                        <div className="d-flex align-items-start mb-4">
                            <div className="icon-box me-4">
                                <i className="bi bi-person-vcard text-primary fs-2"></i>
                            </div>
                            <div>
                                <h4 className="fw-bold mb-1">Courte Biographie</h4>
                                <p className="text-muted fs-5">
                                    {artisan.biographie || "Texto biographie artisan..."}
                                </p>
                            </div>
                        </div>
    
                        <div className="d-flex align-items-start mb-4">
                            <div className="me-3 fs-3">
                                <i className="bi bi-tools text-danger fs-2"></i>
                            </div>
                            <div>
                                <h4 className="fw-bold mb-1">Expérience dans le secteur</h4>
                                <p className="text-muted fs-5">
                                    {artisan.experience || "Details sur l'expérience pro de l'artisan"}
                                </p>
                            </div>
                        </div>
    
                        <div className="d-flex align-items-start mb-4">
                            <div className="icon-box me-4">
                                <i className="bi bi-shield-check text-info fs-2"></i>
                            </div>
                            <div>
                                <h4 className="fw-bold mb-1">Garantie (Certificat, diplomes...)</h4>
                                <p className="text-muted fs-5">
                                    {artisan.garantie || "Informations sur les diplomes et certificat de l'artisan"}
                                </p>
                            </div>
                        </div>
    
                        <div className="d-flex align-items-start mb-4">
                            <div className="icon-box me-4">
                                <i className="bi bi-compass text-secondary fs-2"></i>
                            </div>
                            <div>
                                <h4 className="fw-bold mb-1">Valeurs et philosophie</h4>
                                <p className="text-muted fs-5">
                                    {artisan.valeurs || "Philosophie et valeurs du travail de l'artisan"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="mt-4 mb-5">
                <div className="bg-light-blue-section p-4 p-md-5 rounded-5 shadow-sm">
                    <h2 className="fw-bold mb-4">
                        Contactez {artisan.nom}
                    </h2>

                    <ContactForm />
                </div>
            </Container>
        </div>
    );
};

export default Artisan;