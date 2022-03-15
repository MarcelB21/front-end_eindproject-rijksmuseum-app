import React from 'react';
import './ArtObjct.css'

function ArtObject({artName, artImage, artDescription, artInfo, art, material, nameTag}) {

    return (
        <div className="objectInfo">
            <h2>{artName && artName}</h2>
            <img src={artImage} alt="art-image" width="500px"/>
            <h4>Extra titels: </h4>
            {nameTag && nameTag.map((name, index) => <h4 key={index}>{name}</h4>)}
            <h4>Omschrijving: {artDescription && artDescription}</h4>
            <h4>Kunstwerk type(s): </h4>
            {art && art.map((art, index) => <h4 key={index}>{art}</h4>)}
            <h4>Soort kunst: {artInfo && artInfo.physicalMedium}</h4>
            <h4>Materialen: </h4>
            {material && material.map((material, index) => <h4 key={index}>{material}</h4>)}
        </div>
    );
}

export default ArtObject;