import React from 'react'
import {getTodos, postTodos} from "../../api";
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

      }


    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.addTodo(this.state.value)
        postTodos({
            content: this.state.value,
            status: false
        }).then(response =>null)
     }
    render() {
        return (
            <div>
            <div>
                <button onClick={()=>{
                    getTodos().then(response => {
                        let data = response.data;
                        console.log(data)
                        data.forEach(value=>{
                            this.props.addTodo(value.content,value.status)
                        })
                    })
                    }}>
                    load data
                </button>
            </div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} />
              <input type="submit" value="add" />
          </form>
            </div>
        );
    }
}
export default TodoForm;