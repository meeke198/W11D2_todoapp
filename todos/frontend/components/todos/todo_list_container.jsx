
import { connect } from 'react-redux';
import allTodos from '../../reducers/selectors';
import TodoList from './todo_list';


const mapStateToProps = state => ({
  todos: allTodos(state)      //todos: prop
})

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)) //receiveTodo: prop
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);