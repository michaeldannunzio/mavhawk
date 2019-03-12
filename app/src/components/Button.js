/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

/* Source imports */
import { configure } from '../util';

/* Component definition */
const Button = (props) => {
	const { classes } = props;

	const theme = createMuiTheme({
		palette: {
			type: 'light',
			primary: {
				main: props.color,
				contrastText: 'rgb(250, 250, 250)'
			},
		},
		typography: { useNextVariants: true }
	});

	return (
		<MuiThemeProvider theme={theme}>
			<MuiButton
				className={classes.button}
				component='span'
				color='primary'
				variant='contained'
				onClick={props.onClick}
			>
				{props.children}
			</MuiButton>
		</MuiThemeProvider>
	);
}

/* Button prop-types */
Button.propTypes = {
	classes: PropTypes.object.isRequired,
	// color: PropTypes.string.isRequired,
	// children: PropTypes.isRequired,
	// onClick: PropTypes.func.isRequired,
};

/* Component styles */
const styles = (theme) => ({
	button: {
		margin: theme.spacing.unit,
		width: '80%',
		padding: theme.spacing.unit * 2,
		borderRadius: 100
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
export default configure(options)(Button);
