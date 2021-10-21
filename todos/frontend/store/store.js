import { createStore } from 'redux';
import { rootReducer } from '../reducers/root_reducer';

const pls = {
  todos: {
    1: {
      id: 1,
      title: 'take a shower',
      body: 'and be clean',
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  },
  steps: {
    1: { // this is the step with id = 1
      id: 1,
      title: 'walk to store',
      done: false,
      todo_id: 1
    },
    2: { // this is the step with id = 2
      id: 2,
      title: 'buy soap',
      done: false,
      todo_id: 1
    }
  }
};

export const configureStore = (preloadedState = pls) => {
    return createStore(rootReducer, preloadedState); 
}