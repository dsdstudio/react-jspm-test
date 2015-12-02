import React from 'react';
import { Component, PropTypes } from 'react';
import Header from '../components/Header';
export default class StartPage extends Component {
	render() {
		return (
			<div>
				<Header title="jspm + react + react-redux, redux-router scaffolding"></Header>
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
