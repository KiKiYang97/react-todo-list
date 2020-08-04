import { connect } from 'react-redux'
import TodoForm from "../components/TodoForm";
import { addTodo } from "../actions";
const mapDispatchToProps=dispatch=>{
    return {
        addTodo:(text,isCompleted)=>{
            dispatch(addTodo(text,isCompleted))
        }
    }
}

const TodoFormContainer=connect(null,mapDispatchToProps)(TodoForm)
export default TodoFormContainer