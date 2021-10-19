//Redux reducers manage the shape of your application state. 
//returns the next state tree, given the current state tree and an action to handle

import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";


const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state); //A frozen object can no longer be changed; 
    let nextState = Object.assign({}, state); //make a copy of the original state
  switch (action.type) {
      case RECEIVE_TODO:
        nextState[action.todo.id] = action.todo; // assigns a key of the tea's id to the value of the entire tea
      return nextState;
      case RECEIVE_TODOS:
           nextState[action.todos] = action.todos; // assigns a key of the tea's id to the value of the entire tea
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;