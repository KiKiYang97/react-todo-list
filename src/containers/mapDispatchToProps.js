import {deleteTodo, toggleCompleted} from "../actions";

export const mapDispatchToProps = dispatch =>{
    return{
        deleteTodo : (index)=>{
            dispatch(deleteTodo(index))
        },
        toggleCompleted : (index) => {
            dispatch(toggleCompleted(index))
        }
    }
}