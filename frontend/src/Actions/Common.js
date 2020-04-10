import {Loader} from "../ActionTypes";

export function loading(loading){
    return {
        type: Loader,
        payload: loading
    }
}