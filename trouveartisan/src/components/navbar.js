import React from "react";
import {NavLink} from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            const valor = e.target.value;
            navigate(`/recherche?q=${valor}`);
        }
    }; 

    return (
        <header role = "banner">
            <a href="#main-content" className="visually-hidden-focusable p-2 bg-primary text-white">
                Passez au contenu principal
            </a>

            <Navbar bg="primary" variant="dark" expand="lg" sticky="top" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
                        <img src="/logo.png" alt="Auvergne-Rhone-Alpes" className="navbar-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar-nav" aria-label="Menu de navigation" />

                    <Navbar.Collapse id="main-navbar-nav">
                        <Nav className="ms-auto text-uppercase small fw-semibold">
                            <Nav.Link as={NavLink} to="/" end>
                                Accueil
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/recherche?q=Batiment" end>
                                Batiments
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/recherche?q=Service" end>
                                Services
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/recherche?q=Fabrication" end>
                                Fabrication
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/recherche?q=Alimentation" end>
                                Alimentation
                            </Nav.Link>

                            <Form className="d-flex ms-lg-3 mt-3 mt-lg-0" onSubmit={(e) => e.preventDefault()}>
                                <FormControl
                                    type="search"
                                    placeholder="Rechercher..."
                                    className="me-2"
                                    aria-label="Search"
                                    onKeyDown={handleSearch} 
                                />
                            </Form>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;