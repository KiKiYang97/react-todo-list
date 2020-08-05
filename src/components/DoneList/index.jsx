import React, {Component} from 'react';

class DoneList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.todoList.filter(value=>value.status).map((value,index)=>{
                        return <div key={index}>{value.content}</div>
                    })
                }            </div>
        );
    }
}

export default DoneList;