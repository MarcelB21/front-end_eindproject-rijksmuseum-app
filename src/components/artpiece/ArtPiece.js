import React from 'react';
import {Link} from "react-router-dom";

function ArtPiece({artObjects}) {

    return (
        <ul>
            {artObjects.length > 0 && artObjects.map((artObject) => {
                return <div className="art-container" key={artObject.id}>
                    <ul key={artObject.objectNumber} className="art-body">
                        <h2><Link to={`/objectInfo/${artObject.objectNumber}`}>{artObject.title}</Link></h2>
                        <p>Museum-code: {artObject.id}</p>
                        {artObject.webImage !== null ?
                            <img src={artObject.webImage.url} alt="art-image" width="300px"/> : ''}
                        <p>kunsternaar(-es):</p>
                        <p>{artObject.principalOrFirstMaker}</p>
                    </ul>
                </div>
            })}
        </ul>
    );
}

export default ArtPiece