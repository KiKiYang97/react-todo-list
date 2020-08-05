import axios from 'axios';

const todoApi=axios.create({
    baseURL: `https://5e9ec500fb467500166c4658.mockapi.io`
});

export  async function  getTodos(){
   let response = await todoApi.get("/todos")
    return response
}
export async function postTodos(todo){
    let response = await todoApi.post("/todos",todo)
    return response
}
export async function deleteTodos(id) {
   let response = await todoApi.delete("/todos/"+id)
    return response
}
export async function putTodos(todo) {
    let response = await todoApi.put("/todos/"+todo.id,
    todo)
    return response 
}