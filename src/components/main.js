import React from 'react';
// import {Router, Route, Link, IndexRoute, browserHistory, hashHistory, Redirect, withRouter} from 'react-router';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import css from './../../style/main.css';

import Navbar from './nav';

import rootReducer from '../reducers';
// import reduxLogger from "redux-logger"
// import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // may also export 'applyMiddleware'
// const middleware = applyMiddleware(reduxLogger(),ReduxThunk)
// const store = createStore(rootReducer,{search:{}},middleware)
const store = createStore(rootReducer);

import About from './aboutus';
import usersList from './usersList/usersList';

const Container = (props) => <div className={css.container}><Navbar {...css} /><div className={css.content}>{props.children}</div></div>;
const NoMatch = () => <div><h2>No page was found 404! </h2></div>;
const Welcome = () => 
    <div>
        <h2>Welcome to React Default</h2>
        I hope this template will help you building your projects. <br />
        If you have any questions or requests, feel free to contact me through github. <br /><br />
        Enjoy it!
    </div>;

const App = () =>
    <Provider store={store}>
        <BrowserRouter className="default">
            <Container>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/about" component={About} />
                    <Route path="/users" component={usersList} />
                    <Route path="*" component={NoMatch} />
                </Switch>
            </Container>
        </BrowserRouter>
    </Provider>;
export default App;