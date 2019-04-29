/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

/* Source imports */
import { configure } from '../util';
// import Input from './Input';
import Slider from './Slider';

/* Component styles */
const styles = (theme) => ({
	controls: {
		// margin: theme.spacing.unit * 3,
		padding: theme.spacing.unit,
		paddingBottom: theme.spacing.unit * 2,
	},
});

/* Component definition */
class Controls extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.controls}>
				<Slider id={1} />
				<Slider id={2} />
				<Slider id={3} />
				{/* <Input id={1} /> */}
				{/* <Input id={2} /> */}
				{/* <Input id={3} /> */}
			</Card>
		);
	}
}

/* Component prop-types */
Controls.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Map state to props */
const store = (state, props) => ({});

/* Component actions */
const actions = {};

/* Component configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Controls);
