import {REGISTER_USER} from "../ActionTypes";

const initialState = {
    user: null
};

export function register_user(state = initialState, action) {
    if (action.type === REGISTER_USER) {
        return {
            ...state,
            user: action.user
        }
    }
    return state;
}
