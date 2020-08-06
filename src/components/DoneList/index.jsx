import React, {Component} from 'react';

class DoneList extends Component {
    render() {
        console.log(this.props.todoList)
        return (
            <div>
                {
                    this.props.todoList.map((value,index)=>{
                        return <div key={index}>{value.content}</div>
                    })
                }           
            </div>
        );
    }
}

export default DoneList;