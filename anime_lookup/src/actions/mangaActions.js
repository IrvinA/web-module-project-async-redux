import axios from 'axios';

export const SEARCH_MANGA = "SEARCH_MANGA";
export const FETCH_MANGA = "FETCH_MANGA";
export const FETCH_MANGA_SUCCESS = "FETCH_MANGA_SUCCESS";
export const FETCH_MANGA_FAIL = "FETCH_MANGA_FAIL";


export const getManga = () => dispatch => {
    dispatch(fetchManga());
    
    axios.get(`https://api.jikan.moe/v3/manga/${Math.floor(Math.random()*500)}`)
        .then(resp=> {
            dispatch(fetchMangaSuccess(resp.data));
        })
        .catch(err => {
            dispatch(fetchMangaFail(err));
        });
}

export const searchManga = (input) => {
    return ({type:SEARCH_MANGA, payload:input});
}

export const fetchManga = ()=> {
    return ({type:FETCH_MANGA});
}

export const fetchMangaSuccess = (manga)=> {
    return ({type:FETCH_MANGA_SUCCESS, payload:manga});
}

export const fetchMangaFail = (error)=> {
    return ({type:FETCH_MANGA_FAIL, payload:error});
}