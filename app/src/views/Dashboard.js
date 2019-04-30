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
const Dashboard = (props) => {
	const { classes } = props;
	
	return (
		<div className={classes.dashboard}>
			<Grid container spacing={24}>
				<Grid item xs={10} sm={4}>
					<Controls cells={3} />
				</Grid>
				<Grid item xs={12} sm={8}>
					<VideoFeed />
				</Grid>
				<Grid item xs={12}>
					<Chart />
				</Grid>
			</Grid>
		</div>
	);
}

/* Dashboard prop-types */
Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Dashboard styles */
const styles = (theme) => ({
	dashboard: {
		width: '100%',
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		margin: 0,
		marginTop: 50,
	},
	section: {
		display: 'inline-block',
	}
});

/* Dashboard configurations */
const options = {
	styles,
};

/* Module exports */
export default configure(options)(Dashboard);
