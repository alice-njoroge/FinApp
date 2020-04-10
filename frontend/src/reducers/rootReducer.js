import {combineReducers} from 'redux'
import {Common} from "./Common";
import {message_bus} from "./MessageBus";
import {auth} from "./auth";
import {income_sources} from "./IncomeSources";

const rootReducer = combineReducers({
    common: Common,
    message_bus: message_bus,
    auth:auth,
    income_sources:income_sources
});
export default rootReducer; // it was failing because you hadn't export the root reducer