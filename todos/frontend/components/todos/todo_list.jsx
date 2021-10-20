
import React from 'react';


const TodoList = (props) => { //props hold todos
    return (
        <ul>
            {
              props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)  
            }
        </ul>

    )

}
export default TodoList;