import { combineReducers } from "redux";
import main from './main'
import auth from './auth'
import writing from './writing'


export const rootReducer = combineReducers({main,auth,writing})