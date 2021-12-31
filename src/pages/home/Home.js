import './Home.css';
import React, {useEffect} from "react";
import axios from "axios";

const Home = () => {

    const apiKey = 'IofFTSpv';

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&involvedMaker=Rembrandt+van+Rijn`);
                console.log(result);
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