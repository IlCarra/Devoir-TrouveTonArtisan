import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <Form>
            <Row className="g-4">
                <Col md={6}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="fw-bold">Nom</Form.Label>
                        <Form.Control 
                            type="text" 
                            className="rounded-3 border-0 py-2 shadow-sm" 
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="fw-bold">Prénom</Form.Label>
                        <Form.Control 
                            type="text" 
                            className="rounded-3 border-0 py-2 shadow-sm" 
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="fw-bold">E-mail</Form.Label>
                        <Form.Control 
                            type="email" 
                            className="rounded-3 border-0 py-2 shadow-sm" 
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="fw-bold">Objet</Form.Label>
                        <Form.Control 
                            type="text" 
                            className="rounded-3 border-0 py-2 shadow-sm" 
                        />
                    </Form.Group>
                </Col>

                <Col md={6} className="d-flex flex-column text-start">
                    <Form.Group className="flex-grow-1 d-flex flex-column">
                        <Form.Label className="fw-bold">Message</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            className="rounded-4 border-0 shadow-sm flex-grow-1" 
                            
                        />
                    </Form.Group>
                </Col>
            </Row>

            <div className="mt-4 text-end">
                <Button variant="primary" className="px-5 py-2 rounded-pill fw-bold shadow-sm border-0" style={{backgroundColor: '#0d6efd'}}>
                    Envoyer le message
                </Button>
            </div>
        </Form>
    );
};

export default ContactForm;