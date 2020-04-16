import Types from '../types';
import {loading} from "../../../Actions/Common";

const initialState = {
    loading: false,
    user: {
        name: null,
        email: null
    },
    error: null
}
const beginFetch = state => ({
    ...state,
    loading: true
});

const receiveUser = (state, {payload}) => ({
    ...state,
    loading: false,
    user: payload
})

export default (state = initialState, action) => {
    switch (action.type) {
        case loading :
            return beginFetch(state, action);
        case Types.RECEIVE_USER :
            return receiveUser(state, action)
        default:
            return state
    }
}