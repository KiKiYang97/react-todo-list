import React from 'react'
import Todo from '../Todo'
import { List } from 'antd/lib/form/Form'
class TodoList extends React.Component {

    render() {
        return (
            <div>
                <div style={{
                    display: "inline-grid"
                }}>
                    {
                        this.props.todoList.map((value,index)=>
                            <Todo {...this.props}
                                  key={index}
                                  index = {index}
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