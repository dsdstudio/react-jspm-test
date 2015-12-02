import React from 'react';
import { Component, PropTypes } from 'react';
import './Header.css!'
export default class Header extends Component {
	render() {
		return <div className="Header">
			<h2>{this.props.title}</h2>
		</div>
	}
}
Header.PropTypes = {
	title:PropTypes.string.isRequired
}
