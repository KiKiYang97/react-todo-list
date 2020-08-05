import { connect } from 'react-redux'
import TodoForm from "../components/TodoForm";
import { addTodo } from "../actions";
import { initTodos } from "../actions";
const mapDispatchToProps=dispatch=>{
    return {
        addTodo:(todo)=>{
            dispatch(addTodo(todo))
        },
        initTodos : (todos) => {
            dispatch(initTodos(todos))
        }
    }
}

const TodoFormContainer=connect(null,mapDispatchToProps)(TodoForm)
export default TodoFormContainer