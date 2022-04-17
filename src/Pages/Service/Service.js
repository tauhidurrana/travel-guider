import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    return (
        <div>
            <Card border="light" style={{ width: '22rem', height: '450px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <div>
                    <Button variant="danger" size="lg">
                        Book Now
                    </Button>
                </div>
            </Card>
        </div>

    );
};

export default Service;