import React from 'react';
import { Provider } from 'react-redux';
import store from "./store";
import TodoListPage from './page/TodoListPage';
import DoneListPage from "./page/DoneListPage";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from "react-router-dom";
import './App.css';
const { Header, Content, Footer } = Layout;
class App extends React.Component {
    render() {
        return (  <Provider store={store}>
            <Router>
            <Layout className="layout">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to="/">TODO List</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/done">Done List</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content>

                            <div>
                                <Switch>
                                    <Route exact path="/">
                                        <TodoListPage />
                                    </Route>
                                    <Route exact path="/done">
                                        <DoneListPage />
                                    </Route>
                                </Switch>
                            </div>

                </Content>
                <Footer style={{ textAlign: 'center' }}>TodoList ©2020 Created by KikiYang</Footer>
            </Layout>
            </Router>
            </Provider>
        );
    }
}

export default App;