import {combineReducers} from 'redux'
import {Common} from "../reducers/Common";
import {message_bus} from "../reducers/MessageBus";
import {auth} from "../reducers/auth";
import {income_sources} from "../reducers/IncomeSources";
import incomes from './incomes/reducers'

const rootReducer = combineReducers({
    common: Common,
    message_bus: message_bus,
    auth:auth,
    income_sources:income_sources,
    incomes
});
export default rootReducer; // it was failing because you hadn't export the root reducer