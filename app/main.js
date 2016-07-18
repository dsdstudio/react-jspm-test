import React, { Component, PropTypes } from 'react';
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
import StartPage from './containers/StartPage';
import './main.css!';

const App = ({children}) => <div>{children}</div>;
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
