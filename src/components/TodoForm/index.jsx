import React from 'react'
import {getTodos, postTodos} from "../../api";
import {Form, Input, Button} from 'antd';
import {EditOutlined, AudioOutlined} from '@ant-design/icons';
import '../../App.css';

const {Search} = Input;

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

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
        this.setState({value: event.target.value});
        console.log(this.state.value)
    }
    handleSubmit = (event) => {
        if (!(this.state.value === '')) {
            postTodos({
                content: this.state.value,
                status: false
            }).then(response => {
                this.props.addTodo(response.data)
            })
        }
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: "10px"}}>
                <h2><EditOutlined/>Todo List</h2>
                <Search
                    style={{width: "320px", marginBottom: "7px"}}
                    placeholder="input todo content"
                    enterButton="Add"
                    size="large"
                    onChange={this.handleChange}
                    onSearch={this.handleSubmit}
                    value={this.state.value}
                />
            </div>
        );
    }
}

export default TodoForm;