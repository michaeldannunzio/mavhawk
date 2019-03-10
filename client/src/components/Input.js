/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import {
	IconButton,
	TextField
} from '@material-ui/core';
import ArrowLeftRounded from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRounded from '@material-ui/icons/ArrowRightRounded';

/* Source imports */
import { configure } from '../util';


/* Component definition */
class Input extends React.Component {
	state = {};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.inputBase}>
				<IconButton className={classes.button} color='inherit'>
					<ArrowLeftRounded className={classes.icon} />
				</IconButton>
				<TextField
          id="cell"
          label="Cell 1"
					className={classes.inputField}
					margin='normal'
          variant="outlined"
        />
				<IconButton className={classes.button} color='inherit'>
					<ArrowRightRounded className={classes.icon} />
				</IconButton>
			</div>
		);
	}
}

/* Component prop-types */
Input.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Component styles */
const styles = (theme) => ({
	inputBase: {
		marginTop: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 2,
	},
	button: {
		margin: theme.spacing.unit,
		marginTop: 24,
		padding: 0,
	},
	icon: {
		margin: 0,
		height: 40,
		width: 40,
	},
	inputField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 100,
	},
});

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
export default configure(options)(Input);
