export const addTodo = (text) => {
    return {
        text:text,
        type:"ADD_TODO"
    }
}
export const deleteTodo = (index) =>{
    return {
        index:index,
        type:"DELETE_TODO"
    }
}
export const toggleCompleted = (index) =>{
    return {
        index : index,
        type : 'TOGGLE_COMPLETED'
    }
}