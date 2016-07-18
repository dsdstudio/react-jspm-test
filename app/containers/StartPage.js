import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
const StartPage = () => (<div>
	<Header title="jspm + react + react-redux, redux-router scaffolding"></Header>
	<p> 기본구조만 잡아두었습니다.  </p>
</div>);
StartPage.PropTypes = {
	children: PropTypes.node
};
export default StartPage;
