import React, {Component} from 'react';
import {Menu} from "../router/Menu";
import DoneListContainer from "../containers/DoneListContainer";

class DoneListPage extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <h1>Done List Page</h1>
                <DoneListContainer/>
            </div>
        );
    }
}

export default DoneListPage;