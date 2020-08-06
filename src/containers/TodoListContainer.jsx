import { connect } from 'react-redux';
import TodoList from "../components/TodoList";
import {deleteTodo, toggleCompleted, initTodos} from "../actions";
import {mapDispatchToProps} from "./mapDispatchToProps";

const mapStateToProps=state=>{
    console.log(state)
    return{
       todoList: state.todoList
    }
}

const TodoListContainer=connect(mapStateToProps,mapDispatchToProps)(TodoList)
export default TodoListContainer