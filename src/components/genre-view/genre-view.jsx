import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Button, Col, Row} from 'react-bootstrap';

import './genre-view.scss';


export class GenreView extends React.Component{
    
    render() {
        const { Genre, onBackClick, movies} = this.props;

        return (
            <Container>
                <Card>
                    <Card.Title>{Genre.Name}</Card.Title>
                    <Card.Body>
                        {Genre.Description}
                    </Card.Body>
                    <Card.Footer><Button variant="primary" onClick={() => { onBackClick(); }}>Back</Button></Card.Footer>
                         </Card>

                <Row>
                    <Col>
                    {movies.map((m) => {
                        if (m.Genre && m.Genre.Name === Genre.Name) {
                            return (
                                <Card>
                                    <Card.Img variant="top" key={m._id} src={m.ImagePath} />
                                    <Card.Title>
                                        {m.Title}</Card.Title></Card>
                                
                            );
                        }
                    })}
                    </Col>
                </Row>
                
   
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

