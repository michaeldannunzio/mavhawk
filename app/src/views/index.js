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
import { Appbar } from '../components';
import Dashboard from './Dashboard';


/* View styles */
const styles = (theme) => ({
	view: {
		display: 'flex',
	},
});

/* Map state to props */
const store = (state, props) => ({});

/* View actions */
const actions = {};

/* View definition */
const View = (props) => {
	const { classes } = props;

	return (
		<div className={classes.view}>
			<BrowserRouter>
				<div className={classes.view}>
					<Appbar />
					<Switch>
						<Route exact path='/' component={() => <Dashboard />} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

/* View prop-types */
View.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* View configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(View);
