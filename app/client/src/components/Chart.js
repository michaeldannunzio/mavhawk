/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

/* Source imports */
import { configure } from '../util';

/* Component styles */
const styles = (theme) => ({
	chart: {
		width: '100%',
		margin: theme.spacing.unit * 3,
		padding: theme.spacing.unit * 3,
	},
});

/* Component definition */
class Chart extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.chart}>
				CHART
			</Card>
		);
	}
}

/* Component prop-types */
Chart.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Map state to props */
const store = (state, props) => ({});

/* Chart actions */
const actions = {};

/* Component configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Chart);
