import {RECEIVE_SOURCES} from '../ActionTypes';
import axios from 'axios';

export function receive_sources(sources) {
    return {
        type: RECEIVE_SOURCES,
        payload: sources,
    };
}

export function createSource(name) {
    return (dispatch) => {
        return axios.post('/income-sources', {name: name})
            .then(() => {
            })
            .catch(e => {
                console.log(e.response);

            })
    }
}

export function FetchSources() {
    return (dispatch) => {
        return axios.get('/income-sources')
            .then(res => {
                console.log(res);
                return dispatch(receive_sources(res.data));
            }).catch(e => {
                console.log(e.response);

            })

    }
}
