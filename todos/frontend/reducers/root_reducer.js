import { combineReducers } from "redux";
import todosReducer from "./todo_reducers";

export const rootReducer = combineReducers({
  todos: todosReducer
})