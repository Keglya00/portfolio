import { combineReducers, legacy_createStore as createStore } from "redux";
import appReducer from "./appReducer";

let rootReducer = combineReducers({appReducer})

let store = createStore(rootReducer)

export default store