import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card className="card-border my-2" border="main" style={{ height: '30rem'}}>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body className="px-3 mx-1">
          <Card.Title className="mt-2">{movie.Title}</Card.Title>
          <Card.Text className="mt-5 px-2">{movie.Description}</Card.Text>
          
          
        </Card.Body>
        <Card.Footer className="card-footer">
          <Link to={`/movies/${movie._id}`}>
            <Button variant="link" className="center">Open</Button>
          </Link>
       </Card.Footer>
      </Card>

      
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired
      //Bio is not required! since Shape is used, it will just be omitted
    }).isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
      //Description is not required! so it will be omitted
    }).isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  
};
