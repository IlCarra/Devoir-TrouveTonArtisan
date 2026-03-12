import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="main-footer bg-primary text-white py-4">
            <div className="container">
                <div className="row justify-content-between align-items-start text-start">
                    <div className="col-md-5 col-sm-12 mb-4">
                        <h4>Lorem Ipsum</h4>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/construction" className="text-white text-decoration-none">Mentions légales</Link></li>
                            <li><Link to="/construction" className="text-white text-decoration-none">Données personnelles</Link></li>
                            <li><Link to="/construction" className="text-white text-decoration-none">Accessibilité</Link></li>
                            <li><Link to="/construction" className="text-white text-decoration-none">Conditions générales de vente (CGV)</Link></li>
                            <li><Link to="/construction" className="text-white text-decoration-none">Conditions générales d'utilisation (CGU)</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-5 col-sm-12 text-md-end">
                        <h5 className="fw-bold">Adresse et contact</h5>
                        <address className="mb-0">
                            101 cours Charlemagne CS 20033<br />
                            69269 LYON CEDEX 02 France<br />
                            +33 (0)4 26 73 40 00
                        </address>
                    </div>
                </div>

                <hr className="bg-white opacity-25 my-4" />
                
                <div className="footer-bottom text-center">
                    <p className="small mb-0">
                        &copy;{new Date().getFullYear()} City Guide App - All Rights
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;