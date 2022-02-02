import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Button, Col, Row} from 'react-bootstrap';

import './director-view.scss';


export class DirectorView extends React.Component{
    
    render() {
        const { director, onBackClick} = this.props;
        console.log(this.props);

        return (
            <Container>
                <Card>
                    <Card.Title>{director.Name}</Card.Title>
                    <Card.Subtitle className="mb-2">{director.Birthdate} - {director.Deathdate}</Card.Subtitle>
                    <Card.Body>
                        {director.Bio}
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

