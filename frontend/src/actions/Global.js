import {DISABLE_LOADING, ENABLE_LOADING} from "../ActionTypes";

export const enableLoading = () => {
    return {
        type: ENABLE_LOADING,
        loading: true
    }
};

export const disableLoading = () => {
    return {
        type: DISABLE_LOADING,
        loading: false
    }
};