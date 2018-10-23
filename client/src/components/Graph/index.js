import React from 'react';
import Point from './Point';
import d3 from 'd3';

const style = {
	root: {
		height: '50%',
		width: '50%',
		margin: '25%',
		padding: 0,
	},
	svg: {
		width: '100%',
		height: '100%',
		backgroundColor: '#FAFAFA',
		borderStyle: 'solid',
		borderWidth: 2,
		borderRadius: 6
	},
	grid: {
		fill: null,
		stroke: '#D0D0D0',
		strokeDasharray: 2,
		strokeWidth: 1,
	}
};

const data = [1, 2, 3, 4, 5];

class Graph extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			size: {
				height: null,
				width: null
			}
		};
	}

	componentDidMount() {
		this.setState({
			size: {
				height: document.getElementsByTagName('svg')[0].clientHeight,
				width: document.getElementsByTagName('svg')[0].clientWidth
			}});
	}

	renderGrid() {
		const v = () => {
			var lines = [];
			for (var i = 30; i < this.state.size.width; i += 30)
				lines.push(i);

			return lines.map((length, index) =>
				<line
					key={(index * 1)}
					style={style.grid}
					x1={length} x2={length}
					y1={'0%'} y2={'100%'}
				/>
			);
		}

		const h = () => {
			var lines = [];
			for (var i = 30; i < this.state.size.height; i += 30)
				lines.push(i);

			return lines.map((length, index) =>
				<line
					key={(index * 2)}
					style={style.grid}
					x1={'0%'} x2={'100%'}
					y1={length} y2={length}
				/>
			);
		}
		
		return Array.prototype.concat(v(), h());
	}

	render() {
		const grid = this.renderGrid();

		return (
			<div style={style.root}>
				<svg style={style.svg}>
					<g style={style.grid}>
						{grid}
  				</g>
					<Point/>
				</svg>
			</div>
		);
	}
}

export default Graph;
