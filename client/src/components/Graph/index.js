/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import configure from '../configure';
import Grid from './Grid';
import Point from './Point';


/* Component styles */
const styles = (theme) => ({
	graph: {
		height: '100%',
		width: '100%',
		background: 'beige',
		border: 'solid 1px blue',
		borderRadius: '10px',
	},
});

/* Component definition */
class Graph extends React.Component {
	state = {
		height: 10,
		width: 10,
	};

	componentDidMount() {
		this.setState({
			height: document.body.clientHeight,
			width: document.body.clientWidth,
		});
		
		window.addEventListener('resize', this.onResize);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize);
	}

	onResize = () => {
		console.log('resizing');
		this.setState({
			height: document.body.clientHeight,
			width: document.body.clientWidth,
		});
	}

	renderData = () => {
		// Responsive data rendering 
	}

	render() {
		const { classes } = this.props;

		return (
			// <div className={classes.graph}>
				<svg className={classes.graph}>
					<Grid height={this.state.height} width={this.state.width} spacing={15} />
				</svg>
			// </div>
		);
	}
}

/* Component prop-types */
Graph.propTypes = {
	classes: PropTypes.object.isRequired,
};

/* Map state to props */
const store = (state) => ({
	data: state.data
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
export default configure(options)(Graph);
