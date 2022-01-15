import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './movie-view.scss';

export class MovieView extends React.Component {

  addFavourite() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    axios
    .post(`https://watchitmovieapp.herokuapp.com/users/${user}/movies/${this.props.movie.title}`, {}, {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then(response => {
      Alert('Added to Watchlist');
    })
    .catch(function(error) {
      console.log(error);
    })
  };


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

        </Col>
      <div className="mt-2">
<Button className= "favourite-button" value={movie.title} onClick={(e) => this.addFavourite(e, movie)}>Add to Watchlist</Button>
      </div>
        <div className="mt-2">
           <Link to={`/movies/genres/${movie.Genre.Name}`}>
             <Button variant="link">More of this Genre</Button>
             </Link>
            <Link to={`/movies/Directors/${movie.Director.Name}`}><Button variant="link">More of this Director</Button></Link>
           
           
           
           <Button className="back-button" value={movie} onClick={()=>{onBackClick()}}>Back</Button>

           

        </div>
        
        
       </Row>
      
    );
  }

}


MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Featured: PropTypes.bool.isRequired,
    ImagePath: PropTypes.string,
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
