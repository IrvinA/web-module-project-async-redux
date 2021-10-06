import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
    return(
        <div>
            <div>
                <h1>Weeb Haven</h1>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/anime'>Search an Anime</Link>
                <Link to='/manga'>Search a Manga</Link>
            </div>
        </div>
    )
}

export default AppHeader;