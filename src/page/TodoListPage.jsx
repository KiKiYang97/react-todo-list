import React from 'react';
import './TodoListPage.css';
import TodoListContainer from '../containers/TodoListContainer';
import TodoFormContainer from '../containers/TodoFormContainer';
import {Menu} from "../router/Menu";

function TodoListPage() {
    return (
        <div>
            <Menu/>

            <div className="App">
                <TodoListContainer/>
                <TodoFormContainer/>

            </div>
        </div>
    );
}

export default TodoListPage;
