import React from "react";
import {NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <header role = "banner">
            <a href="#main-content" className="visually-hidden-focusable p-2 bg-primary text-white">
                Passez au contenu principal
            </a>

            <Navbar bg="primary" variant="dark" expand="lg" sticky="top" collapseOnSelect>
                <Container>
                    {/* Logo / Brand */}
                    <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
                        <img src="/logo.png" alt="Auvergne-Rhone-Alpes" className="navbar-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar-nav" aria-label="Menu de navigation" />

                    <Navbar.Collapse id="main-navbar-nav">
                        <Nav className="ms-auto text-uppercase small fw-semibold">
                            <Nav.Link as={NavLink} to="/" end>
                                Accueil
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/batiments" end>
                                Batiments
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/services" end>
                                Services
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/accessibilité" className="border border-light rounded px-2 ms-lg-2">
                                Accessibilité
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;