import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoListPage from './page/TodoListPage';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from "./store";
import DoneListPage from "./page/DoneListPage";
import {BrowserRouter as Router} from "react-router-dom";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
{/* todo exact */}
                    <Route path="/done">
                        <DoneListPage/>
                    </Route>
                    <Route path="/">
                        <TodoListPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
