import React, {useContext} from 'react';
import { useHistory, Link } from 'react-router-dom';
import {AuthContext } from "./AuthContext";
import logo from '../assets/logo.jpg'
import './NavBar.css'

function NavBar() {
    const {logout, auth } = useContext(AuthContext)

    return (
        <nav>
            <Link to="/contact">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Rijksmuseum (kunstcollectie) te Amsterdam
            </h3>
          </span>
            </Link>
            {auth?
                <div className="basic1">
                    <Link to="/">kunstcollectie</Link>
                    <Link to="/search">zoekpagina</Link>
                    <Link to="/profile">profielpagina</Link>
                    <button
                        type="button"
                        onClick={logout}
                    >Log out
                    </button>
                </div>
                :
                <div className="basic">
                    <Link to="/signin">Log in</Link>
                    <Link to="/signup">Registreren</Link>
                </div>}
        </nav>
    );
}

export default NavBar;