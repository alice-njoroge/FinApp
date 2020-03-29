import {DISABLE_LOADING, ENABLE_LOADING} from "../ActionTypes";
const initialState = {
    loading: false
};
export function enableLoading(state= initialState,action) {
    if (action.type === ENABLE_LOADING || action.type === DISABLE_LOADING) {
        return {
            ...state,
            loading: action.loading
        };
    }
    else {
        return state;
    }
}
