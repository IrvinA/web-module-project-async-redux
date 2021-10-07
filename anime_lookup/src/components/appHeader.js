import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
    return(
        <div>
            <div className='app-title'>
                <h1>Weeb List</h1>
            </div>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/anime/search'>Search an Anime</Link>
                <Link to='/manga/search'>Search a Manga</Link>
            </div>
        </div>
    )
}

export default AppHeader;