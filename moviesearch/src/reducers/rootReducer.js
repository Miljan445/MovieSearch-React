import TitleReducer from "../reducers/titleReducer";
import {combineReducers} from "redux";

const RootReducer = combineReducers({
    movies:TitleReducer,
})

export default RootReducer