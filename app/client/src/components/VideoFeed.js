/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

/* Source imports */
import { configure } from '../util';


/* Component definition */
class VideoFeed extends React.Component {
	state = {};
	
	render() {
		const { classes } = this.props;
		
		return (
			<Card className={classes.videofeed}>
				VIDEO FEED
			</Card>
		);
	}
}

/* Component prop-types */
VideoFeed.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Component styles */
const styles = (theme) => ({
	videofeed: {
		margin: theme.spacing.unit * 3,
		padding: theme.spacing.unit * 3,
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
export default configure(options)(VideoFeed);
