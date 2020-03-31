import {combineReducers} from 'redux'
import {enableLoading} from "./Global";
import {message_bus} from "./MessageBus";
import {register_user} from "./auth";

const rootReducer = combineReducers({
    global: enableLoading,
    message_bus: message_bus,
    auth:register_user
});
export default rootReducer; // it was failing because you hadn't export the root reducer