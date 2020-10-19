import { combineReducers } from "redux";
import home from './home'
import auth from './auth'
import writing from './writing'


export const rootReducer = combineReducers({home,auth,writing})