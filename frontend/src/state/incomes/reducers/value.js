import Types from '../types'
import {loading} from "../../../Actions/Common";

const initialState = {
    incomes: [],
    loading: false,
    error: null
};
const beginFetch = state => ({
    ...state,
    loading: true
});
const receiveIncomes = (state, {payload}) => ({
    ...state,
    loading: false,
    incomes: payload
})

export default (state = initialState, action) => {
    switch (action.type) {
        case  loading :
            return beginFetch(state, action)
        case Types.RECEIVE_INCOMES :
            return receiveIncomes(state, action)
        default : {
            return state;
        }

    }


}