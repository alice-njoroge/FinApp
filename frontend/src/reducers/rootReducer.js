import {combineReducers} from 'redux'
import {enableLoading} from "./Global";
import {message_bus} from "./MessageBus";
import {auth} from "./auth";

const rootReducer = combineReducers({
    global: enableLoading,
    message_bus: message_bus,
    auth:auth
});
export default rootReducer; // it was failing because you hadn't export the root reducer