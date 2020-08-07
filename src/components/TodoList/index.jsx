import React from 'react'
import Todo from '../Todo'
import { List } from 'antd/lib/form/Form'
class TodoList extends React.Component {

    render() {
        return (
            <div style={{height:"640px",overflow:"auto"}}>
                <div style={{
                    display: "inline-grid"
                }}>
                    {
                        this.props.todoList.map((value,index)=>
                            <Todo {...this.props}
                                  key={index}
                                  index = {value.id}
                                  todo = {value}
                                  isCompleted = {value.isCompleted}
                                  />
                       )
                   }

               </div>
            </div>
        );
    }
}
export default TodoList;