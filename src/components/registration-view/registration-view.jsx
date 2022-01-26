import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, CardGroup, Card, Col, Row, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './registration-view.scss';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const [usernameErr, setUsernameErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});
    const [emailErr,setEmailErr] = useState({});
    const [birthdayErr, setBirthdayErr] = useState({});
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if(isReq){
            axios.post('https://watchitmovieapp.herokuapp.com/users', {
                Username: username,
                Password: password,
                Email: email,
                Birthday: birthday
            })
            .then(response => {
                const data = response.data;
                Alert('Registration successful! Please login!');
                window.open('/', '_self');
                
            })
            .catch(e => {
                console.log(error);
                alert('unable to register');
            });
        }
    };
    
    const validate = () => {
        
        let isReq = true;

    if(!username) {
        setValues({...values, usernameErr: 'Username required'});
        isReq = false;
    } else if (username.length <2){
        setValues({
            ...values, usernameErr: 'Username must contain at least 2 characters'
        });
        isReq = false;
    }
    if(!password){
        setValues({...values, passwordErr: 'Password required'});
        isReq = false;
    } else if(password.length < 6){
        setValues({...values, passwordErr: 'Password must contain at least 6 characters'});
        isReq = false;
    }
    if(!email) {
        setValues({...values, emailErr: 'Email required'});
        isReq= false;
    } else if(email.indexOf('@') === -1) {
        setValues({...values, emailErr: 'Email is invalid'});
        isReq = false;
    }
    setUsernameErr(usernameErr);
    setPasswordErr(passwordErr);
    setEmailErr(emailErr);
    setBirthdayErr(birthdayErr);
    return isReq;
}




    return (
        <Row className="registration-view justify-content-md-center">
            <Col><CardGroup><Card className="register-card">
                <Card.Title className="pl-3 pt-3 pb-1 title-color">Will you <span className="font-title">watchIt</span> ?</Card.Title>
                <Card.Body>
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
            name="birthday"
            onChange={(e) => setBirthday(e.target.value)} 
            required 
            />
        </Form.Group>
         
        <Button className="button-submit" variant="primary" type="submit" onClick={handleSubmit}>Register</Button>
        <p className="to-login-text">Already registered? <Link className="link-to-login" to={'/'}>Log in</Link></p>
        
            </Form>
            </Card.Body>
            </Card>
            </CardGroup>
            </Col>
            
        </Row>
        
    )
}

RegistrationView.propTypes = {
    register: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        birthdate: PropTypes.string,
})
}