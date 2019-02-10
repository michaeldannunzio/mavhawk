/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import configure from '../configure';


/* Component styles */
const styles = (theme) => ({
	point: {},
});

/* Component definition */
class Point extends React.Component {
	state = {};

	onMouseEnter =() => this.setState({
		fill: 'red',
		r: 6
	})

	onMouseLeave = () => this.setState({
		fill: 'blue',
		r: 4
	})

	onClick = () => alert('you\'ve been hacked')

	render() {
		const { classes } = this.props;
		
		return (
			<circle
				className={classes.point}
				style={this.state}
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
				onClick={this.onClick}
			/>
		);
	}
}

/* Component prop-types */
Point.propTypes = {
	classes: PropTypes.object.isRequired,
};

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
export default configure(options)(Point);
