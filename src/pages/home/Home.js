import './Home.css';
import React from "react";
import axios from "axios";

const Home = () => {

    async function fetchData() {
        try {
            const result = await axios.get();
        } catch (e) {
            console.error(e);
        }
    }
    fetchData()

return (
    <div>

    </div>
);
};

export default Home;