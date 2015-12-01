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
import createHistory from 'history/lib/createHashHistory';

class App extends Component {
	render() {
		return <div>{this.props.children}</div>;
	}
}

class StartPage extends Component {
	render() {
		return (
			<div>
				<h2>jspm + react + react-redux, redux-router scaffolding</h2>
				<p>
					기본구조만 잡아두었습니다.
				</p>
			</div>
		);
	}
}
StartPage.PropTypes = {
	children: PropTypes.node
};

const reducer = combineReducers({ 
	router:routerStateReducer
});

const store = compose(
	applyMiddleware(thunkMiddleware, createLogger()),
	reduxReactRouter({ createHistory })
)(createStore)(reducer);

ReactDOM.render(
	<Provider store={store}>
		<ReduxRouter>
			<Route path="/" component={App}>
				<IndexRoute component={StartPage} />
			</Route>
		</ReduxRouter>
	</Provider>
, document.getElementById('app'));
