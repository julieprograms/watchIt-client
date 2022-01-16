import React from 'react';
import {Navbar, Container, Button, Nav} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

import './navbar.scss';

export default function NavBar(props) {
    
    

    function onLoggedOut() {
        localStorage.clear();
        window.open("/", "_self");
    }

    

    const {user} = props;
    
    

    return (
        <>
           {user && <Navbar collapseOnSelect expand="lg" className="navbar" fixed="top" bg="dark" variant="dark">
             <Container>
                 <Navbar.Brand className="navbar-logo" href="/">watchIt</Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="ml-auto">
                         <NavLink to="/" >Movies</NavLink>
                         <NavLink to={`/Users/${user}`}>Profile</NavLink> 
                         <NavLink to="/" onClick={() => {onLoggedOut() }}>Logout</NavLink>
                    </Nav>
                 </Navbar.Collapse>

             </Container>
        
            </Navbar>
            }
        </>
    )    
}


