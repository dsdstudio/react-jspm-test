import React, { Component, PropTypes } from 'react';
import './Header.css!';

const Header = ({title}) => (<div className="Header">
	<h2>{title}</h2>
</div>);
Header.PropTypes = {
	title:PropTypes.string.isRequired
};

export default Header;
