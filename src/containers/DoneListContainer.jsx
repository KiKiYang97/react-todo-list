import { connect } from 'react-redux';
import TodoList from "../components/TodoList";
import {deleteTodo, toggleCompleted} from "../actions";
import DoneList from "../components/DoneList";

const mapStateToProps=state=>{
    return{
        todoList: state.todoList
    }
}

const DoneListContainer=connect(mapStateToProps)(DoneList)
export default DoneListContainer