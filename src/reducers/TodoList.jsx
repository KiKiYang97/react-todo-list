const defaultState = []
const todoList=(state = defaultState,action)=>{
    let newState = [...state]

    switch(action.type){
        case 'ADD_TODO':
        {
            newState.push({
                text:action.text,
                isCompleted: false
            })
            return newState
        }
        case 'DELETE_TODO':{
            newState.splice(action.index,1)
            return newState
        }
        case 'TOGGLE_COMPLETED':{
            newState[action.index].isCompleted= !newState[action.index].isCompleted
            return newState
        }
            default:return state
    }
}
export default todoList


/*
state = [ "1","2"]

state=[
    { text:"",state:"",index:""},
    { text:"",state:"",index:""},
    { text:"",state:"",index:""}
    ]
 */