import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Button, Col, Row} from 'react-bootstrap';

import './genre-view.scss';


export class GenreView extends React.Component{
    
    render() {
        const { genre, onBackClick} = this.props;

        return (
            <Container className="genre-view mt-5">
                <Card className="genre-card mt-5">
                    <Card.Title>{genre.Name}</Card.Title>
                    <Card.Body>
                        {genre.Description}
                    </Card.Body>
                    <Card.Footer><Button variant="primary" onClick={() => { onBackClick(); }}>Back</Button></Card.Footer>
                         </Card>

        
            </Container>
        )
    }
};

GenreView.proptypes ={
    Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string,
    }).isRequired,
};

