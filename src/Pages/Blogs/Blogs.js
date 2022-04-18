import React from 'react';
import { ListGroup, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h3>Que-1: Difference between Authentication & Authorization</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Authentication</th>
                        <th>Authorization</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Authentication verifies who the user is.</td>
                        <td>Authorization determines what resources a user can access.</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                        <td>Authorization works through settings that are implemented and maintained by the organization.
                        </td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Authorization always takes place after authentication.
                        </td>
                        <td>Authentication is the first step of a good identity and access management process.</td>

                    </tr>
                </tbody>
            </Table>

            <div>
                <h3>Que-2: Why are you using firebase? What other options do you have to implement authentication?</h3>

                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                        Benefits of using firebase -
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Fast & safe hosting</ListGroup.Item>
                    <ListGroup.Item as="li">
                        Reliable & extensive database
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Google Analytics</ListGroup.Item>
                    <ListGroup.Item as="li">Free use of firebase dynamic links</ListGroup.Item>
                    <ListGroup.Item as="li">Free multi platform firebase Authentication</ListGroup.Item>
                    <ListGroup.Item as="li">Free testing service</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-2'>
                <h3>Alternatives of firebase Auth:</h3>
                <ListGroup horizontal>
                    <ListGroup.Item>Auth0</ListGroup.Item>
                    <ListGroup.Item>MongoDB</ListGroup.Item>
                    <ListGroup.Item>Passport</ListGroup.Item>
                    <ListGroup.Item>Okta!</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-5 mb-5'>
                <h3>Que-3: What other services does firebase provide than Authentication?</h3>
                <p>
                     Cloud Firestore.
                    Cloud Functions.
                    Authentication.
                    Hosting.
                    Cloud Storage.
                    Google Analytics.
                    Predictions.
                    Cloud Messaging.
                </p>
            </div>
        </div>
    );
};

export default Blogs;