import axios from 'axios';

const todoApi=axios.create({
    baseURL: `https://5e9ec500fb467500166c4658.mockapi.io`
});

export  async function  getTodos(){
   let response = await todoApi.get("/todos")
    return response
}
