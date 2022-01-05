import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button} from 'react-bootstrap';

import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Row className="movie-view">
        <Col> 
          <div className="movie-poster">
      
          <img src={movie.ImagePath} /></div>
        <div className="movie-title"><span className="label">Title: </span>
          <span className="value">{movie.Title}</span></div>
        
        <div className="movie-description"><span className="label">Description: </span>
          <span className="value">{movie.Description}</span></div>
      
        <Button onClick={() => { onBackClick(null); }}>Back</Button></Col></Row>
  

    );
  }

}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Featured: PropTypes.bool.isRequired,
    ImagePath: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired
    })
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};
