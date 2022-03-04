import React, { useContext, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import './SignIn.css'

function SignIn() {
    const { login } = useContext(AuthContext);

    const [ user, setUser ] = useState('')
    const [ password, setPassword ] = useState('')

    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault();

        console.log(user, password)
        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                {
                    username: user,
                    password: password,
                });
            history.push("/")
            login(result.data.accessToken);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <div className="signin">
            <h1 className="h1">Inloggen</h1>
            <p>Welkom bij de website van het Rijksmuseum gemaakt door <strong>Marcel Brzezinski</strong> als eindopdracht van <strong>Novi Hogeschool te Utrecht</strong>!</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="user">
                    GebruikersNaam:
                    <input
                        id="user"
                        type="text"
                        name="user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
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
                <button
                    type="submit">
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link className="register" to="/signup">Registreer</Link> je dan eerst.</p>
            </div>
        </>
    );
}

export default SignIn;