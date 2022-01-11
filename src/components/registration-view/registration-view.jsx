import React, { useState } from 'react';
import PropTypes from 'prop-types';
<<<<<<< Updated upstream

=======
import { Form, Button, CardGroup, Card, Col, Row, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import { Link } from "react-router-dom";
>>>>>>> Stashed changes
import './registration-view.scss';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setemail] = useState('');
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
<<<<<<< Updated upstream
        <div classname="registration-view">
            <form className="registration-form">
            <label>
            Username:
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
            Password:
            <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <label>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
            Birthday:
            <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
=======
        <Row classname="registration-view">
            <Col><CardGroup><Card>
                <Card.Title className="title-color pl-3 pt-3 pb-1">Will you watchIt?</Card.Title>
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
                    {values.usernameErr && <p>{values.usernameErr}</p>}
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
        {values.passwordErr && <p>{values.passwordErr}</p>}
        </Form.Group>
        <Form.Group>
            <Form.Label className="label-font-color mt-3 mb-1">Email</Form.Label>
            <Form.Control className="input-font" type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
            placeholder="Enter Email"
            />
            {values.emailErr && <p>{values.emailErr}</p>}
            </Form.Group>
        <Form.Group>
            <Form.Label className="label-font-color mt-3 mb-1">Birthday</Form.Label>
            <Form.Control className="input-font mb-3" type="date" 
            name="birthday"
            onChange={(e) => setBirthday(e.target.value)} 
            required 
            />
        </Form.Group>
         
        <Button variant="primary" type="submit" onClick={handleSubmit}>Register</Button>
        <p className="tm-2">Already registered? <Link to={'/'}>Log in</Link></p>
        
            </Form>
            </Card.Body>
            </Card>
            </CardGroup>
            </Col>
            
        </Row>
        
>>>>>>> Stashed changes
    )
}

RegistrationView.propTypes = {
    register: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        birthdate: PropTypes.string,
});
}