import './ObjectInfo.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import ArtObject from "../../compontents/artobject/ArtObject";

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
                console.log(artInfo);
                console.log(art);
                console.log(result);
                console.log(result.data.artObject);
            } catch (e) {
                console.error(e);
            }
        }

        getObjectInfo()
    }, [])

    return (

        <div className="ArtData">
            <ArtObject art={art} material={material} artInfo={artInfo} artDescription={artDescription} artImage={artImage} artName={artName} nameTag={nameTag} />
            {/*<div className="objectInfo">*/}
            {/*    <h2>{artName && artName}</h2>*/}
            {/*    <img src={artImage} alt="art-image" width="500px"/>*/}
            {/*    <h4>Extra titels: </h4>*/}
            {/*    {name && name.map((name, index) => <h4 key={index}>{name}</h4>)}*/}
            {/*    <h4>Omschrijving: {artDescription && artDescription}</h4>*/}
            {/*    <h4>Kunstwerk type(s): </h4>*/}
            {/*    {art && art.map((art, index) => <h4 key={index}>{art}</h4>)}*/}
            {/*    <h4>Soort kunst: {artInfo && artInfo.physicalMedium}</h4>*/}
            {/*    <h4>Materialen: </h4>*/}
            {/*    {material && material.map((material, index) => <h4 key={index}>{material}</h4>)}*/}
            {/*</div>*/}
        </div>


    );
};

export default ObjectInfo