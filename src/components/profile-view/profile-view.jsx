import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Form, Button, Card, Container, Row, Col, Alert} from 'react-bootstrap';

import { MovieCard } from '../movie-card/movie-card';
import './profile-view.scss';

export class ProfileView extends React.Component {
    
    constructor() {
        super();

        this.state = {
            Username: null,
            Password: null,
            Email: null,
            Birthday: null,
            Watchlist: [],
            movies: []
        };
    }

    componentDidMount() {
        const accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            this.getUser(accessToken);
        }
    }

    onUsernameChange(e) {
        this.setState({
            Username: e.target.value
        });
    }
    onPasswordChange(e) {
        this.setState({
            Password: e.target.value
        });
    }
    onEmailChange(e) {
        this.setState({
            Email: e.target.value
        });
    }
    onBirthdayChange(e) {
        this.setState({
            Birthday: e.target.value
        });
    }



      getUser (token) {
          const user = localStorage.getItem('user');
          axios.get(`https://watchitmovieapp.herokuapp.com/users/${user}`, {
            headers: { Authorization: `Bearer ${token}`}
        })
            .then(response => {
                this.setState({
                    Username: response.data.Username,
                    Email: response.data.Email,
                    Birthday: response.data.Birthday,
                    Watchlist: response.data.Watchlist
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    removeFromWatchlist(e, movie) {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        axios.delete(`https://watchitmovieapp.herokuapp.com/users/${user}/watchlist/${movieId}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => {
            Alert('Movie has been removed');
            this.componentDidMount();
        })
        .catch(function (error) {
            console.log(error)
        })
    }


    updateUser= (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        let validated = this.validate();

        if(validated) {
            axios.put(`https://watchitmovieapp.herokuapp.com/users/${user}`, {
            Username: newUsername ? newUsername: this.state.Username,
            Password: newPassword ? newPassword: this.state.Password,
            Email: newEmail ? newEmail: this.state.Email,
            Birthday: newBirthday ? newBirthday: this.state.Birthday,
        },
        { headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            const data = response.data;
            localStorage.setItem('user', data.Username);
            Alert('User information has been updated');
            window.open('/','_self');
        })
        .catch(e => {
            console.log(e)
        });
    }}
     


    deleteUser= (e) => {
        e.preventDefault();
        const confirm = window.confirm('You are about to delete your account, are you sure about this?');
        if(confirm) {
          const token = localStorage.getItem('token');
          const user = localStorage.getItem('user'); 
          
          axios.delete(`https://watchitmovieapp.herokuapp.com/users/${user}`, {
            headers: { Authorization: `Bearer ${token}`}
        })
        .then(() => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            Alert('Your account has been deleted');
            window.open('/', '_self');
        })
        .catch((e) => {
            console.log(e);

        });
    }
}

    validate() {
        const UsernameErr = {};
        const PasswordErr = {};
        const EmailErr = {};
        const BirthdayErr = {};

        let isReq = true

        if(!username) {
            setValues({...values, usernameErr: 'Username required'});
            isReq = false;
        } else if (username.length < 2){
            setValues({...values, usernameErr: 'Username must contain at least 2 characters'});
            isReq = false;
        }
        if(!password){
            setValues({...values, passwordErr: 'Password required'});
            isReq = false;
        } else if(password.length < 6){
            setValues({...values, passwordErr: 'Password must contain at least 6 characters'});
            isReq = false;
        }
        if(!email) {
            setValues({...values, emailErr: 'Email required'});
            isReq= false;
        } else if(email.indexOf('@') === -1) {
            setValues({...values, emailErr: 'Email is invalid'});
            isReq = false;
        }
        UsernameErr: UsernameErr;
        PasswordErr: PasswordErr;
        EmailErr: EmailErr;
        BirthdayErr: BirthdayErr;
        return isReq;
};
        

render() {
    const {Watchlist} = this.state;
    const {movies} = this.props;
    const {UsernameErr,PasswordErr,EmailErr,BirthdayErr} = this.state;

    const watchlistMovies = movies.filter((movie) => {
        return Watchlist.includes(movie._id);
    });

    return(
        <Container className="profile-view">
            <h1>Your Profile</h1>
            <h2>Your Watchlist</h2>
            {Watchlist.length === 0 && <p>...is still empty</p>}

            <Row>
                {watchlistMovies.length > 0 && watchlistMovies.map((movie) =>{
                    return (
                        <Col key={movie._id}>
                            <Link to={`/movies/${movie._id}`} >
                            <Card className="profile-view-card">
                            <Card.Img variant="top" className="mx-auto" src={movie.ImagePath} />
                            <Card.Body>
                            <Card.Title>
                            {movie.Title}
                            </Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <Button className="remove-button" onClick={() => this.removeFromWatchlist(movie._id)}>Remove from Watchlist</Button>
                            </Card.Footer>
                            </Card>
                            </Link>

                            
                        </Col>
                    );
                })}
            </Row>

            <h2>Update your information</h2>

            <Form
                                className="update-form"
                                onSubmit={(e) =>
                                    this.editUser(
                                        e,
                                        this.Username,
                                        this.Password,
                                        this.Email,
                                        this.Birthday
                                    )
                                }
                            >
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Username"
                                        placeholder="New Username"
                                        onChange={(e) => this.onUsernameChange(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="Password"
                                        placeholder="New Password"
                                        onChange={(e) => this.onPasswordChange(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="Email"
                                        placeholder="Enter Email"
                                        onChange={(e) => this.onEmailChange(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Birthday</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="Birthday"
                                        onChange={(e) => this.onBirthdayChange(e.target.value)}
                                    />
                                </Form.Group>
                                <br />
                                <div className="bt">
                                    <Button variant="primary" type="submit" onClick={this.updateUser} >Update User</Button>
                                    <Button className="delete-button" variant="danger" onClick={this.deleteUser} >Delete User </Button>
                                </div>
                            </Form>
        </Container>
    );
} 
}


ProfileView.propTypes = {
    users: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthday: PropTypes.string,
        Watchlist: PropTypes.array,
    }),
};