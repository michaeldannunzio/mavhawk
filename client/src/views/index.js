/* Library imports */
import React from 'react';

/* Source imports */
import { configure } from '../components';
import Chart from './Chart';
import Dashboard from './Dashboard';


/* Application views */
const views = {
	Chart,
	Dashboard,
};

/* Component styles */
const styles = (theme) => ({});

/* Component definition */
const View = ({ view }) => {
	const CurrentView = views[view];
	return <CurrentView />;
}

/* Map state to props */
const store = (state, props) => ({
	view: state.selectedView
});

/* Component actions */
const actions = {};

/* Component configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(View);
