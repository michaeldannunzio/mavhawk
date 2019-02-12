/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import { configure } from '../../util';

/* Point styles */
const styles = (theme) => ({
	point: {},
});

/* Point definition */
const Point = (props) => {
	const { classes, data } = props;
	
	return (
		<circle
			className={classes.point}
			cx={data.x} cy={data.y} r='1'
		/>
	);
}

/* Point prop-types */
Point.propTypes = {
	classes: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
};

/* Map state to props */
const store = (state, props) => ({});

/* Point actions */
const actions = {};

/* Point configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Point);
