import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";


function Profile() {

    const [profileData, setProfileData] = useState({})
    const {user} = useContext(AuthContext);

    useEffect(() => {
        async function fetchProfileData() {
            const token = localStorage.getItem('token')
            try{
                const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user',
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
                setProfileData(result.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchProfileData()
    }, [])

    return (
        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>id:</strong>{user.id}</p>
                <p><strong>roles:</strong>{user.role}</p>
            </section>
            <section>
                <h2>Strikt geheime profiel-content</h2>
                <p>Je kunt op deze webpagina twee kanten op:</p>
                <ul>
                    <li>je kunt naar de kunst-collectie gaan en daar kunst bekijken, houdt er rekening mee dat je max 100 pagina's kunt bekijken en er maximaal 100 kunstobjecten per pagina zijn: <p>Link naar de <Link to="/">Kunst-collectie</Link></p></li>
                    <li>je kunt naar de zoekpagina gaan en daar per kunstenaar bekijken wat de kunstenaar gemaakt heeft. Je hebt hetzelfde limit aan kunstobjecten als bij de kunst-collectie. Tevens is het zo dat als je kijkt naar de zoekfunctie op kunstenaar dat je een letter met cijfer ziet, dit is gedaan voor de gebruikersvriendelijkheid want ipv de kunstenaar te onthouden, hoef je nu alleen maar één letter en een (of twee) cijfer(s) te onthouden! <p>Link naar de <Link to="/search">Zoekpagina</Link></p></li>
                </ul>
            </section>
            <footer></footer>
        </>
    );
}

export default Profile;