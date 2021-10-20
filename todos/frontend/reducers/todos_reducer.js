//Redux reducers manage the shape of your application state. 
//returns the next state tree, given the current state tree and an action to handle

import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";

const todosReducer = (state = {}, action) => {
    Object.freeze(state); //A frozen object can no longer be changed; 
    let nextState = Object.assign({}, state); //make a copy of the original state
    // debugger;
  switch (action.type) {
      case RECEIVE_TODO:
        nextState[action.todo.id] = action.todo;
        return nextState;
      case RECEIVE_TODOS:
          for (let i = 0; i < action.todos.length; i++){
            nextState[action.todos[i].id] = action.todos[i];
          }
        return nextState;
      case REMOVE_TODO:
          delete nextState[action.todo.id];
          return nextState;
    default:
      return state;
  }
};


export default todosReducer;

// const newTodos = [
//   {
//     id: 3,
//     title: "make soup",
//     body: "with tomatoes",
//     done: false
//   },
//   {
//     id: 4,
//     title: "walk dog",
//     body: "with icecream",
//     done: true
//   }];
// store.getState(); 
// store.dispatch(receiveTodo({ id: 3, title: "New Todo" }));
// store.getState();
// store.dispatch(receiveTodos(newTodos));
// store.getState();