import React from 'react';
import { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
	ReduxRouter,
	routerStateReducer,
	reduxReactRouter
} from 'redux-router';
import { Route, Router, IndexRoute, Link, History } from 'react-router';
import { Provider, connect } from 'react-redux';
import createLogger from 'redux-logger';
import { createHashHistory } from 'history';

class App extends Component {
	render() {
		return <div>{this.props.children}</div>;
	}
}

const reducer = combineReducers({
})
const store = compose(
	applyMiddleware(thunkMiddleware, createLogger()),
	reduxReactRouter({ createHashHistory })
)(createStore)(reducer);

ReactDOM.render(
	<Provider store={store}>
		<ReduxRouter>
			<Route path="/" component={App}></Route>
		</ReduxRouter>
	</Provider>
, document.getElementById('app'));
