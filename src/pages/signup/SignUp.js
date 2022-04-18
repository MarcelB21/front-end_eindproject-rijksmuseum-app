import React, {useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import './SignUp.css'

function SignUp() {

    const [ email, setEmail ] = useState('')
    const [ username, setUsername] = useState('')
    const [ password, setPassword ] = useState('')

    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault();
        // login();

        try {
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    email: email,
                    username: username,
                    password: password,
                    role: ["user"],
                })
            history.push('/signIn')

        } catch(e){
            console.error(e)
        }
    }


    return (
        <div className="signup">
            <h1 className="h1">Registreren</h1>
            <h3>Welkom bij de registratiepagina van het eindproject - Rijksmuseum te Amsterdam</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Emailadress:
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="username">
                    Username:
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button className="submit-button"
                    type="submit">
                    Registratie
                </button>
            </form>
            <h4>Heb je al een account? Je kunt je <Link className="login" to="/signin">hier</Link> inloggen.</h4>
        </div>
    );
}

export default SignUp;
