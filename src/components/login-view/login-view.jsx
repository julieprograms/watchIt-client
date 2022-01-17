require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Card, CardGroup, Container } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';


import './login-view.scss';


export function LoginView(props) {
const [ username, setUsername ] = useState('');
const [ password, setPassword ] = useState('');

const [ usernameErr, setUsernameErr] = useState('');
const [ passwordErr, setPasswordErr] = useState('');

const validate = () => {
    let isReq = true;
    if(!username) {
        setUsernameErr('Username required');
        isReq = false;
    } else if (username.length <2) {
        setUsernameErr('Username must contain at least 2 characters');
        isReq = false;
}
if(!password) {
    setPasswordErr('Password required');
    isReq = false;
} else if(password.length < 6) {
    setPassword('Password must contain at least 6 characters');
    isReq = false;
}
return isReq;

}


const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if(isReq) {
// send a request to the server for authentification
axios.post('https://watchitmovieapp.herokuapp.com/login', {
    Username: username,
    Password: password
})
.then(response => {
    const data = response.data;
    props.onLoggedIn(data);
})
.catch(e => {
    console.log('no such user')
});
    }
};

return(
    <Container className="login-background">
        <Row className="login-row justify-content-md-center">
            <Col md={8}>
                <CardGroup>
                    <Card className="login-card" >
                        <Card.Title className="title-color title-font pl-3 pt-3 pb-1" >Time to <span className="font-title">watchIt</span> !</Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formUsername">
                                    <Form.Label className="label-font-color mt-3 mb-1">Username</Form.Label>
                                    <Form.Control className="input-font" type="text" 
                                    value={username}
                                    onChange={e => setUsername(e.target.value)} 
                                    placeholder="Enter your username"
                                    />
                                    {/*code added here to display validation error*/}{usernameErr && <p>{usernameErr}</p>}
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label className="label-font-color mt-3 mb-1">Password</Form.Label>
                                    <Form.Control className="input-font mb-3" type="password"
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)} 
                                    placeholder="Enter your password" 
                                    />
                                    {/*code added here to display validation error*/}{passwordErr && <p>{passwordErr}</p>}
                                </Form.Group>
                                <Form.Group className="justify-content-md-center">
                                        <Button className="mt-2 mr-2 button-submit" variant="primary" type="submit" onClick={handleSubmit}>Log in</Button>
                                        <Button className="mt-2 button-second" variant="secondary"><Link to='/Users'>Register</Link></Button>
                                        
                                    
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