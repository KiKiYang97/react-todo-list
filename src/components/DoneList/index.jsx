import React, {Component} from 'react';

class DoneList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.todoList.filter(value=>value.isCompleted).map(value=>{
                        return <div>{value.text}</div>
                    })
                }            </div>
        );
    }
}

export default DoneList;