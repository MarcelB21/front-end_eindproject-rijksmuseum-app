import './Search.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "../../compontents/button/Button";
import {Link} from "react-router-dom";

const apiKey = 'IofFTSpv';

const Search = () => {

    let [pageSize, setPageSize] = useState(10);
    let handleIncrease = (event) => {
        setPageSize(pageSize + 10);
        event.preventDefault();
    }
    let handleDecrease = (event) => {
        setPageSize(pageSize - 10);
        event.preventDefault();
    }


    const [pageNumber, setPageNumber] = useState(1);
    const prevPage = () => {
        setPageNumber(pageNumber - 1);
    }
    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    const [involvedMaker, setInvolvedMaker] = useState('');
    const [imgOnly, setImgOnly] = useState(false);
    const [topPieces, setTopPieces] = useState(false);

    const [artObjects, toggleArtObjects] = useState([]);


    async function fetchData(event) {
        event.preventDefault();
        try {
            const result = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&p=&involvedMaker=${involvedMaker}&imgOnly=${imgOnly}&topPieces=${topPieces}`);
            console.log(result);

            toggleArtObjects(result.data.artObjects);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&p=${pageNumber}&ps=${pageSize}&involvedMaker=${involvedMaker}&imgOnly=${imgOnly}&topPieces=${topPieces}`);
                console.log(result);

                toggleArtObjects(result.data.artObjects);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [pageSize, pageNumber]);


    return (
        <div>
            <h1>Zoekpagina:</h1>
            <form onSubmit={fetchData} id="search-form">
                <div id="search-form1">
                    <h3>Naam kunstenaar: </h3>
                    <select name="involved-maker" id="involved-maker-field" value={involvedMaker}
                            onChange={(event) => setInvolvedMaker(event.target.value)}>
                        <option value="">(leeg) = geen kunstenaar geselecteerd</option>
                        {/*kunstenaars met de letter A*/}
                        <option value="Pieter%20Aertsen">A-1 = Aertsen, Pieter</option>
                        <option value="Laurens">A-2 = Alma Tadema, Lawrence</option>
                        <option value="Karel+Appel">A-3 = Appel, Karel</option>
                        <option value="Hendrick+Avercamp">A-4 = Avercamp, Hendrick</option>
                        {/*kunstenaars met de letter B*/}
                        <option value="Dirck+van+Baburen">B-01 = Baburen, Dirck van</option>
                        <option value="Ludolf+Bakhuysen">B-02 = Bakhuysen, Ludolf</option>
                        <option value="Nicolaes+Pietersz.+Berchem">B-03 = Berchem, Nicolaes Pietersz.</option>
                        <option value="Joachim+Bueckelaer">B-04 = Beuckelaer, Joachim</option>
                        <option value="Albert+Gerard+Bilders">B-05 = Bilders, Albert Gerard</option>
                        <option value="Abraham+Bloemaert">B-06 = Bloemaert, Abraham</option>
                        <option value="Ferdinand+Bol">B-07 = Bol, Ferdinand</option>
                        <option value="Gerard+ter+Borch+(II)">B-08 = Borch, Gerard ter (II)</option>
                        <option value="Jan+Both">B-09 = Both, Jan</option>
                        <option value="André+Charles+Boulle">B-10 = Boulle, André Charles</option>
                        <option value="George+Hendrik+Breitner">B-11 = Breitner, George Hendrik</option>
                        <option value="Hendrick+ter+Brugghen">B-12 = Brugghen, Hendrick ter</option>
                        <option value="Willem+Pietersz.+Buytewech">B-13 = Buytewech, Willem Pietersz.</option>
                        {/*kunstenaars met de letter C*/}
                        <option value="Pieter+Claesz.">C-1 = Claesz., Pieter</option>
                        <option value="Adriaen+Coorte">C-2 = Coorte, Adriaen</option>
                        <option value="Cornelis+Cornelisz.+van+Haarlem">C-3 = Cornelisz. van Haarlem, Cornelis</option>
                        <option value="Jacob+Cornelisz.+van+Oostsanen">C-4 = Cornelisz. van Oostsanen, Jacob</option>
                        <option value="Jacobus+Cressant">C-5 = Cressant, Jacobus</option>
                        <option value="Aelbert+Cuyp">C-6 = Cuyp, Aelbert</option>
                        {/*kunstenaars met de letter D*/}
                        <option value="Herman+Doomer">D-1 = Doomer, Herman</option>
                        <option value="Gerard+Dou">D-2 = Dou, Gerard</option>
                        <option value="Anthony+van+Dyck">D-3 = Dyck, Anthony van</option>
                        <option value="Albrecht+Dürer">D-4 = Dürer, Albrecht</option>
                        {/*kunstenaars met de letter E*/}
                        <option value="Gerbrand+van+den+Eeckhout">E-1 = Eeckhout, Gerbrand van den</option>
                        <option value="Caesar+Boëtius+van+Everdingen">E-2 = Everdingen, Caesar Boëtius van</option>
                        {/*kunstenaars met de letter F*/}
                        <option value="Govert+Flinck">F-1 = Flinck, Govert</option>
                        {/*kunstenaars met de letter G*/}
                        <option value="Paul+Joseph+Constantin+Gabriël">G-1 = Gabriël, Paul Joseph Constantin</option>
                        <option value="Gao+Qipei">G-2 = Gao Qipei</option>
                        <option value="Geertgen+tot+Sint+Jans">G-3 = Geertgen tot Sint Jans</option>
                        <option value="Jacob+de+Gheyn">G-4 = Gheyn, Jacob de</option>
                        <option value="Giambologna">G-5 = Giambologna</option>
                        <option value="Vincent+van+Gogh">G-6 = Gogh, Vincent van</option>
                        <option value="Hendrick Goltzius">G-7 = Goltzius, Hendrick</option>
                        <option value="Jan+van+Goyen">G-8 = Goyen, Jan van</option>
                        {/*kunstenaars met de letter H*/}
                        <option value="Dirck+Hals">H-01 = Hals, Dirck</option>
                        <option value="Frans+Hals">H-02 = Hals, Frans</option>
                        <option value="Willem+Claesz.+Heda">H-03 = Heda, Willem Claesz.</option>
                        <option value="Jan+Davidsz.+de+Heem">H-04 = Heem, Jan Davidsz. de</option>
                        <option value="Maarten+van+Heemskerck">H-05 = Heemskerck, Maarten van</option>
                        <option value="Bartholomeus+van+der+Helst">H-06 = Helst, Bartholomeus van der</option>
                        <option value="Hiroshige%20(I)%20%2C%20Utagawa">H-07 = Utagawa Hiroshige I</option>
                        <option value="Katsushika+Hokusai">H-08 = Hokusai, Katsushika</option>
                        <option value="Gerard+van+Honthorst">H-09 = Honthorst, Gerard van</option>
                        <option value="Pieter+de+Hooch">H-10 = Hooch, Pieter de</option>
                        {/*kunstenaars met de letter I*/}
                        <option value="Isaac+Israels">I-1 = Israels, Isaac</option>
                        <option value="Jozef+Israëls">I-2 = Israëls, Jozef</option>
                        {/*kunstenaars met de letter J*/}
                        <option value="Wenzel+Jamnitzer">J-1 = Jamnitzer, Wenzel</option>
                        {/*kunstenaars met de letter K*/}
                        <option value="Adriaen+Thomasz.+Key">K-1 = Key, Adriaen Thomasz.</option>
                        <option value="Philips+Koninck">K-2 = Koninck, Philips</option>
                        <option value="Willem+Bartel+van+der+Kooi">K-3 = Kooi, Willem Bartel van der</option>
                        <option value="Jan+Adam+Kruseman">K-4 = Kruseman, Jan Adam</option>
                        {/*kunstenaars met de letter L*/}
                        <option value="Gerard+de+Lairesse">L-1 = Lairesse, Gerard de</option>
                        <option value="Ren%C3%A9+Lalique">L-2 = Lalique, Rene Jules</option>
                        <option value="Pieter+Lastman">L-3 = Lastman, Pieter</option>
                        <option value="Adriaan+de+Lelie">L-4 = Lelie, Adriaan de</option>
                        <option value="Lucas+van+Leyden">L-5 = Leyden, Lucas van</option>
                        <option value="Jan+Lievens">L-6 = Lievens, Jan</option>
                        <option value="Jean-Etienne+Liotard">L-7 = Liotard, Jean-Etienne</option>
                        {/*kunstenaars met de letter M*/}
                        <option value="Nicolaes+Maes">M-1 = Maes, Nicolaes</option>
                        <option value="Karel+van+Mander">M-2 = Mander, Karel van</option>
                        <option value="Anton+Mauve">M-3 = Mauve, Anton</option>
                        <option value="Meester+van+Alkmaar">M-4 = Meester van Alkmaar</option>
                        <option value="Hendrik+Willem+Mesdag">M-5 = Mesdag, Hendrik Willem</option>
                        <option value="Gabriël+Metsu">M-6 = Metsu, Gabriël</option>
                        <option value="Michiel Jansz. van Mierevelt">M-7 = Mierevelt, Michiel Jansz. van</option>
                        <option value="Abraham+Mignon">M-8 = Mignon, Abraham</option>
                        {/*kunstenaars met de letter O*/}
                        <option value="Adriaen+van+Ostade">O-1 = Ostade, Adriaen van</option>
                        {/*kunstenaars met de letter P*/}
                        <option value="Jan+Willem+Pieneman">P-1 = Pieneman, Jan Willem</option>
                        <option value="Nicolaas+Pieneman">P-2 = Pieneman, Nicolaas</option>
                        <option value="Frans+Jansz.+Post">P-3 = Post, Frans Jansz.</option>
                        <option value="Paulus+Potter">P-4 = Potter, Paulus</option>
                        {/*kunstenaars met de letter R*/}
                        <option value="Rembrandt%20van%20Rijn">R-1 = Rembrandt van Rijn</option>
                        <option value="Rembrandt+Harmensz.+van+Rijn">R-2 = Rembrandt Harmensz. van Rijn</option>
                        <option value="Peter+Paul+Rubens">R-3 = Rubens, Peter Paul</option>
                        <option value="Salomon+van+Ruysdael">R-4 = Ruysdael, Salomon van</option>
                        {/*kunstenaars met de letter S*/}
                        <option value="Pieter+Jansz.+Saenredam">S-1 = Saenredam, Pieter Jansz.</option>
                        <option value="Roelant+Savery">S-2 = Savery, Roelant</option>
                        <option value="Johan%20Gregor%20van%20der%20Schardt">S-3 = Schardt, Jan Gregor van der</option>
                        <option value="Gerrit+Schouten">S-4 = Schouten, Gerrit</option>
                        <option value="Jan+van+Scorel">S-5 = Scorel, Jan van</option>
                        <option value="Hercules+Segers">S-6 = Segers, Hercules</option>
                        <option value="Jan+Havicksz.+Steen">S-7 = Steen, Jan Havicksz.</option>
                        <option value="Michael+Sweerts">S-8 = Sweerts, Michael</option>
                        {/*kunstenaars met de letter T*/}
                        <option value="Cornelis+Troost">T-1 = Troost, Cornelis</option>
                        {/*kunstenaars met de letter V*/}
                        <option value="Jean+Baptiste+Vanmour">V-01 = Vanmour, Jean Baptiste</option>
                        <option value="Willem+van+de+Velde">V-02 = Velde, Willem van de</option>
                        <option value="Willem+van+de+Velde+(II)">V-03 = Velde, Willem van de (II)</option>
                        <option value="Adriaen+Pietersz.+van+de+Venne">V-04 = Venne, Adriaen Pietersz. van de</option>
                        <option value="Rombout+Verhulst">V-05 = Verhulst, Rombout</option>
                        <option value="Johannes+Vermeer">V-06 = Vermeer, Johannes</option>
                        <option value="Johannes+Cornelisz.+Verspronck">V-07 = Verspronck, Johannes Cornelisz.</option>
                        <option value="Adam+van+Vianen+(I)">V-08 = Vianen, Adam van (I)</option>
                        <option value="Paulus+Willemsz.+van+Vianen">V-09 = Vianen, Paulus Willemsz. van</option>
                        <option value="Claes+Jansz.+Visscher+(II)">V-10 = Visscher, Claes Jansz. (II)</option>
                        <option value="Hendrik+Voogd">V-11 = Voogd, Hendrik</option>
                        {/*kunstenaars met de letter W*/}
                        <option value="Adriaen+van+Wesel">W-1 = Wesel, Adriaen van</option>
                        {/*kunstenaars met de letter X*/}
                        <option value="Jan+Baptist+Xavery">X-1 = Xavery, Jan Baptist</option>
                    </select>
                </div>
                <div id="search-form2">
                    <h3>Met afbeelding: </h3>
                    <select name="image-only" id="image-only" value={imgOnly}
                            onChange={(event) => setImgOnly(event.target.value)}>
                        <option value="false">Nee, alles</option>
                        <option value="true">Ja, alleen met afbeelding</option>
                    </select>
                </div>
                <div id="search-form3">
                    <h3>Alleen topstukken: </h3>
                    <select name="top-pieces" id="top-pieces" value={topPieces}
                            onChange={(event) => setTopPieces(event.target.value)}>
                        <option value="false">Nee, alle kunst ook geen topstukken</option>
                        <option value="true">Ja, alleen topstukken</option>
                    </select>
                </div>
                <div id="search-form4">
                    <h4>Klik op de knop als je selectie definief is:</h4>
                    <button type="submit">Hier je resultaat</button>
                </div>
            </form>
            <header>
            <p>{pageSize} kunstobjecten op de pagina</p>
            <Button
                onClick={handleDecrease}
                disabled={pageSize < 11}
                title="Klik om te verminderen"
            />
            <Button
                onClick={handleIncrease}
                disabled={pageSize > 99}
                title="klik om te vermeerderen"
            />
            </header>
            <main>
            <ul>
                {artObjects.length > 0 && artObjects.map((artObject) => {
                    return <div className="art-container">
                    <ul key={artObject.objectNumber} className="art-body">
                        <h2><Link to={`/objectInfo/${artObject.objectNumber}`}>{artObject.title}</Link></h2>
                        <p>{artObject.objectNumber}</p>
                        <h3>image:</h3>
                        {artObject.webImage !== null ?
                            <img src={artObject.webImage.url} alt="art-image" width="300px"/> : ''}
                    </ul>
                    </div>
                })}
            </ul>
            </main>
            <footer>
            <p>paginanr. = {pageNumber}  </p>
            <Button
                onClick={prevPage}
                disabled={pageNumber < 2}
                title="Vorige pagina"
            />
            <Button
                onClick={nextPage}
                disabled={pageNumber > 99}
                title="Volgende pagina"
            />
            </footer>
        </div>
    );
};

export default Search;
