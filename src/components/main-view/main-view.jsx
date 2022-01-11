import React from 'react';
import axios from 'axios';

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { Row, Col, Container} from 'react-bootstrap';

import Navbar from '../navbar/navbar';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView} from '../profile-view/profile-view';

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import './main-view.scss';



export class MainView extends React.Component {

constructor(){
    super();

    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      register: null
    };
}

componentDidMount() {
  let accessToken = localStorage.getItem('token');
  if (accessToken !== null) {
    this.setState({
      user: localStorage.getItem('user')
    });
    this.getMovies(accessToken);
  }
}


getMovies(token) {
  axios.get('https://watchitmovieapp.herokuapp.com/movies/', {
    headers: {Authorization: `Bearer ${token}`}
  })
  .then(response => {
    //assign the result to the state
    this.setState({
      movies: response.data
    });
  })
  .catch(function (error) {
    console.log(error);
  })
}


setSelectedMovie(movie) {
  this.setState({
    selectedMovie: movie
  });
}


onRegister(register) {
  this.setState({
    register,
  });
}


onLoggedIn(authData) {
  this.setState({
    user: authData.user.Username
  });

  localStorage.setItem('token', authData.token);
  localStorage.setItem('user', authData.user.Username);
  this.getMovies(authData.token);
}


getUsers(token) {
  axios.post('https://watchitmovieapp.herokuapp.com/users', {
    headers: { Authorization: `Bearer ${token}`}
  })
  .then(response => {
    this.setState({
      users: response.data
    });
   console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  });
}


onLoggedOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.setState({
    user:null
  });
  window.open("/", "_self");
}



render() {
<<<<<<< Updated upstream
  const { movies, selectedMovie, user, registered } = this.state;

  if(!registered) return <RegistrationView onRegister={(registered, username) => this.onRegister(registered, username)} />;

  if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

  if (movies.length === 0) return <div className="main-view"/>;

    return (
      <div className="main-view">
        {selectedMovie
        ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => {
          this.setSelectedMovie(newSelectedMovie);
        }} />
        : movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => {
            this.setSelectedMovie(newSelectedMovie) }}/>
        ))
      }
      </div>
    );
=======
  const { movies, user} = this.state;


  return (
    <Router>
      <Navbar user={user}/>

      <Row className="main-view justify-md-center">

        <Route exact path="/" render={() => {
          if (!user) return <Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
          </Col>
          if (movies.length === 0) return <div className="main-view" />
          return movies.map(m => (
            <Col sm={12} md={6} lg={4} key={m._id}>
              <MovieCard movie={m} />
            </Col>
          ))  
        }} />

        <Route exact path="/Users" render={() => {
          if (user) return <Redirect to="/" />
          return <Col lg={8} md={8} sm={12}>
          <RegistrationView />
          </Col>
        }}/>

        <Route path="/movies/:Title" render={({ match, history }) => {
          if (!user) return <Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)}/>
          </Col>
          if (movies.length === 0) return <div className="main-view" />
          return <Col sm={12} md={4}>
            <MovieView movie={movies.find(m => m.Title === match.params.title)} onBackClick={() => history.goBack()} />
          </Col>
        }} />

        <Route path="movies/Directors/:Name" render={({ match, history }) => {
          if (!user) return <Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
          </Col>
          if (movies.length === 0) return <div className="main-view" />
          return <Col md={8}>
            <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
          </Col>
        }} />

        <Route path="movies/Genres/:Name" render={({ match, history }) => {
          if (!user) return <Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)}/>
          </Col>
          if (movies.length === 0) return <div className="main-view" />
          return <Col md={8}>
            <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
          </Col>
        }}/>

        <Route exact path="/Users/:Username" render={({ history }) => {
          if (!user) return <LoginView onLoggedIn={(data) => this.onLoggedIn(data)} />
          return <><Col><ProfileView user={user} history={history} movies={movies} onBackClick={() => history.goBack()}/></Col></>
        }}/>
      </Row>
    </Router>
  );
  }
>>>>>>> Stashed changes
}


