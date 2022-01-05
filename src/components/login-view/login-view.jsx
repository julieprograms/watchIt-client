import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Card, CardGroup, Stack, Container } from 'react-bootstrap';


import './login-view.scss';

export function LoginView(props) {
const [ username, setUsername ] = useState('');
const [ password, setPassword ] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
//will be removed later! no sensitive data in console.log!!!
    console.log(username, password);
    props.onLoggedIn(username);
};

return(
    <Container className="login-background">
        <Row className="login-row justify-content-md-center">
            <Col md={6}>
                <CardGroup>
                    <Card className="login-card" >
                        <Card.Title className="title-color pl-3 pt-3 pb-1" >Time to watchIt!</Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formUsername">
                                    <Form.Label className="label-font-color mt-3 mb-1">Username</Form.Label>
                                    <Form.Control className="input-font" type="text" 
                                    onChange={e => setUsername(e.target.value)} 
                                    placeholder="Enter your username"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label className="label-font-color mt-3 mb-1">Password</Form.Label>
                                    <Form.Control className="input-font mb-3" type="password" 
                                    onChange={e => setPassword(e.target.value)} 
                                    placeholder="Enter your password" 
                                    />
                                </Form.Group>
                                <Form.Group className="justify-content-md-center">
                                        <Button className="mt-2 mr-2" variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                                        <Button className="mt-2"  href="../registration-view/registration-view.jsx" variant="secondary" type="button">Register</Button>
                                    
                                </Form.Group>
               
            
                            </Form>     
                        </Card.Body>
        
                    </Card>
                </CardGroup>
    	    </Col>
        </Row>
        <Row className="justify-content-md-center">
            
        </Row> 
    </Container>


 //register button is currently a template for the actual button!   
);
}


LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired
};
