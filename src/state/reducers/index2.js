import {combineReducers} from "redux"
import valueReducer from "./valueReducer"

const reducers = combineReducers({
    amount:valueReducer
})

export default reducers;