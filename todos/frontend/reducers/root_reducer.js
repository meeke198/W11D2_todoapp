import { combineReducers } from "redux";
import todosReducer from "./todo_reducers";
import stepsReducer from "./steps_reducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer
})