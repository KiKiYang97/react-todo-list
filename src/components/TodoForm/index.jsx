import React from 'react'
import { getTodos, postTodos } from "../../api";
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

    }
    componentDidMount() {
        console.log("componentDidMount")
        this.initData()
    }
    initData = () => {
        getTodos().then(response => {
            let data = response.data;
            console.log(data)
            this.props.initTodos(data)
        })
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // todo

        postTodos({
            content: this.state.value,
            status: false
        }).then(response => {
            this.props.addTodo(response.data)
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <input type="submit" value="add" />
                </form>
            </div>
        );
    }
}
export default TodoForm;