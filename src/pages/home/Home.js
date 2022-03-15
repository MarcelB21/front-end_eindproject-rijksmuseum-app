import './Home.css';
import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import Button from "../../compontents/button/Button";
import './Home.css'
import ArtPiece from "../../compontents/artpiece/ArtPiece";


const Home = () => {

    const [artObjects, toggleArtObjects] = useState([]);
    
    const apiKey = 'IofFTSpv';

    const [pageSize, setPageSize] = useState(10);
    const handleIncrease = (event) => {
        setPageSize(pageSize+10);
        event.preventDefault();
    }
    const handleDecrease = (event) => {
        setPageSize(pageSize-10);
        event.preventDefault();
    }


    const [pageNumber, setPageNumber] = useState(1);
    const prevPage = () => {
        setPageNumber(pageNumber -1);
    }
    const nextPage = () => {
        setPageNumber(pageNumber +1)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&involvedMaker=Rembrandt+van+Rijn&p=${pageNumber}&ps=${pageSize}`);
                toggleArtObjects(result.data.artObjects);
                console.log(result.data.artObjects)
            } catch (e) {
                console.error(e);
            }
        }

    fetchData()
    }, [pageSize, pageNumber])



    return (
        <div>
            <Fragment>
            <header id="header" className="pageSize">
                <p>{pageSize} kunstobjecten op de pagina</p>
                    <Button
                        onClick={handleDecrease}
                        disabled={pageSize<11}
                        title="Klik om te verminderen"
                    />
                    <Button
                        onClick={handleIncrease}
                        disabled={pageSize>99}
                        title="klik om te vermeerderen"
                    />
            </header>
            <main>
                <div className="ärtPiece">
                <ArtPiece artObjects={artObjects}/>
                </div>
            </main>
            <footer id="footer" className="pageNumber">
                <p>paginanr. = {pageNumber}  </p>
                    <Button
                        onClick={prevPage}
                        disabled={pageNumber<2}
                        title="Vorige pagina"
                    />
                    <Button
                        onClick={nextPage}
                        disabled={pageNumber>99}
                        title="Volgende pagina"
                    />

            </footer>
            </Fragment>
        </div>
    );
};

export default Home;