import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import './Profile.css'

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
        <div className="body">
            <h1 className="h1">Profielpagina</h1>
            <section className="section1">
                <h2 className="h2">Gegevens</h2>
                <h3><strong>Gebruikersnaam:</strong></h3>
                <h3>{user.username}</h3>
                <h3><strong>Email:</strong></h3>
                <h3>{user.email}</h3>
                <h3><strong>id:</strong>{user.id}</h3>
                <h3><strong>roles:</strong>{user.role}</h3>
            </section>
            <section className="section2">
                <h2>Strikt geheime profiel-content</h2>
                <h3>Je kunt op deze webpagina twee kanten op:</h3>
                <ul>
                    <li>je kunt naar de kunst-collectie gaan en daar kunst bekijken, houdt er rekening mee dat je max 100 pagina's kunt bekijken en er maximaal 100 kunstobjecten per pagina zijn: <h3>Link naar de <Link className="Link" to="/">Kunst-collectie</Link></h3></li>
                    <li>je kunt naar de zoekpagina gaan en daar per kunstenaar bekijken wat de kunstenaar gemaakt heeft. Je hebt hetzelfde limit aan kunstobjecten als bij de kunst-collectie. Tevens is het zo dat als je kijkt naar de zoekfunctie op kunstenaar dat je een letter met cijfer ziet, dit is gedaan voor de gebruikersvriendelijkheid want ipv de kunstenaar te onthouden, hoef je nu alleen maar ????n letter en een (of twee) cijfer(s) te onthouden! <h3>Link naar de <Link className="Link" to="/search">Zoekpagina</Link></h3></li>
                </ul>
            </section>
        </div>
    );
}

export default Profile;