import React from 'react';
import Axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './main-view.scss';


export default class MainView extends React.Component {

constructor(){
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      registered: true
    };
}

componentDidMount() {
  Axios.get('https://watchitmovieapp.herokuapp.com/movies')
  .then(response => {
    this.setState({
      movies:response.data
    });
  })
  .catch(error => {
    console.log(error);
  });
}

setSelectedMovie(newSelectedMovie) {
  this.setState({
    selectedMovie: movie
  });
}

onLoggedIn(user) {
  this.setState({
    user
  });
}

onregister(registered, user) {
  this.setState({
    registered,
    user
  });
}

render() {
  const { movies, selectedMovie, user, registered } = this.state;

  if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
  
  //if(user === 0) return <RegistrationView onRegister={(registered, username) => this.onRegister(registered, username)} />;
  
  if (movies.length === 0) return <div className="main-view"/>;

    return (
      <Row className="main-view justify-content-md-center">
        {selectedMovie
        ? (
          <Col sm={12} md={4}>
            <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => {
          this.setSelectedMovie(newSelectedMovie); }} />
            </Col> 
        )
        : movies.map(movie => (
              <Col sm={12} md={6} lg={4}>
                <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => {
            this.setSelectedMovie(newSelectedMovie); }}/> 
              </Col>
          ))
      }
      </Row>
    );
}


}
