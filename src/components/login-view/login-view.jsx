import React, { useState } from 'react';

export function LoginView(props) {
const [ username, setUsername ] = useState('');
const [ password, setPassword ] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
//will be removed later!
    console.log(username, password);
    props.onLoggedIn(username);
};

return(
    <form>
        <label>
            Username:
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
);
}