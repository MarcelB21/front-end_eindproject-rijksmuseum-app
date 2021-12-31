import './ObjectInfo.css';
import React from 'react';
import axios from "axios";

const ObjectInfo = () => {

    async function getObjectInfo() {
        try {
            const result = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection/SK-C-597`);
            console.log(result);
        } catch (e) {
            console.error(e);
        }
    }
    getObjectInfo()


    return (
        <div>

        </div>
    );
};

export default ObjectInfo