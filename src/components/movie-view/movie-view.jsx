import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import axios from 'axios';

import './movie-view.scss'

export class MovieView extends React.Component {
  

  addFavorite() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios
      .post(`https://watchitmovieapp.herokuapp.com/users/${user}/movies/${this.props.movie._id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
        method: 'POST',
      })
        .then(response => {
          alert(`Added to Watchlist`)
        })
        .catch(function (error) {
          console.log(error);
        });
    };

render() {
  const { movie, onBackClick } = this.props;

  return(
    <div className="movie-view details-bg mt-5 mb-5 justify-content-md-center">
      <div className="mt-3">
        <img src={movie.ImagePath} 
        crossOrigin="true" className="movie-poster"/>
      </div>
      <div className="movie-title mt-3 mb-3">
        <span className="value h1">{movie.Title}</span>
      </div>
      <div className="movie-description mt-2">
        <span className="value">{movie.Description}</span>
      </div>
      <div className="mt-3">
        <Button
                value={movie._id} onClick={(e) => this.addFavorite(e, movie)}
              >
                Add To Watchlist
        </Button>
      </div>
      <h5 className="mt-5 mb-3">More About {movie.Title}</h5>
      <Link to={`/directors/${movie.Director.Name}`}>
        <Button variant="primary" className="mr-3">Director</Button>
      </Link>
      <Link to={`/genres/${movie.Genre.Name}`}>
        <Button variant="primary">Genre</Button>
      </Link>
      <Button variant="secondary" className="ml-3" onClick={() => { onBackClick(null); }}>Back</Button>
    </div>
  ); 
}
}

MovieView.propTypes = {
movie: PropTypes.shape({
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  ImagePath: PropTypes.string.isRequired,
}).isRequired,
}