import React, { useState, useEffect } from "react";
import BlogItem from "../BlogItem";


import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'


const Home = () => {
    const [apiData, setApiData] = useState([]);
    const [isSpinning, setSpin] = useState(true);

    const options = {
        method: "GET"
    };

    const url = "https://apis.ccbp.in/blogs";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                const modifiedData = data.map(each => ({
                    id: each.id,
                    author: each.author,
                    avatarUrl: each.avatar_url,
                    imageUrl: each.image_url,
                    title: each.title,
                    topic: each.topic // Change this to "each.topic"
                }));

                setApiData(modifiedData);
                setSpin(false);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
        
    }, []);

    return (
        <div>
            <h1 className="text-center">Welcome to the home page!</h1>
            {isSpinning ? ( <Loader type="TailSpin" color="#00BFFF" height={50} width={50} /> ) : (
                apiData.map(each => (
                    <BlogItem key={each.id} blogData={each} />
                ))
            )}
        </div>
    );
};

export default Home;
