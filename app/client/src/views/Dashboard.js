/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

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
				<Grid container spacing={24}>
					<Grid container item spacing={24}>
						<Grid item xs={4}>
							<Controls />
						</Grid>
						<Grid item xs={8}>
							<VideoFeed />
						</Grid>
					</Grid>
					<Grid container item spacing={24}>
						<Grid item xs={12}>
							<Chart />
						</Grid>
					</Grid>
				</Grid>
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
		padding: theme.spacing.unit * 3,
		border: 'red 2px solid',
		margin: 0,
		marginTop: 50,
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
