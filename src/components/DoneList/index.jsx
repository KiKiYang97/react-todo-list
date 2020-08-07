import React, {Component} from 'react';
import Todo from "../Todo";
class DoneList extends Component {
    render() {
        console.log(this.props.todoList)
        return (
            <div style={{height: "640px", overflow: "auto", textAlign:"center"}}>
                <div style={{
                    display: "inline-grid"
                }}>
                    {
                        this.props.todoList.map((value, index) =>
                            <Todo {...this.props}
                                  key={index}
                                  index={value.id}
                                  todo={value}
                                  isCompleted={value.isCompleted}
                            />)
                    }
                </div>
            </div>
        );
    }
}

export default DoneList;