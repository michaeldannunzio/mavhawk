/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom';

/* Source imports */
import { configure } from '../util';
import Dashboard from './Dashboard';


/* View styles */
const styles = (theme) => ({
	view: {},
});

/* Map state to props */
const store = (state, props) => ({});

/* View actions */
const actions = {};

/* View definition */
const Interface = (props) => {
	const { classes } = props;

	return (
		<div className={classes.view}>
			<BrowserRouter>
				<React.Fragment>
					<Switch>
						<Route exact path='/' component={Dashboard} />
					</Switch>
				</React.Fragment>
			</BrowserRouter>
		</div>
	);
};

/* View prop-types */
Interface.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* View configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Interface);
