export const addTodo = (todo) => {
    return {
        // todo 封装成一个TODO对象
        todo:todo,
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
export const initTodos = (todos) =>{
    return {
        type : 'INIT_TODOS',
        todos:todos
    }
}