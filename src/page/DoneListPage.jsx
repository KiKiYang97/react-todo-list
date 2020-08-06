import React, {Component} from 'react';
import DoneListContainer from "../containers/DoneListContainer";
import {FileDoneOutlined} from '@ant-design/icons';
class DoneListPage extends Component {
    render() {
        return (
            <div style={{textAlign:"center",marginTop:"10px"}}>
                <h1><FileDoneOutlined />Done List Page</h1>
                <DoneListContainer/>
            </div>
        );
    }
}

export default DoneListPage;