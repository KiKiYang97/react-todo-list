export const addTodo = (todo) => {
    return {
        todo: todo,
        type: "ADD_TODO"

    }
}
export const deleteTodo = (id) => {
    return {
        id: id,
        type: "DELETE_TODO"
    }
}
export const toggleCompleted = (id) => {
    return {
        id: id,
        type: 'TOGGLE_COMPLETED'
    }
}
export const initTodos = (todos) => {
    return {
        type: 'INIT_TODOS',
        todos: todos
    }
}