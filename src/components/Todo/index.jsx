import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{
                display :"inline-flex"
            }}>
                <div onClick={
                    ()=>{
                        this.props.toggleCompleted(this.props.index)
                    }
                }>
                    {
                        this.props.isCompleted
                            ? <span style={{
                                textDecoration: "line-through"
                            }}>{this.props.todo}</span>
                            : <span>{this.props.todo}</span>
                    }
                </div>

                <button onClick={() => {
                    this.props.deleteTodo(this.props.index)
                }}>
                    delete
                </button>
            </div>
        );
    }
}

export default Todo;