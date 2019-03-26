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
				<img className={classes.media} src='/video_feed' alt='video feed' />
				{/* <iframe title='feed' className={classes.media} src={v}></iframe> */}
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
		padding: theme.spacing.unit * 3,
	},
	media: {
		height: 480,
		width: 'auto',
		display: 'block',
		margin: 'auto',
		borderRadius: 4
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
