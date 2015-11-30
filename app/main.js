import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

class Hello extends React.Component {
	render() {
		return <h1> Hello melong </h1>;
	}
}

ReactDOM.render(<Hello />, document.getElementById('app'));
