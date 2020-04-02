import {FETCH_SOURCES, LOGIN_USER, RECEIVE_SOURCES} from "../ActionTypes";
import axios from "axios";

export function receive_sources(sources) {
    return {
        type: RECEIVE_SOURCES,
        payload: sources
    }
}

export function FetchSources() {
    return  (dispatch) => {
        console.log(dispatch);
        return axios.get('http://127.0.0.1:3002/income-sources')
            .then(res => {
                dispatch(receive_sources(res.data));
            }).catch(e => {
                console.log(e.response);

            })

    }
}