import { createReducer } from '../utils/helpers';
import POKEMONST_LIST_INITIAL_STATE from './states/pokemonsList';

export default createReducer(POKEMONST_LIST_INITIAL_STATE, {

    ['POKEMON_REQUEST']: (state) => {
        return Object.assign({}, state, {
            data: [],
            fetching: false,
            fetched: true
        })
    },
    ['POKEMON_REQUEST_SUCCESS']: (state, payload) => {
        return Object.assign({}, state, {
            data: payload.data,
            fetching: false,
            fetched: true,
        })
    }
});