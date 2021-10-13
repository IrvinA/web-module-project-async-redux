import axios from 'axios';

export const SEARCH_ANIME = "SEARCH_ANIME";
export const FETCH_ANIME = "FETCH_ANIME";
export const FETCH_ANIME_SUCCESS = "FETCH_ANIME_SUCCESS";
export const FETCH_ANIME_FAIL = "FETCH_ANIME_FAIL";

export const getAnime = () => dispatch => {
    dispatch(fetchAnime());

    axios.get(`https://api.jikan.moe/v3/anime/${Math.floor(Math.random()*2000)}`)
        .then(resp=> {
            dispatch(fetchAnimeSuccess(resp.data));
        })
        .catch(err => {
            dispatch(fetchAnimeFail(err));
        });
}

export const gestSearchedAnime = (e) => dispatch => {
    dispatch(searchAnime(e.target.value));
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${this.state.search}&page=1`)
        .then(resp=> {
            dispatch(fetchAnimeSuccess(resp.data.results));
        })
        .catch(err => {
            dispatch(fetchAnimeFail(err));
        }); 
}

export const searchAnime = (input) => {
    return ({type:SEARCH_ANIME, payload:input});
}

export const fetchAnime = ()=> {
    return ({type:FETCH_ANIME});
}

export const fetchAnimeSuccess = (anime)=> {
    return ({type:FETCH_ANIME_SUCCESS, payload:anime});
}

export const fetchAnimeFail = (error)=> {
    return ({type:FETCH_ANIME_FAIL, payload:error});
}