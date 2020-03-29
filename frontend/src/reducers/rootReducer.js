import { combineReducers } from 'redux'
import {enableLoading} from "./Global";

const rootReducer = combineReducers({
    enableLoading,
});
export default rootReducer; // it was failing because you hadn't export the root reducer