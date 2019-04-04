/* Library imports */
import React from 'react';
import ReactDOM from 'react-dom';

/* Source imports */
import App from './App';

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;

const targetElement = document.getElementsByTagName("body");
disableBodyScroll(targetElement);


/* Render application */
ReactDOM.render(
	<App />,
	document.getElementById('root')
);
