import './ObjectInfo.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import ArtObject from "../../components/artobject/ArtObject";

const ObjectInfo = () => {

    const [artInfo, setArtInfo] = useState({});
    const [art, setArt] = useState([]);
    const [material, toggleMaterial] = useState([]);
    const [nameTag, toggleNameTag] = useState([]);
    const [artName, setArtName] = useState([]);
    const [artImage, toggleArtImage] = useState([]);
    const [artDescription, setArtDescription] = useState([]);
    const apiKey = 'IofFTSpv';
    const {id} = useParams();

    useEffect(() => {
        async function getObjectInfo() {
            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection/${id}?key=${apiKey}`);
                setArtInfo(result.data.artObject);
                setArt(result.data.artObject.objectTypes);
                toggleMaterial(result.data.artObject.materials);
                toggleNameTag(result.data.artObject.titles);
                setArtName(result.data.artObject.label.title);
                toggleArtImage(result.data.artObject.webImage.url);
                setArtDescription(result.data.artObject.label.description);
            } catch (e) {
                console.error(e);
            }
        }

        getObjectInfo()
    }, [])

    return (

        <div className="ArtData">
            <ArtObject art={art} material={material} artInfo={artInfo} artDescription={artDescription} artImage={artImage} artName={artName} nameTag={nameTag} />
        </div>


    );
};

export default ObjectInfo