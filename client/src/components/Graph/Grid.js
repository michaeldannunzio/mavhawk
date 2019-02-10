/* Library imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Source imports */
import configure from '../configure';


/* Component styles */
const styles = (theme) => ({
	grid: {},
	horizontals: {},
	verticals: {},
	line: {
		stroke: 'grey',
		strokeWidth: '0.25px',
		strokeLinecap: 'square',
		strokeDasharray: '2,2',
		fill: 'none',
	},
});

/* Component definition */
class Grid extends React.Component {
	horizontals = () => {
		const { classes, height, width, spacing } = this.props;
		const count = Math.ceil(width / spacing);

		var n;
		return [...Array(count)].map((e, i) => {
			n = ((i + 1) * spacing).toString();
			return (
				<line
					key={i} className={classes.line}
					x1={n} x2={n}
					y1='0' y2={height.toString()}
				/>
			);
		});
	}

	verticals = () => {
		const { classes, height, width, spacing } = this.props;
		const count = Math.ceil(height / spacing);

		var n;
		return [...Array(count)].map((e, i) => {
			n = ((i + 1) * spacing).toString();
			return (
				<line
					key={i} className={classes.line}
					x1='0' x2={width.toString()}
					y1={n} y2={n}
				/>
			);
		});
	}

	render() {
		const { classes } = this.props;

		return (
			<g className={classes.grid}>
				<g className={classes.horizontals}>
					{this.horizontals()}
				</g>
				<g className={classes.verticals}>
					{this.verticals()}
				</g>
			</g>
		);
	}
}

/* Component prop-types */
Grid.propTypes = {
	classes: PropTypes.object.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	spacing: PropTypes.number.isRequired,
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
export default configure(options)(Grid);
