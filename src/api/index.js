import axios from 'axios';

const todoApi=axios.create({
    baseURL: `https://5e9ec500fb467500166c4658.mockapi.io`
});

export  async function  getTodos(){
   let response = await todoApi.get("/todos")
    return response
}
// todo async await
export async function postTodos(todo){
    let response = await todoApi.post("/todos",todo)
    return response
}
// todo
export async function deleteTodos(id) {
    // console.log(id)
   let response = todoApi.delete("/todos/"+id)
    return response
}
export async function putTodos(todo) {
    let response = todoApi.put("/todos/"+todo.id,
    todo)
    return response 
}