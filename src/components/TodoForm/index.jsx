import React from 'react'
import { getTodos, postTodos } from "../../api";
import { Form, Input, Button } from 'antd';
import { EditOutlined,AudioOutlined } from '@ant-design/icons';
import '../../App.css';
const { Search } = Input;
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
        console.log(this.state.value)
    }
    handleSubmit = (event) => {
        // console.log(event)
        // event.preventDefault();

        postTodos({
            content: this.state.value,
            status: false
        }).then(response => {
            this.props.addTodo(response.data)
        })
    }
    render() {
        const suffix = (
            <AudioOutlined
              style={{
                fontSize: 16,
                color: '#1890ff',
              }}
            />
          );
        return (
            <div style={{ marginTop: "79px" }}>
                {/*todo method can't use */}
                <h2><EditOutlined />Todo List</h2>
                <Search
                     style={{ width: "400px", marginLeft: "84px",marginBottom:"7px" }}
                    placeholder="input todo text"
                    enterButton="Add"
                    size="large"
                    suffix={suffix}
                    onChange={this.handleChange}
                    onSearch={this.handleSubmit}
                />
                {/* <Button style={{ width: "100px", marginLeft: "10px" }} htmlType="submit" type="primary" onClick={this.handleSubmit}>add</Button> */}

                {/* <form  style = {{marginTop:"100px"}} onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button  value="add"  type="submit"/>
                </form > */}
            </div>
        );
    }
}
export default TodoForm;