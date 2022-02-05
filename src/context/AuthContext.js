import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import axios from "axios";

export const AuthContext = createContext({})


const AuthContextProvider = ({children}) => {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    function login(JWT){
        localStorage.setItem('token', JWT);

        const decode = jwt_decode(JWT);

        getUserData(decode.sub, JWT, '/profile')
    }

    function logout() {
        localStorage.clear();
        toggleAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: 'done',
        });
        history.push("/");
    }



    async function getUserData(id, token, redirect) {
        try {
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    } })
            toggleAuth({
                ...auth,
                isAuth: true,
                status: 'done',
                user: {
                    email: result.data.email,
                    username: result.data.username,
                    id: result.data.id,
                } });
            history.push(redirect);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decode = jwt_decode(token);
            getUserData(decode.sub, token, "/profile");
        } else {
            toggleAuth({
                isAuth: false,
                user: null,
                status: 'done',
            })
        }
    }, [])



    const contextData = {
        auth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider;