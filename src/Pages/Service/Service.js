import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    return (
        <div className='mb-5'>
            <Card border="light" style={{ width: '22rem', height: '450px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <h3>{name}</h3> </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h3>Price: {price}</h3>
                    <p>Detail: full 1 day with Lunch + Breakfast</p>
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