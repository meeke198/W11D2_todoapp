export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

// ACTION CREATOR
const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos,
  };
};

const receiveTodo = (todo) => {
    return {
       type: RECEIVE_TODO,
       todo, 
    };
};