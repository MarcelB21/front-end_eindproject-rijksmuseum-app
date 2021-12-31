import './ObjectInfo.css';
import React from 'react';
import axios from "axios";

const ObjectInfo = () => {

    async function getObjectInfo() {
        try {
            const result = await axios.get(``)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>

        </div>
    );
};

export default ObjectInfo