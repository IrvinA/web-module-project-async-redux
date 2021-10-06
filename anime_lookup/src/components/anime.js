import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { getAnime } from '../actions/animeActions';

const Anime = (props) => {
    const { anime, isFetching, error, getAnime } = props;
    
    useEffect(() => {
        getAnime();
    }, []);

    if (error) {
        return <h2>There seems to be an error with your request</h2>;
    }

    if (isFetching) {
        return <h2>Retrieving your Anime!</h2>;
    }

    return (
        <>
            <div>
                <div>
                    <h2>{anime.title}</h2>
                    <img src={anime.image_url} alt={anime.image_url}/>
                </div>
                <div>
                    <p>Episodes: {anime.episodes}</p>
                    <p>Status: {anime.status}</p>
                    <p>Aired: {anime.aired}</p>
                </div>
                <div>
                    <p>Rating: {anime.rating}</p>
                    <p>MALScore: {anime.score}</p>
                    <p>Rank: {anime.rank}</p>
                </div>
                <div>
                    <p>Synopsis:</p> 
                    <p>{anime.synopsis}</p>
                </div>
            </div>
        </>
    )
};

const mapStateToProps = state => {
    return {
        anime: state.animeState.anime,
        isFetching: state.animeState.isFetching,
        error: state.animeState.error
    }
}

export default connect(mapStateToProps, { getAnime })(Anime);