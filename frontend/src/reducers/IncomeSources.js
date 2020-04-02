import {RECEIVE_SOURCES} from '../ActionTypes';

const initialState = [];

export function income_sources(state = initialState, action) {
    if (action.type === RECEIVE_SOURCES) {
        return action.payload;
    } else {
        return state;
    }
}