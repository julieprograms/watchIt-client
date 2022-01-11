import React from 'react';
import {Navbar, Container, Button, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import './navbar.scss';

export default class NavBar extends React.Component {
    constructor () {
      super();
  
      this.state = {};
    }
  
    

    onLoggedOut() {
        localStorage.clear();
        window.open("/", "_self");
    }

    render() {

    const {user} = this.props;
    
    

    return (
        <>
           {user && <Navbar collapseOnSelect expand="lg" className="navbar" fixed="top" bg="dark" variant="dark">
             <Container>
                 <Navbar.Brand className="navbar-logo" href="/">watchIt</Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="ml-auto">
                         <NavLink to="/" >Movies</NavLink>
                         <NavLink to={`/users/${user}`}>Profile</NavLink> 
                         <NavLink to="/"><Button variant="link" onClick={() => {onLoggedOut() }}>Logout</Button></NavLink>
                    </Nav>
                 </Navbar.Collapse>

             </Container>
        
            </Navbar>
            }
        </>
    )    
        }
