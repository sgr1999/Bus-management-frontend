import {combineReducers} from "redux"
import valueReducer from "./valueReducer"

const reducers = combineReducers({
    value1:valueReducer
})

export default reducers;