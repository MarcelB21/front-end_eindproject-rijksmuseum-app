import './Home.css';
import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";


const Home = () => {

    const [art, setArt] = useState('');
    
    const apiKey = 'IofFTSpv';

    let [pageSize, setPageSize] = useState(10);
    let handleIncrease = (event) => {
        setPageSize(pageSize+10);
        event.preventDefault();
    }
    let handleDecrease = (event) => {
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
                console.log(result.data.artObjects);
                setArt(result.data.artObjects);
            } catch (e) {
                console.error(e);
            }
        }

    fetchData()
    }, [pageSize, pageNumber])



    return (
        <div>
            <body>
            <header id="header" className="pageSize">
                <p>{pageSize} kunstobjecten op de pagina</p>
                <p>
                    <button type="button" onClick={handleDecrease} disabled={pageSize<11}>
                        Klik om te verminderen
                    </button>
                    <button type="button" onClick={handleIncrease} disabled={pageSize>99}>
                        klik om te vermeerderen
                    </button>
                </p>
            </header>
            <main>
            {art && art.map((art, index)=>{
                return (
                    <Fragment key={index}>
                        <div className="art-container">
                            <ul className="art-body">
                                <h2>Title:</h2>
                                <h2><Link to={`/objectInfo/${art.objectNumber}`}>{art.title}</Link></h2>
                                <h3>image:</h3>
                                {art.webImage !== null? <img src={art.webImage.url} alt="art-image" width="250px"/> : ''}
                                <h4>ID: </h4>
                                <p>{art.id}</p>
                            </ul>
                        </div>
                    </Fragment>
                )
            })}
            </main>
            <footer id="footer" className="pageNumber">
                <p>paginanr. = {pageNumber}  </p>
                <p>
                    <button disabled={pageNumber<2} onClick={prevPage}>
                        Vorige pagina
                    </button>
                    <button onClick={nextPage}>
                        Volgende pagina
                    </button>
                </p>
            </footer>
            </body>
        </div>
    );
};

export default Home;