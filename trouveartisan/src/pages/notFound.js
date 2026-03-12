import React from "react";
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <Container className="text-center py-5">
            <div className="error-404-content py-5">
                <h1 className="display-1 fw-bold text-primary">404</h1>
                <h2 className="mb-4">Oups! Page non trouvée</h2>
                <p className="lead mb-5 text-muted">
                    Désolé, l'artisan ou la page que vous recherchez n'existe pas ou est en construction !
                </p>
                <Link to="/">
                    <Button variant="primary" size="lg" className="rounded-pill px-5">
                        Retour à l'accueil
                    </Button>
                </Link>
            </div>
        </Container>
    )
}

export default NotFound;