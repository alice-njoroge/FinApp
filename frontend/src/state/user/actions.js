import axios from 'axios';
import Types from './types';
import {Loader} from "../../ActionTypes";

export default {
    fetchUser : ()=> async (dispatch)=>{
        dispatch({type:Loader});
        try {
            const {data} = await axios.get('/user/profile');
            dispatch({
                type: Types.RECEIVE_USER,
                payload :data
            });
        }catch (e) {
            console.log(e)
        }
    }
}