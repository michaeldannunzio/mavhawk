import React from 'react';
import d3 from 'd3';
import Point from './Point';

const style = {
	root: {
		height: null,
		width: null
	},
	svg: {
		width: '50%',
		height: '50%'
	},
	rect: {
		height: '100%',
		width: '100%',
		fill: 'whitesmoke'
	}
};

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
