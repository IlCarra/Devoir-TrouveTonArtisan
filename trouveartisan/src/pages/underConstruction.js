import React from "react";
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UnderConstruction() {
    return (
        <Container className="d-flex align-items-center justify-content-center text-center">
            <div className="py-5">
                <div className="icon-box me-4">
                    <i class="bi bi-cone-striped display-1 text-primary"></i>
                </div>
                <h1 className="display-4 fw-bold">Page en construction !</h1>
                <p className="lead text-muted mb-4">
                    Nous travaillons dur pour rendre cette section disponible le plus tot possible.
                </p>

                <Link to="/">
                    <Button variant="outline-primary" className="rounded-pill px-4">
                        Retour à l'accueil
                    </Button>
                </Link>
            </div>
        </Container>
    )
}

export default UnderConstruction;