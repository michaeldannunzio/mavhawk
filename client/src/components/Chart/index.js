import React from 'react';
import Point from './Point';
import d3 from 'd3';

const style = {
	root: {
		height: '50%',
		width: '50%',
		margin: '25%'
	},
	svg: {
		width: '100%',
		height: '100%',
		borderStyle: 'solid',
		borderWidth: 1
	}
};

const data = [
	1,
	2,
	3,
	4,
	5
];

class Chart extends React.Component {
	state = {};

	render() {
		return (
			<div style={style.root}>
				<svg style={style.svg}>
					<Point/>
				</svg>
			</div>
		);
	}
}

export default Chart;
