import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card } from 'react-bootstrap';

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Card className="card-border card-color my-2" border="main" style={{ height: '30rem'}}>
        <Card.Img variant="top" src={movie.ImgPath} />
        <Card.Body className="px-3 mx-1 card-body">
          <Card.Title className="mt-2 movie-title">{movie.Title}</Card.Title>
          <Card.Text className="mt-5 px-2">{movie.Description}</Card.Text>
          
          
        </Card.Body>
        <Card.Footer className="card-footer"><Button onClick={() => onMovieClick(movie)} variant="warning" className="center">Open</Button></Card.Footer>
      </Card>

      
    );
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
  onMovieClick: PropTypes.func.isRequired
};
