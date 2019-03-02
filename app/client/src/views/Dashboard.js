/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/** Source imports */
import { configure } from '../util';
import {
	Chart,
	Controls,
	VideoFeed
} from '../components';


/* Dashboard definition */
class Dashboard extends React.Component {
	state = {};
	
	render() {
		const { classes } = this.props;
		
		return (
			<main className={classes.dashboard}>
				<div className={classes.section}>
					<Controls />
				</div>
				<div className={classes.section}>
					<VideoFeed />
				</div>
				<div>
					<Chart />
				</div>
			</main>
		);
	}
}

/* Dashboard prop-types */
Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Dashboard styles */
const styles = (theme) => ({
	dashboard: {
		// height: '100%',
		width: '100%',
		flexGrow: 1,
		padding: theme.spacing.unit,
		border: 'red 2px solid',
		marginTop: 55,
	},
	section: {
		display: 'inline-block',
	}
});

/* Map state to props */
const store = (state, props) => ({});

/* Dashboard actions */
const actions = {};

/* Dashboard configurations */
const options = {
	styles,
	store,
	actions
};

/* Module exports */
export default configure(options)(Dashboard);
