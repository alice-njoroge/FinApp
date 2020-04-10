import { Loader} from "../ActionTypes";

const initialState = {
    loading: false,
};

export function Common(state = initialState, action) {
    if (action.type === Loader) {
        return {
            ...state,
            loading: action.payload
        };

    } else {
        return state;
    }
}
