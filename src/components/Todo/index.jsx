import React from 'react'
import { deleteTodos, putTodos } from '../../api'

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }
    onDeleteClick = () => {
        deleteTodos(this.props.todo.id)
            .then(this.props.deleteTodo(this.props.index))
    }
    onToggleClick = () => {
        let newTodo = JSON.parse(JSON.stringify(this.props.todo));
        newTodo.status = !newTodo.status
        console.log(newTodo)
        putTodos(newTodo)
            .then(this.props.toggleCompleted(this.props.index))
    }
    render() {
        return (
            <div style={{
                display: "inline-flex"
            }}>
                <div onClick={this.onToggleClick}>
                    {
                        this.props.todo.status
                            ? <span style={{
                                textDecoration: "line-through"
                            }}>{this.props.todo.content}</span>
                            : <span>{this.props.todo.content}</span>
                    }
                </div>

                <button onClick={this.onDeleteClick}>
                    delete
                </button>
            </div>
        );
    }
}

export default Todo;