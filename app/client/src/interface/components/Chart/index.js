/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import { configure } from '../../util';
import Grid from './Grid';
import Point from './Point';

/* Chart styles */
const styles = (theme) => ({
	chart: {},
});

/* Chart definition */
class Chart extends React.Component {
	state = {
		showGrid: true,
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.chart}>
				<Grid display={this.state.showGrid} />
			</div>
		);
	}
}

/* Chart prop-types */
Chart.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Map state to props */
const store = (state, props) => ({});

/* Chart actions */
const actions = {};

/* Chart configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Chart);
