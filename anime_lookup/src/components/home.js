import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to='/anime'>
                Get some Anime!
            </Link>
            <Link to='/manga'>
                Get some Manga!
            </Link>
        </div>
    )
};

export default Home;