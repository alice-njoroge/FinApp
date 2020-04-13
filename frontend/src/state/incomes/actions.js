import {Loader} from "../../ActionTypes";
import Types from "./types";
import axios from 'axios';

//dispatch actions

export default {
    fetchIncomes: () => async (dispatch) => {
        dispatch({type: Loader})
        try {
            const {data} = await axios.get('/income/');
            dispatch({
                type: Types.RECEIVE_INCOMES,
                payload: data
            })
        } catch (e) {
            console.log(e.response);
        }

    }
    /*
    fetchIncomesError: (error) => {
        return {
            type: Types.RECEIVE_INCOMES_ERROR,
            payload: error
        }
    } */


}