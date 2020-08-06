import React, {Component} from 'react';
import Todo from "../Todo";
class DoneList extends Component {
    render() {
        console.log(this.props.todoList)
        return (
            <div style={{height: "640px", overflow: "scroll", textAlign:"center"}}>
                <div style={{
                    display: "inline-grid"
                }}>
                    {
                        this.props.todoList.map((value, index) =>
                            <Todo {...this.props}
                                  key={index}
                                  index={index}
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