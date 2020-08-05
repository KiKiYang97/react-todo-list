const defaultState = []
const todoList=(state = defaultState,action)=>{
    let newState = [...state]

    switch(action.type){
        case 'ADD_TODO':
        {
            newState.push(
                action.todo
            )
            return newState
        }
        case 'DELETE_TODO':{
            newState.splice(action.index,1)
            return newState
        }
        case 'TOGGLE_COMPLETED':{
            newState[action.index].status= !newState[action.index].status
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