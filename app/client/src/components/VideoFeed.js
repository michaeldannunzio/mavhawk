/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

/* Source imports */
import { configure } from '../util';
import picture from '../ref/cat.jpg';


/* Component definition */
class VideoFeed extends React.Component {
	state = {};
	
	render() {
		const { classes } = this.props;

		console.log(picture);
		
		return (
			<Card className={classes.videofeed}>
				<img className={classes.media} src={picture} alt='placeholder' />
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
		// margin: theme.spacing.unit * 3,
		padding: theme.spacing.unit * 3,
	},
	media: {
		height: 280,
		width: 'auto',
		display: 'block',
		margin: 'auto',
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
