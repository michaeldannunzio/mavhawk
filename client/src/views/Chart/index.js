/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import { configure, Graph } from '../../components';


/* Component styles */
const styles = (theme) => ({
	chart: {},
});

/* Component definition */
class Chart extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.chart}>
				<Graph />
			</div>
		);
	}
}

/* Component prop-types */
Chart.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Map state to props */
const store = (state) => ({});

/* Component actions */
const actions = {};

/* Component configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Chart);
