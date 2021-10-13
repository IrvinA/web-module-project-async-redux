import { FETCH_ANIME, FETCH_ANIME_SUCCESS, FETCH_ANIME_FAIL, SEARCH_ANIME} from '../actions/animeActions';

const initialState = {
    anime: {
        image_url: '',
        title: '',
        episodes: '',
        status: '',
        aired: '',
        rating: '',
        score: '',
        rank: '',
        synopsis: ''
    },
    isFetching: false,
    error: '',
    search: ''
}

const animeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ANIME:
        return {
          ...state,
          anime:{},
          isFetching: true,
          error:'',
          search:''
        }
      case FETCH_ANIME_SUCCESS:
        return {
            ...state,
            anime: {
                image_url: action.payload.image_url,
                title: action.payload.title,
                episodes: action.payload.episodes,
                status: action.payload.status,
                aired: action.payload.aired.string,
                rating: action.payload.rating,
                score: action.payload.score,
                rank: action.payload.rank,
                synopsis: action.payload.synopsis
            },
            isFetching: false,
            error: '',
            search:''
        }
      case FETCH_ANIME_FAIL:
        return {
          ...state,
          anime: {},
          isFetching: false,
          error: action.payload,
          search:''
        }
      case SEARCH_ANIME:
        return {
          ...state,
          anime: {},
          isFetching: false,
          error: '',
          search: action.payload
        }
      default:
        return state;
    }
  };

  export default animeReducer;