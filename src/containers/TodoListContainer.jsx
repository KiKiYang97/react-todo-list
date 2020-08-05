import { connect } from 'react-redux';
import TodoList from "../components/TodoList";
import {deleteTodo, toggleCompleted, initTodos} from "../actions";

const mapStateToProps=state=>{
    // console.log(state)
    return{
       todoList: state.todoList
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        deleteTodo : (index)=>{
            dispatch(deleteTodo(index))
        },
        toggleCompleted : (index) => {
            dispatch(toggleCompleted(index))
        }
    }
}
const TodoListContainer=connect(mapStateToProps,mapDispatchToProps)(TodoList)
export default TodoListContainer