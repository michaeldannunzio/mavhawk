/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import { configure } from '../util';
import Dashboard from './Dashboard';

/* Application views */
const views = {
	Dashboard,
};

/* View styles */
const styles = (theme) => ({
	view: {},
});

/* View definition */
const View = (props) => {
	const { classes, name } = props;
	const view = views[name];

	return (
		<div className={classes.view}>
			{/* <view /> */}
		</div>
	);
};

/* View prop-types */
View.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
};

/* Map state to props */
const store = (state, props) => ({
	name: props.name === state.selectedView ? props.name : state.selectedView,
});

/* View actions */
const actions = {};

/* View configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(View);
