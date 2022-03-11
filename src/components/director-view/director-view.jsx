import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Button, Col, Row} from 'react-bootstrap';

import './director-view.scss';


export class DirectorView extends React.Component{
    
    render() {
        const { director, onBackClick} = this.props;
        console.log(this.props);

        return (
            <Container className="director-view mt-5">
                <Card className="director-card black-bg">
                    <Card.Title className="director-card-title mb-2">{director.Name}</Card.Title>
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

