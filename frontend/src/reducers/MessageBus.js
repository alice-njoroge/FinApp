import {DISPLAY_MESSAGE} from '../ActionTypes';

const initialState = {
    type: null,
    message: null
};

export function message_bus(state = initialState, action) {
    if (action.type === DISPLAY_MESSAGE) {
        return {
            ...state,
            type: action.payload.type,
            message: action.payload.message,
        };
    }
    else {
        return state;
    }
}
