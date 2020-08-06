const defaultState = []
const todoList=(state = defaultState,action)=>{
    let newState = [...state]

    switch(action.type){
        case 'ADD_TODO':
        {
            newState.unshift(
                action.todo
            )
            return newState
        }
        case 'DELETE_TODO':{
            newState.forEach((value,index)=>{
                if(value.id ===action.id ){
                    newState.splice(index,1)
                }
            })
            return newState
        }
        case 'TOGGLE_COMPLETED':{
            newState.forEach((value,index)=>{
                if(value.id ===action.id ){
                    newState[index].status =!newState[index].status
                }
            })
            return newState
        }
        case 'INIT_TODOS' :{
            return action.todos
        }
        default:return state
    }
}
export default todoList


/*
state = [ "1","2"]

state=[
    { text:"",state:"",index:"",id:""},
    { text:"",state:"",index:"",id:""},
    { text:"",state:"",index:"",id:""}
    ]
 */