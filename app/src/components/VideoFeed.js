/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

/* Source imports */
import { configure } from '../util';
import { logo } from '../assets';
import { recording } from '../store';


/* Component definition */
class VideoFeed extends React.Component {
	state = {};

	getImageSource = () => {
		if (this.props.recording) {
			return '/webcam/1';
		} 
		else {
			return logo;
		}
	}
	
	render() {
		const { classes } = this.props;
		// const imageSource = this.getImageSource();
		const imageSource = '/webcam/1';

		return (
			<Card className={classes.videofeed}>
				<img className={classes.media} src={imageSource} alt='video feed' />
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
		maxHeight: 330,
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
