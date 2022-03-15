import './Search.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "../../compontents/button/Button";
import Option from "../../compontents/option/Option";
import Footer from "../../context/Footer";
import ArtPiece from "../../compontents/artpiece/ArtPiece";

const apiKey = 'IofFTSpv';

const Search = () => {

    const [pageSize, setPageSize] = useState(10);
    const handleIncrease = (event) => {
        setPageSize(pageSize + 10);
        event.preventDefault();
    }
    const handleDecrease = (event) => {
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
            toggleArtObjects(result.data.artObjects);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&p=${pageNumber}&ps=${pageSize}&involvedMaker=${involvedMaker}&imgOnly=${imgOnly}&topPieces=${topPieces}`);
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
                        <Option Value="">(leeg) = geen kunstenaar geselecteerd</Option>
                        {/*kunstenaars met de letter A*/}
                        <Option Value="Pieter%20Aertsen">A-1 = Aertsen, Pieter</Option>
                        <Option Value="Laurens">A-2 = Alma Tadema, Lawrence</Option>
                        <Option Value="Karel+Appel">A-3 = Appel, Karel</Option>
                        <Option Value="Hendrick+Avercamp">A-4 = Avercamp, Hendrick</Option>
                        {/*kunstenaars met de letter B*/}
                        <Option Value="Dirck+van+Baburen">B-01 = Baburen, Dirck van</Option>
                        <Option Value="Ludolf+Bakhuysen">B-02 = Bakhuysen, Ludolf</Option>
                        <Option Value="Nicolaes+Pietersz.+Berchem">B-03 = Berchem, Nicolaes Pietersz.</Option>
                        <Option Value="Joachim+Bueckelaer">B-04 = Beuckelaer, Joachim</Option>
                        <Option Value="Albert+Gerard+Bilders">B-05 = Bilders, Albert Gerard</Option>
                        <Option Value="Abraham+Bloemaert">B-06 = Bloemaert, Abraham</Option>
                        <Option Value="Ferdinand+Bol">B-07 = Bol, Ferdinand</Option>
                        <Option Value="Gerard+ter+Borch+(II)">B-08 = Borch, Gerard ter (II)</Option>
                        <Option Value="Jan+Both">B-09 = Both, Jan</Option>
                        <Option Value="André+Charles+Boulle">B-10 = Boulle, André Charles</Option>
                        <Option Value="George+Hendrik+Breitner">B-11 = Breitner, George Hendrik</Option>
                        <Option Value="Hendrick+ter+Brugghen">B-12 = Brugghen, Hendrick ter</Option>
                        <Option Value="Willem+Pietersz.+Buytewech">B-13 = Buytewech, Willem Pietersz.</Option>
                        {/*kunstenaars met de letter C*/}
                        <Option Value="Pieter+Claesz.">C-1 = Claesz., Pieter</Option>
                        <Option Value="Adriaen+Coorte">C-2 = Coorte, Adriaen</Option>
                        <Option Value="Cornelis+Cornelisz.+van+Haarlem">C-3 = Cornelisz. van Haarlem, Cornelis</Option>
                        <Option Value="Jacob+Cornelisz.+van+Oostsanen">C-4 = Cornelisz. van Oostsanen, Jacob</Option>
                        <Option Value="Jacobus+Cressant">C-5 = Cressant, Jacobus</Option>
                        <Option Value="Aelbert+Cuyp">C-6 = Cuyp, Aelbert</Option>
                        {/*kunstenaars met de letter D*/}
                        <Option Value="Herman+Doomer">D-1 = Doomer, Herman</Option>
                        <Option Value="Gerard+Dou">D-2 = Dou, Gerard</Option>
                        <Option Value="Anthony+van+Dyck">D-3 = Dyck, Anthony van</Option>
                        <Option Value="Albrecht+Dürer">D-4 = Dürer, Albrecht</Option>
                        {/*kunstenaars met de letter E*/}
                        <Option Value="Gerbrand+van+den+Eeckhout">E-1 = Eeckhout, Gerbrand van den</Option>
                        <Option Value="Caesar+Boëtius+van+Everdingen">E-2 = Everdingen, Caesar Boëtius van</Option>
                        {/*kunstenaars met de letter F*/}
                        <Option Value="Govert+Flinck">F-1 = Flinck, Govert</Option>
                        {/*kunstenaars met de letter G*/}
                        <Option Value="Paul+Joseph+Constantin+Gabriël">G-1 = Gabriël, Paul Joseph Constantin</Option>
                        <Option Value="Gao+Qipei">G-2 = Gao Qipei</Option>
                        <Option Value="Geertgen+tot+Sint+Jans">G-3 = Geertgen tot Sint Jans</Option>
                        <Option Value="Jacob+de+Gheyn">G-4 = Gheyn, Jacob de</Option>
                        <Option Value="Giambologna">G-5 = Giambologna</Option>
                        <Option Value="Vincent+van+Gogh">G-6 = Gogh, Vincent van</Option>
                        <Option Value="Hendrick Goltzius">G-7 = Goltzius, Hendrick</Option>
                        <Option Value="Jan+van+Goyen">G-8 = Goyen, Jan van</Option>
                        {/*kunstenaars met de letter H*/}
                        <Option Value="Dirck+Hals">H-01 = Hals, Dirck</Option>
                        <Option Value="Frans+Hals">H-02 = Hals, Frans</Option>
                        <Option Value="Willem+Claesz.+Heda">H-03 = Heda, Willem Claesz.</Option>
                        <Option Value="Jan+Davidsz.+de+Heem">H-04 = Heem, Jan Davidsz. de</Option>
                        <Option Value="Maarten+van+Heemskerck">H-05 = Heemskerck, Maarten van</Option>
                        <Option Value="Bartholomeus+van+der+Helst">H-06 = Helst, Bartholomeus van der</Option>
                        <Option Value="Hiroshige%20(I)%20%2C%20Utagawa">H-07 = Utagawa Hiroshige I</Option>
                        <Option Value="Katsushika+Hokusai">H-08 = Hokusai, Katsushika</Option>
                        <Option Value="Gerard+van+Honthorst">H-09 = Honthorst, Gerard van</Option>
                        <Option Value="Pieter+de+Hooch">H-10 = Hooch, Pieter de</Option>
                        {/*kunstenaars met de letter I*/}
                        <Option Value="Isaac+Israels">I-1 = Israels, Isaac</Option>
                        <Option Value="Jozef+Israëls">I-2 = Israëls, Jozef</Option>
                        {/*kunstenaars met de letter J*/}
                        <Option Value="Wenzel+Jamnitzer">J-1 = Jamnitzer, Wenzel</Option>
                        {/*kunstenaars met de letter K*/}
                        <Option Value="Adriaen+Thomasz.+Key">K-1 = Key, Adriaen Thomasz.</Option>
                        <Option Value="Philips+Koninck">K-2 = Koninck, Philips</Option>
                        <Option Value="Willem+Bartel+van+der+Kooi">K-3 = Kooi, Willem Bartel van der</Option>
                        <Option Value="Jan+Adam+Kruseman">K-4 = Kruseman, Jan Adam</Option>
                        {/*kunstenaars met de letter L*/}
                        <Option Value="Gerard+de+Lairesse">L-1 = Lairesse, Gerard de</Option>
                        <Option Value="Ren%C3%A9+Lalique">L-2 = Lalique, Rene Jules</Option>
                        <Option Value="Pieter+Lastman">L-3 = Lastman, Pieter</Option>
                        <Option Value="Adriaan+de+Lelie">L-4 = Lelie, Adriaan de</Option>
                        <Option Value="Lucas+van+Leyden">L-5 = Leyden, Lucas van</Option>
                        <Option Value="Jan+Lievens">L-6 = Lievens, Jan</Option>
                        <Option Value="Jean-Etienne+Liotard">L-7 = Liotard, Jean-Etienne</Option>
                        {/*kunstenaars met de letter M*/}
                        <Option Value="Nicolaes+Maes">M-1 = Maes, Nicolaes</Option>
                        <Option Value="Karel+van+Mander">M-2 = Mander, Karel van</Option>
                        <Option Value="Anton+Mauve">M-3 = Mauve, Anton</Option>
                        <Option Value="Meester+van+Alkmaar">M-4 = Meester van Alkmaar</Option>
                        <Option Value="Hendrik+Willem+Mesdag">M-5 = Mesdag, Hendrik Willem</Option>
                        <Option Value="Gabriël+Metsu">M-6 = Metsu, Gabriël</Option>
                        <Option Value="Michiel Jansz. van Mierevelt">M-7 = Mierevelt, Michiel Jansz. van</Option>
                        <Option Value="Abraham+Mignon">M-8 = Mignon, Abraham</Option>
                        {/*kunstenaars met de letter O*/}
                        <Option Value="Adriaen+van+Ostade">O-1 = Ostade, Adriaen van</Option>
                        {/*kunstenaars met de letter P*/}
                        <Option Value="Jan+Willem+Pieneman">P-1 = Pieneman, Jan Willem</Option>
                        <Option Value="Nicolaas+Pieneman">P-2 = Pieneman, Nicolaas</Option>
                        <Option Value="Frans+Jansz.+Post">P-3 = Post, Frans Jansz.</Option>
                        <Option Value="Paulus+Potter">P-4 = Potter, Paulus</Option>
                        {/*kunstenaars met de letter R*/}
                        <Option Value="Rembrandt%20van%20Rijn">R-1 = Rembrandt van Rijn</Option>
                        <Option Value="Rembrandt+Harmensz.+van+Rijn">R-2 = Rembrandt Harmensz. van Rijn</Option>
                        <Option Value="Peter+Paul+Rubens">R-3 = Rubens, Peter Paul</Option>
                        <Option Value="Salomon+van+Ruysdael">R-4 = Ruysdael, Salomon van</Option>
                        {/*kunstenaars met de letter S*/}
                        <Option Value="Pieter+Jansz.+Saenredam">S-1 = Saenredam, Pieter Jansz.</Option>
                        <Option Value="Roelant+Savery">S-2 = Savery, Roelant</Option>
                        <Option Value="Johan%20Gregor%20van%20der%20Schardt">S-3 = Schardt, Jan Gregor van der</Option>
                        <Option Value="Gerrit+Schouten">S-4 = Schouten, Gerrit</Option>
                        <Option Value="Jan+van+Scorel">S-5 = Scorel, Jan van</Option>
                        <Option Value="Hercules+Segers">S-6 = Segers, Hercules</Option>
                        <Option Value="Jan+Havicksz.+Steen">S-7 = Steen, Jan Havicksz.</Option>
                        <Option Value="Michael+Sweerts">S-8 = Sweerts, Michael</Option>
                        {/*kunstenaars met de letter T*/}
                        <Option Value="Cornelis+Troost">T-1 = Troost, Cornelis</Option>
                        {/*kunstenaars met de letter V*/}
                        <Option Value="Jean+Baptiste+Vanmour">V-01 = Vanmour, Jean Baptiste</Option>
                        <Option Value="Willem+van+de+Velde">V-02 = Velde, Willem van de</Option>
                        <Option Value="Willem+van+de+Velde+(II)">V-03 = Velde, Willem van de (II)</Option>
                        <Option Value="Adriaen+Pietersz.+van+de+Venne">V-04 = Venne, Adriaen Pietersz. van de</Option>
                        <Option Value="Rombout+Verhulst">V-05 = Verhulst, Rombout</Option>
                        <Option Value="Johannes+Vermeer">V-06 = Vermeer, Johannes</Option>
                        <Option Value="Johannes+Cornelisz.+Verspronck">V-07 = Verspronck, Johannes Cornelisz.</Option>
                        <Option Value="Adam+van+Vianen+(I)">V-08 = Vianen, Adam van (I)</Option>
                        <Option Value="Paulus+Willemsz.+van+Vianen">V-09 = Vianen, Paulus Willemsz. van</Option>
                        <Option Value="Claes+Jansz.+Visscher+(II)">V-10 = Visscher, Claes Jansz. (II)</Option>
                        <Option Value="Hendrik+Voogd">V-11 = Voogd, Hendrik</Option>
                        {/*kunstenaars met de letter W*/}
                        <Option Value="Adriaen+van+Wesel">W-1 = Wesel, Adriaen van</Option>
                        {/*kunstenaars met de letter X*/}
                        <Option Value="Jan+Baptist+Xavery">X-1 = Xavery, Jan Baptist</Option>
                    </select>
                </div>
                <div id="search-form2">
                    <h3>Met afbeelding: </h3>
                    <select name="image-only" id="image-only" value={imgOnly}
                            onChange={(event) => setImgOnly(event.target.value)}>
                        <Option Value="false">Nee, alles</Option>
                        <Option Value="true">Ja, alleen met afbeelding</Option>
                    </select>
                </div>
                <div id="search-form3">
                    <h3>Alleen topstukken: </h3>
                    <select name="top-pieces" id="top-pieces" value={topPieces}
                            onChange={(event) => setTopPieces(event.target.value)}>
                        <Option Value="false">Nee, alle kunst ook geen topstukken</Option>
                        <Option Value="true">Ja, alleen topstukken</Option>
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
                <div className="artPiece">
                <ArtPiece artObjects={artObjects}/>
                </div>
            </main>
            <Footer>
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
            </Footer>
        </div>
    );
};

export default Search;
