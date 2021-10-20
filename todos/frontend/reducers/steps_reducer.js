import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from "../actions/step_actions";

const stepsReducer = (state = {}, action) => {
    Object.freeze(state); //A frozen object can no longer be changed; 
    let nextState = Object.assign({}, state); //make a copy of the original state
    switch (action.type) {
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;
        case RECEIVE_STEPS:
            for (let i = 0; i < action.steps.length; i++){
                nextState[action.steps[i].id] = action.steps[i];
            }
            return nextState;
        case REMOVE_STEP:
            delete nextState[action.step.id];
            return nextState;
        default:
            return state;
    }
};

export default stepsReducer;