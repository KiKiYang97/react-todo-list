import React from 'react'
import { deleteTodos, putTodos } from '../../api'
import { Alert,Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';
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

                <div style={{ display: "flex",marginBottom:"7px" }} >
                    {
                        this.props.todo.status
                            ? <Alert message={this.props.todo.content} type="success"
                                style={{
                                    textDecoration: "line-through", width: "432px"
                                }} onClick={this.onToggleClick}/>
                            : <Alert style={{ width: "432px" }} message={this.props.todo.content} type="info" onClick={this.onToggleClick}/>
                    }
                    <Button style={{height:"40px"}} type="primary"  onClick={this.onDeleteClick}  icon={<DeleteOutlined />}>
                    </Button>
                </div>
            </div>

        );
    }
}

export default Todo;