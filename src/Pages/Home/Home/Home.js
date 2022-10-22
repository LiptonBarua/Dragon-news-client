import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allnews = useLoaderData();
    return (
        <div>
            <h1>Dragon News Home: {allnews.length}</h1>
            {
                allnews.map(news=><NewsSummeryCard key= {news._id} news={news}>
                </NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;