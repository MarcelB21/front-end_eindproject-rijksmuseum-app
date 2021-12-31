import './Home.css';
import React, {useEffect, useState} from "react";
import axios from "axios";

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
            {art.map((art)=>{
                return (
                    <>
                        <div className="art-container">
                            <ul className="art-body">
                                <h2>Title:</h2>
                                <a>{art.title}</a>
                                <h3>image:</h3>
                                <img src={art.webImage.url} alt="art-image" width="250px"/>
                                <h4>ID: </h4>
                                <p>{art.id}</p>
                            </ul>
                        </div>
                    </>
                )
            })}
        </div>
    );
};

export default Home;