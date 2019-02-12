/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import { configure } from '../../util';

/* Grid styles */
const styles = (theme) => ({
	grid: {},
	line: {},
});

/* Grid definition */
const Grid = (props) => {
	const { classes, display } = props;

	if (display)
		return (
			<React.Fragment></React.Fragment>
		);
}

/* Grid prop-types */
Grid.propTypes = {
	classes: PropTypes.object.isRequired,
	display: PropTypes.bool.isRequired,
};

/* Map state to props */
const store = (state, props) => ({});

/* Grid actions */
const actions = {};

/* Grid configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Grid);
