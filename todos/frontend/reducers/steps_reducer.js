import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from "../actions/step_actions";

const stepsReducer = (state = {}, action) => {
    Object.freeze(state); //A frozen object can no longer be changed; 
    let nextState = Object.assign({}, state); //make a copy of the original state
    switch (action.type) {
        case RECEIVE_STEP:
            nextState[action.todo.id] = action.todo;
            return nextState;
        case RECEIVE_STEPS:
            for (let i = 0; i < action.todos.length; i++){
                nextState[action.todos[i].id] = action.todos[i];
            }
            return nextState;
        case REMOVE_STEP:
            delete nextState[action.todo.id];
            return nextState;
        default:
            return state;
    }
};

export default stepsReducer;