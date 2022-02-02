import React, {useContext} from 'react';
import { useHistory, Link } from 'react-router-dom';
import {AuthContext } from "./AuthContext";
import logo from '../assets/logo.png'
import './NavBar.css'

function NavBar() {
    const {logout, auth } = useContext(AuthContext)
    const history = useHistory();

    return (
        <nav>
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Rijksmuseum (kunstcollectie) te Amsterdam
            </h3>
          </span>
            {auth?
                <div>

                    <button
                        type="button"
                        onClick={() => history.push('/')}
                    >
                        kunstcollectie
                    </button>
                    <button
                        type="button"
                        onClick={() => history.push('/search')}
                    >
                        zoekpagina
                    </button>
                    <button
                        type="button"
                        onClick={() => history.push('/profile')}
                    >
                        profielpagina
                    </button>
                    <button
                        type="button"
                        onClick={logout}
                        >Log out
                    </button>
                </div>
                :
                <div>
                    <button
                        type="button"
                        onClick={() => history.push('/signin')}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => history.push('/signup')}
                    >
                        Registreren
                    </button>
                </div>}
        </nav>
    );
}

export default NavBar;