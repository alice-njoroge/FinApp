import {LOAD_APP, LOGIN_USER, REGISTER_USER} from "../ActionTypes";

const initialState = {
    user: {
        name:null,
        email:null,
        createAt:null,
        token:null
    }
};

export function auth(state = initialState, action) {
    if (action.type === REGISTER_USER || action.type === LOGIN_USER ) {
        return {
            ...state,
            user: action.user
        }
    }
    if (action.type === LOAD_APP){
        return {
            ...state,
            user:action.user
        }
    }
    return state;
}
