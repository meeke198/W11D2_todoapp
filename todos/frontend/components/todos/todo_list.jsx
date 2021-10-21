import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = (props) => { //props hold todos
    return (
        <div>
            <TodoForm receiveTodo={props.receiveTodo} />
            <ul>
                {
                props.todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)  
                }
            </ul>
        </div>
    );

}
export default TodoList;