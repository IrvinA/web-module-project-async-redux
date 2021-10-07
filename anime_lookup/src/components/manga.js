import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { getManga } from '../actions/mangaActions';

const Manga = (props) => {
    const { manga, isFetching, error, getManga } = props;
    
    useEffect(() => {
        getManga();
    }, []);

    if (error) {
        return <h2>There seems to be an error with your request</h2>;
    }

    if (isFetching) {
        return <h2>Retrieving your Manga!</h2>;
    }

    return (
        <>
            <div className='manga-container'>
                <div className='manga-title'>
                    <h2>{manga.title}</h2>
                    <img src={manga.image_url} alt={manga.image_url}/>
                </div>
                <div className='manga-info'>
                    <div className='manga-general'>
                        <p>Status: {manga.status}</p>
                        <p>Volumes: {manga.volumes}</p>
                        <p>Chapters: {manga.chapters}</p>
                    </div>
                    <div className='manga-misc'>
                        <p>Published: {manga.published}</p>
                        <p>Rank: {manga.rank}</p>
                        <p>MALScore: {manga.score}</p>
                    </div>
                    <div className='manga-synopsis'>
                        <p>Synopsis:</p> 
                        <span>{manga.synopsis}</span>
                    </div>
                </div>
            </div>
        </>
    )
};

const mapStateToProps = state => {
    return {
        manga: state.mangaState.manga,
        isFetching: state.mangaState.isFetching,
        error: state.mangaState.error
    }
}

export default connect(mapStateToProps, { getManga })(Manga);