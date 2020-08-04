import React from 'react'
import Todo from '../Todo'
class TodoList extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
               <p>To do List</p>
               <div style={{
                   display :"inline-grid"
               }}>
                   {
                        this.props.todoList.map((value,index)=>
                            <Todo {...this.props}
                                  key={index}
                                  index = {index}
                                  isCompleted = {value.isCompleted}
                                  todo={value.text}/>
                       )
                   }

               </div>
            </div>
        );
    }
}
export default TodoList;