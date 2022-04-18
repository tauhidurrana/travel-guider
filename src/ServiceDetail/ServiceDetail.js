import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceID} = useParams()
    return (
        <div className='container text-center'>
            <h2>Booking Detail: {serviceID}</h2>
            <Link to='/checkout'>
            <Button variant="danger" size="lg">Check Out</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;