import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card className="card-border black-bg my-2" border="main" style={{ height: '30rem', 'max-width': '23rem'}}>
        <Card.Img variant="top" id="movie-card-img" src={movie.ImagePath} />
        <Card.Body className="px-3 mx-1" >
          <Card.Header className="card-header"><Card.Title id="movie-card-title">{movie.Title}</Card.Title></Card.Header>
          <Card.Text className="mt-5 px-2" id="movie-card-text">{movie.Description}</Card.Text>
          
          
        </Card.Body>
        <Card.Footer className="card-footer">
          <Link to={`/movies/${movie._id}`}>
            <Button variant="warning" className="center movie-card-btn">Open</Button>
          </Link>
       </Card.Footer>
      </Card>

      
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
    }).isRequired
};
