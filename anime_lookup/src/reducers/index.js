import { combineReducers } from 'redux';
import animeReducer from './animeReducer';
import mangaReducer from './mangaReducer';

const reducer = combineReducers({
    animeState:animeReducer,
    mangaState:mangaReducer
});

export default reducer;