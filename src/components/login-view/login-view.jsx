import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './login-view.scss';

export function LoginView(props) {
const [ username, setUsername ] = useState('');
const [ password, setPassword ] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
//will be removed later! no sensitive data in console.log!!!
    console.log(username, password);
    props.onLoggedIn(username);
};

return(
    <>
    <form className="login-form">
    <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
    </label>
    <label>
        Password:
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
    </label>
    <button type="submit" onClick={handleSubmit}>Submit</button>
</form>
<a href="../registration-view/registration-view.jsx"><button type="button">Register</button></a>
</>
 //register button is currently a template for the actual button!   
);
}

LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired
};