import './ObjectInfo.css';
import React, {useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const ObjectInfo = () => {

    const { id } = useParams()

    useEffect(() => {
        async function getObjectInfo() {
            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection/${id}`);
                console.log(result);
            } catch (e) {
                console.error(e);
            }
        }
        getObjectInfo()
    }, [])


    return (
        <div>

        </div>
    );
};

export default ObjectInfo