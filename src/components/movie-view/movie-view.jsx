import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Row, Col, Button, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';


import './movie-view.scss';


export class MovieView extends React.Component {
  

  addFavourite() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    axios
    .post(`https://watchitmovieapp.herokuapp.com/Users/${user}/movies/${this.props.movie._id}`, {}, {
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
<Button className= "favourite-button" value={movie._id} onClick={(e) => this.addFavourite(e, movie)}>Add to Watchlist</Button>
      </div>
        <div className="mt-2">
           <Link to={`/genres/${movie.Genre.Name}`}>
             <Button variant="link">More of this Genre</Button>
             </Link>
            <Link to={`/Directors/${movie.Director.Name}`}><Button variant="link">More of this Director</Button></Link>
           
           
           
           <Button className="back-button" value={movie} onClick={()=>{onBackClick()}}>Back</Button>

           

        </div>
        
        
       </Row>
      
    );
  }
}



MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
    }).isRequired
};
