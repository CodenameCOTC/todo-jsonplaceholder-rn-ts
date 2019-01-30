import { combineReducers } from "redux";
import TodoReducer from "../Todo/reducer/index";

export default combineReducers({
  todo: TodoReducer
});
