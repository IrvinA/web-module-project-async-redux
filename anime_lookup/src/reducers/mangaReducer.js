import { FETCH_MANGA, FETCH_MANGA_SUCCESS, FETCH_MANGA_FAIL, SEARCH_MANGA} from '../actions/mangaActions';

const initialState = {
    manga: {
        image_url: '',
        title: '',
        status: '',
        volumes: '',
        chapters: '',
        published: '',
        rank: '',
        score: '',
        synopsis: ''
    },
    isFetching: false,
    error: '',
    search: ''
}

const mangaReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MANGA:
        return {
            ...state,
            manga:{},
            isFetching: true,
            error:''
        }
      case FETCH_MANGA_SUCCESS:
        return {
            ...state,
            manga: {
                image_url: action.payload.image_url,
                title: action.payload.title,
                status: action.payload.status,
                volumes: action.payload.volumes,
                chapters: action.payload.chapters,
                published: action.payload.published.string,
                rank: action.payload.rank,
                score: action.payload.score,
                synopsis: action.payload.synopsis
            },
            isFetching: false,
            error: ''
        }
      case FETCH_MANGA_FAIL:
        return {
          ...state,
          manga: {},
          isFetching: false,
          error: action.payload
        }
      case SEARCH_MANGA:
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

  export default mangaReducer;