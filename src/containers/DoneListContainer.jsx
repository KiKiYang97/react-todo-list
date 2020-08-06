import { connect } from 'react-redux';
import TodoList from "../components/TodoList";
import {deleteTodo, toggleCompleted} from "../actions";
import DoneList from "../components/DoneList";
import {mapDispatchToProps} from "./mapDispatchToProps";

const mapStateToProps=state=>{
    console.log("DoneListContainer"+state.todoList)
    return{
        todoList: state.todoList.filter(value=>value.status)
    }
}

const DoneListContainer=connect(mapStateToProps,mapDispatchToProps)(DoneList)
export default DoneListContainer