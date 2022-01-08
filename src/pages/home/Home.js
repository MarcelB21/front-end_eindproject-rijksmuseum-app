import './Home.css';
import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const Home = () => {

    const [art, setArt] = useState('');
    
    const apiKey = 'IofFTSpv';

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&involvedMaker=Rembrandt+van+Rijn`);
                console.log(result.data.artObjects);
                setArt(result.data.artObjects);
            } catch (e) {
                console.error(e);
            }
        }

    fetchData()
    }, [])



    return (
        <div>
            {art && art.map((art, index)=>{
                return (
                    <Fragment key={index}>
                        <div className="art-container">
                            <ul className="art-body">
                                <h2>Title:</h2>
                                <h2><Link to={`/objectInfo/${art.objectNumber}`}>{art.title}</Link></h2>
                                <h3>image:</h3>
                                <img src={art.webImage.url} alt="art-image" width="250px"/>
                                <h4>ID: </h4>
                                <p>{art.id}</p>
                            </ul>
                        </div>
                    </Fragment>
                )
            })}
        </div>
    );
};

export default Home;