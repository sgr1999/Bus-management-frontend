import {combineReducers} from "redux"
import amountReducer from "./amountReducer"
import valueReducer from "./valueReducer"

const reducers = combineReducers({
    amount:amountReducer
})

export default reducers;