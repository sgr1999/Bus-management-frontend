import {changeTheNumber,findUser} from "./upDown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    findUser
});

export default rootReducer;