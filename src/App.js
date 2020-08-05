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
        return (
            <Layout className="layout">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><a href="/">TODO List</a></Menu.Item>
                        <Menu.Item key="2"><a href="/done">Done List</a></Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <Provider store={store}>
                        <Router>
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
                        </Router>
                    </Provider>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
            //     <Layout className="layout">
            //     <Header>
            //       <div className="logo" />
            //       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            //       <Provider store={store}>
            //     <HashRouter>
            //         <div>
            //             <Switch>
            //                 <Route exact path="/">
            //         <Menu.Item key="1"><Link to="/">go to list page</Link></Menu.Item>
            //         <TodoListPage />
            //         </Route>
            //         <Route exact path="/done">
            //         <Menu.Item key="2"> <Link to="/done">go to done page</Link></Menu.Item>
            //         </Route>
            //         </Switch>
            //         </div>
            //         </HashRouter>
            //         </Provider>
            //       </Menu>
            //     </Header>
            //     <Content style={{ padding: '0 50px' }}>
            //       <Breadcrumb style={{ margin: '16px 0' }}>
            //         <Breadcrumb.Item>Home</Breadcrumb.Item>
            //         <Breadcrumb.Item>List</Breadcrumb.Item>
            //         <Breadcrumb.Item>App</Breadcrumb.Item>
            //       </Breadcrumb>
            //       <div className="site-layout-content">Content</div>
            //     </Content>
            //     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            //   </Layout>

        );
    }
}

export default App;