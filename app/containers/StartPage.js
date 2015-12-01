import React from 'react';
import { Component, PropTypes } from 'react';
export default class StartPage extends Component {
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
