/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton, IconButton } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

/* Source imports */
import { configure } from '../util';

/* Component definition */
const Button = (props) => (
	<MuiThemeProvider theme={createMuiTheme({
		palette: {
			type: 'light',
			primary: {
				main: props.color,
				contrastText: 'rgb(250, 250, 250)'
			}
		}
	})}
	>
		<MuiButton className={props.classes.button} color='primary' variant='contained'>
			{/* {props.icon} */}
			{props.children}
		</MuiButton>
	</MuiThemeProvider>
);

/* Button prop-types */
Button.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.isRequired,
};

/* Component styles */
const styles = (theme) => ({
	button: {
		margin: theme.spacing.unit,
		width: '80%',
		padding: theme.spacing.unit * 2,
		borderRadius: 100
		// height: '20%',
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
