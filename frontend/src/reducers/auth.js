import {LOGIN_USER, REGISTER_USER} from "../ActionTypes";

const initialState = {
    user: null
};

export function auth(state = initialState, action) {
    if (action.type === REGISTER_USER || action.type === LOGIN_USER ) {
        return {
            ...state,
            user: action.user
        }
    }
    return state;
}
