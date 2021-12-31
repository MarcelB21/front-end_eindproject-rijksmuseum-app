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

        </div>
    );
};

export default Home;