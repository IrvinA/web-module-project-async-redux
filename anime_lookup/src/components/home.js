import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='buttons'>
            <Link to='/anime' className='anime'>
                Get some Anime!
            </Link>
            <Link to='/manga' className='manga'>
                Get some Manga!
            </Link>
        </div>
    )
};

export default Home;