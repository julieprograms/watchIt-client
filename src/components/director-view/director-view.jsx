import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Button, Col, Row} from 'react-bootstrap';

import './director-view.scss';


export class DirectorView extends React.Component{
    
    render() {
        const { Director, onBackClick, movies} = this.props;

        return (
            <Container>
                <Card>
                    <Card.Title>{Director.Name}</Card.Title>
                    <Card.Subtitle className="mb-2">{Director.Birthdate} - {Director.Deathdate}</Card.Subtitle>
                    <Card.Body>
                        {Director.Bio}
                    </Card.Body>
                    <Card.Footer><Button variant="primary" onClick={() => { onBackClick(); }}>Back</Button></Card.Footer>
                         </Card>

                
   
            </Container>
        )
    }
};

DirectorView.proptypes ={
    Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string,
        Birthdate: PropTypes.instanceOf(Date)
    }).isRequired
};

