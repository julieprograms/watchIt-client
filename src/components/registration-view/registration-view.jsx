import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, CardGroup, Card, Col, Row } from 'react-bootstrap';

import './registration-view.scss';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onRegister(true, username);
    };

    return (
        <Row classname="registration-view">
            <Col><CardGroup><Card>
                <Card.Title className="title-color pl-3 pt-3 pb-1">Will you watchIt?</Card.Title>
                
                <Form className="registration-form">
                <Form.Group>
                    <Form.Label className="label-font-color mt-3 mb-1">Username</Form.Label>
                    <Form.Control className="input-font" type="text" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    required 
                    placeholder="Enter a username"
                    />
        </Form.Group>
        <Form.Group>
            <Form.Label className="label-font-color mt-3 mb-1">Password</Form.Label>
            <Form.Control className="input-font" type="text" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
            minLength="6" 
            placeholder="Enter a password"
            />
        </Form.Group>
        <Form.Group>
            <Form.Label className="label-font-color mt-3 mb-1">Email</Form.Label>
            <Form.Control className="input-font" type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
            placeholder="Enter Email"
            />
        </Form.Group>
        <Form.Group>
            <Form.Label className="label-font-color mt-3 mb-1">Birthday</Form.Label>
            <Form.Control className="input-font mb-3" type="date" 
            value={birthday} 
            onChange={e => setBirthday(e.target.value)} 
            required 
            />
        </Form.Group>
            
        <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
            </Form></Card>
            
            </CardGroup>
            </Col>
            
        </Row>
        
    )
}

RegistrationView.propTypes = {
    onRegister: PropTypes.func.isRequired
};