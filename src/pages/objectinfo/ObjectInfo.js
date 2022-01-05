import './ObjectInfo.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const ObjectInfo = () => {

    const [artInfo, setArtInfo] = useState();
    const [art, setArt] = useState([]);
    const apiKey = 'IofFTSpv';
    const {id} = useParams();

    useEffect(() => {
        async function getObjectInfo() {
            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection/${id}?key=${apiKey}`);
                console.log(result);
                setArtInfo(result);
                setArt(result.data.artObject.objectTypes);
                console.log(result.data.artObject.objectTypes);
            } catch (e) {
                console.error(e);
            }
        }

        getObjectInfo()
    }, [])


    function artObjectInfo(text) {
        const newText = text.map((art, index) => <h4 key={index}>{art}</h4>);
        return newText;
    }

    return (
        <div>
            <h2>{artInfo && artInfo.data.artObject.label.title}</h2>
            <img src={artInfo && artInfo.data.artObject.webImage.url} alt="art-image" width="500px"/>
            <h4>discription: {artInfo && artInfo.data.artObject.label.description}</h4>
            <h4>objectTypes: </h4>
            {artObjectInfo(art)}
        </div>
    );
};

export default ObjectInfo